var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED1 = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
var LED2 = new Gpio(17, 'out');
var LED3 = new Gpio(27, 'out');


var blinkInterval1 = setInterval(blinkLED1, 200); //run the blinkLED function every 250ms
var blinkInterval2 = setInterval(blinkLED2, 400);
var blinkInterval3 = setInterval(blinkLED3, 100);

function blinkLED1() { //function to start blinking
  if (LED1.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED1.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    LED1.writeSync(0); //set pin state to 0 (turn LED off)
  }
}

function blinkLED2() { //function to start blinking
  if (LED2.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED2.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    LED2.writeSync(0); //set pin state to 0 (turn LED off)
  }
}

function blinkLED3() { //function to start blinking
  if (LED3.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED3.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    LED3.writeSync(0); //set pin state to 0 (turn LED off)
  }
}


function endBlink() { //function to stop blinking
  clearInterval(blinkInterval1); // Stop blink intervals
  clearInterval(blinkInterval2);
  clearInterval(blinkInterval3);
  LED1.writeSync(0); // Turn LED off
  LED2.writeSync(0);
  LED3.writeSync(0);
  LED1.unexport(); // Unexport GPIO to free resources
  LED2.unexport()
  LED3.unexport()
}

setTimeout(endBlink, 10000); //stop blinking after 5 seconds 
