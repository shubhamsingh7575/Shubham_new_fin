import React from 'react'

export default function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top" >
        <div className="col-8 p-4">
          <a href='' style={{textDecoration:"none"}}>
            <h3 className='fs-5'>Brolerage calculator</h3>
            
          </a>
          <ul style={{textAlign:"left",lineHeight:"1.5" , fontSize:"13px"}} className='text-muted'>
              <li>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>
              <li>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</li>
              <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
              <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
              <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
              <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
              <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
              <li>Options - ₹50 per crore + GST traded value (premium value).</li>
              <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
              <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
              <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
              <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
            </ul>
        </div>
        <div className="col-4 p-4">
          <a href='' style={{textDecoration:"none"}}>
            <h3 className='fs-5'>Charges for account opening</h3>
           
          </a>
           <ul style={{textAlign:"left",lineHeight:"1.5" , fontSize:"13px"}} className='text-muted'>
                <li>Online account - free</li>
                <li>Offline account -	free</li>
                <li>NRI account (offline only) -	₹ 500</li>
                <li>Partnership, LLP, HUF, or Corporate accounts (offline only) -	₹ 500</li>
            </ul>
        </div>
      </div>
     
    </div>
  )
}
