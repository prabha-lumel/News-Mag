import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = ({ category }) => {
    const [articles, setArticle] = useState([])

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=53430e82f05f47cf86547cc9f639011a`
        fetch(url).then(response => response.json()).then(data => setArticle(data.articles));


    }, [category])
    return (
        <div>
            <h2 class="text-center"><span class="badge bg-danger">
                Latest News
            </span>{articles.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}</h2>
        </div>
    )
}

export default NewsBoard