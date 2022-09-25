import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Screens
import { HomeScreen } from './screens/HomeScreen';
import { ProductScreen } from './screens/ProductScreen';
import { CartScreen } from './screens/CartScreen';
import { SolutionsScreen } from './screens/SolutionsScreen';
import { AboutScreen } from './screens/AboutScreen';
import { DownloadScreen } from './screens/DownloadScreen';
import { PrivacyPolicyScreen } from './screens/PrivacyPolicyScreen';
import { LicenseScreen } from './screens/LicenseScreen';
import { DiscountsScreen } from './screens/DiscountsScreen';
import { CategoryScreen1 } from './screens/CategoryScreen1';
import { CategoryScreen2 } from './screens/CategoryScreen2';
import { CategoryScreen3 } from './screens/CategoryScreen3';
import { CategoryScreen4 } from './screens/CategoryScreen4';
import { CategoryScreen5 } from './screens/CategoryScreen5';

//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import Footer from './components/Footer';


function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
        <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
          <main>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path='/solutions' element={<SolutionsScreen />} />
              <Route path='/about' element={<AboutScreen />} />
              <Route path='/download' element={<DownloadScreen />} />
              <Route path='/privacy-policy' element={<PrivacyPolicyScreen />} />
              <Route path='/license' element={<LicenseScreen />} />
              <Route path='/discounts' element={<DiscountsScreen />} />
              <Route path='/category-1' element={<CategoryScreen1 />} />
              <Route path='/category-2' element={<CategoryScreen2 />} />
              <Route path='/category-3' element={<CategoryScreen3 />} />
              <Route path='/category-4' element={<CategoryScreen4 />} />
              <Route path='/category-5' element={<CategoryScreen5 />} />
            </Routes>
          </main>
        <Footer />
    </Router>
  );
}


export default App;
