import './Main.css';
import Card from './Card';

function Main({shuffledArr}) {
    return (
        <div id='Main'>
            {shuffledArr.map(elem => <Card number={elem} key={elem.toString()}/>)}
        </div>
    )
}

export default Main