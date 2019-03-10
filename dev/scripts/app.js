import React from 'react';
import ReactDOM from 'react-dom';
import html2canvas from 'html2canvas';
import $ from 'jquery';
import Header from './header';
import { FaceSvg } from './svgs';
import Slider from './slider';
import Arrow from './saveprompt';



window.onload = function(){


class App extends React.Component{
  
  
  render(){
    return(
      <div>
        <Header />
        <div className="map__wrapper">
          <div className="save-prompt__wrapper">
            <Arrow />
          </div>
          <FaceSvg />
        </div>
        <Slider />
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






//ADDING EACH LOCARROW

// class LocArrows extends React.Component {
//   render() {
//     return (
                // <?xml version="1.0" encoding="UTF-8" standalone="no"?>
                // <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                // <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">  <image id="image0" width="64" height="64" x="0" y="0"
                //     xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                // AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZ
                // cwAAAFoAAABaAHAjuH0AAAAHdElNRQfjAwYXKB0Z/ZEGAAABjUlEQVRo3u2YvS9DURiHn34Rg0XU
                // orMajYJIzEydrBKbltol/gSxdTGV+BeYDEYpmyYYDZUmqhcRH73HcEMa1Dlt895z1X3Pes95nvf9
                // nXuHC+1WnHkOqfPGNQXG297fZSXIUkV9rhJT/uLXuW/CKxTnzPiJd77gPYVJW91/rCOGbeIVLyzK
                // 452WeIViy1733tqxi1ds2sXfMiuHd7R4l2367HXvUpR5Cc3xSZvDF8Rb7j4c/v/Fh8MPh28BHyNn
                // Ew8L3NjEw4FdPNxp8A1ZPLgagRNSkvgoz5onxsiQkFQ4094BhzxxKXyMAeY0x/czzSMlXBmBMqNM
                // ENEqPHAqowBJ9rRXUeGwJhfEiLGC2HUMgMKfCqKXFQIQRAAUAhBEABTCIAKiYBrEspSAqcKV5G97
                // syBW5QTMplDo9PCowTNV8uyjJHvUly6InLzCb0FckvZjCq0U6iz5gfcUdr8p1MnKfYh+UijSaMLX
                // WPETDzDEBhc88YrDMZlu8ZEO9kRJkWaQCmVq/nYfVli9WO+c74maALp3dQAAACV0RVh0ZGF0ZTpj
                // cmVhdGUAMjAxOS0wMy0wNlQyMzo0MDoyOSswNTowMCjLmz8AAAAldEVYdGRhdGU6bW9kaWZ5ADIw
                // MTktMDMtMDZUMjM6NDA6MjkrMDU6MDBZliODAAAAUXRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9o
                // b21lL3N2Z2ltYWdlL3B1YmxpY19odG1sL2Rvd25sb2Fkcy9hcnJvdy1sZWZ0LTU1NTY0XzQ5Ny5z
                // dmeYiNU8AAAAAElFTkSuQmCC" />
                // </svg>

//     )
//   }
// }

// ReactDOM.render(<Arrows />, document.getElementById('app'));







// CODE PLAN

// 1. FULLY FUNCTIONAL ARROWS
// each *locArrow location = (half of *locArrow x and y) + (half of *locArrow.attr('transform') x and y)
// 
// *locArrows component renders inactive html *locArrow group or user-specific html *locArrow for each html *loc depending on *log-in status
// 
// on *loc_target click, slider value = *loc_target rotation; on slider value change, *loc_target rotation = slider value
// 
// *saveButton appears when all html *locArrows !inactive

// 2. DYNAMIC LOCATION COLORS
// hover on *loc adds *loc_hover class(? or is pseudo element enought), *loc_hover has highlight color [DESKTOP-ONLY feature... or atleast unreliable for mobile; need to test devices]






// SAVEBUTTON {CONNECTED TO STATE OF LOCARROWS COMPONENT}
// *saveButton appears when all html *locArrows !inactive
// click controls html2canvas save & Firebase update

// LOCARROWS {CONNECTED TO VAR LOGGEDIN}: 
// depending on var loggedIn, renders either inactive html *locArrow group or user-specific html *locArrow for each html *loc
// click on *loc adds *loc_target class (and sets slider value to loc_target's rotation), adds *loc_inactive to other *loc; *loc_target has highlight color, *loc-inactive dims *loc html

// SLIDER
// click on *loc changes *slider value to *loc_target's corresponding *locArrow rotation
// changing *slider value updates *loc_target's corresponding *locArrow rotation




// FIREBASE






// arrows are fully functional
// dynamic location colors are not
// database is not functional
// DATABASE
// position canvas for html to canvas absolutely and move it out of sight, might need to include 'ignores' ie. >  document.getElementById('button').addEventListener("click", () => canvg(canvas, svg, { ignoreMouse: true, ignoreAnimation: true }))
















}
