import './GameOverScreen.css';

function GameOverScreen({score, resetStuff}) {
    return (
        <div id='GameOverScreen'>
            <div id='messageContainer'>
                <h2>GAME OVER</h2>
                <div id='innerContainer'>
                    <h3>Your Score: {score.current}</h3> 
                    <h3>Best Score: {score.best}</h3>
                </div>
                <div id='btn' onClick={() => resetStuff(score.best)}>Play again</div>
            </div>
        </div>
    )
}

export default GameOverScreen;