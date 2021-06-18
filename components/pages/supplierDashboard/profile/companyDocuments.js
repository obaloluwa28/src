import './tender.css'
import './companyDocuments.css'
import {BiExport} from 'react-icons/bi'




const CompanyDocuments = () => {

 return(
   <>
<div className = "introduction">
<h3 className  = "title"> Company Documents</h3>
<button className = "downloadButton">download</button>

</div>
<table className = "companyTable">
  <tbody>
    <tr className ="trr headd">
      <td><input type="radio" value="option1" /></td>
      <td>Certificate of incoperation</td>
      <td><BiExport size = {30} color ={"gray"}/></td>
      
    </tr>
    <tr className ="trr headd">
      <td><input type="radio" value="option2" /></td>
      <td>Form co7 - Allotment of shares</td>
      <td><BiExport size = {30} color ={"gray"}/></td>
      
    </tr>
    <tr className ="trr headd">
      <td><input type="radio" value="option3" /></td>
      <td>Vat Certificate</td>
      <td><BiExport size = {30} color ={"gray"}/></td>
      
    </tr>
  </tbody>
</table>

   
   </>


 )




}
export default CompanyDocuments