import './Header.css'

function Header({score}) {
    return (
        <div id='Header'>
            <h2>Header text here</h2>
            <div id='pointsContainer'>
                <h4>Score: {score.current}</h4>
                <h4>Best Score: {score.best}</h4>
            </div>
        </div>
    )
}

export default Header