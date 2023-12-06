# cats-cradle/weather-control

[![GitHub Stars](https://img.shields.io/github/stars/hxtree/cats-cradle?style=social)](https://github.com/hxtree/cats-cradle/stargazers)

![CloudFormation Diagram](tree-designer.png)

This service dictates for the majority of the game the weather at any place and
time.

Like most weather systems, the weather system is on fundamentally simple
concepts but also complex and difficult to predict.

Unlike our weather system, the game weather system is based on:

- Climate.
- Geo location to the "one" character and their happiness. The happiness of
  "one" character. Like a customer satisfaction survey, except results cause
  violate winds and showers or peaceful crystal clear azure skys. Weather is
  immediately apparent. Although there is another underlying reason for this,
  this is helpful for using the weather as dramatic effect.
- Time of day.

Weather at Focal Point

| Rating | Description    | Warm climate            | Cold Climate | Precipitation |
| ------ | -------------- | ----------------------- | ------------ | ------------- |
| 10     | Exuberant      | Sunny azure skies       |              | 0%            |
| 9      | Joyful         |                         |              |               |
| 8      | Very Happy     |                         |              |               |
| 7      | Happy          |                         |              |               |
| 6      | Satisfied      |                         |              |               |
| 5      | Content        |                         |              |               |
| 4      | Unhappy        | Fog, cloud, wind        |              |               |
| 3      | Sad            | Rain                    | snow         |               |
| 2      | Sad / Doubtful |                         |              |               |
| 1      | Depressed      | hurricanes, dust storms |              |               |
| 0      | Hopeless       | tornadoes, typhoons and | ice storms   | 100%          |

Weather should be related to geo location and travel from one area to another.
There should be seasons, it should not be sunny out and snow the next minute.
Some areas to the north should snow mostly while warmer areas should stay warm.

There are also other global forces that influence the weather:

- There is a traveling tornado that manifest itself.

## References

<https://www.metoffice.gov.uk/weather/climate/climate-explained/climate-zones>
