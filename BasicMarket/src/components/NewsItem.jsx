

const NewsItem  = ({mode,title,description,link,url,author,time}) =>{
    return (<>
        <div className="container  my-3">
        <div className="card my-4" style={{width : '18rem'}}>
        <img src={link!=null ?link:'./vite.svg'} className="card-img-top" alt={"Error Loading Image"} />
        <div className="card-body" style={{backgroundColor: mode === 'primary'? 'white':'#131313',color: mode === 'primary'? 'black':'white'}}>
        <h5 className="card-title" style={{color: mode === 'primary'? 'black':'white'}}>{title!="[Removed]"?title.slice(0,40)+'...':"News Article"}</h5>
        <p className="card-text"><small className="text-body-secondary">{`Updated By ${author} at ${time}`}</small></p>
        <p className="card-text">{description!= "[Removed]" && null ? description.slice(0,80)+'...':"No Description"}</p>
        <a href={url} className="btn btn-primary">Read More</a>
  </div>
    </div>
    </div>
    </>)
}

export default NewsItem;