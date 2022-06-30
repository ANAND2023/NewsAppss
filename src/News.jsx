import React, { Component } from 'react'
import Newsitem from './ClassComponent/Newsitem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './ClassComponent/spinner';
export default class News extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      totalResult: 0,
      page: 1,
      pageSize: 8
    }
  }
  async getData() {
    var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&language=${this.props.language}&page=${this.state.page}&pageSize=${this.state.pageSize}&apiKey=b6a7f7fee071409c849ee7c046c782c0`)
    var result = await rawdata.json()
    this.setState({
      articles: result.articles,
      totalResult: result.totalResults
    })
  }
  componentDidMount() {
    this.getData()
  }
  componentDidUpdate(old) {
    if (this.props.category !== old.category || this.props.language !== old.language)
      this.getData()
  }
  fetchMoreData = async()=>{
    this.setState({page:this.state.page+1})
    var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&language=${this.props.language}&page=${this.state.page}&pageSize=${this.state.pageSize}&apiKey=b6a7f7fee071409c849ee7c046c782c0`)
    var result = await rawdata.json()
    this.setState({
      articles: this.state.articles.concat(result.articles)
    })
  }
  render() {
    return (
      <>
        <h5 className='mt-3 background text-light p-2 text-center' >{this.props.category} News Section</h5>
        

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length<this.state.totalResult}
            loader={<Spinner/>}
          >
          <div className='row'>
            {
              this.state.articles.map((item, index) => {
                return <div key={index} className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 co;-12">
                  <Newsitem
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    pic={item.urlToImage}
                    source = {item.source}
                    date = {item.publishedAt}
                  />
                </div>
              })
            }</div>
          </InfiniteScroll>
        
      </>

    )
  }
}
