import React , {useState , useEffect} from 'react'
import './addTender.css'
import './tender.css'
import Submission from "./submission.js"
import Summary from "./summary.js"
import Documents from './documents'
import Questionaire from './questionaire'
import Queries from './Queries'



const AddTender = ({changePhase}) => {

    const [step, setStep] = useState(1)

    useEffect(() => {

        setStep(1)
        document.getElementById("tabbb").focus();

    } , [])
    
    const onSummary = () => {
        
        setStep(1)
    }

    const onDocuments = () => {
        setStep(2)
    }

    const onQuestionaire = () => {
        setStep(3)
    }
 

    const onSubmissions = () => {
        setStep(4)
    }
    const onQueries = () => {

        setStep(5)
    }

return(


    <>

    <div>
        <button className = "backButtonn" onClick = {changePhase}>Back</button>
    </div>  
 


    <br/>
    <br/>
    <br/>
    <br/>
    <table>
       <thead> 

           <tr className = "trr headd">
               <th>Tender Ref</th>
               <th>Tender Name</th>
               <th>Date & Time</th>
               <th>Status</th>
               <th>Accept Status</th>
               <th>Submit</th>
           </tr>

       </thead>
       <tbody className = 'tr'>
           <tr>
               <td>2987373</td>
               <td>xxxxxxxxx</td>
               <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open : 05-10-2020 2020<br/>Close: 25-20-2020</td>
               <td><button className = "tenderButton">Active</button></td>
               <td>
                   <select>
                   <option>Accept</option>
                   <option>Reject</option>
                   <option>Pending</option>
                   </select>
                </td>
               <td><button className = "tenderButton">click</button></td>
           </tr>

       </tbody>

    </table>
   
    <div className='rulerrs' >
                <button className='tabb' id='tabbb' onClick={onSummary}>Summary</button>
                <button className='tabb' onClick={onDocuments}>Documents</button>
                <button className='tabb' onClick={onQuestionaire}>Questionaire</button>
                <button className='tabb' onClick={onSubmissions}>Submissions</button>
                <button className='tabb' onClick={onQueries}>Queries</button>
            
     </div>
     <div style={{ marginLeft: 60 }}>
                {step === 1 ? <Summary/> : step === 2 ? <Documents/> : step === 3 ? <Questionaire /> : step === 4 ? <Submission/> : <Queries/>  }
     </div>





    </>
)


}


export default AddTender