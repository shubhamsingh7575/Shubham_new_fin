import React from 'react'

export default function RightSection({imageURL,
  productName,
  productDescription,
  learnMore,}) {
  return (
    <div className="container mt-5">
      <div className="row">
        
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="text-muted fs-5">{productDescription}</p>
          <div>
            
            <a href={learnMore} style={{textDecoration:"none"}}>
              learnMore
            </a>
          
          </div>   
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  )
}
