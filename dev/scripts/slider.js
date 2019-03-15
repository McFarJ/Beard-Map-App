import React from 'react'
import $ from 'jquery'

export default class Slider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '180'}

        this.handleSliderChange = this.handleSliderChange.bind(this);
        // this.svgInfoToSlider = this.svgInfoToSlider.bind(this)
    }

    handleSliderChange(event) {
        this.setState({value: event.target.value});
        this.props.obtainRotationFromSlider(this.state.value);

        // console.log($(".slider")[0])
    //    $(".slider").attr("value", "90")
        console.log(`1: ${$(".slider1").val()}`)
        console.log(`2: ${$(".slider2").val()}`)

        // document.getElementsByClassName("slider")[0].setAttribute("value", this.state.value)
    }

    render() {
        return (
            <div className="slidecontainer">
                <input type="range" min="0" max="360" value={this.state.value} className="slider slider1" onChange={this.handleSliderChange} />
            </div>
        )
    }
}

