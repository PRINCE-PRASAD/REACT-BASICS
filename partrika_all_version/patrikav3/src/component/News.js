import React, { Component } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";

export class News extends Component {

constructor(){
super();
console.log("hello i an a constructer from News component")
this.state = {
                 articles: [],
                 loading: false,
                 page: 1
                 
}
}


    async componentDidMount(){
     let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=c0977491568e4d4aa49cbd54c1e35ab6&page=1&pageSize=${this.props.pageSize}`;
     this.setState({loading: true});
     let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,
      loading: false
    })
}

     handlePrevClick = async ()=>{
     console.log("previous")
     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c0977491568e4d4aa49cbd54c1e35ab6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
     this.setState({loading: true});
     let data = await fetch(url);
     let parsedData = await data.json()
     console.log(parsedData);
     this.setState({
                page: this.state.page-1,
               articles: parsedData.articles,
               loading: false
            })
   }

        handleNextClick = async () =>{
         console.log("Next")
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
   
                           
   
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c0977491568e4d4aa49cbd54c1e35ab6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
    page: this.state.page + 1,
    articles: parsedData.articles,
    loading: false,

})
 }

 
}

  render() {

    return (
       <div className="container my-3">
        <h1 className="text-center">Patrika - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
      
       <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
         return <div className="col-md-4" key={element.url}>
          
      
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
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
