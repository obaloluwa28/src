import React,{useState, useEffect} from 'react'
import Loader from "react-loader-spinner";
import { AiOutlineSearch} from "react-icons/ai";
import {BiPlusMedical} from 'react-icons/bi'
import Tooltip from '@material-ui/core/Tooltip';
import AddTender from './addTender'
import axios from 'axios'
import { API } from '../../../Helpers/environment/backend';
import {  Route, Link,Switch,BrowserRouter } from "react-router-dom";

import './tender.css'
import AddTender2 from './addTender2';

// const tender = [
//     {
//         tenderRef: 17363,
//         tenderName: 'SterlingTech',
//         bidder: 40,
//         openTime: '10/10/2021 12:15',
//         closeTime: '10/10/2021 2:15',
//         status: 'active'
//     },
//     {
//         tenderRef: 177393,
//         tenderName: 'Nestle',
//         bidder: 30,
//         openTime: '10/10/2021 12:15',
//         closeTime: '10/10/2021 2:15',
//         status: 'active'
//     },
//     {
//         tenderRef: 19262,
//         tenderName: 'Miccom',
//         bidder: 29,
//         openTime: '10/10/2021 12:15',
//         closeTime: '10/10/2021 2:15',
//         status: 'active'
//     },
//     {
//         tenderRef: 24662,
//         tenderName: 'SterlingTech',
//         bidder: 50,
//         openTime: '10/10/2021 12:15',
//         closeTime: '10/10/2021 2:15',
//         status: 'active'
//     }
// ]

const TenderList = ()=>{

    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [stepy, setStepy] = useState(1);
    const [tendername, setTendername]= useState('')
    const [tenderref, setTenderref]=useState('')
    const [tenderId, setTenderId]=useState('')
    const [tenderdescp, setTenderdescp]= useState('')
    const [tenderodate, setTenderodate]=useState('')
    const [tendercdate, setTendercdate]=useState('')
    const [stat, setStat]=useState('')
    const [pending, setPending] = useState([]);

    const changeStep = ()=>{
        setStep(2)
    }
    const changeSteps = ()=>{
        setStepy(2)
    }
    // const chan = ()=>{
    //     <AddTender2/>
    // }
  
    const changePhase = ()=>{
        setStep(1)
    }
    const changePhases = ()=>{
        setStep(3)
    }
 

   
    useEffect(()=>{
        
        setPending([])
        getTenders()    

    },[])
    const getTenders = async ()=>{

         let id = localStorage.getItem('id')    
        try {
            const response = await axios.get(`${API}tender/tender/?tenderOwner=${id}/`)
             console.log(response.data)
        
        //    console.log(response)
        setPending(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
           
        }
        
    }
    const click = (tenderId,tenderref,tendername,closeDate,openDate,stat,tenderDescription)=>{
        var res = openDate.substring(0,10)
        var re = closeDate.substring(0,10)
        var od = res;
        var oc = re;
        
        setTenderId(tenderId)
        setStat(stat)
        console.log(stat)
        setTenderref(tenderref)
        setTenderdescp(tenderDescription)
        console.log(tenderId)
        console.log(tenderref)
        // setTenderdescp(tenderdescp)
        setTenderodate(res)
        console.log(res)
        setTendercdate(re)
        console.log(re)

        setTendername(tendername)
        console.log(tendername)
        setStep(2)
        // setPhase(2)
    }

    return(
        <div style={{marginLeft: 20}}>
          {step === 1 ? <> 
            <h4 className='titleee'>Tenders
            </h4><br/>
            <nav className='barrr'>
                <input  placeholder='search' />
                <span ><AiOutlineSearch size={20} /> </span>
            </nav>
            <span style={{float: 'right', marginRight: 70, marginTop: -30}}>
            <Tooltip placement="bottom" title="Add Tender" >
            <button className='attachdoc'>
                 <BiPlusMedical size={27} style={{color: '#0c6980'}} />                  
            </button>
            </Tooltip>
            </span>
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
            <th>Tender Ref</th>  
            <th>Tender Name</th>  
            <th>Invited Bidders</th>  
            <th>Date & Time</th>  
            <th>Status</th>
            <th>Action</th>
           </tr>  
           </thead>  

          <tbody>  
          {pending && pending.map(item=>{
           
              let status = item.status == 0 ? "Open" : item.status == 1 ? "Active" :  item.status == 2 ? "Complete" : item.status == 3 ? "Cancelled"
              :  "Active"
             
              return(
                <tr className='tr' key={item.tenderRef}>  
                <td >{item.tenderRef}</td>
                <td >{item.tenderTitle}</td>  
                <td>({2}) </td>  
                <td>
                Open: {item.openDate}<br/>
                Close: {item.closeDate}
                 </td>  
                <td>{status} </td> 
                <td>
                <button onClick={()=> click(item.id, item.tenderRef,item.tenderTitle,item.closeDate,item.openDate,item.status,item.tenderDescription)} className='sendButton' >View</button> 
                </td> 
                </tr>
              )
              
            })}
          </tbody>  
            </table>
                }
           
            </div>
         </>  : <AddTender2  id={tenderId} tenderTitle={tendername} tenderRef= {tenderref} closeDate={tendercdate}  openDate={tenderodate} status={stat} tenderDescription={tenderdescp} changePhase={changePhase }  />     }
         {/* <div className='dashbutton'>
        {  stepy === 1 ? <>
            </> : <AddTender2
             
            />
         }
         </div> */}
        </div>
    )
}

export default TenderList;

