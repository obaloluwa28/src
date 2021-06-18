import React,{useState, useEffect} from 'react'
import {AiOutlineUpload, AiOutlineClose} from 'react-icons/ai'
import Tooltip from '@material-ui/core/Tooltip';
import {useHistory} from 'react-router-dom'
import { Multiselect } from 'multiselect-react-dropdown';
import AddTender2 from './addTender2';
import AddTender from './addTender';
import  Details1 from './details1';
import { BiPlusMedical } from 'react-icons/bi';




const file=[
    {
        name: 'lola',
        file: 'lola.jpeg'
    },
    {
        name: 'lola',
        file: 'lola.jpeg'
    },
    {
        name: 'lola',
        file: 'lola.jpeg'
    },
]
// const [step, setStep] = useState(1)
// const [name, setName] = useState('Dashboard')
// const toChats = ()=>{
//     setName('Chat')
//     setStep(3)
// }
const Bidder = ()=>{


    const [selected, setSelected] = useState([]);
    const [step, setStep] = useState(1)
    const history = useHistory()

   

    const changePhases = ()=>{
        setStep(1)
    }

    const backk = () => {
        history.push("/tender/addtender2")
      }

// const [state, setState] = useState('start')

const changeStep = ()=>{
    setStep(2)
}



// const changePhases = ()=>{
//     setStep(1)
// }
    const options = [
        { name: "Grapes 🍇", id: "grapes" },
        { name: "Mango 🥭", id: "mango" },
        { name: "Strawberry 🍓", id: "strawberry" },
      ];
    //   triggerAddTripState = () => {
    //     setState('add-trip')
    //   }
    return(
        
        <div className='rock'>
        {step === 1 ? <>    
        <div className='bossdown'>
        <h4 style={{color: 'rgb(65, 63, 63)'}}>Invite Bidders</h4>
        <p className='parag'>Market</p>
        <select className='reff'>
            <option>--Select Market--</option>
        </select>

        <p className='parag'>Registered</p>
        <select className='reff'>
            <option>--Select Market--</option>
        </select>

        <p className='parag'>Companies</p>
        <div className='arc1'>
        <Multiselect className='reff'
          options={options} // Options to display in the dropdown
          selectedValues={setSelected} // Preselected value to persist in dropdown
      //    onSelect={onSelect} // Function will trigger on select event
       //   onRemove={onRemove} // Function will trigger on remove event
          avoidHighlightFirstOption={true}
          displayValue="name" // Property name to display in the dropdown options
         /> 
         </div>
   

        <br/><br/><br/>
        <button className='kont'>Add</button>
     </div>

     <div className='bossup'>
        <h4>Selected Bidders:</h4>
        <div className='arc'>
            <table className='dtable'>
                <thead className='dname'>
                    <td>Supplier Name</td>
                    <td>Supplier ID</td>
                    <td>Delete</td>
                </thead>

                <tbody>
                    {file && file.map(item =>(
                        <tr>
                            <td className='tnamee'>{item.name} </td>
                            <td className='tnamee'>{item.file} </td>
                            <td className='tnamee'>
                            <Tooltip placement="bottom" title="delete file" >
                              <button className='secc'>
                             <AiOutlineClose size={26} color='secondary'/>
                              </button>
                            </Tooltip> 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          
        </div><br/><br/>
        <div></div>
        <Tooltip placement="bottom" title="Add Tender" >
            <button className='attachdoc' onClick={changeStep}>
                 <BiPlusMedical size={27} style={{color: '#0c6980'}} />                  
            </button>
            </Tooltip>
      
     </div>
     <div>
               
            </div>
            </> : <Details1 changePhases={changePhases} />}     
     </div>
    )
}

export default Bidder;