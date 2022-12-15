library(plotly)
library(readxl)
data <- read_excel("C:/Users/prans/Videos/wildlife/Data/nilgiri.xlsx")

fig <- plot_ly(data, x = ~Block, y = ~Population, text = ~Protected_areas, type = 'scatter', mode = 'markers',
               marker = list(size = ~Population/5, opacity = 0.5))
fig <- fig %>% layout(title = 'Nilgiri Tahr Population',
                      xaxis = list(showgrid = FALSE),
                      yaxis = list(showgrid = FALSE))

fig

