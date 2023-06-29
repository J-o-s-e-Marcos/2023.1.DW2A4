import React from 'react';
import Button from './Button';
import './TaskDetails.css'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick =() => {
    navigate(-1);
  }
  return ( 
    <>
    <div className='back-button-container'>
      <Button onClick={handleBackButtonClick}>Voltar</Button>
    </div>
    <div className="task-details-container">
      <h2>{params.taskTitle}</h2>
      <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
    </div>
    </>
   );
}
 
export default TaskDetails;