library(plotly)
library(readxl)
data <- read_excel("C:/Users/prans/Videos/wildlife/Data/nilgiri.xlsx")

rsconnect::setAccountInfo(name='wildlifebank',
                          token='DF56FF3B652987346CC8715EDA81ADFD',
                          secret='DKc3GIrJ909U2dA1u/VdlQWi3e22iIROfT89x6KG')


fig <- plot_ly(data, x = ~Block, y = ~Population, text = ~Protected_areas, type = 'scatter', mode = 'markers',
               marker = list(size = ~Population/5, opacity = 0.5))
fig <- fig %>% layout(title = 'Nilgiri Tahr Population',
                      xaxis = list(showgrid = FALSE),
                      yaxis = list(showgrid = FALSE))

fig
library(rsconnect)
rsconnect::deployApp("C:/Users/prans/Videos/wildlife/Data/nilgiri.R")