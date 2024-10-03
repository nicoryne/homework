# Set Libraries
library("ggplot2")
library("shiny")
library("tidyr")
library("dplyr")

# Set current working directory
setwd(getwd())

# Read csv file and assign it to data_set
data <- read.csv("raw_data.csv",
                 header = TRUE,
                 stringsAsFactors = FALSE)

# View data set
View(data)

# Plotting Timeline Educational Attainment (1st KPI)

# Calculate the year-to-year difference (lag difference)
data_diff <- data %>%
  arrange(year) %>%  # Ensure data is ordered by year
  mutate(
    all = all - lag(all),
    less_than_hs_diff = less_than_hs - lag(less_than_hs),
    high_school_diff = high_school - lag(high_school),
    some_college_diff = some_college - lag(some_college),
    bachelors_degree_diff = bachelors_degree - lag(bachelors_degree),
    advanced_degree_diff = advanced_degree - lag(advanced_degree),
  )

# Convert the dataset to a long format
timeline_long_diff <- pivot_longer(data_diff,
                                   cols = c(all,
                                            less_than_hs_diff,
                                            high_school_diff,
                                            some_college_diff,
                                            bachelors_degree_diff,
                                            advanced_degree_diff),
                                   names_to = "education_level",
                                   values_to = "change_value")

# Shiny UI
ui <- fluidPage(
  titlePanel("Dynamic Educational Attainment Dashboard"),
  # Sidebar layout with input controls
  sidebarLayout(
    sidebarPanel(
      checkboxGroupInput("education_levels",
                         "Select Education Levels:",
                         choices = unique(timeline_long_diff$education_level),
                         selected = unique(timeline_long_diff$education_level)),
      sliderInput("year_range",
                  "Select Year Range:",
                  min = min(timeline_long_diff$year, na.rm = TRUE),
                  max = max(timeline_long_diff$year, na.rm = TRUE),
                  value = c(min(timeline_long_diff$year, na.rm = TRUE), max(timeline_long_diff$year, na.rm = TRUE)),
                  step = 1)
    ),
    # Main panel for displaying outputs
    mainPanel(
      plotOutput("linePlot")
    )
  )
)

# Shiny Server
server <- function(input, output) {
  # Reactive expression to filter data based on user input
  filtered_data <- reactive({
    timeline_long_diff %>%
      filter(education_level %in% input$education_levels &
               year >= input$year_range[1] & year <= input$year_range[2])
  })
  # Render the line plot
  output$linePlot <- renderPlot({
    ggplot(filtered_data(), aes(x = year, y = change_value, color = education_level)) +
      geom_line() +
      labs(title = "Year-to-Year Change in Educational Attainment",
           x = "Year",
           y = "Change in Percentage",
           color = "Education Level") +
      theme_minimal()
  })
}

# Run the Shiny App
shinyApp(ui = ui, server = server)
