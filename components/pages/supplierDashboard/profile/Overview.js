import React , {useState} from 'react'
import './Overview.css'
import {AiOutlineCheckCircle} from "react-icons/ai"
import {BiVideoPlus} from 'react-icons/bi'
import {AiOutlinePicture} from "react-icons/ai"
import {AiOutlineCheck , AiOutlineClockCircle} from 'react-icons/ai'
import logo from '../../../images/garaj.jpg'
import {BiNavigation} from 'react-icons/bi'
import {BiFileBlank} from 'react-icons/bi'

const Overview = () => {
 
return(
  <>
    <div className = "sideNav"  id = "companyOverview">
      
      <div className = "sideLinks">
        <a className = "linkStyle" href= "#companyOverview">Overview</a>
        <a className = "linkStyle" href = "#productsList">Production Capacity</a>
        <a className = "linkStyle">Quality control</a>
        <a className = "linkStyle">RandD Capacity</a>
        <a className = "linkStyle">Trade Capacity</a>
        <a className = "linkStyle">Customer Cases</a>
        <a className = "linkStyle">Inspection Reports</a>
      </div>
      
      <div className = "mainContents">
        <div className = "pages">
            <h3 className = "title">Company Overview</h3><br/>

            <div className = "albumTitle">
              <h6 className = "subTitle"> company Album</h6>
              <AiOutlineCheckCircle  style = {{color : "#0c6980" , zoom : 1.2,  marginLeft : '5px'}}/>
              <AiOutlinePicture style = {{color : "#0c6980" , zoom : 1.2,  marginLeft : '5px'}}/>
              <BiVideoPlus  style = {{color : "#0c6980" , zoom : 1.2,  marginLeft : '5px'}} />
            </div>
            <br/>

            <div className ="imageHolder">
              <h1 className = "slider"> Slider Here</h1>
            </div>
            <br/>

            <div className = "BasicInfo">
              <div className = "BasicInfoTitle">
                <h3 className = "title">Basic Information</h3>
                <h5 className = "BasicInfoTitleContents">Specialized in soft sofa for 27 years. With more than 3000 stores offline,
                  it is a leading enterprise in the domestic furniture industry. Both in price and quality, 
                  they have high competitiveness both at home and abroad.</h5>
              </div>

              <div className = "BasicInfoRating">
                <div className = "ratingBox">
                  <h4 className = "ratingNumber">4.8/5</h4>
                  <h4 className = "ratingReviews">
                  Satisfied <br/> 2 Reviews
                  </h4>
                </div>

                <div className = "supplierBox">

                  <h4 className = "supplierInfoText">Supplier Index  &nbsp;&nbsp;&nbsp;&nbsp; 12 </h4> 
                  <h4 className = "supplierInfoText">14 transactions &nbsp;&nbsp;&nbsp;&nbsp;5 </h4> 
                  <h4 className = "supplierInfoText">Response Time  &nbsp;&nbsp;&nbsp;&nbsp;  5h</h4>
                  <h4 className = "supplierInfoText">Response Rate &nbsp;&nbsp;&nbsp;&nbsp; 98.08% </h4>
                  
                </div>
              </div>
            </div>
        <div className = "responseTableOverView">
          <table className = "overviewTable">
            <tr className = "" >
              <td className = "overviewRows"><b>Business type</b></td>
              <td className = "overviewRows">Manufacturer, Trading Company</td>
              <td className = "overviewRows"><AiOutlineCheck color = {"#0c6980"}  size = {24}/></td>
              <td className = "overviewRows"><b>Country / Region</b></td>
              <td className = "overviewRows">Guangdong, China</td>
              <td className = "overviewRows"><AiOutlineCheck color = {"#0c6980"}  size = {24}/></td>
            </tr>
            <tr className = "">
              <td className = "overviewRows"> <b>Main Products</b></td>
              <td className = "overviewRows">Motion sofa, Living room sofa, Recliner sofa</td>
              <td className = "overviewRows"><AiOutlineCheck color = {"#0c6980"}  size = {24} /></td>
              <td className = "overviewRows"><b>Ownership</b></td>
              <td className = "overviewRows">	Sole Proprietorship</td>
              <td className = "overviewRows"><AiOutlineCheck  color = {"#0c6980"}  size = {24}/></td>
            </tr>
            <tr className = "">
              <td className = "overviewRows"><b>Total Employees</b></td>
              <td className = "overviewRows">Above 1000 People</td>
              <td className = "overviewRows"><AiOutlineCheck color = {"#0c6980"}  size = {24} /></td>
              <td className = "overviewRows"><b>Total Annual Revenue</b></td>
              <td className = "overviewRows">confidential</td>
              <td className = "overviewRows"><AiOutlineCheck  color = {"#0c6980"}  size = {24}/></td>
            </tr>
            <tr className = "">
              <td className = "overviewRows"><b>Year Established</b></td>
              <td className = "overviewRows">2005</td>
              <td className = "overviewRows"><AiOutlineCheck  color = {"#0c6980"}  size = {24}/></td>
              <td className = "overviewRows"><b>Certifications</b></td>
              <td className = "overviewRows">ISO9001, ISO14001, FSC</td>
              <td className = "overviewRows"><AiOutlineCheck color = {"#0c6980"}  size = {24} /></td>
            </tr>
            <tr className = "">
              <td className = "overviewRows"><b>Products Cerfications(3)</b></td>
              <td className = "overviewRows">CE, Test Report, Test Report</td>
              <td className = "overviewRows"><AiOutlineCheck color = {"#0c6980"}  size = {24} /></td>
              <td className = "overviewRows"><b>Patents</b></td>
              <td className = "overviewRows">-</td>
              <td className = "overviewRows"><AiOutlineCheck  color = {"#0c6980"}  size = {24}/></td>
            </tr>
            <tr className = "">
              <td className = "overviewRows"><b>Trademark</b></td>
              <td className = "overviewRows">-</td>
              <td className = "overviewRows"><AiOutlineCheck color = {"#0c6980"}  size = {24} /></td>
              <td className = "overviewRows"><b>Main markets</b></td>
              <td className = "overviewRows">Domestic Market 50.00%</td>
              <td className = "overviewRows"><AiOutlineCheck  color = {"#0c6980"}  size = {24}/></td>

            </tr>
          </table>
      </div>

       {/* <div className = "overMainProducts" id = "productsList">
       <div className = "mainProducts">
         <h3 className = "title">Main Products</h3>
         <div className ="productsSlider">
           <h3 className = "sliderTitle">Slider here</h3>
         </div>
       </div>
     </div> */}

  <div className  = "productCapacity">
     <h3 className = "title"> Product Capacity</h3>
     <div className = "subCategories">
       <h6 className = "flow">Production Flow</h6> &nbsp;&nbsp;
       <AiOutlineCheck  color = {"#0c6980"}  size = {18}/>

     </div>

       <div className = "productionFlow">
          <h3 className = "productCapacitySlider">Slider here</h3>
       </div>

    
         <h5 className = "title">Production Equipment</h5><br/>
         <table className = "productCapacityTable">
           <thead>
             <tr>
               <th className = "productCapacityRows"><b>Name</b></th>
               <th className = "productCapacityRows"><b>No</b></th>
               <th className = "productCapacityRows"><b>Quantity</b></th>
               <th className = "productCapacityRows"><b>Verified</b></th>
             </tr>

           </thead>
           <tbody>
             <tr>
               <td className = "productCapacityRows">Sponge filling machine</td>
               <td className = "productCapacityRows">Confidential</td>
               <td className = "productCapacityRows">12</td>
               <td className = "productCapacityRows"> <AiOutlineCheck  color = {"#0c6980"}  size = {18}/></td>
            </tr>
            <tr>
               <td className = "productCapacityRows">Sewing machine</td>
               <td className = "productCapacityRows">Confidential</td>
               <td className = "productCapacityRows">543</td>
               <td className = "productCapacityRows"> <AiOutlineCheck  color = {"#0c6980"}  size = {18}/></td>
            </tr>
            <tr>
               <td className = "productCapacityRows">Automatic cutting machine</td>
               <td className = "productCapacityRows">OURKOPP</td>
               <td className = "productCapacityRows">1</td>
               <td className = "productCapacityRows"> <AiOutlineCheck  color = {"#0c6980"}  size = {18}/></td>
            </tr>
            <tr>
               <td className = "productCapacityRows">CNC</td>
               <td className = "productCapacityRows">CHCHK-4</td>
               <td className = "productCapacityRows">6</td>
               <td className = "productCapacityRows"><AiOutlineCheck  color = {"#0c6980"}  size = {18}/></td>
            </tr>

           </tbody>
         </table>
        </div>

     <div className = "qualityControl">
       <div className = "mainQualityControl">
          <h3 className = "title">Quality Control</h3><br/>
          <h6 className = "title">Quality Management Process</h6>
       </div>
       <div className = "qualityControlSlider">
        <h3 className = "qualitySliderTitle">Slider here</h3>

       </div><br/><br/>
       <h6 className = "title">Test Equipment</h6>
       <table className = "productCapacityTable2">
       <thead>
             <tr>
               <th className = "productCapacityRows2"><b>Machine Name</b></th>
               <th className = "productCapacityRows2"><b>Brand & Model No</b></th>
               <th className = "productCapacityRows2"><b>Quantity</b></th>
               <th className = "productCapacityRows2"><b>Verified</b></th>
             </tr>

           </thead>
           <tbody>
             <tr>
               <td className = "productCapacityRows2">Sponge filling machine</td>
               <td className = "productCapacityRows2">Confidential</td>
               <td className = "productCapacityRows2">12</td>
               <td className = "productCapacityRows2"> <AiOutlineCheck  color = {"#0c6980"}  size = {18}/></td>
            </tr>
            <tr>
               <td className = "productCapacityRows2">Sewing machine</td>
               <td className = "productCapacityRows2">Confidential</td>
               <td className = "productCapacityRows2">543</td>
               <td className = "productCapacityRows2"> <AiOutlineCheck  color = {"#0c6980"}  size = {18}/></td>
            </tr>
            <tr>
               <td className = "productCapacityRows2">Automatic cutting machine</td>
               <td className = "productCapacityRows2">OURKOPP</td>
               <td className = "productCapacityRows2">1</td>
               <td className = "productCapacityRows2"> <AiOutlineCheck  color = {"#0c6980"}  size = {18}/></td>
            </tr>
            <tr>
               <td className = "productCapacityRows2">CNC</td>
               <td className = "productCapacityRows2">CHCHK-4</td>
               <td className = "productCapacityRows2">6</td>
               <td className = "productCapacityRows2"><AiOutlineCheck  color = {"#0c6980"}  size = {18}/></td>
            </tr>

           </tbody>


       </table>
       
     </div>

     <div className = "RandDContainer" >
      <h3 className = "title">R&D Capacity</h3><br/>
      <h6 className = "title">R&D process</h6>
      <div className ="RandDSlider">
     <h3 className = "qualitySliderTitle">Slider here</h3>
      </div><br/>
      <h6 className = "title">Product Certifications</h6>
      <table className = "productCapacityTable2">
       <thead>
             <tr>
               <th className = "productCapacityRows2"><b>Picture</b></th>
               <th className = "productCapacityRows2"><b>Certification Name</b></th>
               <th className = "productCapacityRows2"><b>Issued By</b></th>
               <th className = "productCapacityRows2"><b>Business Scope</b></th>
               <th className = "productCapacityRows2"><b>Available Date</b></th>
               <th className = "productCapacityRows2"><b>Verified</b></th>
             </tr>

           </thead>
           <tbody>
             <tr>
               <td className = "productCapacityRows2">picture</td>
               <td className = "productCapacityRows2">Test Report</td>
               <td className = "productCapacityRows2">SGS</td>
               <td className = "productCapacityRows2">Pitpaper Paperboard</td>
               <td className = "productCapacityRows2">2019-12-23 ~ 2049-12-31</td>
              <td className = "productCapacityRows2"> <AiOutlineCheck  color = {"#0c6980"}  size = {18}/></td>
            </tr>
            <tr>
               <td className = "productCapacityRows2">Picture</td>
               <td className = "productCapacityRows2">Test Report</td>
               <td className = "productCapacityRows2">Other</td>
               <td className = "productCapacityRows2">Soka</td>
               <td className = "productCapacityRows2">2020-04-27 ~ 2049-12-31</td>
               <td className = "productCapacityRows2"> <AiOutlineCheck  color = {"#0c6980"}  size = {18}/></td>
            </tr>
            <tr>
               <td className = "productCapacityRows2">picture</td>
               <td className = "productCapacityRows2">CE</td>
               <td className = "productCapacityRows2">-</td>
               <td className = "productCapacityRows2">Sofa</td>
               <td className = "productCapacityRows2">2020-04-27 ~ 2049-12-31</td>
               <td className = "productCapacityRows2"> <AiOutlineCheck  color = {"#0c6980"}  size = {18}/></td>
            </tr>
           

           </tbody>


       </table>





     </div>

     <div className = "tradeCapabilities">
       <h3 className = "title">Trade Capabilities</h3><br/>
       <h6 className = "title">Trade shows</h6>

       <div className = "tradecapabilitiesSlider">
       <h3 className = "qualitySliderTitle">Slider here</h3>
       </div><br/>
       <h6 className = "title">Main Markets & Product(s)</h6>
       <table className = "productCapacityTable2">
       <thead>
             <tr>
               <th className = "productCapacityRows2"><b>Main Market</b></th>
               <th className = "productCapacityRows2"><b>Total Revenue(%)</b></th>
               <th className = "productCapacityRows2"><b>Main Products</b></th>
               <th className = "productCapacityRows2"><b>Verified</b></th>
            
             </tr>

           </thead>
           <tbody>
             <tr>
               <td className = "productCapacityRows2">picture</td>
               <td className = "productCapacityRows2">Test Report</td>
               <td className = "productCapacityRows2">SGS</td>
              <td className = "productCapacityRows2"> <AiOutlineCheck  color = {"#0c6980"}  size = {18}/></td>
            </tr>
            <tr>
               <td className = "productCapacityRows2">Picture</td>
               <td className = "productCapacityRows2">Test Report</td>
               <td className = "productCapacityRows2">Other</td>
               <td className = "productCapacityRows2"> <AiOutlineCheck  color = {"#0c6980"}  size = {18}/></td>
            </tr>
            <tr>
               <td className = "productCapacityRows2">picture</td>
               <td className = "productCapacityRows2">CE</td>
               <td className = "productCapacityRows2">-</td>
               <td className = "productCapacityRows2"> <AiOutlineCheck  color = {"#0c6980"}  size = {18}/></td>
            </tr>
           

           </tbody>


       </table>



    </div>

    <div className = "customerCases">
       <h3 className = "title">Customer cases</h3>

       <div className = "customerContent">
         <img  src ={logo} width ={120} height = {90}/>
         <br/>
         <h6 className = "customersubContent">Major agents</h6>
         <h6 className = "customersubContent1">Year's Annual Revenue</h6>
         <h6 className = "customersubContent2">US$99999999</h6>
       </div>

       <div className = "buyerInteraction">
           <h6 className = "title">Buyer Interaction</h6>
           <div className ="buyerMain">
             <div className  = "buyerSubMain1">
               <br/>
               <h6 className = "title">Response Rate</h6>
               <div className = "buyerSubMain2">
               <BiNavigation  size = {25} color = {"gray"}/> 
               &nbsp;&nbsp;&nbsp; <h5 className = "buyerSubMain3">98.03%</h5>
               </div>
            </div>
          <div className = "vertLines"></div>
          <div className  = "buyerSubMainA">
               <br/>
               <h6 className = "title">Response Time</h6>
               <div className = "buyerSubMain2">
               <AiOutlineClockCircle  size = {25} color = {"gray"}/> 
               &nbsp;&nbsp;&nbsp; <h5 className = "buyerSubMain3">{`<6h`}</h5>
               </div>
         </div>
         <div className = "vertLines"></div>
         <div className  = "buyerSubMainA">
               <br/>
               <h6 className = "title">Quotation Performance</h6>
               <div className = "buyerSubMain2">
               
               &nbsp;&nbsp;&nbsp; <h5 className = "buyerSubMain3">{`44`}</h5>
            </div>
         </div>
      </div>
   </div>

       <div className = "transactionHistory">
         <h6 className = "title">Transaction History</h6>
         <div className ="buyerMain">
             <div className  = "buyerSubMain1">
               <br/>
               <h6 className = "title">Transactions</h6>
               <div className = "buyerSubMain2">
              
               &nbsp;&nbsp;&nbsp; <h5 className = "buyerSubMain3">14</h5>
               </div>
            </div>
          <div className = "vertLinesB"></div>
          <div className  = "buyerSubMainA">
               <br/>
               <h6 className = "title">Total Amounts</h6>
               <div className = "buyerSubMain2">
      
               &nbsp;&nbsp;&nbsp; <h5 className = "buyerSubMain3">4,000,000+</h5>
               </div>
         </div>
         </div>
     </div>


     <div className = "factoryInspection">
       <h4 className = "title">Factory inspection reports</h4>
       <div className = "factoryInspectionSub">
         <div className = "factoryInspectionSub1">
         <h6 className = "title">Supplier Assessment</h6>
         <BiFileBlank size = {120}  color = {"gray"}/>
         <h6 className = "title"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Reports(1)</h6>
         </div>
         <div className = "vertLinesC"></div>

         <div className = "factoryInspectionSub2">
         <h6 className = "title">Main Product Line verification Reports</h6>
         <BiFileBlank size = {120}  color = {"gray"}/>
         <h6 className = "title"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Reports(1)</h6>
         </div>

        </div>
       </div>

       <div className = "sendMessage">
         <h5 className = "title">Send Message to Supplier</h5><br/>
         <div className ="messageBox">
           <input className = "sendMessageForm" placeholder = "contacts"/>
           <br/><br/>
           <textarea className = "contentMessage" placeholder = "contents"/><br/><br/>
           <button className = "sendButton">Send</button>
           
         </div>

       </div>
      









    </div>


            

          </div>

      </div>
    </div>
  </>
 )
}
export default Overview;