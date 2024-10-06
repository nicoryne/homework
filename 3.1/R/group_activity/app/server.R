library("shiny")
library("ggplot2")
library("dplyr")
library("tidyverse")
library("reshape2")

#===============
# Load CSV file
raw_data <- read.csv("data/raw_data.csv",
                     header = TRUE,
                     stringsAsFactors = FALSE)
#===============

#===============
# Palette List
education_colors <- c("#2e467ad2", "#39587e", "#415a77", "#2a3852", "#0d1b2a")
#===============

#===============
# Education Section
# START

#===============
# Edcation Level Means
less_than_hs_mean <- round(mean(raw_data$less_than_hs, na.rm = TRUE), 2)
high_school_mean <- round(mean(raw_data$high_school, na.rm = TRUE), 2)
some_college_mean <- round(mean(raw_data$some_college, na.rm = TRUE), 2)
bachelors_degree_mean <- round(mean(raw_data$bachelors_degree, na.rm = TRUE), 2)
advanced_degree_mean <- round(mean(raw_data$advanced_degree, na.rm = TRUE), 2)
overall_education_mean <- round(mean(c(raw_data$less_than_hs, raw_data$high_school, raw_data$some_college, raw_data$bachelors_degree, raw_data$advanced_degree), na.rm = TRUE), 2)
#===============


#===============
# Data Frame: Year to Education
year_to_education_frame <- data.frame(
  year = raw_data$year,
  less_than_hs = raw_data$less_than_hs,
  high_school = raw_data$high_school,
  some_college = raw_data$some_college,
  bachelors_degree = raw_data$bachelors_degree,
  advanced_degree = raw_data$advanced_degree
)
#===============

#===============
# Data Frame: Education Level Average and Weighted Mean
education_level_mean_frame <- data.frame(
  education_level = c("Less than High School", "High School", "Some College", "Bachelor's Degree", "Advanced Degree"),
  mean_value = c(less_than_hs_mean, high_school_mean, some_college_mean, bachelors_degree_mean, advanced_degree_mean)
)

education_level_mean_frame$education_level <- factor(education_level_mean_frame$education_level, 
                                                       levels = education_level_mean_frame$education_level[order(education_level_mean_frame$mean_value)])

total_mean_value <- sum(education_level_mean_frame$mean_value)

education_level_mean_frame$weighted_mean_value <- (education_level_mean_frame$mean_value / total_mean_value) * 100
#===============


#===============
# Function: Educational Attainment vs Year Line Chart
educational_attainment_timeline_display <- function(input_education, input_view) {
  if (is.null(input_education) || length(input_education) == 0) {
    input_education <- "all"
  }

  if ("all" %in% input_education) {
    frame_to_plot <- year_to_education_frame %>%
      select(year, less_than_hs, high_school, some_college,
             bachelors_degree, advanced_degree) %>%
      gather(key = "education_level", value = "ratio", -year)
  } else {
    frame_to_plot <- year_to_education_frame %>%
      select(year, all_of(input_education)) %>%
      gather(key = "education_level", value = "ratio", -year)
  }

  if (input_view == "crate") {
    frame_to_plot <- frame_to_plot %>%
      group_by(education_level) %>%
      arrange(year) %>%
      mutate(rate_of_change = (ratio - lag(ratio)) / lag(ratio) * 100) %>%
      filter(!is.na(rate_of_change))
    
    y_value <- "rate_of_change"
    y_label <- "Rate of Change (%)"
  } else {
    y_value <- "ratio"
    y_label <- "Ratio"
  }

  ggplot(data = frame_to_plot, aes(x = year, y = !!sym(y_value), color = education_level)) +
    geom_line(linewidth = 0.7) + 
    scale_color_manual(values = setNames(education_colors, c("less_than_hs", "high_school", "some_college", "bachelors_degree", "advanced_degree"))) +
    labs(title = "Educational Attainment Employment Ratio in USA (1979 - 2022)", x = "Year", y = y_label) +
    theme_minimal() +
    theme(plot.title = element_text(hjust = 0.5, face = "bold"))
}
#===============

