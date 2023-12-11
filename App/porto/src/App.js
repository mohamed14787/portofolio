import logo from './logo.svg';
import './App.css';
import Nav from './nav'
import SideBar from './sideBar';
import Main from './main';
function App() {
  return (
    <div >
      <Nav/>
      <div style={{display:"flex"}}>
      <SideBar/>
      <Main/>
      </div>
     
      
    </div>
  );
}

export default App;
