import React from 'react';
import ReactDOM from 'react-dom';
import html2canvas from 'html2canvas';
import $ from 'jquery';
import Header from './header';
import { FaceSvg } from './svgs';
import Slider from './slider';
import Arrow from './saveprompt';
import { AuthText } from './textboxes';



window.onload = function(){

  var config = {
    apiKey: "AIzaSyCde4QEbl2LuOmvN0EDF6g_K4fJzaKFo30",
    authDomain: "beard-map-app.firebaseapp.com",
    databaseURL: "https://beard-map-app.firebaseio.com",
    projectId: "beard-map-app",
    storageBucket: "beard-map-app.appspot.com",
    messagingSenderId: "977691022648"
  };
  firebase.initializeApp(config);



class App extends React.Component{

  
  constructor(props) {
    super(props);
    const defaultRotation = 90; 
    const defaultClasses = "locArrow locArrow_inactive"
    this.state = {
      loggedIn: false,
      rotation: defaultRotation,
      target: null,
      locArrows: [
        {id: "locArrow-1", rotate: defaultRotation, classes: defaultClasses, translate: "860,4650"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-3", rotate: defaultRotation, classes: defaultClasses, translate: "2425,3340"},
        {id: "locArrow-4", rotate: defaultRotation, classes: defaultClasses, translate: "3955,3340"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"},
        {id: "locArrow-2", rotate: defaultRotation, classes: defaultClasses, translate: "1525,4450"}
      ],
      saving: false,
      email: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.getUserInfo = this.getUserInfo.bind(this)
    this.obtainRotationFromSlider = this.obtainRotationFromSlider.bind(this)
    this.obtainTargetFromSvgs = this.obtainTargetFromSvgs.bind(this)
  }

  handleClick(){
    this.setState(
      {saving: true}
    )
    console.log('SAVING')
  }

  getUserInfo(){
    this.setState(
      {email: xxx}
    )
  }
  // WILL NEED TO GIVE <AUTH-TEXT /> PROP FOR onClick OF this.getUserInfo ('this.(...)' if rendered in current 'app' component)
  // <AuthText 


  obtainRotationFromSlider(value){
    console.log ('target is: ' + this.state.target + ' and rotation will be: ' + value)
    if (this.state.target !== null){
      var targetedDummy = this.state.locArrows[this.state.target];
      targetedDummy.rotate = value;
      // this.state.locArrows[this.state.target].rotation = value
      this.setState({targetedDummy})
    }
    else return
  }

  obtainTargetFromSvgs(value){
    this.setState({target : value})
  }
  
  
  
  render(){

    // if (this.state.loggedIn){
    //   this.state.d
    // }

    // else if (!this.state.loggedIn){
    //   var r = this.state.
    // }


    return(
      <div>
        <Header onClick={this.handleClick}/>
        <div className="map__wrapper">
          <AuthText />
          <div className="save-prompt__wrapper">
            <Arrow />
          </div>
          <FaceSvg obtainTargetFromSvgs={this.obtainTargetFromSvgs} locArrows={this.state.locArrows} defaultRotation={this.state.defaultRotation} loggedIn={this.state.loggedIn} saving={this.state.saving}/>
        </div>
        <Slider obtainRotationFromSlider={this.obtainRotationFromSlider}/>
      </div>

    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));



}
