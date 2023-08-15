import "../../componets/news/newsStyle.scss"
import dayjs from "dayjs";
import { NEWS_API, NEWS_KEY } from "../../env";
import { useEffect, useState } from "react";

function getNews() {
    const storageName = 'news';

    if (localStorage.getItem(storageName) && localStorage.getItem(storageName) !=='undefined' && document.cookie.includes(storageName)) {
        return Promise.resolve(JSON.parse(localStorage.getItem(storageName)));
    } else { 
        return fetch(`${NEWS_API}?apiKey=${NEWS_KEY}&q=tourism&pageSize=9`)
        .then(resp => resp.json())
        .then(resp => {
            console.log('resp', resp)
            if ( resp.status === 'ok' ) {
                localStorage.setItem (storageName, JSON.stringify(resp.articles));
            document.cookie = `${storageName}=true; path=/; expires=${dayjs().add(2, 'hours')}`
            return resp.articles
            } else {
                return []
            }
            
        });

    }
}


function NewsTourism() {
    const [news, setNews] = useState ([]);

    useEffect (()=> {
        getNews().then(resp => setNews(resp) )
    }, [])

    return (
        <section className="section_news">
            <div className="container">
                <h2 className="with_frame">Latest tourism news</h2>
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