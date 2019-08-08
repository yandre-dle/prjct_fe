import React from 'react'
import './../supports/css/PageNotFound.css'

class PageNotFound extends React.Component{
    render(){
        return(
            <div id="notfound">
            <div className="notfound">
              <div className="notfound-404" style={{marginTop: '-40px'}}>
                <h1>Oops!</h1>
              </div>
              <h2>404 - Page not found</h2>
              <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
              <a href="/">Go To Homepage</a>
            </div>
          </div>
        )
    }
}

export default PageNotFound