#===============
# Function: Education Means Distribution Chart
plot_education_means_distribution <- function() {
  ggplot(education_level_mean_frame, aes(x = education_level, y = mean_value, fill = education_level)) +
    geom_bar(stat = "identity") +
    geom_hline(yintercept = overall_age_mean, linetype = "dashed", color = "maroon", size = 0.7) +
    geom_text(aes(label = mean_value), vjust = -0.5, size = 4, fontface = "bold") +
    geom_text(aes(x = 0, y = overall_age_mean, label = paste("Overall Average:", overall_age_mean)), 
              vjust = -1, hjust = 0, color = "maroon", fontface = "bold") +
    scale_fill_manual(values = setNames(education_colors, c("Less than High School", "High School", "Some College", "Bachelor's Degree", "Advanced Degree"))) +
    labs(title = "Average Educational Attainment-to-Employment Ratios", x = "Educational Level", y = "Average Ratio") +
    theme_minimal() +
    theme(plot.title = element_text(hjust = 0.5, face = "bold"))
}
#===============

#===============
# Function: Weighted Education Means Pie Chart
weighted_education_means_pie_display <- function() {
  ggplot(education_level_mean_frame, aes(x = "", y = weighted_mean_value, fill = education_level)) +
    geom_bar(width = 1, stat = "identity") +
    coord_polar("y", start = 0) +
    geom_text(aes(label = paste0(round(weighted_mean_value, 1), "%")), 
              position = position_stack(vjust = 0.5), size = 4, fontface = "bold", color = "white") +
    scale_fill_manual(values = setNames(education_colors, c("Less than High School", "High School", "Some College", "Bachelor's Degree", "Advanced Degree"))) +
    labs(title = "Weighted Educational Means Distribution", x = NULL, y = NULL) +
    theme_minimal() +
    theme(axis.text.x = element_blank(),
          axis.ticks = element_blank(),
          plot.title = element_text(hjust = 0.5, face = "bold"))
}


# Education Section
# END
#===============

#===============
# Age Section
# START

#===============
# Palette List
age_colors <- c("#D6BD98", "#677D6A", "#40534C", "#1A3636")
#===============

#===============
# Edcation Level Means
X16.24_mean <- round(mean(raw_data$X16.24, na.rm = TRUE), 2)
X25.54_mean <- round(mean(raw_data$X25.54, na.rm = TRUE), 2)
X55.64_mean <- round(mean(raw_data$X55.64, na.rm = TRUE), 2)
X65._mean <- round(mean(raw_data$X65., na.rm = TRUE), 2)
overall_age_mean <- round(mean(c(raw_data$X16.24, raw_data$X25.54, raw_data$X55.64, raw_data$X65.), na.rm = TRUE), 2)
#===============

#===============
# Data Frame: Year to Age
year_to_age_frame <- data.frame(
  year = raw_data$year,
  X16.24 = raw_data$X16.24,
  X25.54 = raw_data$X25.54,
  X55.64 = raw_data$X55.64,
  X65. = raw_data$X65.
)
#===============

#===============
# Data Frame: Education Level Average and Weighted Mean
age_group_mean_frame <- data.frame(
  age_group = c("16 to 24", "25 to 54", "55 to 64", "65 and above"),
  mean_value = c(X16.24_mean, X25.54_mean, X55.64_mean, X65._mean)
)

age_group_mean_frame$age_group <- factor(age_group_mean_frame$age_group, 
                                                       levels = age_group_mean_frame$age_group[order(age_group_mean_frame$mean_value)])

total_mean_value <- sum(age_group_mean_frame$mean_value)

age_group_mean_frame$weighted_mean_value <- (age_group_mean_frame$mean_value / total_mean_value) * 100
#===============

