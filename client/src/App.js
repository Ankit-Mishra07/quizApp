
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
function App() {
  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(https://raw.githubusercontent.com/piyush-eon/Reactjs-Quiz-App/master/public/ques1.png)"}}>
     <Header/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/quiz' element={<Quiz/>}></Route>
      <Route path='/result' element={<Result/>}></Route>
    </Routes>

    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
