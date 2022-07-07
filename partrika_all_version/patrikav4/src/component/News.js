import React, { Component } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";


export class News extends Component {

  static defaultProps = 
  {
    country: 'in',
    pageSize: 5,
    category: 'general'
  }
  static propTypes = 
  {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
                                     }

constructor(props){
  super(props);
  console.log("hello i an a constructer from News component")
    this.state = {
                 articles: [],
                 loading: false,
                 page: 1
                 
              }
     

  document.title = `${this.capitalizeFirstLetter(this.props.category)} - Patrika`;

}

async updateNews(){
  const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0977491568e4d4aa49cbd54c1e35ab6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     this.setState({loading: true});
     let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,
      loading: false
    })
}

    async componentDidMount(){
    //  let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0977491568e4d4aa49cbd54c1e35ab6&page=1&pageSize=${this.props.pageSize}`;
    //  this.setState({loading: true});
    //  let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,
    //   loading: false
    // })
    this.updateNews();
}

     handlePrevClick = async ()=>{
     console.log("previous")
    //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0977491568e4d4aa49cbd54c1e35ab6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //  this.setState({loading: true});
    //  let data = await fetch(url);
    //  let parsedData = await data.json()
    //  console.log(parsedData);
    //  this.setState({
    //             page: this.state.page-1,
    //            articles: parsedData.articles,
    //            loading: false
    //         })
    this.setState({page: this.state.page - 1});
    this.updateNews();
   }

        handleNextClick = async () =>{
         console.log("Next")
//         if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
   
                           
   
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0977491568e4d4aa49cbd54c1e35ab6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     this.setState({loading: true});
//     let data = await fetch(url);
//     let parsedData = await data.json()
//     this.setState({
//     page: this.state.page + 1,
//     articles: parsedData.articles,
//     loading: false,

// })
//  }

 this.setState({page: this.state.page + 1});
 this.updateNews();
}

  render() {

    return (
       <div className="container my-3">
        <h1 className="text-center" style={{margin: '35px 0px'}}>Patrika - Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading && <Spinner/>}
      
       <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
         return <div className="col-md-4" key={element.url}>
          
      
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>

      })}
    
       <div className="container d-flex justify-content-between">
       <button disabled ={this.state.page<=1} type="button" className ="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
       <button disabled ={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
       </div>


      </div>
         </div>
    )
  }
}

export default News;
