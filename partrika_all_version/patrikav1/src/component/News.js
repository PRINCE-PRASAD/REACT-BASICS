import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  articles = [
    
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Mat Smith",
      "title": "The Morning After: The FDA could ban Juul’s e-cigarettes",
      "description": "The Food and Drug Administration is preparing to stop Juul from selling e-cigarette products in the US, and the decision could come soon, according to a report from The Wall Street Journal.Along with other e-cigarette makers, Juul submitted its products to th…",
      "url": "https://www.engadget.com/the-morning-after-the-fda-could-ban-juuls-e-cigarettes-111550212.html",
      "urlToImage": "https://s.yimg.com/os/creatr-images/2019-09/9f6e79c0-d4d9-11e9-ad18-5ea40103b7e1",
      "publishedAt": "2022-06-23T11:15:50Z",
      "content": "The Food and Drug Administration is preparing to stop Juul from selling e-cigarette products in the US, and the decision could come soon, according to a report from The Wall Street Journal.\r\nAlong wi… [+3454 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Jon Porter",
      "title": "iOS 16’s editable iMessages may not play nice with older iPhones",
      "description": "The latest developer beta for iOS 16 includes a messy workaround to ensure that newly editable iMessages can be received on iPhones without Apple’s latest software. It sends a second message with the edited text.",
      "url": "https://www.theverge.com/2022/6/23/23179820/ios-16-imessage-edit-messages-incompatible-previous-versions-of-ios",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/BXJuir3tqGaXfoKBp8JBptFHEGw=/0x21:999x544/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23610605/wwdc_2022_1008_10_13_13.jpg",
      "publishedAt": "2022-06-23T11:46:13Z",
      "content": "The app re-sends an edited message if youre on an older version of iOS\r\nHow edited messages are supposed to look.\r\nImage: Apple\r\nThe ability to edit and unsend messages was one of the flagship featur… [+1883 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Central"
      },
      "author": "tips@androidcentral.com (Jay Bonggolto)",
      "title": "Mecool HomePlus KA1 Android TV box review: a streaming device and smart speaker combo",
      "description": "The Mecool HomePlus KA1 offers almost everything you could want from a streaming device, such as 4K HDR support. It also functions as a smart speaker with Google Assistant and Chromecast onboard, providing a hands-free streaming experience.",
      "url": "https://www.androidcentral.com/streaming-tv/mecool-homeplus-ka1-android-tv-box-review",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/63LKmgS8NgbDN7Rf5ecBuN-1200-80.jpg",
      "publishedAt": "2022-06-23T12:00:00Z",
      "content": "Cord-cutters have had an exciting period over the past two years, with Android TV boxes gaining traction and Google's Chromecast taking on a new form with a remote for the first time. When you combin… [+11682 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Jamie Grierson",
      "title": "Royal Mail marks 50 years of UK Pride with colourful set of stamps",
      "description": "March in London on 1 July 1972 was first with the name ‘Gay Pride’, inspired by events in USOn 1 July 1972 a crowd of people gathered in London’s Trafalgar Square and marched to Hyde Park chanting “Gay is fun! Gay is proud! Gay is beautiful!”.It was not the f…",
      "url": "https://amp.theguardian.com/world/2022/jun/23/royal-mail-marks-50-years-of-uk-pride-with-colourful-set-of-stamps",
      "urlToImage": "https://i.guim.co.uk/img/media/9690924c38c8b1b9fee2c1f631b4e9a10b745ef3/0_0_5905_3543/master/5905.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f3d988f09e077475595d88ad66bd8df1",
      "publishedAt": "2022-06-23T05:00:39Z",
      "content": "On 1 July 1972 a crowd of people gathered in Londons Trafalgar Square and marched to Hyde Park chanting Gay is fun! Gay is proud! Gay is beautiful!.\r\nIt was not the first march for LGBTQ+ rights in t… [+2108 chars]"
    }
   
    
  ]



constructor(){
super();
console.log("hello i an a constructer from News component")
this.state = {
                 articles: this.articles,
                 loading: false
}
}


  render() {

    return (
       <div className="container my-3">
      <h2>Patrika - Top Headlines</h2>
       <div className="row">
        {this.state.articles.map ((element)=>{
         return <div className="col-md-4" key={element.url}>
          
      
            <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>

      })}
    
       


      </div>
         </div>
    )
  }
}

export default News;
