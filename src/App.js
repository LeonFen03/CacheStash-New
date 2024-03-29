import logo from './logo.svg';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import NavBar from './components/Nav-Bar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import PhotoGallery from './components/Photo-Gallery/PhotoGallery';
import CurrentUserProvider from './components/User/CurrentUser';
import Login from './components/Login/Login';
import PhotoDrive from './components/PhotoStorage/PhotoDrive';
import About from './components/About/About';
import PricePlans from './components/priceplans/priceplans';
import PhotoWebLink from './components/PhotoWebLink/PhotoWebLink.js';
function App() {
  const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/"  element={<NavBar />}> 
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/public" element={<PhotoGallery />} />
      <Route path="/photodrive" element={<PhotoDrive />} />
      <Route path="/about" element={<About />}/>
      <Route path="/photo" element={<PhotoWebLink />}>
        <Route path=":id" />
      </Route >
      <Route path="/priceplans" element={<PricePlans />}/>
    </Route>))

  return (
    <AnimatePresence >
      <CurrentUserProvider >
  <RouterProvider router={appRouter} />
  </CurrentUserProvider>
  </AnimatePresence>);
}

export default App;
