
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import { useState } from 'react';
import axios from 'axios'
function App() {
   const [name, setName] = useState("")
   const [questions, setQuestions] = useState()
   const [score, setScore] = useState(0)
   const fetchQuestions = async(category='', difficulty='') =>{
      const {data} = await axios.get( `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
      
      setQuestions(data.results)
      console.log("Resultss" , data.results)
    }
  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(https://raw.githubusercontent.com/piyush-eon/Reactjs-Quiz-App/master/public/ques1.png)"}}>
     <Header/>

    <Routes>
      <Route path='/' element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}></Route>
      <Route path='/quiz' element={<Quiz
      name={name}
      questions={questions}
      score={score}
      setScore={setScore}
      setQuestions={setQuestions}
      
      />}></Route>
      <Route path='/result' element={<Result
      name={name}
      score={score}
      />}></Route>
    </Routes>

    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
