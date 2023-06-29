import React , {useState} from 'react';
import Button from "./Button";
import "./AddTask.css";

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState("");
  
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };
  
  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
  }

    return(
  <div className='add-tesk-container'>
    <input onChange={handleInputChange} value={inputData} className='add-tesk-input' type="text" />
    <div className="add-task-button-container">
    <Button onClick={handleAddTaskClick}>Adicionar</Button>
    </div>
  </div>
  );
};

export default AddTask;