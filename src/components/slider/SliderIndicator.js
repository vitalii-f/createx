import '../slider/SliderIndicator.css'

export function SliderIndicator (props) {

    const clickHandle = () => {
        props.changeSlide(props.number-1)
    }

    let name;
    props.activeSlide ? name="slider__indicator _activeIndicator" : name="slider__indicator";

    return (
        <div className={name} onClick={clickHandle}>
            <div className="sliderIndicator__title"> 0{props.number} </div>
            <div className="sliderIndicator__underline"> </div>
        </div>
    );
} 