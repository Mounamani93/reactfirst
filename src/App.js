//import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import HeaderComponent from './components/Header';
import SliderHome from './components/Slider';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent/>
      <SliderHome/>
    </BrowserRouter>
  );
}

export default App;
