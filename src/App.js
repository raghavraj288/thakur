import {Routes,Route} from 'react-router-dom'
import './App.css';
import Layout from "./components/layout/Layout";
import Chef from "./components/chef/Chef";
import Crockery from "./components/crockery/Crockery";
import Menu from "./components/menu/Menu";
import Smallware from "./components/smallware/Smallware";
import Uniform from "./components/uniform/Uniform";

function App() {
  return (
  <>
  
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/crockery" element={<Crockery />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/smallware" element={<Smallware />} />
        <Route path="/uniform" element={<Uniform />} />
        <Route path="*" element={<Smallware />} />
      </Routes>
  </>
  );
}

export default App;
