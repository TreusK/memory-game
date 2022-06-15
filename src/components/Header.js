import './Header.css'

function Header({score}) {
    return (
        <div id='Header'>
            <h1>Japanese Memory Game</h1>
            <h2>日本語 記憶 ゲーム</h2>
            <div id='pointsContainer'>
                <h4>Score: {score.current}</h4>
                <h4>Best Score: {score.best}</h4>
            </div>
        </div>
    )
}

export default Header