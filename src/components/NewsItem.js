const NewsItem = (props) => {
  let { title, description, imageurl, newsurl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card" >
        <span className="badge rounded-pill bg-secondary" style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0', top: '-10px' }}>{source}</span>
        <img
          src={imageurl ? imageurl : `${process.env.PUBLIC_URL}/Breaking-News.jpeg`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `${process.env.PUBLIC_URL}/Breaking-News.jpeg`;
          }}
          className="card-img-top"
          alt="news"
        />

        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author || "Unknown"} on {date ? new Date(date).toLocaleString() : "Unknown Date"}
            </small>
          </p>

          <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
        {/* target="_blank" for new page load when we click on link/button */}
      </div>
    </div>
  )
}

export default NewsItem
