import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
        <div className='mt-5 mb-5 text-center'>
            <div className="spinner-border" role="status">
        <span className="visually-hidden" style={{height:"500px",width:"500px"}}>Loading...</span>
      </div>
        </div>
    )
  }
}
