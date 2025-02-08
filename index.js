const express = require('express')
const app = express()

const shows = {
    australia: [
      {
        image: "https://static.wikia.nocookie.net/conangray/images/b/b5/FHOTMelbourne_2.jpeg/revision/latest/scale-to-width-down/1000?cb=20240721193650",
        city: "Melbourne, Victoria",
        venue: "John Cain Arena",
        date: "07/11/2024",
        path: "/australia/0"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/3/3a/FHOTBrisbane_2.jpeg/revision/latest/scale-to-width-down/1000?cb=20240721193844",
        city: "Brisbane, Queensland",
        venue: "Fortitude Music Hall",
        date: "07/13/2024",
        path: "/australia/1"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/e/e7/FHOTBrisbane_3.jpeg/revision/latest/scale-to-width-down/1000?cb=20240721193852",
        city: "Brisbane, Queensland",
        venue: "Fortitude Music Hall",
        date: "07/14/2024",
        path: "/australia/2"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/e/e7/FHOTSydney_3.jpeg/revision/latest/scale-to-width-down/1000?cb=20240721193932",
        city: "Sydney, New South Wales",
        venue: "ICC Sydney Theatre",
        date: "07/17/2024",
        path: "/australia/3"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/5/57/FHOTMelbourne_6.jpeg/revision/latest/scale-to-width-down/1000?cb=20240721193759",
        city: "Adelaide, South Australia",
        venue: "Spin Off Festival",
        date: "07/19/2024",
        path: "/australia/4"
      }
    ],
    asia: [
      {
        image: "https://static.wikia.nocookie.net/conangray/images/b/b5/FHOTJakarta_1.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102100557",
        city: "Jakarta, Indonesia",
        venue: "LaLaLa Festival",
        date: "08/23/2024",
        path: "/asia/0"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/8/8f/FHOTHong_Kong_2.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102100823",
        city: "Hong Kong, China",
        venue: "Asiaworld-Expo, Hall 10",
        date: "08/27/2024",
        path: "/asia/1"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/6/60/FHOTSingapore_3.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102101019",
        city: "Singapore",
        venue: "Singapore Indoor Stadium",
        date: "09/01/2024",
        path: "/asia/2"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/e/ea/FHOTBangkok_1.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102101211",
        city: "Bangkok, Thailand",
        venue: "UOB LIVE",
        date: "09/03/2024",
        path: "/asia/3"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/e/e7/FHOTSeoul_4.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102101419",
        city: "Seoul, South Korea",
        venue: "KBS Hall",
        date: "09/06/2024",
        path: "/asia/4"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/4/46/FHOTSeoul_3.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102101411",
        city: "Seoul, South Korea",
        venue: "KBS Hall",
        date: "09/07/2024",
        path: "/asia/5"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/e/ef/FHOTTokyo_2.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102101610",
        city: "Tokyo, Japan",
        venue: "Tokyo Garden Theater",
        date: "09/09/2024",
        path: "/asia/6"
      }
    ],
    northAmerica: [
      {
        image: "https://static.wikia.nocookie.net/conangray/images/8/8f/FHOTMinneapolis_1.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102102244",
        city: "Minneapolis, Minnesota",
        venue: "Armory",
        date: "09/19/2024",
        path: "/northAmerica/0"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/6/60/FHOTSterling_Heights_1.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102102517",
        city: "Sterling Heights, Michigan",
        venue: "Michigan Lottery AMP",
        date: "09/21/2024",
        path: "/northAmerica/1"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/0/04/FHOTToronto_5.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102105621",
        city: "Toronto, Ontario",
        venue: "Budweiser Stage",
        date: "09/23/2024",
        path: "/northAmerica/2"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/1/15/FHOTBostonN1_1.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102102927",
        city: "Boston, Massachusetts",
        venue: "MGM Music Hall At Fenway",
        date: "09/25/2024",
        path: "/northAmerica/3"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/e/e4/FHOTBostonN2_1.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102103137",
        city: "Boston, Massachusetts",
        venue: "MGM Music Hall At Fenway",
        date: "09/26/2024",
        path: "/northAmerica/4"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/2/2f/FHOTNew_York_9.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102110023",
        city: "New York, New York",
        venue: "Madison Square Garden",
        date: "09/30/2024",
        path: "/northAmerica/5"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/2/22/FHOTPhiladelphia_1.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102103621",
        city: "Philadelphia, Pennsylvania",
        venue: "Highmark Skyline Stage At The Mann",
        date: "10/01/2024",
        path: "/northAmerica/6"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/e/e7/FHOTRaleigh_1.jpeg/revision/latest?cb=20241102103834",
        city: "Raleigh, North Carolina",
        venue: "Red Hat AMP",
        date: "10/03/2024",
        path: "/northAmerica/7"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/4/49/FHOTAtlanta_4.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102104037",
        city: "Atlanta, Georgia",
        venue: "Cadence Bank AMP",
        date: "10/04/2024",
        path: "/northAmerica/8"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/0/02/FHOTIndianapolis_3.jpeg/revision/latest?cb=20241102104241",
        city: "Indianapolis, Indiana",
        venue: "Everwise AMP",
        date: "10/06/2024",
        path: "/northAmerica/9"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/a/a0/FHOTLas_Vegas_1.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102104425",
        city: "Las Vegas, Nevada",
        venue: "The Chelsea At Cosmopolitan Of Las Vegas",
        date: "10/11/2024",
        path: "/northAmerica/10"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/7/70/FHOTPortland_1.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102104521",
        city: "Portland, Oregon",
        venue: "Theater Of The Clouds",
        date: "10/13/2024",
        path: "/northAmerica/11"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/b/bb/FHOTSeattle_3.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102104702",
        city: "Seattle, Washington",
        venue: "Wamu Theater",
        date: "10/15/2024",
        path: "/northAmerica/12"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/5/55/FHOTSan_Francisco_2.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102104840",
        city: "San Francisco, California",
        venue: "Bill Graham Civic Auditorium",
        date: "10/17/2024",
        path: "/northAmerica/13"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/c/c1/FHOTInglewood_7.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102105243",
        city: "Inglewood, California",
        venue: "Kia Forum",
        date: "10/18/2024",
        path: "/northAmerica/14"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/7/79/FHOTPhoenix_1.jpeg/revision/latest?cb=20241102110312",
        city: "Phoenix, Arizona",
        venue: "Arizona Financial Theatre",
        date: "10/20/2024",
        path: "/northAmerica/15"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/8/85/FHOTSugar_Land_3.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102110511",
        city: "Sugar Land, Texas",
        venue: "Smart Financial Centre",
        date: "10/23/2024",
        path: "/northAmerica/16"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/7/73/FHOTAustin_2.jpeg/revision/latest?cb=20241102110648",
        city: "Austin, Texas",
        venue: "Moody Center ATX",
        date: "10/25/2024", 
        path: "/northAmerica/17"
      },
      {
        image: "https://static.wikia.nocookie.net/conangray/images/4/4f/FHOTFort_Worth_1.jpeg/revision/latest/scale-to-width-down/1000?cb=20241102110829",
        city: "Fort Worth, Texas",
        venue: "Dickies Arena",
        date: "10/26/2024",
        path: "/northAmerica/18"
      }
    ],
    europe: [
      {
        image: "https://static.wikia.nocookie.net/conangray/images/b/b4/FHOTAmsterdamN1_4.jpeg/revision/latest?cb=20241106051903",
        city: "Amsterdam",
        venue: "AFAS Live",
        date: "11/02/2024",
        path: "/europe/0"
      },
      {
        image: "https://aviewfrommyseat.com/wallpaper/InAnotherWorld-20241206060434-84.jpg",
        city: "Paris",
        venue: "Zénith Paris La Villette",
        date: "11/05/2024",
        path: "/europe/1"
      },
      {
        image: "https://aviewfrommyseat.com/wallpaper/anonymous-20241226173207-49.jpg",
        city: "Manchester",
        venue: "O2 Apollo",
        date: "11/07/2024",
        path: "/europe/2"
      },
      {
        image: "https://aviewfrommyseat.com/wallpaper/francoleby-20241127131214.jpg",
        city: "Manchester",
        venue: "O2 Apollo",
        date: "11/08/2024",
        path: "/europe/3"
      },
      {
        image: "https://aviewfrommyseat.com/wallpaper/F4VOURITECR1ME-20241124111016-87.jpg",
        city: "London",
        venue: "OVO Arena Wembley",
        date: "11/10/2024",
        path: "/europe/4"
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

app.get("/shows", (req, res) => {
  res.render("shows.ejs", shows)
})

app.get("/docs", (req, res) => {
  res.sendFile("__dirname" + "/public/docs.html")
})

app.get("/australia/:num", (req, res) => {
  const num = req.params.num
  res.render("specific.ejs", shows.australia[num])
})

app.get("/asia/:num", (req, res) => {
  const num = req.params.num
  res.render("specific.ejs", shows.asia[num])
})

app.get("/northAmerica/:num", (req, res) => {
  const num = req.params.num
  res.render("specific.ejs", shows.northAmerica[num])
})

app.get("/europe/:num", (req, res) => {
  const num = req.params.num
  res.render("specific.ejs", shows.europe[num])
})

app.use((req, res, next) =>{
  res.status(404).send("404 NOT FOUND")
})

app.listen(3000, () => {
 console.log("Server running")
})
