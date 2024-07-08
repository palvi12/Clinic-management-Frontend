
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import FooterComponent from './component/FooterComponent';
//import HeaderComponent from './component/HeaderComponent';
import ListPatientComponent from './component/ListPatientComponent';
import ListHospitalComponent from './component/ListHospitalComponent';
import AddPatientComponents from './component/AddPatientComponents';
import AddHospitalComponent from './component/AddHospitalComponent';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Patient from './pages/Patient';
import City from './pages/City';
import Hospital from './pages/Hospital';
import Contact from './pages/Contact';

import UpdatePatientComponents from './component/UpdatePatientComponent';
import UpdateHospitalComponent from './component/UpdateHospitalComponent';
import ListCityComponent from './component/ListCityComponent';
import AddCityComponent from './component/AddCityComponent';
import UpdateCityComponent from './component/UpdateCityComponent';
import FooterComponent from './component/FooterComponent';







function App() {
  return (
    
    // <div>
      <Router>
       
        <Navbar/>
       
      {/* <div className='container'> */}
      
        <Routes>
          
          
          <Route path ="/" element= {<ListPatientComponent/>}/>
          <Route path ="/" element= {<ListHospitalComponent/>}/>
          <Route path ="/" element= {<ListCityComponent/>}/>
          <Route path ="/hospital" element= {<ListHospitalComponent/>}/>
          <Route path ="/city" element= {<ListCityComponent/>}/>

          <Route path ="/patients" element= {<ListPatientComponent/>}/>
          <Route path = "/add-patient" element={<AddPatientComponents/>}/>
          <Route path = "/add-city" element={<AddCityComponent/>}/>
          <Route path = "/add-hospital" element={<AddHospitalComponent/>}/>
          <Route path ="/edit-patient/:pid" element={<UpdatePatientComponents/>}/>
          <Route path ="/edit-hospital/:hid" element={<UpdateHospitalComponent/>}/>
          <Route path ="/edit-city/:id" element={<UpdateCityComponent/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/city" element={<City />} />
          <Route path="/contact" element={<Contact />} />

          {/* <Route path="/search" element={<Search />} /> */}
          
          
        </Routes>
        
      
      {/* </div> */}
       <FooterComponent/> 
      </Router>
    // </div>
  );
}

export default App;
