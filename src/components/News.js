import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articals = [
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "Riley Hoffman",
      title:
        "Rapper Sean Kingston arrested following raid at Florida mansion: Sheriff - ABC News",
      description:
        "He was arrested on numerous fraud and theft charges, authorities said.",
      url: "https://abcnews.go.com/GMA/rapper-sean-kingston-arrested-california-raid-florida-mansion/story?id=110524642",
      urlToImage:
        "https://i.abcnewsfe.com/a/5b87918f-78be-41bc-a24f-530ed34c7355/GettyImages-1258424113_1716517910214_hpMain_16x9.jpg?w=1600",
      publishedAt: "2024-05-24T10:01:31Z",
      content:
        "Rapper Sean Kingston was arrested in California following a SWAT raid of his rented South Florida mansion, the Broward County Sheriff's Office said on Thursday.\r\nKingston, 34, whose real name is Kise… [+1033 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Myles Udland",
      title:
        "Nvidia's stock split isn't something for investors to ignore: Morning Brief - Yahoo Finance",
      description:
        "Nvidia announced a stock split on Wednesday that, on the surface, appears to mean nothing. But upon further inspection, it offers some important signals...",
      url: "https://finance.yahoo.com/news/nvidias-stock-split-isnt-something-for-investors-to-ignore-morning-brief-100008746.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/84_LakaQo0BWJTd5VFBDZQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-03/0c44a9c0-e58d-11ee-9fdf-984d542f6347",
      publishedAt: "2024-05-24T10:00:08Z",
      content:
        "This is The Takeaway from today's Morning Brief, which you can sign up to receive in your inbox every morning along with:\r\n<ul><li>The chart of the day\r\n</li><li>What we're watching\r\n</li><li>What we… [+2716 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Dalia Faheid, Elizabeth Wagmeister",
      title:
        "Another woman accuses Sean ‘Diddy’ Combs of sexually assaulting her in a lawsuit - CNN",
      description:
        "Sean “Diddy” Combs has been accused of sexual assault in a new lawsuit filed on Thursday by April Lampros, who says she met him in 1994 when she was a student at New York’s Fashion Institute of Technology.",
      url: "https://www.cnn.com/2024/05/24/entertainment/another-woman-accuses-diddy-of-drugging-and-sexually-assaulting-her-in-eighth-lawsuit-since-november/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/2017-05-02t120000z-842525135-hp1ed52032brw-rtrmadp-3-fashion-metgala.JPG?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-05-24T08:13:00Z",
      content:
        "Sean Diddy Combs has been accused of sexual assault in a new lawsuit filed on Thursday by April Lampros, who says she met him in 1994 when she was a student at New Yorks Fashion Institute of Technolo… [+5721 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "CNN",
      title:
        "China says military drills encircling Taiwan designed to test its ability to ‘seize power’ - CNN",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiX2h0dHBzOi8vd3d3LmNubi5jb20vMjAyNC8wNS8yMy9hc2lhL2NoaW5hLW1pbGl0YXJ5LWRyaWxscy10YWl3YW4tc2Vjb25kLWRheS1pbnRsLWhuay9pbmRleC5odG1s0gFYaHR0cHM6Ly9hbXAuY25uLmNvbS9jbm4vMjAyNC8wNS8yMy9hc2lhL2NoaW5hLW1pbGl0YXJ5LWRyaWxscy10YWl3YW4tc2Vjb25kLWRheS1pbnRsLWhuaw?oc=5",
      urlToImage: null,
      publishedAt: "2024-05-24T06:07:35Z",
      content: null,
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Reuters",
      title:
        "Many feared dead in landslide in remote Papua New Guinea village - Reuters",
      description: null,
      url: "https://www.reuters.com/world/asia-pacific/landslide-remote-papua-new-guinea-village-kills-about-100-abc-says-2024-05-24/",
      urlToImage: null,
      publishedAt: "2024-05-24T06:00:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Suntimes.com",
      },
      author: "Georgia Nicols",
      title: "Horoscope for Friday, May 24, 2024 - Chicago Sun-Times",
      description: null,
      url: "https://chicago.suntimes.com/horoscopes/2024/05/24/horoscopes-today-friday-may-24-2024",
      urlToImage:
        "https://cst.brightspotcdn.com/dims4/default/2c332ab/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fchorus-production-cst-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2F1d%2F93%2F47324196deb4692dec0017be613f%2Fgeorgia-nicols.jpg",
      publishedAt: "2024-05-24T05:02:52Z",
      content:
        "Moon Alert\r\nThere are no restrictions to shopping or important decisions. The moon is in Sagittarius.\r\nAries (March 21-April 19)\r\nThis is a fabulous day to travel. Its also great day to learn new thi… [+3797 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "BBC.com",
      title:
        "Singapore Airlines: More than twenty treated for spinal injuries after turbulence flight - BBC.com",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jdzU1MTkycmQ5bG_SATJodHRwczovL3d3dy5iYmMuY29tL25ld3MvYXJ0aWNsZXMvY3c1NTE5MnJkOWxvLmFtcA?oc=5",
      urlToImage: null,
      publishedAt: "2024-05-24T04:00:30Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "KCCI Des Moines",
      },
      author: "Jason Sydejko",
      title:
        "Iowans cleaning up after tornadoes could see more severe weather overnight - KCCI Des Moines",
      description:
        "It has been a relentless spring of severe weather in Iowa and we have more storms moving across the state early Friday morning.",
      url: "https://www.kcci.com/article/iowa-weather-severe-storms-forecast/60888025",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/a28c885c-ad43-461f-b33b-b7da1b635230-664ff52d19db8.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      publishedAt: "2024-05-24T03:19:00Z",
      content:
        "DES MOINES, Iowa —It has been a relentless spring of severe weather in Iowa and we have more storms moving across the state early Friday morning. \r\nClosings | Interactive Radar | Weather Alerts\r\nFoll… [+4394 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title:
        "Elon Musk says he opposes US tariffs on Chinese electric vehicles - BBC.com",
      description:
        'He previously warned Chinese car makers would "demolish" rivals if there were no trade barriers.',
      url: "https://www.bbc.com/news/articles/cq55zd2xjreo",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/200a/live/29096530-197e-11ef-b109-d7399a006ab0.jpg",
      publishedAt: "2024-05-24T03:15:55Z",
      content:
        "Peter Hoskins,Business reporter\r\nTesla boss Elon Musk says he opposes US tariffs on Chinese electric vehicles (EVs), just days after President Joe Biden quadrupled levies on EVs imported from China.\r… [+1954 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Karen DeYoung, John Hudson, Missy Ryan",
      title:
        "Biden administration straddles its own 'red line' on Rafah invasion - The Washington Post",
      description:
        "The administration continues to describe Israel’s military action in Rafah as “limited,” but acknowledges civilian suffering is worsening.",
      url: "https://www.washingtonpost.com/national-security/2024/05/23/biden-israel-rafah-invasion/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DPDZYO4JH7KGWTPGJBBDYYJWOA.JPG&w=1440",
      publishedAt: "2024-05-24T03:07:00Z",
      content:
        "Nearly two weeks into an Israeli offensive in Rafah, an invasion that President Biden warned months ago could be a red line for continued U.S. support of its war in Gaza, the administration says that… [+389 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Hayden Field",
      title:
        "OpenAI sends internal memo releasing former employees from controversial exit agreements - CNBC",
      description:
        "OpenAI on Thursday sent an internal memo releasing former employees from non-disparagement agreements that did not expire, which had incited controversy.",
      url: "https://www.cnbc.com/2024/05/24/openai-sends-internal-memo-releasing-former-employees-from-non-disparagement-agreements-sam-altman.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107418095-1716321352787-gettyimages-2153474303-AFP_34TH9TB.jpeg?v=1716321508&w=1920&h=1080",
      publishedAt: "2024-05-24T03:05:00Z",
      content:
        "OpenAI on Thursday backtracked on a controversial decision to, in effect, make former employees choose between signing a non-disparagement agreement that would never expire, or keeping their vested e… [+3624 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "Page Six",
      title:
        "Ben Affleck ditches wedding ring again while arriving to movie set amid Jennifer Lopez split rumors - Page Six",
      description: null,
      url: "https://news.google.com/rss/articles/CBMidWh0dHBzOi8vcGFnZXNpeC5jb20vMjAyNC8wNS8yMy9lbnRlcnRhaW5tZW50L2Jlbi1hZmZsZWNrLWRpdGNoZXMtd2VkZGluZy1yaW5nLWFnYWluLWFtaWQtamVubmlmZXItbG9wZXotc3BsaXQtcnVtb3JzL9IBeWh0dHBzOi8vcGFnZXNpeC5jb20vMjAyNC8wNS8yMy9lbnRlcnRhaW5tZW50L2Jlbi1hZmZsZWNrLWRpdGNoZXMtd2VkZGluZy1yaW5nLWFnYWluLWFtaWQtamVubmlmZXItbG9wZXotc3BsaXQtcnVtb3JzL2FtcC8?oc=5",
      urlToImage: null,
      publishedAt: "2024-05-24T03:04:00Z",
      content: null,
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Reuters",
      title: "Philippines says China Coast Guard rules a provocation - Reuters",
      description: null,
      url: "https://www.reuters.com/world/asia-pacific/philippines-says-china-coast-guard-rules-provocation-2024-05-24/",
      urlToImage: null,
      publishedAt: "2024-05-24T03:01:28Z",
      content: null,
    },
    {
      source: {
        id: "msnbc",
        name: "MSNBC",
      },
      author: "MSNBC.com",
      title:
        "Christian nationalist flag flown by Justice Alito, Leonard Leo, Speaker Johnson - MSNBC",
      description:
        "A Christian nationalist flag has been flown by Supreme Court Justice Sam Alito, right-wing activist Leonard Leo, and evangelical extremist House Speaker Mike Johnson. The politicization of the Supreme Court, which is supposed to be a politically neutral branc…",
      url: "https://www.msnbc.com/the-reidout/watch/christian-nationalist-flag-flown-by-justice-alito-leonard-leo-speaker-johnson-211546693582",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/mpx/2704722219/2024_05/1716517965607_n_reidout_supremecourt_240523_1920x1080-z54p7s.jpg",
      publishedAt: "2024-05-24T03:00:00Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "The New York Times",
      title:
        "Obama Is a Surprise Guest Among Allies at Biden's State Dinner for Kenya - The New York Times",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiTGh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMjQvMDUvMjMvdXMvcG9saXRpY3MvYmlkZW4tc3RhdGUtZGlubmVyLWtlbnlhLmh0bWzSAQA?oc=5",
      urlToImage: null,
      publishedAt: "2024-05-24T02:59:52Z",
      content: null,
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Jamal Collier",
      title:
        "Pacers' Tyrese Haliburton leaves Game 2 due to left hamstring - ESPN",
      description:
        "Tyrese Haliburton left Thursday night's Game 2 loss in the third quarter due to a sore left hamstring, leaving his status for Saturday's Game 3 in the air.",
      url: "https://www.espn.com/nba/story/_/id/40207373/pacers-tyrese-haliburton-left-game-2-loss-due-hamstring",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0524%2Fr1336902_1296x729_16%2D9.jpg",
      publishedAt: "2024-05-24T02:37:00Z",
      content:
        "BOSTON -- Indiana Pacers star Tyrese Haliburton left in the third quarter of Thursday night's 126-110 loss to the Boston Celtics in Game 2 of the Eastern Conference finals and did not return because … [+2151 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Steven Goff",
      title:
        "Emma Hayes built a dynasty in England. Can she restore one with the USWNT? - The Washington Post",
      description:
        "The new U.S. women’s coach has done nothing but win in the Super League. As she starts here, she knows well it’s how she finishes.",
      url: "https://www.washingtonpost.com/sports/2024/05/23/emma-hayes-uswnt-coach-olympics/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/C4ITTDECLUK3OHHY4QBN3E3SLI.jpg&w=1440",
      publishedAt: "2024-05-24T02:36:12Z",
      content:
        "Emma Hayes had only a few days between raising another trophy with her Chelsea FC players and starting her tenure as coach of the U.S. womens national soccer team.\r\nIn an ideal world, everybody would… [+238 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "Los Angeles Times",
      title:
        "'Denied': UC fails to get a court order to stop academic workers' strike; union hails decision - Los Angeles Times",
      description: null,
      url: "https://news.google.com/rss/articles/CBMijQFodHRwczovL3d3dy5sYXRpbWVzLmNvbS9jYWxpZm9ybmlhL3N0b3J5LzIwMjQtMDUtMjMvZGVuaWVkLXVjLWZhaWxzLXRvLWdldC1hLWNvdXJ0LW9yZGVyLXRvLXN0b3AtYWNhZGVtaWMtd29ya2Vycy1zdHJpa2UtdW5pb24taGFpbHMtZGVjaXNpb27SAQA?oc=5",
      urlToImage: null,
      publishedAt: "2024-05-24T02:36:00Z",
      content: null,
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ADAM BEAM",
      title:
        "Arizona doctors can come to California to perform abortions under new law signed by Gov. Newsom - The Associated Press",
      description:
        "Arizona doctors can temporarily come to California to perform abortions for their patients under a new law signed by Gov. Gavin Newsom. California’s law is meant to circumvent an Arizona law first passed in 1864 that bans nearly all abortions in that state. T…",
      url: "https://apnews.com/article/california-arizona-abortion-laws-newsom-809fdf5dbccb05daca5bc0df28eb1a1b",
      urlToImage:
        "https://dims.apnews.com/dims4/default/81a3d3d/2147483647/strip/true/crop/5230x2942+0+273/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F8e%2F97%2F194d0c0ac036a8a3c50239b49669%2Fc909b9e6f2664518b99a557a72b77154",
      publishedAt: "2024-05-24T01:45:00Z",
      content:
        "SACRAMENTO, Calif. (AP) Arizona doctors can temporarily come to California to perform abortions for their patients under a new law signed Thursday by Gov. Gavin Newsom.\r\nCalifornias law is meant to g… [+3476 chars]",
    },
    {
      source: {
        id: null,
        name: "SamMobile",
      },
      author: "SamMobile, Abhijeet Mishra",
      title:
        "Forget the Ultra, Samsung may be working on a Galaxy Z Fold 6 Slim - SamMobile - Samsung news",
      description:
        "Here's something that has come completely out of left field: Samsung is reportedly making a Galaxy Z Fold 6 Slim ...",
      url: "https://www.sammobile.com/news/samsung-galaxy-z-fold-6-slim-rumor/",
      urlToImage:
        "https://www.sammobile.com/wp-content/uploads/2023/08/Galaxy-Z-Fold-5-review-58-720x405.jpg",
      publishedAt: "2024-05-24T01:00:00Z",
      content:
        "Here's something that has come completely out of left field: Samsung is reportedly making a Galaxy Z Fold 6 Slim that will launch in the last quarter (October-December) of the year.\r\nWe have known ab… [+1644 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articals: this.articals,
      loading: false,
    };
  }
  render() {
    return (
      <div>
        This is news component
        <div className="container my-3">
          <h2>PressPlus - Top headLine</h2>
          <div className="row">
            <div className="col-md-4">
              <NewsItem
                title="my title"
                description="my description"
                ImageUrl="https://i.abcnewsfe.com/a/5b87918f-78be-41bc-a24f-530ed34c7355/GettyImages-1258424113_1716517910214_hpMain_16x9.jpg?w=1600"
                NewsUrl="Too"
              />
            </div>
            <div className="col-md-4">
              <NewsItem title="my title" description="my description" />
            </div>
            <div className="col-md-4">
              <NewsItem title="my title" description="my description" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
