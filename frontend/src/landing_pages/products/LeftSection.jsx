import React from 'react'

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 p-3'>
          <img src={imageURL} style={{width: "80%"}} />
        </div>
        <div className='col-6'>
          <h1>{productName}</h1>
          <p className='text-muted fs-5'>{productDescription}</p>
          <a href={tryDemo}>try Demo</a>
          <a href={learnMore}>learnMore</a>
          <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
          <a href={appStore}><img src="media/images/appstoreBadge.svg" /></a>
        </div>
      </div>
    </div>
  )
}
