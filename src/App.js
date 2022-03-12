import React, {useState} from 'react';
import './App.css';
//import components
import Main from './components/Main';
import Header from './components/Header';

//Shuffle function that takes an array and shuffles the content
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//Array of numbers, to be shuffled afterwards
let arrToShuffle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function App() {
  /////States
  //Score state
  const [score, setScore] = useState({
    current: 0,
    best: 0,
  });
  //Array of strings state to keep tally of the game based on the user clicks
  const [gameTally, setGameTally] = useState(
    []
  );

  shuffle(arrToShuffle);

  return (
    <div className="App">
      <Header score={score}/>
      <Main shuffledArr={arrToShuffle}/>
    </div>
  );
}

export default App;

//Shuffle function that takes an array and shuffles the content
/*
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}*/
