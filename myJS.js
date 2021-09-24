/*
* Excercise 1
* <div id = "color-block">
    <p id="center-text">The color is: <span id = "color-name">#F08080</span> </p>
</div>
*/


const box = document.getElementById("color-block");
const colorname = document.getElementById("color-name");

box.addEventListener("click", changeColor);



/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
  //Write a condition determine what color it should be changed to
  const cl = box.getAttribute("class");
  var pink = '#F08080';
  if (colorname.innerHTML == pink) {
    box.style.backgroundColor = '#89CFF0';  //change the background color using JS
    colorname.innerHTML='#89CFF0'; //Change the text of the color using the span id color-name
  } 

  else{
    colorname.innerHTML='#F08080'; //change the background color using JS
    box.style.backgroundColor = '#F08080'; //Change the text of the color using the span id color-name

  }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
*<input type="number" id="f-input" name="f-input" placeholder="Fahrenheit degree &#8457">
<input type="submit" value="convert" id = "convertbtn">

<p>Celsius: <span id = "c-output"></span> &#8451</p> 
Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
const btn = document.getElementById("convertbtn");
const output = document.getElementById("c-output");
btn.addEventListener("click", convertTemp);

function convertTemp(){
  let value = document.getElementById("f-input").value; //Calculate the temperature here
  let answer = (value -32) *5/9;
  
  output.innerHTML  = answer; //Send the calculated temperature to HTML
  
}