#===============
# Function: Age vs Year Line Chart
age_timeline_display <- function(input_age, input_view) {
  if (is.null(input_age) || length(input_age) == 0) {
    input_age <- "all"
  }

  if ("all" %in% input_age) {
    frame_to_plot <- year_to_age_frame %>%
      select(year, X16.24, X25.54, X55.64, X65.) %>%
      gather(key = "age_group", value = "ratio", -year)
  } else {
    frame_to_plot <- year_to_age_frame %>%
      select(year, all_of(input_age)) %>%
      gather(key = "age_group", value = "ratio", -year)
  }

  if (input_view == "crate") {
    frame_to_plot <- frame_to_plot %>%
      group_by(age_group) %>%
      arrange(year) %>%
      mutate(rate_of_change = (ratio - lag(ratio)) / lag(ratio) * 100) %>%
      filter(!is.na(rate_of_change))
    
    y_value <- "rate_of_change"
    y_label <- "Rate of Change (%)"
  } else {
    y_value <- "ratio"
    y_label <- "Ratio"
  }

  ggplot(data = frame_to_plot, aes(x = year, y = !!sym(y_value), color = age_group)) +
    geom_line(linewidth = 0.7) + 
    scale_color_manual(values = setNames(age_colors, c("X16.24", "X25.54", "X55.64", "X65."))) +
    labs(title = "Age Employment Ratio in USA (1979 - 2022)", x = "Year", y = y_label) +
    theme_minimal() +
    theme(plot.title = element_text(hjust = 0.5, face = "bold"))
}
#===============

#===============
# Function: Age Means Distribution Chart
plot_age_means_distribution <- function() {
  ggplot(age_group_mean_frame, aes(x = age_group, y = mean_value, fill = age_group)) +
    geom_bar(stat = "identity") +
    geom_hline(yintercept = overall_age_mean, linetype = "dashed", color = "maroon", size = 0.7) +
    geom_text(aes(label = mean_value), vjust = -0.5, size = 4, fontface = "bold") +
    geom_text(aes(x = 0, y = overall_age_mean, label = paste("Overall Average:", overall_age_mean)), 
              vjust = -1, hjust = 0, color = "maroon", fontface = "bold") +
    scale_fill_manual(values = setNames(age_colors, c("16 to 24", "25 to 54", "55 to 64", "65 and above"))) +
    labs(title = "Average Age-to-Employment Ratios", x = "Age Group", y = "Average Ratio") +
    theme_minimal() +
    theme(plot.title = element_text(hjust = 0.5, face = "bold"))
}
#===============

#===============
# Function: Age Education Means Pie Chart
weighted_age_means_pie_display <- function() {
  ggplot(age_group_mean_frame, aes(x = "", y = weighted_mean_value, fill = age_group)) +
    geom_bar(width = 1, stat = "identity") +
    coord_polar("y", start = 0) +
    geom_text(aes(label = paste0(round(weighted_mean_value, 1), "%")), 
              position = position_stack(vjust = 0.5), size = 4, fontface = "bold", color = "white") +
    scale_fill_manual(values = setNames(age_colors, c("16 to 24", "25 to 54", "55 to 64", "65 and above"))) +
    labs(title = "Weighted Age Means Distribution", x = NULL, y = NULL) +
    theme_minimal() +
    theme(axis.text.x = element_blank(),
          axis.ticks = element_blank(),
          plot.title = element_text(hjust = 0.5, face = "bold"))
}

# Age Section
# END
#===============

#===============
# Gender Section
# START

#===============
# Palette List
gender_colors <- c("#233d4d", "#fe7f2d")
#===============

#===============
# Gender Means
male_mean <- round(mean(raw_data$men, na.rm = TRUE), 2)
female_mean <- round(mean(raw_data$women, na.rm = TRUE), 2)
overall_gender_mean <- round(mean(c(raw_data$men, raw_data$women), na.rm = TRUE), 2)
#===============

#===============
# Data Frame: Year to Gender
year_to_gender_frame <- data.frame(
  year = raw_data$year,
  male = raw_data$men,
  female = raw_data$women
)
#===============

#===============
# Data Frame: Education Level Average and Weighted Mean
gender_group_mean_frame <- data.frame(
  gender_group = c("male", "female"),
  mean_value = c(male_mean, female_mean)
)

gender_group_mean_frame$gender_group <- factor(gender_group_mean_frame$gender_group, 
                                                       levels = gender_group_mean_frame$gender_group[order(gender_group_mean_frame$mean_value)])

total_mean_value <- sum(gender_group_mean_frame$mean_value)

gender_group_mean_frame$weighted_mean_value <- (gender_group_mean_frame$mean_value / total_mean_value) * 100
#===============

