import React from "react";

export default function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5  border-top">
        <h1 className="text-center mt-5 ">
         People
      </h1>
      </div>
      <div className="row p-5   text-muted " style={{lineHeight: "1.8rem", fontSize: "1.2em"}}>
        <div className="col-6 p-3 text-center">
            <img src="media/images/nithinKamath.jpg" style={{borderRadius:"100%",width:"60%"}}/>
            <h4 className="mt-5">Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          
          <p> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during
            his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          
          <br/>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          <p/>
          <br/>
          <p>
            Playing basketball is his zen.
          </p >
          Connect on <a style={{textDecoration:"none"}} href="">Homepage</a>  /<a style={{textDecoration:"none"}} href="">TradingQnA</a> /<a style={{textDecoration:"none"}} href="">Twitter</a> </p>
        </div>
      </div>
     
    </div>
  );
}
