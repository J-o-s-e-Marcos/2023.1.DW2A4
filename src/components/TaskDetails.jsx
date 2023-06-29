import React from 'react';
import Button from './Button';
import './TaskDetails.css'
import { useParams } from 'react-router-dom';
const TaskDetails = () => {
  const params = useParams();
  return ( 
    <>
    <div className='back-button-container'>
      <Button>Voltar</Button>
    </div>
    <div className="task-details-container">
      <h2>{params.taskTitle}</h2>
      <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
    </div>
    </>
   );
}
 
export default TaskDetails;