import React from 'react'
function ErrorMessage({errorMessage}) {
  return (
    <div style={{
        position:"absolute",
        top: "20%",
        left: "10%",
        maxWidth : "150px",
        maxHeight: "30px",
        fontSize : "14px",
        display : errorMessage.showMessage ? "block" : "none"
    }}>{errorMessage.message}</div>
  )
}

export default ErrorMessage