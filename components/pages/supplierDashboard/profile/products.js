import React , {useState} from 'react'
import './products.css'
import './tender.css'
import {BiSearch} from 'react-icons/bi'
import logo from '../../../images/garaj.jpg'



const Products = () => {

 return(
   <>
    <div className = "productPage">

        <input type = "search" className = "productSearch" placeholder = "search for products" />
        <button className = "searchButton1"><BiSearch  color = {"white"} size = {20}/></button>
        <button className = "submitButton">Add products</button>

    </div>
    <table>
      <thead>
        <tr className = "trrr headd">
          <th>Image</th>
          <th>Product Name</th>
          <th>SKU</th>
          <th>Category</th>
          <th>Vendors</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className = "trrr headd"><center><img src = {logo} width ={80} height ={50} padding = {30} /></center></td>
          <td className = "trrr headd">Coeman wires and cables</td>
          <td className = "trrr headd">2456363</td>
          <td className = "trrr headd">xxxxxx</td>
          <td className = "trrr headd">28/80</td>
        </tr>
        <tr>
          <td className = "trrr headd"><center><img src = {logo} width ={80} height ={50} padding = {30} /></center></td>
          <td className = "trrr headd">Coeman wires and cables</td>
          <td className = "trrr headd">2456363</td>
          <td className = "trrr headd">xxxxxx</td>
          <td className = "trrr headd">28/80</td>
        </tr>
        <tr>
          <td className = "trrr headd"><center><img src = {logo} width ={80} height ={50} padding = {30} /></center></td>
          <td className = "trrr headd">Coeman wires and cables</td>
          <td className = "trrr headd">2456363</td>
          <td className = "trrr headd">xxxxxx</td>
          <td className = "trrr headd">28/80</td>
        </tr>
        <tr>
          <td className = "trrr headd"><center><img src = {logo} width ={80} height ={50} padding = {30} /></center></td>
          <td className = "trrr headd">Coeman wires and cables</td>
          <td className = "trrr headd">2456363</td>
          <td className = "trrr headd">xxxxxx</td>
          <td className = "trrr headd">28/80</td>
        </tr>
      </tbody>
    </table>


   </>


 )




}
export default Products;