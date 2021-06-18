import React,{useState, useEffect} from 'react'
import Loader from "react-loader-spinner";
import { AiOutlineUpload} from "react-icons/ai";
import { AiOutlineSearch} from "react-icons/ai";
import axios from 'axios'
import { API } from '../../../Helpers/environment/backend';
import fileDownload from 'js-file-download'

import AddTender from './addTender'
import './tender.css'

const tender = [
    {
        tenderRef: 17363,
        tenderName: 'SterlingTech',
        bidder: 40,
        openTime: '10/10/2021 12:15',
     
        status: 'active'
    },
    {
        tenderRef: 177393,
        tenderName: 'Nestle',
        bidder: 30,
        openTime: '10/10/2021 12:15',
       
        status: 'active'
    },
    {
        tenderRef: 19262,
        tenderName: 'Miccom',
        bidder: 29,
        openTime: '10/10/2021 12:15',
      
        status: 'active'
    },
    {
        tenderRef: 24662,
        tenderName: 'SterlingTech',
        bidder: 50,
        openTime: '10/10/2021 12:15',
       
        status: 'active'
    }
]

const TenderList2 = ()=>{

    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [doclist, setDoclist] = useState([]);
    const [action, setAction] = useState('')

    const changeStep = ()=>{
        setStep(2)
    }

    const changePhase = ()=>{
        setStep(1)
    }
    
    useEffect(()=>{
       
        setDoclist([])
       getDocument(); 

    },[])
    const handleDownload = (url, filename) => {
       
        axios.get(url, {
          responseType: 'blob',
        })
        .then((res) => {
          fileDownload(res.data, filename)
        })
        .catch(err => console.log(err))
      } 
      const onAction = ( urll)=>{
        console.log(urll)
  
        //   setAction(e.target.value)
          
        //   if(e.target.value === 'view'){
        //       let url = urll
        //       window.open(url, '_blank');
        //   }
        //   else if(e.target.value === 'download'){
             var res = urll.split("/");
             console.log(res)
             console.log(urll)
             handleDownload(urll, res[4])
             console.log(urll)
  
        //   }
        //   else{
        //       console.log('hello world')
        //   }
          
      }
    const getDocument = ()=>{
        axios.get(`${API}tender/tenderdocuments/`)
      
        .then(res =>  setDoclist(res.data)
        )
     
        .catch(err => {
            console.log(err)
        })
     
       }
//        const getTenders = async ()=>{

//         let id = localStorage.getItem('id')    
//        try {
//            const response = await axios.get(`${API}tender/tenderdocuments/`)
//             console.log(response.data)
       
//        //    console.log(response)
//        setPending(response.data)
//            setLoading(false)
//        } catch (error) {
//            console.log(error)
          
//        }
       
//    }
    return(
        <div style={{marginLeft: 20}}>
                   <div style={{ display: 'flex', justifyContent: 'flex-end' }}>


<tr style={{ textAlign: 'center',marginRight: '50px', border: 'solid 3px' }}>
    <td style={{}}><button style={{width:'150px'}}> Add Documnet</button></td>
  
</tr>



</div>
<h4 className='titleee'>
            </h4>

          {step === 1 ? <>
            
            <br/>
            <nav className='barrr'>
                <input  placeholder='search' />
                <span ><AiOutlineSearch size={20} /> </span>
            </nav>
            {/* <span style={{float: 'right', marginRight: 70, marginTop: -30}}>
            <Tooltip placement="bottom" title="Add Tender" >
            <button className='attachdoc' onClick={changeStep}>
                 <BiPlusMedical size={27} style={{color: '#0c6980'}} />                  
            </button>
            </Tooltip>
            </span> */}
            <br/><br/>

            <div className='dashbutton'>

            {loading ? <div style={{textAlign: 'center', marginTop: '5%'}}>
             <Loader
                type="Circles"
                 color="gray"
                  height={130}
                   width={130}
                //  timeout={3000} 
                /> </div>: 
                 <table>
            <thead>  
            <tr className='trr headd'>  
            <th></th>  
            <th> Name</th>  
            <th>Publish Date</th>  
           

    <th ><button style={{width:'150px', border: 'solid 3px' }}>Download</button></th>
  

           </tr>  
           </thead>  

          <tbody>  
          {doclist && doclist.map(item=>{
            //   let status = item.pendingStatus == "0" ? "Open" : item.pendingStatus == '1' ? "Completed" : "In Progress"
              return(
                <tr style = {{ paddingBottom: '20px', paddingTop: '20px',}}className='tr' key={item.id}>  
                  <td  className='zero'>o</td>
               
                <td >{item.documentName}</td>  
               
                <td>
                {item.publishDate}<br/>
            
                 </td>  
               
                <td>
                <button value='download' onClick={(e) => onAction( item.document)}><AiOutlineUpload size={26} color='secondary'/></button>
                </td> 
                </tr>
              )
              
            })}
          </tbody>  
            </table>
                }
           
            </div>
         </> : <button changePhase={changePhase} />}
         <br/><br/>
           <button className='kont' style={{width:'200px'}}loading={loading}>Continue to dashboard</button> 
        </div>
    )
}

export default TenderList2;

