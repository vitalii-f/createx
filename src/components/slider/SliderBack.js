import { useEffect } from 'react';
import './SliderBack.css';

export function SliderBack(props) {
  let slideNumber = props.number;
  let slideCount = props.count;

  let name;
  props.activeSlide ? name="slider__background _activeSlide" : name="slider__background";

  

  function createSliderBackground (count) {
    const sliderBackground = [];
    
    for (let i = 0; i < count; i++) {
      sliderBackground.push(<img className="slider__background" src={props.backImage[i]} alt="slider_image" key={props.backImage[i]} />);
    }
    sliderBackground[slideNumber] = <img className={name} src={props.backImage[slideNumber]} alt="slider_image" key={props.backImage[slideNumber]} />;
    return sliderBackground;
  }

  useEffect(() => {
    const slider =  document.querySelector('.sliderBack');
    if (slider) {
      slider.addEventListener('scroll', (event) => {
        console.log("YES")
      });
    } else console.log("NULL")
  });
    
  

  return (
    <>
      <div className="sliderBack" >
        {createSliderBackground(slideCount)}
      </div>
    </>
    
  )
}