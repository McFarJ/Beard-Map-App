import React from 'react'

export default class Slider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '180'}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.obtainRotationFromSlider(this.state.value);
    }

    render() {
        return (
            <div className="slidecontainer">
			    {/* <input type="range" min="0" max="360" value={this.props.setRotationFromSlider} className="slider" id="myRange"/> */}
                <input type="range" min="0" max="360" value={this.state.value} className="slider" id="myRange" onChange={this.handleChange} />
		    </div>
        )
    }
}

