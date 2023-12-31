
import { Route, Routes } from 'react-router-dom';

import './Login.css'
import Home from './components/Home';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MyContext } from './Context';
import Wishlist from './Wishlist';
import Dogfoods from './components/Dogfoods';
import { useState } from 'react';
import { ProductDatas } from './ProductDatas';
import Catfoods from './components/Catfoods';
import Allproducts from './Allproducts';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Viewproduct from './Pages/Viewproduct';
import Payment from './Pages/Payment';
import Fishfoods from './Fishfoods';
import Birdfoods from './components/Birdfoods';
import Cart from './Pages/Cart';
import Search from './Pages/Search';
import Adminhome from './Admin/Adminhome';
import AdminAllproducts from './Admin/AdminAllproducts';
import { Admindog } from './Admin/Admindog';
import AdminCat from './Admin/AdminCat';
import AdminuserList from './Admin/AdminuserList';
import AdminAddpro from './Admin/AdminAddpro';
import AdminEdit from './Admin/AdminEdit';
import axios from "axios"
import toast,{Toaster} from 'react-hot-toast';
import Successpay from './Pages/Successpay';

export const Axios=axios.create({
baseURL: process.env.REACT_APP_BASE_URL,
headers: {
  "Content-Type":"application/json",
  "Authorization":localStorage.getItem("jwt")
}
})




function App() {

  const[products,setProducts]=useState(ProductDatas)
  
  const [user,setUser]=useState([])
  const [Loggedin,setLoggedin]=useState(false)
  const [username,setUsername]=useState([])

  return (
      
    <>
    

  <MyContext.Provider value={{products,setProducts,user,setUser,Loggedin,setLoggedin,username,setUsername}}>

<Toaster position="top-center" reverseOrder={false}/>
  
  
  
 <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/Dogsfood' element={<Dogfoods/>}/>
<Route path='/catsfood' element={<Catfoods/>}/>
<Route path='/allproduct' element={<Allproducts/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/viewproduct/:id' element={<Viewproduct/>}/>
<Route path='/payment' element={<Payment/>}/>
<Route path='/fishfoods' element={<Fishfoods/>}/>
<Route path='/birdfoods' element={<Birdfoods/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/search' element={<Search/>}/>
<Route path='/wishlist' element={<Wishlist/>}/>
<Route path="/payment/success" element={<Successpay/>}/>


<Route path='/adminhome'element={<Adminhome/>}/>
<Route path='/adminallproducts'element={<AdminAllproducts/>}/>
<Route path='/admindog'element={<Admindog/>}/>
<Route path='/admincat'element={<AdminCat/>}/>
<Route path='/adminuserlist'element={<AdminuserList/>}/>
<Route path='/adminaddpro'element={<AdminAddpro/>}/>
<Route path='/adminedit/:id'element={<AdminEdit/>}/>




   </Routes>
</MyContext.Provider>
   </>
    
  );
}

export default App;
