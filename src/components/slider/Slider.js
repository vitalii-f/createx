import '../slider/Slider.css';
import arrow_left from '../../img/svg/arrows/Left.svg';
import arrow_right from '../../img/svg/arrows/Right.svg';
import { SliderIndicator } from './SliderIndicator';
import { useState } from 'react';
import { SliderBack } from './SliderBack';

import bg0 from "../../img/png/bg-image-slider.png";
import bg1 from "../../img/png/bg-image-slider-1.jpg";
import bg2 from "../../img/png/bg-image-slider-2.jpg";
import bg3 from "../../img/png/bg-image-slider-3.jpg";

export function Slider(props) {
  const [slideNumber, setSlideNumber] = useState(0);
  const sliderCount = props.count;

  const backgroundSlideImg = [
    bg0,
    bg1,
    bg2,
    bg3,
  ];

  function showIndicator (count) {
    const indicators = [];
    
    for (let i = 1; i < count+1; i++) {
      indicators.push(<SliderIndicator number={i} key={i} selectedSlide={(number) => number} changeSlide={clickHandle} />)
    }
    indicators[slideNumber] = <SliderIndicator number={slideNumber+1} key={slideNumber+1} activeSlide={true} changeSlide={clickHandle} />;
    return indicators;
  }

  const clickHandle = (number) => {
    setSlideNumber(number);
  }

  return (
    <section className="slider">
    <SliderBack count={sliderCount} backImage={backgroundSlideImg} number={slideNumber} activeSlide={true}/>
      <div className="slider__container" >
          <div className="slider__prev" onClick={() => slideNumber === 0 ? setSlideNumber((count) => sliderCount-1) : setSlideNumber((count) => --count)}> <img src={arrow_left} alt="arrow_left"/> </div>
          <div className="slider__next" onClick={() => slideNumber === sliderCount - 1 ? setSlideNumber((count) => 0) : setSlideNumber((count) => ++count)}> <img src={arrow_right} alt="arrow_right"/> </div>
          <div className="slider__content">
              <div className="slider__item">
                <h3 className="slider__title"> CREATE<span style={{color: "#FF5A30"}}>X</span> CONSTRUCTION </h3>
                <div className="slider__text"> Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.  </div>
                <button> Learn more about us </button>
                <button> SUBMIT REQUEST </button>
              </div>
             
              <div className="slider__indicators">
              {showIndicator(sliderCount)}
              </div>
              
          </div>
      </div>
    </section>
  )
}