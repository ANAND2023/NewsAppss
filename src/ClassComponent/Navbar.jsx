import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../assets/style.css"
export default class Navbar extends Component {
  constructor(){
    super()
    this.state={
      search:""
    }
  }
  searchNews(e){
    this.setState({search:e.target.value})
    console.log(this.state.search)
  }
  render() {
    return (
        <>
        <nav className="navbar navbar-expand-lg background fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">NewsWeb</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light active"  aria-current="page" to="/">All </Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link className="nav-link text-light dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="Politics">Politics</Link></li>
                  <li><Link className="dropdown-item" to="Crime">Crime</Link></li>
                  <li><Link className="dropdown-item" to="Technology">Technology</Link></li>
                  <li><Link className="dropdown-item" to="Science">Science</Link></li>
                  <li><Link className="dropdown-item" to="Education">Education</Link></li>
                  <li><Link className="dropdown-item" to="Sports">Sports</Link></li>
                  <li><Link className="dropdown-item" to="IPL">IPL</Link></li>
                  <li><Link className="dropdown-item" to="Covid19">Covid19</Link></li>
                  <li><Link className="dropdown-item" to="Jokes">Jokes</Link></li>
                  <li><Link className="dropdown-item" to="Entertainment">Entertainment</Link></li>                
                </ul>
              </li>  
            </ul>
            <form className="d-flex w-100" role="search">
              <input className="form-control me-2" type="search" onChange={(e)=>this.searchNews(e)} placeholder="Search News by typing some thing" aria-label="Search"/>
              
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li className="nav-item dropdown">
                <Link className="nav-link text-light dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Language
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage("hi")}>Hindi</button></li>
                  <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage("en")}>English</button></li>
                  
                </ul>
              </li>  
            </ul>
            
          </div>
        </div>
      </nav>
      <br/>
      <br/>
      
      </>
    )
  }
}
