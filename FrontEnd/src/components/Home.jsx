import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Nav from './Nav'
import Pictures from './Pictures'
import Cards from './Cards'
import Ads from './Ads'
import Footer from './Footer'
import BFcards from './BFcards';
import Group from './Group';





const Home = () => {
  return (
    <div>
  
 <Nav/>
 <Pictures/>
 <Cards/>
 <Ads/>
 <Group/>
 <BFcards/>

 <Footer/>
 
    </div>
  )
}

export default Home