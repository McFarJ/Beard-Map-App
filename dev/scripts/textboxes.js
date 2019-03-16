import React from 'react'
import $ from 'jquery'


export class instructionText extends React.Component{
    render(){
        return(
            <div className="tips-text">
                <p className="tips-text__t1">Select beard location</p>
                <p className="tips-text__t2">Adjust the slider below</p>
                <p className="tips-text__t3">Click save at the top of the page</p>
            </div>
        )
    }
}







export class AuthText extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "E-Mail", 
            password: "Password", 

            createEmail: '',
            createPassword: '',

            confirm: "Confirm Password"
        }
        this.handleChange = this.handleChange.bind(this)
        this.createUser = this.createUser.bind(this)
        this.signIn = this.signIn.bind(this)
        this.handleSwitchForms = this.handleSwitchForms.bind(this)
    }

    handleSwitchForms(e){
        if(e.target.classList.contains('auth-text__form-select_active')){return}
        else {
            $('.auth-text__form-select_active').removeClass('auth-text__form-select_active')
            $(e.target).addClass('auth-text__form-select_active')
            $('.auth-text__form_active').removeClass('auth-text__form_active')
            $('.auth-text__form_inactive').addClass('auth-text__form_active').removeClass('auth-text__form_inactive')
            $('.auth-text__form').not('.auth-text__form_active').addClass('auth-text__form_inactive')
        }
    }

    handleChange(e){
        var category = e.target.getAttribute('class')
        var value = e.target.value
        var newState = {}
        newState[category] = value
        this.setState(newState)
    }

    createUser(e){
        e.preventDefault()
        var email = this.state.email
        var password = this.state.password
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => console.log(error.code, error.message))
    }

    signIn(e){
        e.preventDefault();
        var email = this.state.email
        var password = this.state.password

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((success) => {
                console.log(`Logged in as ${success.email}`)
                this.props.updateLogInStatus(true)
            }), (error) => {
                console.log(error);
            }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({loggedIn: true})
                console.log('logged in')
            } else {
                this.setState({loggedIn: false})
                console.log('not logged in')
            }
        })
    }

    render(){
        return(
            <div className="auth-text auth-text_inactive">
                <a className="auth-text__form-select auth-text__form-select_active" onClick={this.handleSwitchForms}>Create account</a>
                <a className="auth-text__form-select" onClick={this.handleSwitchForms}>Log in</a>
                <form className="auth-text__form auth-text__new-user-form auth-text__form_active" onSubmit={(e) => this.createUser(e)}>
                    <input className="email" placeholder={this.state.email} onChange={this.handleChange}></input>
                    <input className="password" placeholder={this.state.password} onChange={this.handleChange}></input>
                    {/* FIX set value */}
                    <input value={this.state.confirm}></input>
                    <button>submit</button>
                </form>
                <form className="auth-text__form auth-text__log-in-form auth-text__form_inactive" onSubmit={(e) => this.signIn(e)}>
                    <input className="email" placeholder={this.state.email} onChange={this.handleChange}></input>
                    <input className="password" placeholder={this.state.password} onChange={this.handleChange}></input>
                    <input value={this.state.confirm}></input>
                    {/* FIX set value */}
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
                    <p className="main-text__p">Whether you use a straight or double edge razor, or just have sensitive skin and want a better shave, knowing the direction of your beard growth is important.</p>
                    <p className="main-text__p">Shave direction effects the closeness of your shave, any skin irritation you experience, and even ingrown hairs & cuts. Use this app to map your beard.</p>
                    {/* <a className="main-text__a main-text__a-guest">continue as guest&nbsp;</a>
                    <p className="main-text__link-break">or</p>
                    <a className="main-text__a main-text__a-auth">&nbsp;create account/log in</a> */}
                </div>
                <div className="main-text__menu">
                    <a className="main-text__a main-text__menu-item">how to determine growth direction</a>
                    <a className="main-text__a main-text__a_strong main-text__menu-item">begin mapping</a>
                    <a className="main-text__a main-text__menu-item">more information</a>
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