#===============
# Function: Gender vs Year Line Chart
gender_timeline_display <- function(input_gender, input_view) {
  if (is.null(input_gender) || length(input_gender) == 0) {
    input_gender <- "all"
  }

  if ("all" %in% input_gender) {
    frame_to_plot <- year_to_gender_frame %>%
      select(year, male, female) %>%
      gather(key = "gender_group", value = "ratio", -year)
  } else {
    frame_to_plot <- year_to_gender_frame %>%
      select(year, all_of(input_gender)) %>%
      gather(key = "gender_group", value = "ratio", -year)
  }

  if (input_view == "crate") {
    frame_to_plot <- frame_to_plot %>%
      group_by(gender_group) %>%
      arrange(year) %>%
      mutate(rate_of_change = (ratio - lag(ratio)) / lag(ratio) * 100) %>%
      filter(!is.na(rate_of_change))
    
    y_value <- "rate_of_change"
    y_label <- "Rate of Change (%)"
  } else {
    y_value <- "ratio"
    y_label <- "Ratio"
  }

  ggplot(data = frame_to_plot, aes(x = year, y = !!sym(y_value), color = gender_group)) +
    geom_line(linewidth = 0.7) + 
    scale_color_manual(values = setNames(gender_colors, c("male", "female"))) +
    labs(title = "Gender Employment Ratio in USA (1979 - 2022)", x = "Year", y = y_label) +
    theme_minimal() +
    theme(plot.title = element_text(hjust = 0.5, face = "bold"))
}
#===============

#===============
# Function: Gender Means Distribution Chart
plot_gender_means_distribution <- function() {
  ggplot(gender_group_mean_frame, aes(x = gender_group, y = mean_value, fill = gender_group)) +
    geom_bar(stat = "identity") +
    geom_hline(yintercept = overall_gender_mean, linetype = "dashed", color = "maroon", size = 0.7) +
    geom_text(aes(label = mean_value), vjust = -0.5, size = 4, fontface = "bold") +
    geom_text(aes(x = 0, y = overall_gender_mean, label = paste("Overall Average:", overall_gender_mean)), 
              vjust = -1, hjust = 0, color = "maroon", fontface = "bold") +
    scale_fill_manual(values = setNames(gender_colors, c("male", "female"))) +
    labs(title = "Gender-to-Employment Ratios", x = "Gender Group", y = "Average Ratio") +
    theme_minimal() +
    theme(plot.title = element_text(hjust = 0.5, face = "bold"))
}
#===============

#===============
# Function: Gender Education Means Pie Chart
weighted_gender_means_pie_display <- function() {
  ggplot(gender_group_mean_frame, aes(x = "", y = weighted_mean_value, fill = gender_group)) +
    geom_bar(width = 1, stat = "identity") +
    coord_polar("y", start = 0) +
    geom_text(aes(label = paste0(round(weighted_mean_value, 1), "%")), 
              position = position_stack(vjust = 0.5), size = 4, fontface = "bold", color = "white") +
    scale_fill_manual(values = setNames(gender_colors, c("male", "female"))) +
    labs(title = "Weighted Gender Means Distribution", x = NULL, y = NULL) +
    theme_minimal() +
    theme(axis.text.x = element_blank(),
          axis.ticks = element_blank(),
          plot.title = element_text(hjust = 0.5, face = "bold"))
}

# Gender Section
# END
#===============

#===============
# Analysis Section
# START

analysis_stacked_bar_chart <- function() {
  education_age_gender_frame <- raw_data %>%
  select(year, less_than_hs, high_school, some_college, bachelors_degree, advanced_degree, X16.24, X25.54, X55.64, X65., men, women) %>%
  gather(key = "education_level", value = "ratio", less_than_hs:advanced_degree) %>%
  gather(key = "age_group", value = "age_ratio", X16.24:X65.) %>%
  gather(key = "gender", value = "gender_ratio", men:women)

# Stacked Bar Chart
ggplot(education_age_gender_frame, aes(x = education_level, y = ratio, fill = age_group)) +
  geom_bar(stat = "identity", position = "stack") +
  facet_wrap(~ gender) +
  labs(title = "Employment Ratios by Education Level, Age Group, and Gender", x = "Education Level", y = "Employment Ratio") +
  theme_minimal() +
  scale_fill_manual(values = age_colors)
}

