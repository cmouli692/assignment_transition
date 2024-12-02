import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className='app-container' >
      <div className='side-bar-and-content-container'>
         <SideBar/>
         <MainContent/>
      </div>
      
      
      
    </div>
  );
}

export default App;
