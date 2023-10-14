import ReactDOM from 'react-dom/client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="Atomic">Atomic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#link">Gallery</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">FAQs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      {/* <Button variant="primary">Login</Button>{' '}
      <Button variant="success">SignUp</Button>{' '} */}
      <div className="d-flex justify-content-between">
      <Button variant="success" className="btn btn-sm px-3 btn-primary rounded-pill shadow-sm me-4">{this.props.Button1}</Button>
     <Button variant="light" className="btn btn-sm px-3 btn-success rounded-pill shadow-sm me-4">{this.props.Button2}</Button>   
     </div>
    </Navbar>

   <div class="py-md-5">
   <div class="container">
   <div class="row"><div class="col-xl-6 col-lg-6 col-md-12">
   <div class="mb-4 mb-xl-0 text-center text-md-start">
   <h1 class="display-4 fw-bold mb-3 ls-sm ">Design a better Website template</h1>
   <p class="mb-4 lead">Building your brand's Website and get detailed insights on how templates are Created</p>
   <a href="https://www.youtube.com/watch?v=JRzWRZahOVU" 
   class="btn btn-success btn-lg display-5 px-4 mt-5 rounded-5">{this.props.Button3}</a>
   </div>
   </div>
   <div class="offset-xl-1 col-xl-5 col-lg-6 col-md-12">
   <div class="d-block mt-n5 text-center">
   <a href="https://www.youtube.com/watch?v=JRzWRZahOVU" class="text-dark mt-5">
   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="display-3 border rounded-circle shadow-sm mt-5 iconify iconify--gg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m15 12.33l-6 4.33V8l6 4.33Z">
   </path>
   </svg></a></div></div></div></div>    
   </div>

<div class="container me shadow p-5 bg-white">
<div class="row gy-3"><div class="col-12 col-md-4"><div class="card border-0 px-3">
<div>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
aria-hidden="true" role="img" class="display-1 iconify iconify--emojione-monotone" width="1em" height="1em" 
preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64">
<path fill="currentColor" d="M32 2C20.973 2 12 9.889 12 19.586c0 5.13 3.368 10.412 6.621 15.516c2.803 4.393 5.48 8.586 6.316 12.898h14.125c.838-4.313 3.512-8.506 6.314-12.898C48.631 29.998 52 24.716 52 19.586C52 9.889 43.027 2 32 2m0 27.674c1.932 2.085 3.752 2.705 4.584 2.889c-.125.555-.238 1.097-.369 1.631c-.246 1.092-.486 2.156-.719 3.178a723.122 723.122 0 0 0-1.895 8.629h-3.203a787.762 787.762 0 0 0-1.895-8.629l-.721-3.178c-.131-.534-.244-1.076-.367-1.631c.833-.184 2.653-.804 4.585-2.889m-.539-2.183c-.191-.413-.26-.835-.064-1.146c.164-.247.381-.388.604-.388s.438.141.604.388c.195.311.127.732-.064 1.146c-.141.292-.334.57-.541.839a4.66 4.66 0 0 1-.539-.839m12.23 6.534c-2.583 4.049-5.039 7.898-6.203 11.975h-3.246a801.908 801.908 0 0 0 2.113-8.465c.246-1.021.506-2.078.771-3.168c.148-.58.279-1.178.424-1.773c.756-.051 1.479-.287 2.043-.804c.578-.569.879-1.313.744-2.107c-.061-.38-.346-.872-.896-1.04a1.397 1.397 0 0 0-.832-.019a1.572 1.572 0 0 0-.598.396c-.533.592-.727 1.183-.945 1.769c-.102.295-.186.59-.266.881c0 0-.85.065-2.668-1.158c-1.01-.679-1.301-1.17-1.594-1.495c.316-.351.619-.736.854-1.203c.125-.261.23-.544.266-.862s-.023-.678-.205-.988a1.749 1.749 0 0 0-.865-.76c-.182-.065-.385-.096-.588-.096s-.408.03-.588.096a1.758 1.758 0 0 0-.867.76c-.182.311-.24.67-.205.988a2.7 2.7 0 0 0 .268.862c.234.467.537.853.854 1.203c-.293.325-.586.816-1.596 1.495c-1.818 1.224-2.668 1.158-2.668 1.158a14.153 14.153 0 0 0-.264-.881c-.221-.586-.412-1.177-.945-1.769a1.565 1.565 0 0 0-.598-.396a1.397 1.397 0 0 0-.832.019c-.553.168-.836.66-.896 1.04c-.137.794.166 1.538.744 2.107c.566.517 1.287.753 2.043.804c.143.596.273 1.193.424 1.773l.771 3.168A834.101 834.101 0 0 0 29.758 46h-3.246c-1.162-4.073-3.619-7.922-6.209-11.979C17.204 29.158 14 24.13 14 19.586C14 10.992 22.074 4 32 4c9.925 0 18 6.992 18 15.586c0 4.546-3.207 9.575-6.309 14.439m-5.892-2.361c.059-.205.119-.413.189-.613c.189-.527.43-1.1.758-1.443c.078-.088.158-.123.199-.146c0 .004.098-.012.16.019c.111.028.217.143.258.364c.08.428-.123.979-.49 1.324c-.258.245-.656.417-1.074.495m-11.6 0c-.418-.078-.816-.25-1.072-.496c-.369-.345-.57-.896-.49-1.324c.041-.222.146-.336.258-.364c.063-.03.16-.015.16-.019c.039.023.121.059.195.146c.33.344.57.916.76 1.443c.07.201.131.409.189.614m.321 17.893h-1v3.6h.768v3.201h.768v3.201h1.286C28.947 60.988 30.347 62 32 62c1.652 0 3.051-1.012 3.658-2.443h1.327v-3.221l.112-.041l.655-.24v-2.923l.065-.021l.701-.22v-3.335H26.52z">
</path></svg>
</div>
<div class="title"><h5>{this.props.title1}</h5>
<p>{this.props.details1}</p>
</div></div></div>

