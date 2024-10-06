library("rsconnect")

# load config
source("config.R")

# rsconnect authorization
rsconnect::setAccountInfo(name = "nicoryne",
                          token = Sys.getenv("SHINY_TOKEN"),
                          secret = Sys.getenv("SHINY_SECRET"))

# rsconnect connection
rsconnect::deployApp(
  appDir = "app",
  appName = "employment-to-population-app"
)