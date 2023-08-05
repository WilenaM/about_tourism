import "../../componets/news/newsStyle.scss"
import dayjs from "dayjs";
import { NEWS_API, NEWS_KEY } from "../../env";
import { useEffect, useState } from "react";

const articles = [
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": null,
        "title": "Thailand's economy picks up in May as tourism, spending rise - Reuters.com",
        "description": "Thailand's economy picks up in May as tourism, spending rise  Reuters.com",
        "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvYXNpYS90aGFpbGFuZHMtZWNvbm9teS1waWNrcy11cC1tYXktdG91cmlzbS1zcGVuZGluZy1yaXNlLTIwMjMtMDYtMzAv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        "urlToImage": null,
        "publishedAt": "2023-06-30T07:46:00Z",
        "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": null,
        "title": "From Titanic tours to space exploration: extreme tourism is on the rise - Reuters.com",
        "description": "From Titanic tours to space exploration: extreme tourism is on the rise  Reuters.com",
        "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2V4dHJlbWUtdG91cmlzbS1hbGxvd3MtdWx0cmEtd2VhbHRoeS1leHBsb3JlLW5ldy1mcm9udGllcnMtMjAyMy0wNi0yMS_SAQA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
        "urlToImage": null,
        "publishedAt": "2023-06-21T22:08:00Z",
        "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": null,
        "title": "Brazil removes tourism minister as Lula seeks support for reforms - Reuters Canada",
        "description": "Brazil removes tourism minister as Lula seeks support for reforms  Reuters Canada",
        "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2FtZXJpY2FzL2JyYXppbC1yZW1vdmVzLXRvdXJpc20tbWluaXN0ZXItbHVsYS1zZWVrcy1zdXBwb3J0LXJlZm9ybXMtMjAyMy0wNy0wNy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        "urlToImage": null,
        "publishedAt": "2023-07-07T00:37:00Z",
        "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "Arwa Mahdawi",
        "title": "Sleep tourism is booming. Here’s why | Arwa Mahdawi",
        "description": "The world is stressful, so an adventure holiday is the last thing you need. Instead, hotels are offering fancy sleep suites and AI-powered bedsAs my wife – and all my exes – will attest, I’m really good (at staying) in bed. I’m not one of those weirdos who ju…",
        "url": "https://www.theguardian.com/commentisfree/2023/jul/19/sleep-tourism-is-booming-heres-why",
        "urlToImage": "https://i.guim.co.uk/img/media/f2d600af9c30327c86dadaca224f92f0c89617e3/0_58_7360_4415/master/7360.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=b20918ccdfdd2f3fac63ce57e22faf2a",
        "publishedAt": "2023-07-19T10:00:04Z",
        "content": "As my wife and all my exes will attest, Im really good (at staying) in bed. Im not one of those weirdos who jumps out from under the sheets at the crack of dawn, ready to seize the day: my modus oper… [+1818 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "John Bartlett in Villa Las Estrellas",
        "title": "Antarctic tourism is booming – but can the continent cope?",
        "description": "In tourist hotspots cruise ships must at times queue to disembark passengers and fragile ecosystems may be at risk from visitors. But who gets to decide on who can come?Outside a scruffy cabin marked “Souvenirs” at Russia’s Bellingshausen Antarctic research s…",
        "url": "https://www.theguardian.com/world/2023/jun/25/antarctica-cruise-tourism-environment-impact",
        "urlToImage": "https://i.guim.co.uk/img/media/1fb2f14b33d60a347d78fb974bb675bf5833f100/0_288_8640_5184/master/8640.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8e75de0e0acfaf13bc5552b6959d5af6",
        "publishedAt": "2023-06-25T07:00:30Z",
        "content": "Outside a scruffy cabin marked Souvenirs at Russias Bellingshausen Antarctic research station, tourists and scientists clank up the metal stairs, keen to escape the blizzard.\r\nOut pokes the bearded f… [+7606 chars]"
    },
    {
        "source": {
            "id": "engadget",
            "name": "Engadget"
        },
        "author": "Sean Buckley",
        "title": "E3 2024 and 2025 aren't canceled (yet)",
        "description": "The Electronic Entertainment Expo hasn't been held in person since 2019. Now, it may not be returning for 2024 or 2025 — at least not at the Los Angeles Convention Center. According to an LA City Tourism Commission planning document shared on ResetEra, the vi…",
        "url": "https://www.engadget.com/e3-2024-and-2025-arent-canceled-yet-222141813.html",
        "urlToImage": "https://s.yimg.com/uu/api/res/1.2/iSUnR0QjfUCHQcLF1ENLgg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/e56e28f0-cf3d-11ed-bdbf-6bbeaf478dd8.cf.jpg",
        "publishedAt": "2023-06-22T22:21:41Z",
        "content": "The Electronic Entertainment Expo hasn't been held in person since 2019. Now, it may not be returning for 2024 or 2025 at least not at the Los Angeles Convention Center. According to an LA City Touri… [+1403 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": null,
        "title": "Tom Jones and Stereophonics help boost music tourism In Wales - Nation.Cymru",
        "description": "<ol><li>Tom Jones and Stereophonics help boost music tourism In Wales  Nation.Cymru\r\n</li><li>New high of 1.1m for overseas music tourists to UK last year, report says  BBC\r\n</li><li>London's music renaissance is a magnet for tourism - not to mention Taylor S…",
        "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiW2h0dHBzOi8vbmF0aW9uLmN5bXJ1L2N1bHR1cmUvdG9tLWpvbmVzLWFuZC1zdGVyZW9waG9uaWNzLWhlbHAtYm9vc3QtbXVzaWMtdG91cmlzbS1pbi13YWxlcy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        "urlToImage": null,
        "publishedAt": "2023-07-18T06:49:56Z",
        "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "Sawdah Bhaimiya",
        "title": "Japan Airlines launches clothing rental service to help passengers cut down on baggage",
        "description": "Japan Airlines is trialing a new service to rent pre-owned clothing to passengers in a bid to promote sustainable tourism.",
        "url": "https://www.businessinsider.com/japan-airlines-rents-clothes-passengers-luggage-free-vacation-2023-7",
        "urlToImage": "https://i.insider.com/64a529b46075be0019c2a30f?width=1200&format=jpeg",
        "publishedAt": "2023-07-05T10:58:11Z",
        "content": "The rental service will run from July this year up until August 2024.RICHARD A. BROOKS/AFP via Getty Images\r\n<ul>\n<li>Japan Airlines is trialing a new service to rent clothing to passengers. </li>\n<l… [+1688 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ReadWrite"
        },
        "author": "Deanna Ritchie",
        "title": "Virgin Galactic’s First Commercial Flight: A Milestone in Space Tourism",
        "description": "The inaugural commercial trip of Virgin Galactic, created in 2004 by billionaire entrepreneur Richard Branson, is named Galactic 01. This […]\nThe post Virgin Galactic’s First Commercial Flight: A Milestone in Space Tourism appeared first on ReadWrite.",
        "url": "https://readwrite.com/virgin-galactics-first-commercial-flight-a-milestone-in-space-tourism/",
        "urlToImage": "https://images.readwrite.com/wp-content/uploads/2023/06/ivan-diaz-YOy-ek-aBR0-unsplash-scaled.jpg",
        "publishedAt": "2023-06-29T14:47:28Z",
        "content": "The inaugural commercial trip of Virgin Galactic, created in 2004 by billionaire entrepreneur Richard Branson, is named Galactic 01. This historic flight is a big step toward realizing Virgin Galacti… [+3453 chars]"
    }
]



function NewsTourism() {
    const [news, setNews] = useState ([]);
    useEffect (()=> {
        fetch(`${NEWS_API}?apiKey=${NEWS_KEY}&q=tourism&pageSize=9`)
        .then(resp => resp.json()).then(resp => setNews(resp.articles) )
    }, [])
    return (
        <section className="section_news">
            <div className="container">
                <h2>Latest tourism news</h2>
                <div className="news_list">
                    {
                        news.map((article, index) => (
                            <article className="news_article" key={index}>
                                <span className="news_article_source">{article.source.name}</span>
                                {article.urlToImage ? (<img src={article.urlToImage} />) : ''}
                                <div className="article_content">
                                    <h3 className="news_article_title lora_text">{article.title}</h3>
                                    <p className="news_article_description lora_text">{article.description}</p>
                                    <div className="news_article_footer">
                                        <div className="news_article_info">
                                            {article.author ? <div className="news_article_author lora_text">{article.author}</div> : ""}
                                            <time className="pacifico">{dayjs(article.publishedAt).format('MMM D, YYYY')}</time>
                                        </div>
                                        <div className="news_article_footer_btn">
                                            <a href={article.url} target="_blank" rel="noreferrer" className="news_article_link learn_more">read more</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default NewsTourism;