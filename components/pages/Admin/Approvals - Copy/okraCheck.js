import React,{useState, useEffect} from 'react'
import Loader from "react-loader-spinner";
import { AiOutlineSearch} from "react-icons/ai";
import axios from 'axios';
import './tender.css';
import { API } from '../../../Helpers/environment/backend';



const OkraCheck = ()=>{

    const [loading, setLoading] = useState(true);
    const [step, setStep] = useState(1);
    const [pending, setPending] = useState([])
    const [open, setOpen] = useState('none')
    const [elo, setElo] = useState('We are unable to verify the registration number')

    useEffect(()=>{

        getSupplier()
    },[])


    const getSupplier = async ()=>{
            
        try {
            const response = await axios.get(`${API}user/supplier/`)
            setPending(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
        
    }


    const verifyRC = (num,cname)=>{

        let data = {
            rc_number: num,
            company_name: cname
        }
        setOpen('block')
        let status;
        axios({
            url: `https://api.okra.ng/v2/products/kyc/rc-verify/`,
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMTNkMWY5NjJmNDQ1M2NmZTU2NGQiLCJpYXQiOjE2MTU5OTE3NjN9.dpvcaKJQj4PfxPXkMdUxCTvrQQ4o5tDZCUJ4nebCC4s'
            },
            data: JSON.stringify(data)
        })
        .then(res =>{
            status = res.data.status
        })
        .then(()=>{
            if(status === 'error'){
                console.log('error')
            }
            else{
                console.log('success')
            }
            setOpen('none')
        })
        .catch(err => console.log(err))
    }

    return(
        <div style={{marginLeft: 20}}>
          
            <h4 className='titleee'>Okra Check
            </h4><br/>
            <nav className='barrr'>
                <input  placeholder='search' />
                <span ><AiOutlineSearch size={20} /> </span>
            </nav>
            <br/><br/>

            <div className='dashbutton'>
                <p style={{color: 'gray', textAlign: 'center'}}>{elo}</p>
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
            <tr className='trrr headdd'>  
            <th>S/N</th>  
            <th>Company NAME</th> 
            <th>COMPANY EMAIL</th>   
            <th>Verify RC/NO</th>
            <th>Verify Account/NO</th>
           </tr>  
           </thead>  

          <tbody>  
          {pending && pending.map(item=>{

              let rc = item.okraRCStatus === '1' ? 'Verified' : <button id="uploadButton" style={{color: 'gray'}} onClick={()=> verifyRC(item.RegistrationNo, item.companyName)} >Check</button>
              let ac = item.okraAccountStatus === '1' ? 'Verified' : <button id="uploadButton" style={{color: 'gray'}}>Check</button>
              
              return(
                <tr className='trrr' key={item.RegistrationNo}>  
                <td >{item.RegistrationNo}</td>
                <td >{item.companyName}</td>  
                <td>{item.companyEmail} </td> 
                <td>{rc}</td> 
                <td >{ac}</td>  
                </tr>
              )
              
            })}
          </tbody>  
            </table>
                }
           
            </div>
            <div id="overlay" style={{display: open}}>
             <div className='overr'>
                <Loader
                  type="Oval"
                  color="white"
                 height={70}
                 width={70}
                />
                <p style={{color: 'white', fontSize: 19}}>Please wait while checking...</p>
             </div>
            
            </div>
        </div>
    )
}

export default OkraCheck;

