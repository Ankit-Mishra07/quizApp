
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import { useState } from 'react';
import axios from 'axios'
import PrivateRoute from './PrivateRoutes/PrivateRoute';
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
    <div className="app" >
     <Header/>

    <Routes>
      <Route path='/' element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}></Route>
      <Route path='/quiz' element={
      <PrivateRoute name={name}>
      <Quiz
      name={name}
      questions={questions}
      score={score}
      setScore={setScore}
      setQuestions={setQuestions}
      
      />
      </PrivateRoute>
      }></Route>
      <Route path='/result' element={
      <PrivateRoute name={name}>
      <Result
      name={name}
      score={score}
      />
      </PrivateRoute>
      }></Route>
    </Routes>

    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
