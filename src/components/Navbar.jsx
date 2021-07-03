import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-dark  indigo darken-2">

 
        <a class="navbar-brand" href="#">Navbar</a>
    
     
        <button class="navbar-toggler third-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent22"
                aria-controls="navbarSupportedContent22" aria-expanded="false" aria-label="Toggle navigation">
          <div class="animated-icon3"><span></span><span></span><span></span></div>
        </button>
    
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent22">
    
    
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
      
    
        </div>
   
    
      </nav>
    )
}

export default Navbar
