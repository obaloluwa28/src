import React , {useState} from 'react'
import './tender.css'
import './summary.css'




const Summary = () => {


    return(
     <>
      <h4 className = "title">Summary</h4>  
         <div className = "tenderDescription">
        <label className = "tenderDescriptionLabel">Tender Description</label>
        <textarea className = "tenderDescriptionTextArea" placeholder = "tender description"></textarea>

          </div>
    <div className = "tenderIndustry">
    <label className = "tenderIndustryLabel">Tender Industry</label>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select className = "tenderDescriptionTextArea">
              <option>Choose your industry</option>
          </select>
     </div>
    <div className = "tenderProduct">
    <label className = "tenderProductLabel">Tender Products</label>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <input type = "text" className = "tenderProductInput"  placeholder = "tender products"/>
          
    </div>
    <div className = "tenderQuantity">
    <label className = "tenderQuantityLabel">Tender Quantity</label>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <input type = "text" className = "tenderQuantityInput"  placeholder = "tender quantity"/>

          
    </div>

     <div className = "tenderFinalButton">
     <button className = "tenderSubmitButton">Submit</button>
     </div>


     
     </>

    )
}
export default Summary