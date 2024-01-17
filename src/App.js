import logo from './logo.svg';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
function App() {
  const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" > 
      <Route path="/Home" element={<LandingPage />} />
    </Route>))

  return (
    <AnimatePresence >
  <RouterProvider router={appRouter} />
  </AnimatePresence>);
}

export default App;
