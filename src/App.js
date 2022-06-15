import React, {useState} from 'react';
import './App.css';
//import components
import Main from './components/Main';
import Header from './components/Header';
import GameOverScreen from './components/GameOverScreen';

//Shuffle function that takes an array and shuffles the content
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//Array of numbers, to be shuffled afterwards
let arrToShuffle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

shuffle(arrToShuffle);

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
  //Game over state
  const [gameIsOver, setGameIsOver] = useState(false);

  //Functions
  //function on click event on card
  function handleClick(num) {
    if (gameTally.includes(num) || score.current == 14) {
      handleGameOver();
    } else {
      setGameTally([...gameTally].concat([num]));
      setScore({...score, current: score.current+1});
      shuffle(arrToShuffle);
    }
  }

  //function to handle when the game is over for clicking the wrong image
  function handleGameOver() {
    setGameIsOver(true);
    let currentScore = score.current;
    let bestScore = score.best;
    if (currentScore > bestScore) { bestScore = currentScore; };
    setScore({...score, best: bestScore});
  }

  //function to reset stuff
  function resetStuff(bestScore) {
    setGameIsOver(false);
    setScore({current: 0, best: bestScore});
    setGameTally([]);
  }

  return (
    <div className="App">
      {gameIsOver && <GameOverScreen score={score} resetStuff={resetStuff}/>}
      <Header score={score}/>
      <div className='rulesContainer'>
        <h3>Rules</h3>
        <p>Try and click on each card only once. The maximum possible score is 14.</p>
      </div>
      <Main shuffledArr={arrToShuffle} handleClick={handleClick}/>
    </div>
  );
}

export default App;
