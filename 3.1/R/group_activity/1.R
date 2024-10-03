setwd(getwd())

data_set <- read.csv(file = "raw_data.csv", header = TRUE,  sep = ",", row.names = NULL,  stringsAsFactors = FALSE)

View(data_set)

matlines(data_set$year, data_set$all)

