// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './spinner';
// import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {

//   static defaultProps = {
//     country: 'us',
//     pageSize: 10, // fixed from string to number
//     category: 'General'
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string
//   };

//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   constructor() {
//     super();
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0
//     };
//   }

//   async componentDidMount() {
//     this.props.setProgress(0);
//     this.setState({ loading: true });
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=1&pageSize=${this.props.pageSize}&apiKey=4d0db41d0cb646e887b7e586c888a074`;
//     let data = await fetch(url);
//     this.props.setProgress(30);
//     let parsedData = await data.json();
//     this.props.setProgress(70);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false
//     });
//     this.props.setProgress(100);
//   }

//   // handlePrev = async () => {
//   //   this.setState({ loading: true });
//   //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}&apiKey=1e1c8fba7127424ea5cc74be5ad98b93`;
//   //   let data = await fetch(url);
//   //   let parsedData = await data.json();

//   //   this.setState({
//   //     page: this.state.page - 1,
//   //     articles: parsedData.articles,
//   //     loading: false
//   //   });
//   // };

//   // handleNext = async () => {
//   //   if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
//   //     this.setState({ loading: true });
//   //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&apiKey=1e1c8fba7127424ea5cc74be5ad98b93`;
//   //     let data = await fetch(url);
//   //     let parsedData = await data.json();

//   //     this.setState({
//   //       page: this.state.page + 1,
//   //       articles: parsedData.articles,
//   //       loading: false
//   //     });
//   //   }
//   // };

//   fetchMoreData = async () => {
//   const nextPage = this.state.page + 1;

//   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${nextPage}&pageSize=${this.props.pageSize}&apiKey=4d0db41d0cb646e887b7e586c888a074`;

//   try {
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();

//     if (!parsedData.articles || parsedData.articles.length === 0) {
//       // No more articles — prevent further fetching
//       this.setState({ loading: false, totalResults: this.state.articles.length });
//       return;
//     }

//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults || this.state.totalResults,
//       page: nextPage,
//       loading: false
//     });

//   } catch (error) {
//     console.error("Error fetching more data:", error);
//     this.setState({ loading: false });
//   }
// };

//   render() {
//     return (
//       <>
//         <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
//           NewsIS - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
//         </h1>

//         {/* {this.state.loading && <Spinner />} */}

//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner />}
//         >
//           <div className="container">
//             <div className="row">
//               {/*  !this.state.loading && */ this.state.articles.map((element) => {
//                 return (
//                   <div className="col-md-4" key={element.url}>
//                     <NewsItem
//                       title={element.title ? element.title.slice(0, 95) : ""}
//                       description={element.description ? element.description.slice(0, 200) : ""}
//                       imageurl={element.urlToImage}
//                       newsurl={element.url}
//                       author={element.author}
//                       date={element.publishedAt}
//                       source={element.source.name}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </InfiniteScroll>

//         {/* <div className="container d-flex justify-content-between">
//           <button disabled={this.state.page <= 1} type="button" className="btn btn-success" onClick={this.handlePrev}>
//             &larr; Previous
//           </button>
//           <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNext}>
//             Next &rarr;
//           </button>
//         </div> */}
//       </>
//     );
//   }
// }

// export default News;
// // 1e1c8fba7127424ea5cc74be5ad98b93

//Ishant change
import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchNews = async () => {
    props.setProgress(0);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=1&pageSize=${props.pageSize}&apiKey=4d0db41d0cb646e887b7e586c888a074`;
    
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  }, [props.country, props.category]); 
  // re-run if country/category changes

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${nextPage}&pageSize=${props.pageSize}&apiKey=4d0db41d0cb646e887b7e586c888a074`;

    try {
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();

      if (!parsedData.articles || parsedData.articles.length === 0) {
        setLoading(false);
        setTotalResults(articles.length);
        return;
      }

      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults || totalResults);
      setPage(nextPage);
      setLoading(false);

    } catch (error) {
      console.error("Error fetching more data:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
        NewsIS - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 95) : ""}
                    description={element.description ? element.description.slice(0, 200) : ""}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: 'us',
  pageSize: 10,
  category: 'General'
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func
};

export default News;
