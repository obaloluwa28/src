import React, { useState, useEffect } from 'react'
import Document2 from './document2'
import Details from './details'
import Bidder from './Bidder'
import Details1 from './details1'
import axios from 'axios'
import { API } from '../../../Helpers/environment/backend';
import TenderList2 from './tenderList2'
import Bidder2 from './Bidder2'



const AddTender2 = ({ changePhases,id,tenderTitle,tenderRef ,openDate,closeDate,status,tenderDescription}) => {

    const [step, setStep] = useState(1)
    const [description, setDescription] = useState('');
    const [pending, setPending] = useState([]);
    const [loading, setLoading] = useState(false);
    const tendeing = [
        {
            tenderRef: 17363,
            tenderName: 'SterlingBank',
            bidder: 40,
            openTime: '10/10/2021 12:15',
            closeTime: '10/10/2021 2:15',
            status: 'active'
        }
    ]

   
    useEffect(() => {
        setStep(1)
        // getTenders()
        document.getElementById("tabbb").focus();
    }, [])

    const onDetails = (tenderDescription) => {
        setStep(1)
        setDescription(tenderDescription)
    }
//     const getTenders = async ()=>{

//         let id = localStorage.getItem('id')    
//        try {
//            const response = await axios.get(`${API}tender/tender/${id}/`)
//             console.log(response.data)
       
//        //    console.log(response)
//        setPending(response.data)
//            setLoading(false)
//        } catch (error) {
//            console.log(error)
          
//        }
       
//    }

    const onDocument = () => {
        setStep(2)
    }

    const onBidder = () => {
        setStep(3)
    }

    return (
        <>
            <h3 className='addtender'>{tenderTitle}
                <span style={{ float: 'right', marginRight: 50 }}>
                    <button className='backed' onClick={changePhases}> Back</button>
                </span>
            </h3>
            
            
            <h5 className='addtender'> 

                <button style={{ height: '30px', width: '250px', marginTop:'25px', border: '2px solid'}}>Tender Ref: {tenderRef}</button>

            </h5>
            
            
            
            

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

            
                <tr style={{ textAlign: 'center', paddingBottom: '20px', paddingTop: '20px', marginRight: '50px', border: 'solid 3px' }}>
                    <td style={{ paddingRight: '20px', paddingLeft: '10px', borderRight: ' solid 3px' }}>Status : Complete</td>
                    <td style={{ paddingRight: '30px', paddingLeft: '10px', borderRight: ' solid 3px' }}>BIDS : 30/35</td>
                    <td style={{ paddingRight: '30px', paddingLeft: '10px', borderRight: ' solid 3px' }}>OPEN : {openDate}</td>
                    <td style={{ paddingRight: '30px', paddingLeft: '10px', }}>CLOSE : {closeDate}</td>
                </tr>


            </div>

            <div className='rulerrs' >
                <button className='tabb' id='tabbb' onClick={onDetails}>Summary</button>
                <button className='tabb' onClick={onDocument}>Documents</button>
                <button className='tabb' onClick={onBidder}>Bidders</button>
            </div>
            <div style={{ marginLeft: 60 }}>
                {step === 1 ? <Details1 tenderDescription={tenderDescription} /> : step === 2 ? <TenderList2 /> : <Bidder2 />}
            </div>
        </>
    )
}

export default AddTender2;