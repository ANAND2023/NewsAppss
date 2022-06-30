import React, { Component } from 'react'
import pic from "../assets/image/pp1.png"
export default class Newsitem extends Component {
  render() {
    return (
      <div className="card">
  <img src={this.props.pic?this.props.pic:pic} height="250px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{height:"80px"}}>{this.props.title.slice(0,50)+"..."}</h5>
    <h6 className="card-title" style={{fontSize:"13px"}}>source : {this.props.source.name}</h6>
    <h6 className="card-title" style={{fontSize:"13px"}}>Date : {this.props.date}</h6>
    <hr/>
    {/* <p className="card-text" style={{height:"200px"}}>{this.props.description.slice(0,200)+"..."}</p> */}
    <a href={this.props.url} className="text-decoration-none d-block p-2 rounded text-center background text-light w-100">Read Full Article</a>
  </div>
</div>
    )
  }
}
