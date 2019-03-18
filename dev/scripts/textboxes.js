import React from 'react'
import $ from 'jquery'
import { throws } from 'assert';


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
        this.handleGuestClick = this.handleGuestClick.bind(this)
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
        var category = e.target.className.split(" ")[0]
        var value = e.target.value
        var newState = {}
        newState[category] = value
        this.setState(newState)
    }
























    createUser(e){
        e.preventDefault()
        var email = this.state.email
        var password = this.state.password
        var confirm = this.state.confirm
        if (password == confirm){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => alert(error.code, error.message))
            .then((success) => {
                $('.auth-text').css('display', 'none');
                this.props.SetLoggedInEmail(email);
                alert('logged in as ' + email);
            }),
                (error) => {return}
        }
        else {alert('Please ensure your password and password confirmation fields match.')}
    }    

    signIn(e){
        e.preventDefault();
        var email = this.state.email
        var password = this.state.password
        var dbRef = firebase.database().ref()

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error.code, error.message))
            .then((success) => {
                const user = email.replace(/[[&\/\\#,+()$~%.'":*?<>{}]/g, "")
                const dbRef = firebase.database().ref('users/' + user);
                dbRef.on("value", (firebaseData) => {
                    const savedLocArrows= firebaseData.val()
                    this.props.updateLocArrowsState(savedLocArrows)

                    // this.setState({locArrows: savedLocArrows})
                    // console.log('check Auth-Text state!')
                    
                })
                this.props.SetLoggedInEmail(email)
                $('.auth-text').css('display', 'none')
            }), (error) => {
                alert(error);
            }
    }

    handleGuestClick(){
        $('.auth-text').css('display', 'none')
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
                <a className="auth-text__a auth-text__form-select auth-text__form-select_active" onClick={this.handleSwitchForms}>Create account</a>
                <p className="auth-text__p">&nbsp; or &nbsp;</p>
                <a className="auth-text__a auth-text__form-select" onClick={this.handleSwitchForms}>Log in</a>
                <form className="auth-text__form auth-text__new-user-form auth-text__form_active" onSubmit={(e) => this.createUser(e)}>
                    <input className="email auth-text__input" placeholder={this.state.email} onChange={this.handleChange}></input>
                    <input className="password auth-text__input" placeholder={this.state.password} onChange={this.handleChange}></input>
                    <input className="confirm auth-text__input" placeholder={this.state.confirm} onChange={this.handleChange}></input>
                    <button className="auth-text__submit">submit</button>
                </form>
                <form className="auth-text__form auth-text__log-in-form auth-text__form_inactive" onSubmit={(e) => this.signIn(e)}>
                    <input className="email auth-text__input" placeholder={this.state.email} onChange={this.handleChange}></input>
                    <input className="password auth-text__input" placeholder={this.state.password} onChange={this.handleChange}></input>
                    <button className="auth-text__submit">submit</button>
                    <input className="placeholder auth-text__input" readOnly="readonly"></input>
                </form>
                <a className="auth-text__a auth-text__guest" onClick={this.handleGuestClick}>🚪continue as guest</a>
            </div>
        )
    }
}


export class MainText extends React.Component{

    constructor(props){
        super(props)

        this.onBeginClick = this.onBeginClick.bind(this)
        this.onMoreInfoClick = this.onMoreInfoClick.bind(this)
        this.onGrowthClick = this.onGrowthClick.bind(this)
    }

    onMoreInfoClick(){
        $('.main-text').css('display', 'none')
        $('.more-info-text').css('display', 'block')
    }

    onGrowthClick(){
        $('.main-text').css('display', 'none')
        $('.growth-text').css('display', 'block')
    }

    onBeginClick(){
        $('.main-text').css('display', 'none')
        $('.auth-text').css('display', 'block')
    }

    render(){
        return(
            <div className="main-text">
                <div className="main-text__intro">
                    <p className="main-text__p">Whether you use a straight or double edge razor, or just have sensitive skin and want a better shave, knowing the direction of your beard growth is important.</p>
                    <p className="main-text__p">Shave direction effects the closeness of your shave, any skin irritation you experience, even ingrown hairs & cuts. Save the paper, pen, and art skills- use this app to map your beard.</p>
                    {/* <a className="main-text__a main-text__a-guest">continue as guest&nbsp;</a>
                    <p className="main-text__link-break">or</p>
                    <a className="main-text__a main-text__a-auth">&nbsp;create account/log in</a> */}
                </div>
                <div className="main-text__menu">
                    <a className="main-text__a main-text__menu-item" onClick={this.onGrowthClick}>how to determine growth direction</a>
                    <a className="main-text__a main-text__a_strong main-text__menu-item" onClick={this.onBeginClick}>begin mapping</a>
                    <a className="main-text__a main-text__menu-item" onClick={this.onMoreInfoClick}>more information</a>
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
                    <p className="save-text__p">File saved locally but unable to update account.<br />To update account, <a className="save-text__a">log in</a> and re-save.</p>
                </div>
            </div>
        )
    }
}

export class GrowthText extends React.Component{
    constructor(props){
        super(props)

        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        $('.growth-text').css('display', 'none')
        $('.main-text').css('display', 'block')
    }

    render(){
        return(
           < div className="growth-text">
            <p>Let your beard grow out for atleast a couple of days, then you can feel with your hands which direction each section grows in. The direction that's smoothest to stroke is the direction of growth; the roughest direction-- the one that provides the most resistance-- is the direction opposite growth direction.</p>
            <p>A traditional three-pass shave begins shaving first with the grain, then across the grain, and finally against the grain.</p>
            <a className="growth-text__a growth-text__back" onClick={this.onClick}>back</a>
           </div>
        )
    }
}

export class MoreInfoText extends React.Component{
    constructor(props){
        super(props)

        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        $('.more-info-text').css('display', 'none')
        $('.main-text').css('display', 'block')
    }
    

    render(){
        return(
           < div className="more-info-text">
            <a className="more-info-text__a"></a>
            <a className="more-info-text__a"></a>
            <a className="more-info-text__a"></a>
            <a className="more-info-text__a more-info-text__back" onClick={this.onClick}>back</a>
           </div>
        )
    }
}