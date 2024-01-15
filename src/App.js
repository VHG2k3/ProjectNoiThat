import './CSS/layout.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         {/* Header */}
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/gioi-thieu" element={''}></Route>
            <Route path="/san-pham" element={''}></Route>
            <Route path="/tin-tuc" element={''}></Route>
            <Route path="/doi-tac" element={''}></Route>
            <Route path="/lien-he" element={''}></Route>
          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
