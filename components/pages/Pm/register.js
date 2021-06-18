import React, { useState } from 'react'
import '../../../styles/pages/supplierStack.css'
import NavbarrPm from '../../layouts/navbarrPm'
import { signup } from '../../Helpers/auth/index'
import { Link } from 'react-router-dom'
import Button from 'reactstrap-button-loader';
import register from '../../images/1-Registration.png'



const RegisterPm = () => {
    const [values, setValues] = useState({
        companyName: "",
        email: "",
        password: "",
        error: "",
        success: false,
        is_procurementManager: true,
        RegistrationNo: "",
        phone: "",



    });




    const { companyName, email, password, error, success, RegistrationNo, phone, is_procurementManager = true } = values;

    const [nameError, setNameError] = useState({})
    const [passwordError, setPasswordError] = useState({})
    const [emailError, setEmailError] = useState({})
    const [loading, setLoading] = useState(false)



    const handleChange = name => event => {
        setValues({ ...values, error: false, is_procurementManager: true, [name]: event.target.value })
    };



    const onSubmit = (event) => {
        event.preventDefault();


        setValues({ ...values, is_procurementManager: true, error: false })

        signup({ companyName, email, password, RegistrationNo, phone, is_procurementManager })
            .then((data) => {
                console.log("DATA", data)
                localStorage.setItem('email', data.email)
                if (data.email === email) {
                    setValues({
                        ...values,
                        companyName: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true
                    })
                } else {
                    setValues({
                        ...values,
                        error: true,
                        success: false
                    })
                }
            })
            .catch(e => console.log(e))

    }

    const successMessage = () => {
        return (
            <div className="alert alert-success"
                style={{ display: success ? "" : "none" }} id="sucess-msg">
                <center>Account created. Clink the link below</center>
                <center id="verifylink"><button id="verifybutton"><Link to="/pm/emailverify"> Verify Now</Link></button></center>
            </div>
        )
    }


    const errorMessage = () => {
        return (
            <div className="alert alert-danger"
                style={{ display: error ? "" : "none" }}>
                Check all fields again
            </div>
        )
    }





    return (
        <>
            <NavbarrPm />
            <div id="container">

                <aside id="sideBar">


                <center ><img src = {register} width = {400} height = {600} style = {{marginTop : "80px"}}/></center>

                </aside>
                {/* <div id = "bigline"></div> */}
                <section id="RegisterBar">
                    {successMessage()}
                    {errorMessage()}
                    <h4 id="headText">Company Registration</h4>
                    <br />
                    <label id="formLabel">Company Name</label><br />
                    <input id="formStyle" onChange={handleChange("companyName")} type="text" placeholder="Company Name" /><br /><br />
                    <label id="formLabel">Company Registration No</label><br />
                    <input id="formStyle" type="number" onChange={handleChange("RegistrationNo")} placeholder="Company Registration No" /><br /><br />
                    <label id="formLabel">Company Teelephone</label><br />
                    <input id="formStylee" type="tel" onChange={handleChange("phone")} placeholder="Company Teelephone" /><br /><br />
                    <label id="formLabel">Company Email</label><br />
                    <input id="formStylee" type="email" onChange={handleChange("email")} placeholder="Company Email" /><br /><br />
                    <label id="formLabel">Re-type Company Email</label><br />
                    <input id="formStylee" type="email" onChange={handleChange("retypeEmail")} placeholder="Retype Company Email" /><br /><br />
                    <label id="formLabel">Company Password</label><br />
                    <input id="formStylee" type="password" onChange={handleChange("password")} placeholder="Company Password" /><br /><br />
                    <label id="formLabel"> Confirm Company Password</label><br />
                    <input id="formStylee" type="password" onChange={handleChange("retypePassword")} placeholder="Retype Company Password" /><br /><br />

                    <Button id="buttonStyleRegister" onClick={onSubmit}>Submit</Button>


                </section>

            </div>
            <div id="container">
                <footer id="mainFooter">
                    <h4 id="footerTag">&copy;Sterlingtech 2021</h4>
                </footer>
            </div>
        </>


    )



}

export default RegisterPm