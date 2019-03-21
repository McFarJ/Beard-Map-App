import React from 'react'
import $ from 'jquery'

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        $('[class$="-text"]').css('display', 'none')
        $('.main-text').css('display', 'block')
    }

    render(){
        return(
            <header className="header">
                <div className="menu">
                    <div className="menu__icon" onClick={this.handleClick}>
                        <div className="menu__line menu__first-line"></div>
                        <div className="menu__line"></div>
                        <div className="menu__line menu__last-line"></div>
                    </div >
                    <div className="menu__dropdown">
                    {/* dropdownmenushit */}
                    </div>
                </div>
                <div className="header__title-and-logo">
                    <h1 className="header__title">beard map</h1>
                    <div className="header__logo"></div>
                </div>
                <button className="saveButton" onClick={this.props.handleSaveClick}>Save</button>
            </header>
        )
    }
}