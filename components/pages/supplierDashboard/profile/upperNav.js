/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react'
import Overview from './Overview.js'
import Products from './products.js'
import Contacts from './contacts.js'
import CompanyDocuments from './companyDocuments'

import './tender.css'

const Home =  ({ changePhase }) => {

    const [step, setStep] = useState(1)

    useEffect(() => {
        setStep(1)
        document.getElementById("tabbb").focus();
    }, [])

    const onProfile = () => {
        
        setStep(1)
    }

    const onCompanyDocuments = () => {
        setStep(2)
    }

    const onProducts = () => {
        setStep(3)
    }

    // const onContacts = () => {
    //     setStep(4)
    // }

    return (
        <>
            <h3 className='addtender'>Company Overview</h3>

            {/* <button style={{ height: '45px', width: '200px', marginTop: '20px', border: '2px solid', justifyContent: 'flex-center' }} ></button> */}
            {/* <div style={{ display: 'flex' }}>
                <div style={{ float: 'left', marginLeft: '30px', marginTop: '20px' }}>
                    <button className="contactSupplier" >contact supplier</button>&nbsp;&nbsp;&nbsp;<button className="contactSupplier">love</button>
                </div>
                <div style={{ border: '2px solid black', marginTop: '11px', padding: '12px', marginLeft: '36%' }}>
                    <div style={{ display: 'flex', marginTop: '2px' }}>
                        status : &nbsp; <button>Active</button> &nbsp; | supplier Index : &nbsp; <span style={{ marginTop: '2px' }}> **** </span>&nbsp;&nbsp; | Oncheck Site : &nbsp; <button>check</button> &nbsp;&nbsp; | Last Active :  &nbsp; 4 days ago
                </div>
                </div>

            </div> */}

            <div className='rulerrs' >
                <button className='tabb' id='tabbb' onClick={onProfile}>Profile</button>
                <button className='tabb' onClick={onCompanyDocuments}>Documents</button>
                <button className='tabb' onClick={onProducts}>Products</button>
                {/* <button className='tabb' onClick={onContacts}>Contacts</button> */}
               
            </div>
            <div style={{ marginLeft: 60 }}>
                {step === 1 ? <Overview/> : step === 2 ? <CompanyDocuments/> : <Products/> }
            </div>
        </>
    )

}
export default Home;