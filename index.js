const express = require('express')
const app = express()

const shows = {
    australia: [
      {
        image: "...",
        city: "Melbourne, Victoria",
        venue: "John Cain Arena",
        date: "07/11/2024"
      },
      {
        image: "...",
        city: "Brisbane, Queensland",
        venue: "Fortitude Music Hall",
        date: "07/13/2024"
      },
      {
        image: "...",
        city: "Brisbane, Queensland",
        venue: "Fortitude Music Hall",
        date: "07/14/2024"
      },
      {
        image: "...",
        city: "Sydney, New South Wales",
        venue: "ICC Sydney Theatre",
        date: "07/17/2024"
      },
      {
        image: "...",
        city: "Adelaide, South Australia",
        venue: "Spin Off Festival",
        date: "07/19/2024"
      }
    ],
    asia: [
      {
        image: "...",
        city: "Jakarta, Indonesia",
        venue: "LaLaLa Festival",
        date: "08/23/2024"
      },
      {
        image: "...",
        city: "Hong Kong, China",
        venue: "Asiaworld-Expo, Hall 10",
        date: "08/27/2024"
      },
      {
        image: "...",
        city: "Singapore",
        venue: "Singapore Indoor Stadium",
        date: "09/01/2024"
      },
      {
        image: "...",
        city: "Bangkok, Thailand",
        venue: "UOB LIVE",
        date: "09/03/2024"
      },
      {
        image: "...",
        city: "Seoul, South Korea",
        venue: "KBS Hall",
        date: "09/06/2024"
      },
      {
        image: "...",
        city: "Seoul, South Korea",
        venue: "KBS Hall",
        date: "09/07/2024"
      },
      {
        image: "...",
        city: "Tokyo, Japan",
        venue: "Tokyo Garden Theater",
        date: "09/09/2024"
      }
    ],
    northAmerica: [
      {
        image: "...",
        city: "Minneapolis, Minnesota",
        venue: "Armory",
        date: "09/19/2024"
      },
      {
        image: "...",
        city: "Sterling Heights, Michigan",
        venue: "Michigan Lottery AMP",
        date: "09/21/2024"
      },
      {
        image: "...",
        city: "Toronto, Ontario",
        venue: "Budweiser Stage",
        date: "09/23/2024"
      },
      {
        image: "...",
        city: "Boston, Massachusetts",
        venue: "MGM Music Hall At Fenway",
        date: "09/25/2024"
      },
      {
        image: "...",
        city: "Boston, Massachusetts",
        venue: "MGM Music Hall At Fenway",
        date: "09/26/2024"
      },
      {
        image: "...",
        city: "...",
        venue: "Merriweather Post Pavilion",
        date: "09/29/2024"
      },
      {
        image: "...",
        city: "New York, New York",
        venue: "Madison Square Garden",
        date: "09/30/2024"
      },
      {
        image: "...",
        city: "Philadelphia, Pennsylvania",
        venue: "Highmark Skyline Stage At The Mann",
        date: "10/01/2024"
      },
      {
        image: "...",
        city: "Raleigh, North Carolina",
        venue: "Red Hat AMP",
        date: "10/03/2024"
      },
      {
        image: "...",
        city: "Atlanta, Georgia",
        venue: "Cadence Bank AMP",
        date: "10/04/2024"
      },
      {
        image: "...",
        city: "Indianapolis, Indiana",
        venue: "Everwise AMP",
        date: "10/06/2024"
      },
      {
        image: "...",
        city: "Las Vegas, Nevada",
        venue: "The Chelsea At Cosmopolitan Of Las Vegas",
        date: "10/11/2024"
      },
      {
        image: "...",
        city: "Portland, Oregon",
        venue: "Theater Of The Clouds",
        date: "10/13/2024"
      },
      {
        image: "...",
        city: "Seattle, Washington",
        venue: "Wamu Theater",
        date: "10/15/2024"
      },
      {
        image: "...",
        city: "San Francisco, California",
        venue: "Bill Graham Civic Auditorium",
        date: "10/17/2024"
      },
      {
        image: "...",
        city: "Inglewood, California",
        venue: "Kia Forum",
        date: "10/18/2024"
      },
      {
        image: "...",
        city: "Phoenix, Arizona",
        venue: "Arizona Financial Theatre",
        date: "10/20/2024"
      },
      {
        image: "...",
        city: "Sugar Land, Texas",
        venue: "Smart Financial Centre",
        date: "10/23/2024"
      },
      {
        image: "...",
        city: "Austin, Texas",
        venue: "Moody Center ATX",
        date: "10/25/2024"
      },
      {
        image: "...",
        city: "Fort Worth, Texas",
        venue: "Dickies Arena",
        date: "10/26/2024"
      }
    ],
    europe: [
      {
        image: "...",
        city: "Amsterdam",
        venue: "AFAS Live",
        date: "11/02/2024"
      },
      {
        image: "...",
        city: "Amsterdam",
        venue: "AFAS Live",
        date: "11/03/2024"
      },
      {
        image: "...",
        city: "Brussels",
        venue: "Forest National",
        date: "11/04/2024"
      },
      {
        image: "...",
        city: "Paris",
        venue: "Zénith Paris La Villette",
        date: "11/05/2024"
      },
      {
        image: "...",
        city: "Manchester",
        venue: "O2 Apollo",
        date: "11/07/2024"
      },
      {
        image: "...",
        city: "Manchester",
        venue: "O2 Apollo",
        date: "11/08/2024"
      },
      {
        image: "...",
        city: "London",
        venue: "OVO Arena Wembley",
        date: "11/10/2024"
      }
    ]
};

app.set("view engine", "ejs")

app.use((req, res, next) => {
 console.log(req.method + " " + req.path)
 next()
})

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
 res.sendFile("__dirname" + "/public/index.html")
})




app.listen(3000, () => {
 console.log("Server running")
})