analysis_correlational_display <- function() {
  analysis_data <- raw_data %>%
    select(year, less_than_hs, high_school, some_college, bachelors_degree, advanced_degree, X16.24, X25.54, X55.64, X65., men, women) %>%
    gather(key = "education_level", value = "education_ratio", less_than_hs:advanced_degree) %>%
    gather(key = "age_group", value = "age_ratio", X16.24:X65.) %>%
    mutate(gender_ratio = ifelse(is.na(men), 0, men) - ifelse(is.na(women), 0, women)) # Example of gender ratio calculation
  
  # Calculate correlation matrix
  cor_matrix <- analysis_data %>% 
    select(education_ratio, age_ratio, gender_ratio, year) %>%
    filter(!is.na(education_ratio) & !is.na(age_ratio)) %>%
    select(-year) %>% 
    cor()
  
  # Convert correlation matrix into a long format
  cor_long <- melt(cor_matrix)
  
  # Create a heatmap
  ggplot(cor_long, aes(Var1, Var2, fill = value)) +
    geom_tile(color = "white") +
    scale_fill_gradient2(low = "blue", high = "red", mid = "white", 
                         midpoint = 0, limit = c(-1, 1), space = "Lab", 
                         name = "Correlation") +
    theme_minimal() +
    labs(title = "Heatmap of Correlations Between Education, Age, and Gender",
         x = "Variables", y = "Variables") +
    theme(axis.text.x = element_text(angle = 45, vjust = 1, 
                                     size = 12, hjust = 1))
}
# Analysis Section
# END
#===============

#===============
# Server Logic
server <- function(input, output) {

  #===============
  # Education Page Outputs

  output$less_than_hs_mean <- renderText({
    less_than_hs_mean
  })

  output$high_school_mean <- renderText({
    high_school_mean
  })

  output$some_college_mean <- renderText({
    some_college_mean
  })

  output$bachelors_degree_mean <- renderText({
    bachelors_degree_mean
  })

  output$advanced_degree_mean <- renderText({
    advanced_degree_mean
  })

  output$overall_education_mean <- renderText({
    overall_education_mean
  })

  output$educational_attainment_timeline <- renderPlot({
    educational_attainment_timeline_display(input$educationlevel, input$graphviewedu)
  })

  output$plot_education_means_distribution <- renderPlot({
    plot_education_means_distribution()
  })

  output$weighted_education_means_pie <- renderPlot({
    weighted_education_means_pie_display()
  })

  # Education Page Outputs
  #===============

  #===============
  # Age Page Outputs

  output$age_timelime <- renderPlot({
    age_timeline_display(input$agegroup, input$graphviewage)
  })

  output$X16.24_mean <- renderText({
    X16.24_mean
  })

  output$X25.54_mean <- renderText({
    X25.54_mean
  })

  output$X55.64_mean <- renderText({
    X55.64_mean
  })

  output$X65._mean <- renderText({
    X65._mean
  })

  output$overall_age_mean <- renderText({
    overall_age_mean
  })

  output$plot_age_means_distribution <- renderPlot({
    plot_age_means_distribution()
  })

  output$weighted_age_means_pie <- renderPlot({
    weighted_age_means_pie_display()
  })

  # Age Page Outputs
  #===============

  #===============
  # Gender Page Outputs
  
  output$male_mean <- renderText({
    male_mean
  })

  output$female_mean <- renderText({
    female_mean
  })

  output$gender_timeline <- renderPlot({
    gender_timeline_display(input$gendergroup, input$graphviewgender)
  })

  output$plot_gender_means_distribution <- renderPlot({
    plot_gender_means_distribution()
  })

  output$weighted_gender_means_pie <- renderPlot({
    weighted_gender_means_pie_display()
  })

  # Gender Page Outputs
  #===============

  #===============
  # Analysis Outputs

  output$plot_analysis_stacked_bar_chart <- renderPlot({
    analysis_stacked_bar_chart()
  })

  output$plot_correlational <- renderPlot({
    analysis_correlational_display()
  })
  # Analysis Outputs
  #===============
}
#===============