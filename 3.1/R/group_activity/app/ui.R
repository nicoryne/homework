library("shiny")
library("shinythemes")
library("shinydashboard")

#===============
# User Interface
ui <- dashboardPage(
  skin = "black",
  dashboardHeader(title = "E-P Dashboard"),
  dashboardSidebar(
    sidebarMenu(
      menuItem("Education-to-Employment", tabName = "education", icon = icon("graduation-cap")),
      menuItem("Age-to-Employment", tabName = "age", icon = icon("users")),
      menuItem("Gender-to-Employment", tabName = "gender", icon = icon("venus-mars")),
      menuItem("Analysis", tabName = "correlation", icon = icon("chart-line"))
    )
  ),
  dashboardBody(
    tabItems(
      tabItem(tabName = "education",
        h2("Education Attainment Population-to-Employment Ratio in USA"),
        br(),
        fluidRow(
          infoBox(
            color = "blue",
            title = "Average",
            subtitle = "Less than High School",
            value = textOutput("less_than_hs_mean"),
            width = 2,
            fill = T
          ),
          infoBox(
            color = "blue",
            title = "Average",
            subtitle = "High School",
            value = textOutput("high_school_mean"),
            width = 2,
            fill = T
          ),
          infoBox(
            color = "navy",
            title = "Average",
            subtitle = "Some College",
            value = textOutput("some_college_mean"),
            width = 2,
            fill = T
          ),
          infoBox(
            color = "navy",
            title = "Average",
            subtitle = "Bachelor's Degree",
            value = textOutput("bachelors_degree_mean"),
            width = 2,
            fill = T
          ),
          infoBox(
            color = "navy",
            title = "Average",
            subtitle = "Advanced Degree",
            value = textOutput("advanced_degree_mean"),
            width = 2,
            fill = T
          ),
          infoBox(
            color = "black",
            title = "Average",
            subtitle = "Overall",
            value = textOutput("overall_education_mean"),
            width = 2,
            fill = T
          ),
        ),
        fluidRow(
          box(
            color = "black",
            title = "Educational Attainment-to-Employment Ratio vs Year", solidHeader = TRUE, width = 10,
            plotOutput(outputId = "educational_attainment_timeline")
          ),
          box(
            color = "black",
            title = "Line Graph Control", solidHeader = TRUE, width = 2,
            selectInput("graphviewedu", "Graph View Type",
                        c("Ratio" = "raw", "Change Rate" = "crate")),
            checkboxGroupInput("educationlevel", "Educational Attainment",
                               choices = c("Less than High School" = "less_than_hs",
                                           "High School" = "high_school",
                                           "Some College" = "some_college",
                                           "Bachelor's Degree" = "bachelors_degree",
                                           "Advanced Degree" = "advanced_degree"))
          )
        ),
        fluidRow(
          box(
            title = "Education Means Distribution Chart", solidHeader = TRUE, width = 6,
            plotOutput(outputId = "plot_education_means_distribution")
          ),
          box(
            title = "Education Means Weighted Pie Chart", solidHeader = TRUE, width = 6,
            plotOutput(outputId = "weighted_education_means_pie")
          )
        )
      ),
      #===============
      # Age Tab
      tabItem(tabName = "age",
       h2("Age Population-to-Employment Ratio in USA"),
        br(),
        fluidRow(
          infoBox(
            color = "green",
            title = "Average",
            subtitle = "Ages 16 to 24",
            value = textOutput("X16.24_mean"),
            width = 2,
            fill = T
          ),
          infoBox(
            color = "green",
            title = "Average",
            subtitle = "Ages 25 to 54",
            value = textOutput("X25.54_mean"),
            width = 2,
            fill = T
          ),
          infoBox(
            color = "olive",
            title = "Average",
            subtitle = "Ages 55 to 64",
            value = textOutput("X55.64_mean"),
            width = 2,
            fill = T
          ),
          infoBox(
            color = "olive",
            title = "Average",
            subtitle = "Ages 65 and up",
            value = textOutput("X65._mean"),
            width = 2,
            fill = T
          ),
          infoBox(
            color = "black",
            title = "Average",
            subtitle = "Overall",
            value = textOutput("overall_age_mean"),
            width = 2,
            fill = T
          ),
        ),
        fluidRow(
          box(
            color = "black",
            title = "Age Group-to-Employment Ratio vs Year", solidHeader = TRUE, width = 10,
            plotOutput(outputId = "age_timelime")
          ),
          box(
            color = "black",
            title = "Line Graph Control", solidHeader = TRUE, width = 2,
            selectInput("graphviewage", "Graph View Type",
                        c("Ratio" = "raw", "Change Rate" = "crate")),
            checkboxGroupInput("agegroup", "Age Group",
                               choices = c("16 to 24" = "X16.24",
                                           "25 to 54" = "X25.54",
                                           "55 to 64" = "X55.64",
                                           "65 and above" = "X65."))
          )
        ),
        fluidRow(
          box(
            title = "Age Means Distribution Chart", solidHeader = TRUE, width = 6,
            plotOutput(outputId = "plot_age_means_distribution")
          ),
          box(
            title = "Age Means Weighted Pie Chart", solidHeader = TRUE, width = 6,
            plotOutput(outputId = "weighted_age_means_pie")
          )
        )
      ),
      # Age Tab
      #===============

      #===============
      # Gender Tab
      tabItem(tabName = "gender",
        h2("Gender Population-to-Employment Ratio in USA"),
        br(),
        fluidRow(
          infoBox(
            color = "navy",
            title = "Average",
            subtitle = "Male",
            value = textOutput("male_mean"),
            width = 2,
            fill = T
          ),
          infoBox(
            color = "orange",
            title = "Average",
            subtitle = "Female",
            value = textOutput("female_mean"),
            width = 2,
            fill = T
          ),
        ),
        fluidRow(
          box(
            color = "black",
            title = "Gender-to-Employment Ratio vs Year", solidHeader = TRUE, width = 10,
            plotOutput(outputId = "gender_timeline")
          ),
          box(
            color = "black",
            title = "Line Graph Control", solidHeader = TRUE, width = 2,
            selectInput("graphviewgender", "Graph View Type",
                        c("Ratio" = "raw", "Change Rate" = "crate")),
            checkboxGroupInput("gendergroup", "Gender Group",
                               choices = c("Male" = "male",
                                           "Female" = "female"))
          )
        ),
        fluidRow(
          box(
            title = "Gender Means Distribution Chart", solidHeader = TRUE, width = 6,
            plotOutput(outputId = "plot_gender_means_distribution")
          ),
          box(
            title = "Gender Means Weighted Pie Chart", solidHeader = TRUE, width = 6,
            plotOutput(outputId = "weighted_gender_means_pie")
          )
        )
      ),
      # Gender Tab
      #===============

      #===============
      # Correlation Analysis Tab
      tabItem(tabName = "correlation",
        fluidRow(
          box(
            title = "Analysis Stacked Bar Chart", status = "primary", solidHeader = TRUE, width = 12,
            plotOutput(outputId = "plot_analysis_stacked_bar_chart")
          )
        ),
        fluidRow(
          box(
            title = "Analysis Correlational", status = "primary", solidHeader = TRUE, width = 12,
            plotOutput(outputId = "plot_correlational")
          )
        )
      )
      # Correlation Analysis Tab
      #===============
    )
  )
)
#===============