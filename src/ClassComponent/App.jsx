import React,{Component} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import News from '../News'
import Navbar from './Navbar'

export default class App extends Component{
    constructor(){
        super()
        this.state = {
            language:"hi"
        
        }
    }
    changeLanguage=(lang)=>{
        this.setState({language:lang})
    }
    
    render(){
        return (
            <>
               <BrowserRouter>
               <Navbar changeLanguage={this.changeLanguage}/>
                <Routes>
                   
                <Route path='/' element={<News language={this.state.language} category= "All"/>}></Route>
                <Route path='/Politics' element={<News language={this.state.language} category= "Politics"/>}></Route>
                <Route path='/Crime' element={<News language={this.state.language} category= "Crime"/>}></Route>
                <Route path='/Technology' element={<News language={this.state.language} category= "Technology"/>}></Route>
                <Route path='/Science' element={<News language={this.state.language} category= "Science"/>}></Route>
                <Route path='/Education' element={<News language={this.state.language} category= "Education"/>}></Route>
                <Route path='/Sports' element={<News language={this.state.language} category= "Sports"/>}></Route>
                <Route path='/IPL' element={<News language={this.state.language} category= "IPL"/>}></Route>
                <Route path='/Covid19' element={<News language={this.state.language} category= "Covid19"/>}></Route>
                <Route path='/Jokes' element={<News language={this.state.language} category= "Jokes"/>}></Route>
                <Route path='/Entertaiment' element={<News language={this.state.language} category= "Entertaiment"/>}></Route>
                </Routes>
            
               </BrowserRouter>
            </>
        )
    }
}