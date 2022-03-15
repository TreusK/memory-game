import './Main.css';
import Card from './Card';

function Main({shuffledArr, handleClick}) {
    return (
        <div id='Main'>
            {shuffledArr.map(elem => <Card number={elem} key={elem.toString()} handleClick={handleClick}/>)}
        </div>
    )
}

export default Main