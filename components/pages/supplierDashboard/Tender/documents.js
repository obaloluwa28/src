import React , {useState} from 'react'
import './documents.css'
import './tender.css'
import {BiExport} from 'react-icons/bi'




const Documents = () => {


    return(
     <>
      <div className ="tenderDocuments">
         <h4 className = "title">Tender Documents</h4>
         <button className = "tenderDocumentsDownload">Download All</button>
      </div>
      <br/>
    <table>
        
        <thead>
            <tr className = "trrr headd">
                <th></th>
                <th>Name</th>
                <th>Publish Date</th>
            </tr>
        </thead>
        <tbody className = "tenderTable">
            <tr className = "trrr headd">
                <td className = "trrr headd"><input type="radio" value="option1" /></td>
                <td className = "trrr headd">Certificate of incoperation</td>
                <td className = "trrr headd">04/09/2020 - 14:30</td>
                <td className = "trrr headd"><BiExport size = {30} color ={"gray"}/></td>
                
            </tr>
            <tr className = "trrr headd">
                <td className = "trrr headd"><input type="radio" value="option1" /></td>
                <td className = "trrr headd">Form Co7  - Allotment of shares</td>
                <td className = "trrr headd">04/09/2020 - 14:30</td>
                <td className = "trrr headd"><BiExport size = {30} color ={"gray"}/></td>
                
            </tr>
            <tr className = "trrr headd">
                <td className = "trrr headd"><input type="radio" value="option1" /></td>
                <td className = "trrr headd">VAT</td>
                <td className = "trrr headd">04/09/2020 - 14:30</td>
                <td className = "trrr headd"><BiExport size = {30} color ={"gray"}/></td>
                
            </tr>
           
        </tbody>

    </table>
     
     </>

    )
}
export default Documents