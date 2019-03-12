import React from 'react';
import ReactDOM from 'react-dom';
import html2canvas from 'html2canvas';
import $ from 'jquery';
import Header from './header';
import { FaceSvg } from './svgs';
import Slider from './slider';
import Arrow from './saveprompt';



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

  function setRotationFromSlider(dataFromChild){

  }
  
  
  
  render(){
    // var rotation = this.state.rotation;

    return(
      <div>
        <Header />
        <div className="map__wrapper">
          <div className="save-prompt__wrapper">
            <Arrow />
          </div>
          <FaceSvg />
          {/* WITH ROTATION CODE */}
          {/* <FaceSvg rotation={}> */}
        </div>
        <Slider value={this.setRotationFromSlider}/>
      </div>

    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));

  // TWO
  var BBoxTest = $('#loc-14TEST')[0].getBBox()
console.log(BBoxTest)
console.log(`coordinates are ${$('#loc-14TEST').attr('transform')}`)
  // console.log('bbox result= ' + BBoxResults)
  // console.log('bboxxxxxxx! ' + BBoxResults.x) 
  // console.log('bboxyyyyyy! ' + BBoxResults.y) 

  var button = $('#loc-14TEST');
  console.log(button)















// var rectVar = $('loc-8')
// console.log('recrtVar is ' + rectVar)
// // var rect = rectVar[0].getBoundingClientRect()
// // console.log(rect.top, rect.right, rect.bottom, rect.left)


}
