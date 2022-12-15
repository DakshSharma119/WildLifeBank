library(shinydashboard)
library(shiny)


shinyUI(
  
  dashboardPage(
    dashboardHeader(title="Nilgiri"),
    dashboardSidebar(menuItem("niligiri")),
    dashboardBody()
  )
)