import logo from './logo.svg';
import './App.css';
import AddMovie from './components/AddMovie';
import ViewAllMovie from './components/ViewAllMovie';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
     <Nav/>
      <BrowserRouter>
      <Routes>

       
        <Route path="/" element={<AddMovie/>} />
        <Route path="/view" element={<ViewAllMovie/>} />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
