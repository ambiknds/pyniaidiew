import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import About from './pages/About'
import Contact from './pages/Contact'

// Shop Pages - Listings and Details per category
import ClinicListing from './pages/shops/clinic/Listing';
import ClinicDetail from './pages/shops/clinic/Detail';
import BakeryListing from './pages/shops/bakery/Listing';
import BakeryDetail from './pages/shops/bakery/Detail';
import WholesaleListing from './pages/shops/wholesale/Listing';
import WholesaleDetail from './pages/shops/wholesale/Detail';
import GeneralStoreListing from './pages/shops/general-store/Listing';
import GeneralStoreDetail from './pages/shops/general-store/Detail';
import ShoeStoreListing from './pages/shops/shoe-store/Listing';
import ShoeStoreDetail from './pages/shops/shoe-store/Detail';
import DepartmentalStoreListing from './pages/shops/departmental-store/Listing';
import DepartmentalStoreDetail from './pages/shops/departmental-store/Detail';
import TailoringListing from './pages/shops/tailoring/Listing';
import TailoringDetail from './pages/shops/tailoring/Detail';
import ClothesListing from './pages/shops/clothes/Listing';
import ClothesDetail from './pages/shops/clothes/Detail';
import RestaurantListing from './pages/shops/restaurant/Listing';
import RestaurantDetail from './pages/shops/restaurant/Detail';
import ElectronicsListing from './pages/shops/electronics/Listing';
import ElectronicsDetail from './pages/shops/electronics/Detail';
import FastfoodListing from './pages/shops/fastfood/Listing'
import FastfoodDetail from './pages/shops/fastfood/Detail';
import ComponentShowcase from './pages/ComponentShowcase';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Router>
      <div className="h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResults />} />
          
          {/* Shop Pages - Listings */}
          <Route path="/clinic" element={<ClinicListing />} />
          <Route path="/bakery" element={<BakeryListing />} />
          <Route path="/wholesale" element={<WholesaleListing />} />
          <Route path="/general-store" element={<GeneralStoreListing />} />
          <Route path="/shoe-store" element={<ShoeStoreListing />} />
          <Route path="/departmental-store" element={<DepartmentalStoreListing />} />
          <Route path="/tailoring" element={<TailoringListing />} />
          <Route path="/clothes" element={<ClothesListing />} />
          <Route path="/restaurant" element={<RestaurantListing />} />
          <Route path="/electronics" element={<ElectronicsListing />} />
          <Route path="/fastfood" element={<FastfoodListing />} />

          {/* Shop Pages - Details */}
          <Route path="/clinic/:id" element={<ClinicDetail category="clinic" />} />
          <Route path="/bakery/:id" element={<BakeryDetail category="bakery" />} />
          <Route path="/wholesale/:id" element={<WholesaleDetail category="wholesale" />} />
          <Route path="/general-store/:id" element={<GeneralStoreDetail category="general-store" />} />
          <Route path="/shoe-store/:id" element={<ShoeStoreDetail category="shoe-store" />} />
          <Route path="/departmental-store/:id" element={<DepartmentalStoreDetail category="departmental-store" />} />
          <Route path="/tailoring/:id" element={<TailoringDetail category="tailoring" />} />
          <Route path="/clothes/:id" element={<ClothesDetail category="clothes" />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail category="restaurant" />} />
          <Route path="/electronics/:id" element={<ElectronicsDetail category="electronics" />} />
          <Route path="/fastfood/:id" element={<FastfoodDetail category="fastfood" />} />
          
          {/* Component Showcase */}
          <Route path="/component-showcase" element={<ComponentShowcase />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
