import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default class Btn extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div class="py-md-5">
            <div class="row"><div class="col-xl-6 col-lg-6 col-md-12">
<div className="d-flex justify-content-between">
      <Button variant="success" className="btn btn-sm px-3 btn-primary rounded-pill shadow-sm me-4">{this.props.Button1}</Button>
     <Button variant="light" className="btn btn-sm px-3 btn-success rounded-pill shadow-sm me-4">{this.props.Button2}</Button>   
     </div></div></div></div>

      )
    }
}


















            {/* <div>
            <div class="py-md-5">
   <div class="container">
   <div class="row"><div class="col-xl-6 col-lg-6 col-md-12">
   <div class="mb-4 mb-xl-0 text-center text-md-start">
      <div className="d-flex justify-content-between">
      <Button variant="success" className="btn btn-sm px-3 btn-primary rounded-pill shadow-sm me-4">{this.props.Button1}</Button>
     <Button variant="light" className="btn btn-sm px-3 btn-success rounded-pill shadow-sm me-4">{this.props.Button2}</Button>   
     </div>
     </div>
     </div>
     </div>
     </div>
     </div>
            </div> */}
  