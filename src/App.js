import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MyDatePicker from './MyDatePicker.jsx';


function App() {
  //define state of input field
  const[userInput, setUserInput] = useState('');
  //*starts off empty

  //define state and contents of list
  const[habitList, setHabitlist] = useState([]);
  //*starts off empty array to hold data later

  //handle user input change
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  //handle button clicks
  const handleSubmit = () => {
    // if userinput is not empty including white space
    if (userInput.trim() !== '') {
      // call setHabitList on userInput
      setHabitlist([...habitList, userInput]);
      console.log(userInput);
      setUserInput('');
    }
  };
  
  return (
    <div className="App">
      <header className="App-header flex flex-col items-center">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Fabs' Habit Tracker
        </h1>
        <div className="w-full max-w-sm min-w-[200px]">
          <input 
            className="placeholder:text-slate-700 text-sm border border-slate-200 rounded-full px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow placeholder:text-slate-400 mb-5"
            style={{ color:'black' }}
            value={userInput}
            onChange={handleInputChange}
          />
        </div>
        <button 
          className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4"
          onClick={handleSubmit}
          >
          Add
        </button>
        <div>
          Learn To Build Good Habits
        </div>
        <ul className="list-disc">
          {habitList.map((habit,index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`habit-${index}`}
                className="mr-2"
              />
              <label htmlFor={`habit-${index}`}>{habit}</label>
            </div>
          ))}
        </ul>
          <MyDatePicker />
      </header>
    </div>
  );
}

export default App;
