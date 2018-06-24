var body = document.getElementById('background'),
    css = document.querySelector('h3'),
    color1 = document.getElementById('color-1'),
    color2 = document.getElementById('color-2'),
    randomizeBtn = document.getElementById('random-background');

//Sows the current color gradient on page load
body.onload = function(){
    css.innerText = getComputedStyle(body).backgroundImage;
    color1.value = '#ff0000'; 
    color2.value = '#ffff00'; 
};

/**Input events is a special type of event that we will use for the color input */

/**EVENT LISTENERS */

//Event listener for color 1
color1.addEventListener('input', setGradient);

//Event listener for color 2
color2.addEventListener('input', setGradient);

//when randomize button gets clicks
randomizeBtn.addEventListener('click', randomizeBackground);

//helper function that sets the color
function setGradient(){
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

    //Writes te css styles on the 'h3' element
    css.textContent = body.style.background;
}

//randomize the background gradient
function randomizeBackground(){
    color1.value = generateRandomColor(),
    color2.value = generateRandomColor();
    setGradient();
}

//Helper function to generate a random color value
function generateRandomColor(){
    var digits = '0123456789abcdef';
    color = '#';
    for(i=0; i<6; i++){
        color += digits[Math.floor(Math.random()*16)];
    }
    return color;
}