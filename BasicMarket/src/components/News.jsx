import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import NewsItem from "./NewsItem";
import Loading from "./loading";

const News = ({mode,pageSize,category,api_key}) =>{
    const [newsAPI_data,setnewsAPI] = useState([]);
    let [loading,setloading] = useState(true);
    let key=0,totalPage;
    let [page,setPage] = useState(1) ;
    function NextPage(){
         if(page<10){
            setPage(++page)
            setloading(true);
        }
    }
    function PrevPage(){
        if(page>1){setPage(--page);
            setloading(true);
        }
    }
    
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api_key}&pageSize=${pageSize}&page=${page}`;
    const location = useLocation();
    useEffect(()=>{
        const fetchNews = async()=>{
            try {
                let response = await fetch(url);
                setloading(true)
                if(!response.ok){
                    throw new Error("Error while fetching News");
                }
                response = await response.json();
                totalPage = response.totalResults
                setloading(false);
                setnewsAPI(response.articles);
            } catch (error) {
                console.log("Error while fetching the Data from the NewsAPI");
                setloading(false);
            }
        } 
        fetchNews();
    },[page,location]);
    return (
    <>
    <div className="container my-4">
   <h1 className="text-center" style={{color: mode === 'primary'? 'black':'white'}}><b>Latest News - Top HeadLines</b></h1>
   {loading && <Loading/>}
   <div className="row">
   {newsAPI_data.map((News)=>{
    key = key+1;
    return <div className="col-md-3" key={News.url + key}>
                <NewsItem mode ={mode} title = {News.title } description= {News.description} link= {News.urlToImage} url= {News.url} author={News.author==null ? 'Unknown' : News.author} time={News.publishedAt}/>
   </div>
        })}
   </div>
        <div className="container d-flex justify-content-between">
        <button disabled = {page<=1} type="button" className="btn btn-dark" onClick={PrevPage}>&larr;Previous</button>
        <button disabled = {page>=Math.ceil(totalPage/{pageSize})}type="button" className="btn btn-dark" onClick={NextPage}>Next&rarr;</button>

        </div>
   </div>
    </>)
}

export default News ;