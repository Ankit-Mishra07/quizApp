import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { Button } from '@material-ui/core'
import './Result.css'
const Result = ({name, score}) => {

  const navigate = useNavigate()
  useEffect(() => {
    if(!name) {
      navigate("/")
    }
    
  }, [name, navigate])
  return (
    <div className='result'>
         <span className="subtitle" style={{width:'fit-content', margin: 'auto'}}>
      {name}
    </span>
      <span className='finalScore' style={{ fontSize: 80}}>Final Score : {score}</span>
      <Button 
      variant='contained'
      color='secondary'
      size='large'
      style={{alignSelf : 'center', marginTop : 20}}
      href='/'
      >Go to Homepage</Button>
    </div>
  )
}

export default Result