import React from 'react'

export class AuthText extends React.Component{
    constructor(props){
        super(props);
        this.state = {email: "E-Mail", password: "Password", confirm: "Confirm Password"}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({event.target: event.target.value});
    }

    render(){
        return(
            <div className="auth-text">
                <a>Log in</a>
                <a>Create account</a>
                <form>
                    <input value={this.state.email} onChange={handleChange()}></input>
                    <input value={this.state.password}></input>
                    <input value={this.state.confirm}></input>
                    <button>submit</button>
                </form>
                <a>continue as guest</a>
            </div>
        )
    }
}

export class MainText extends React.Component{
    render(){
        return(
            <div className="main-text">
                <div className="main-text__intro">
                    <p className="main-text__p">Whether you use a straight or double edge razor, or just have sensitive skin and want a better shave, knowing the direction of your beard growth is important. Shave direction effects the closeness of your shave, any skin irritation you experience, and even ingrown hairs & cuts. Use this app to map your beard.</p>
                    <a className="main-text__a">Continue as guest</a>
                    <p className="main-text__p"> or </p>
                    <a className="main-text__a">create account/log in</a>
                </div>
                <div className="main-text__menu">
                    <a className="main-text__a">How to determine the direction your hair grows in</a>
                    <a className="main-text__a main-text__a_strong">Begin mapping</a>
                    <a className="main-text__a">More information</a>
                </div>
            </div>
        )
    }
}

export class SaveText extends React.Component{
    render(){
        return(
            <div className="save-text">
                <div className="save-text__success-text">
                    <p className="save-text__p">File saved and account updated.</p>
                </div>
                <div className="save-text__unable-text">
                    <p className="save-text__p">File saved locally but unable to update account.<br />To update account, <a className="save-text__a">log in</a>.</p>
                </div>
            </div>
        )
    }
}