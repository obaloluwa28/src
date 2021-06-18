import React , {useState} from 'react'
import './submission.css'
import './tender.css'
import {BiExport} from 'react-icons/bi'




const Submission = () => {


    return(
     <>
     <div className ="submission">
         <h4 className = "title">Submissions</h4>
         <br />
         <div className = "submissionLeft">
             <label className = "sumissionDocumentName">Document Name</label><br/>
             <input className = "sumissionDocumentInput"  placeholder ="Document name"></input>
             <br/>
             <br/>
             <label className = "sumissionDocumentName">Document Type</label><br/>
             <select className = "sumissionDocumentInput">
                 <option>PDF</option>
                 <option>JPEG</option>
                 <option>DOC</option>
             </select>
             <br/><br/>
             <label className = "sumissionDocumentName">Document Description</label><br/>
             <textarea className = "sumissionDocumentInput"  placeholder ="Document description">File Name</textarea>
             <br/><br/>
             <label className = "sumissionDocumentName">File Name</label><br/>
             <div className = "fileCage">
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BiExport size = {25} color ={"gray"} style = {{marginLeft : "70%"}} />
             </div>
             <br/>
             <button className = "submitDocument">Add</button>



         </div>

         <div className = "vertLines"></div>
         
         <div className = "submissionRight">

         </div>
         
     </div>


     
     </>

    )
}
export default Submission