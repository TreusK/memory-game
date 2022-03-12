import './Card.css';
import img1 from '../imgs/1.jpg';
import img2 from '../imgs/2.jpg';
import img3 from '../imgs/3.jpg';
import img4 from '../imgs/4.jpg';
import img5 from '../imgs/5.jpg';
import img6 from '../imgs/6.jpg';
import img7 from '../imgs/7.jpg';
import img8 from '../imgs/8.jpg';
import img9 from '../imgs/9.jpg';
import img10 from '../imgs/10.jpg';
import img11 from '../imgs/11.jpg';
import img12 from '../imgs/12.jpg';
import img13 from '../imgs/13.jpg';
import img14 from '../imgs/14.jpg';

const arrOfImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14]

function Card({number}) {
    return (
        <div>
            Hi I'm a {number}
            <img src={arrOfImages[number-1]} />
        </div>
    )
}

export default Card;