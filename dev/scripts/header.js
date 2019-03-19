import React from 'react'


export default class Header extends React.Component {

    render(){
        return(
            <header className="header">
                <div className="menu">
                    <div className="menu__icon">
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

// on saveButton click, this.state.saving=true; 