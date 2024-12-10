import { useState } from "react";
import ContentBody from "./components/ContentBody";
import NavBar from "./components/NavBar";
import About from "./components/About";
import News from "./components/News";
import ShowAlert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App = () =>{
  const [mode,toggleMode] = useState('primary');
  const [alertIndicator,setalertIndicator] = useState(null);
  const showAlertMsg = (msg,type) =>{
    setalertIndicator ({
      message:msg,
      type:type
    })
  }
  const toggleModefunc = () =>{
    if(mode === 'primary'){
      toggleMode('dark');
      document.body.style.backgroundColor = '#131313';
      showAlertMsg("Dark Mode Enabled","success");
      setTimeout(() => {
        showAlertMsg(null);
      }, 1500);
    }
    else{
     toggleMode('primary');
     document.body.style.backgroundColor = 'white';
     showAlertMsg("Light Mode Enabled","success");
      setTimeout(() => {
        showAlertMsg(null);
      }, 1500);
    }

  }
  return (
    
    <>
    <Router basename="">
    <NavBar title="TextFormatter" mode={mode} toggle={toggleModefunc}/>
    <ShowAlert alert = {alertIndicator}/>
      <Routes>
          <Route path="/about" element = {<About/>} />
          <Route path="/" element = {<ContentBody mode={mode} toggle={toggleModefunc} alertmsg={alertIndicator}/>} />
          <Route path = '/news' element = {<News mode={mode} pageSize={20} category={"health"} api_key ={import.meta.env.VITE_NEWS_API}/>} />
          <Route path = '/snews' element = {<News mode={mode} pageSize={20} category={"sports"} api_key ={import.meta.env.VITE_NEWS_API}/>} />
          </Routes>
        </Router>
    </>
  )
}

export default App;