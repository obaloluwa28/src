import React , {useState} from 'react'
import './tender.css'
import './questionaire.css'




const Questionaire = () => {


    return(
     <>
       <div className = "tenderQuestionaire">
         <h4 className = "title" >Questionaire</h4><br/>
         <div className = "tenderDelivery">
             <label className = "tenderDelieveryLabel">Time frame for delievery(days)</label>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <input className = "tenderInput1" type = "text" placeholder = "time frame for delievery"/>

         </div>
         <br/>
         <div className = "tenderProductVariety">
             <label className = "tenderProductVarietyLabel">Product Variety</label>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <input className = "tenderInput2" type = "text" placeholder = "product variety"/>

         </div>
         <br/>
         <div className = "tenderTotalQuantity">
             <label className = "tenderTotalQuantityLabel">Total Quantity</label>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <input className = "tenderInput3" type = "text" placeholder = "total quantity"/>

         </div>
         <br/>
         <div className = "tenderMinimum">
             <label className = "tenderTotalMinimumLabel">Minimum Quantity</label>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <input className = "tenderInput4" type = "text" placeholder = "Minimum quantity"/>

         </div>
         <br/>
         <div className = "tenderLocation">
             <label className = "tenderLocationLabel">Location</label>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <input className = "tenderInput5" type = "text" placeholder = "Location"/>

         </div>
         <br/>
         <div className = "tenderYearOfIncoperation">
             <label className = "tenderYearOfIncoperationLabel">Year of incoperation</label>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <input className = "tenderInput6" type = "text" placeholder = "year of incoperation"/>

         </div>
         <br/>
         <div className = "tenderAnnualRevenue">
             <label className = "tenderAnnualRevenue">Annual Revenue</label>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <input className = "tenderInput7" type = "text" placeholder = "Annual Revenue"/>

         </div>
         <br/>
         <div className = "tenderPayTaxes">
             <label className = "tenderPayTaxesLabel">Pay taxes?</label>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <select className = "tenderInput8" >
                 
                 <option>Yes</option>
                 <option>No</option>
             </select>

         </div>
         <br/>
         <div className = "tenderQuestionaireButtonArea">
             <button className = "tenderQuestionaireButton">Submit</button>

         </div>
   


       </div>
     
     </>

    )
}
export default Questionaire