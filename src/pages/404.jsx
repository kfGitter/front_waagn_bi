import React from 'react'
import "./styleP.css"
import Footer from '../components/Footer'

function ErrorPage() {
  return (
    <>
      <div className='err-div'>
        <h1 className='err-h1'>
          Oups! ERROR 404...
        </h1>
      </div>
      <Footer />
    </>
  )
}

export default ErrorPage