<div class="col-12 col-md-4"><div class="card border-0 px-3">
<div>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
aria-hidden="true" role="img" class="display-1 iconify iconify--la" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" 
viewBox="0 0 32 32"><path fill="currentColor" d="M22.875 3.156L21.75 4.812s.613.477.906 1.157c.254.597.438 1.297-.531 2.468l-.875.876c-2.945-2.508-5.938-2.626-5.938-2.626h-.562l-.313.5s-2.55 4.336-5 8.813C8.212 18.238 7 20.516 6.158 22.313c-.423.898-.755 1.68-.97 2.312c-.105.316-.18.582-.218.875c-.04.293-.149.695.343 1.188c.493.492.895.382 1.188.343c.293-.039.559-.113.875-.218c.633-.215 1.414-.547 2.313-.97C11.483 25 13.761 23.79 16 22.564c4.473-2.454 8.813-5 8.813-5l.5-.313v-.594s-.133-2.957-2.625-5.906l.343-.375c.086-.086.164-.145.25-.219l.25-.219c1.18-.906 2.297-.87 3.282-.624a5.778 5.778 0 0 1 1.906.874l1.25-1.562s-1.11-.855-2.688-1.25a6.317 6.317 0 0 0-1.062-.156l2.031-2.032l-1.438-1.437l-2.093 2.094a3.723 3.723 0 0 0-.219-.688c-.563-1.312-1.625-2-1.625-2zm-7.063 5.656c.657.063 2.536.336 4.782 2.594c2.25 2.266 2.527 4.13 2.593 4.781c-.164.098-1.019.614-1.687 1a11.643 11.643 0 0 0-1.313-2.218l-1.593 1.219c.703.937.992 1.582 1.156 2a346.03 346.03 0 0 1-4.719 2.625c-.097.05-.183.105-.281.156A7.356 7.356 0 0 0 13.719 19l-1.625 1.156c.492.688.734 1.254.844 1.625c.019.063.019.078.03.125c-1.495.801-2.94 1.57-4.124 2.125c-.617.29-1.055.45-1.5.625c.176-.445.336-.883.625-1.5c.808-1.722 2.004-3.968 3.218-6.187c.586-1.07 1.032-1.871 1.563-2.813c.32.281.734.66 1.188 1.25l1.562-1.219a10.324 10.324 0 0 0-1.75-1.812c1.047-1.836 1.883-3.254 2.063-3.563z">
</path></svg>
</div>
<div class="title"><h5>{this.props.title2}</h5>
<p>{this.props.details2}</p>
</div></div></div>

<div class="col-12 col-md-4"><div class="card border-0 px-3">
<div>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" 
role="img" class="display-1 iconify iconify--ph" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" 
viewBox="0 0 256 256">
<path fill="currentColor" d="M244 128a52 52 0 0 1-88.77 36.77l-.17-.18L95 96.8a44 44 0 1 0 0 62.4l8.6-9.72a4 4 0 0 1 6 5.3l-8.68 9.81l-.17.18a52 52 0 1 1 0-73.54l.17.18l60 67.79a44 44 0 1 0 0-62.4l-8.6 9.72a4 4 0 0 1-6-5.3l8.68-9.81l.17-.18A52 52 0 0 1 244 128Z">   
</path></svg>
</div>
<div class="title"><h5>{this.props.title3}</h5>
<p>{this.props.details3}</p></div>
</div></div></div></div>

</div> 
   
        )
    }
}
