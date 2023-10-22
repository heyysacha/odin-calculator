let screen = document.querySelector('#screen');
let buttons = document.querySelector('#buttons').children;
let operands = document.querySelectorAll('.operands');
let numbers = document.querySelectorAll('.num');


let n1 = '';
let operand = '';
let n2 = '';

// allows the first button click to clear the placeholder text
let screenClear = true;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e){
        
        //clears the screen from the placeholder text and replaces it with the number of the button clicked
        if (screen.innerText === '8008135' && screenClear === true) {
            screenClear = false;
            screen.innerText = '';
        }
        
        // turns all other buttons' background black again
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = 'black';
        }
        
        // turns the clicked button background gray       
        e.target.style.backgroundColor = 'rgb(77, 77, 77)';
        
        
        //making the math work 
        //numbers buttons  

        if (e.target.classList.contains('num'))
        //setting n1
            if (screen.innerText.indexOf('+') == -1 && 
                screen.innerText.indexOf('-') == -1 && 
                screen.innerText.indexOf('/') == -1 && 
                screen.innerText.indexOf('X') == -1)
        {
            screen.innerText = screen.innerText.concat(e.target.innerText);
            n1 = parseInt(screen.innerText);
        } 
        //setting n2
            else if (screen.innerText.indexOf('+') != -1 || 
                    screen.innerText.indexOf('-') != -1 || 
                    screen.innerText.indexOf('/') != -1 || 
                    screen.innerText.indexOf('X') != -1) 
                        {
                            screen.innerText = screen.innerText.concat(e.target.innerText);
                            n2 = screen.innerText.split(operand);
                            n2 = parseInt(n2[n2.length - 1]);
                        }
       
        
        //If there are two numbers, evaluate them when you press and operator. Store the result
        
        if (e.target.classList.contains('operands')) {
            if (screen.innerText != '')
            {
                var lastChar = screen.innerText[screen.innerText.length -1];
                if (lastChar != '+' && lastChar != '-' && lastChar != '/' && lastChar != 'X')
                    {
                    if (screen.innerText.indexOf('+') === -1 &&
                        screen.innerText.indexOf('-') === -1 &&
                        screen.innerText.indexOf('/') === -1 &&
                        screen.innerText.indexOf('X') === -1)  
                        {
                            screen.innerText = screen.innerText.concat(e.target.innerText);
                            operand = e.target.innerText;
                        }
                        
                        else {
                            if (operand == '+') 
                            {
                                console.log(typeof(n1), typeof(n2));
                                n1 = n1 + n2;
                            }
                            else if (operand == '-') 
                            {
                                n1 = n1 - n2;
                            }
                            else if (operand == '/') 
                            {
                                n1 = n1 / n2;
                            }
                            else if (operand == 'X') 
                            {
                                n1 = n1 * n2;
                            }
                            n2 = '';
                            screen.innerText = `${n1}${e.target.innerText}`;
                            operand = e.target.innerText;
                        }
                    }
                    else {
                        screen.innerText = screen.innerText.replace(operand, e.target.innerText);
                        operand = e.target.innerText;
                    }
                }
                else {
                    screen.innerText = screen.innerText;
                }
        } 
        
    }
)
}


//equals button
let equals = document.querySelector('#equals');

equals.addEventListener('click', () => {
    let total = '';
    
    if (screen.innerText == '')
    {
        screen.innerText = screen.innerText;
    }
    else {
        if (screen.innerText.indexOf(operand) == -1) {
            screen.innerText = screen.innerText;
        }
        else {
            if (operand == '+') {
                total = n1 + n2;
            }
            else if (operand == '-') {
                total = n1 - n2;
            }
            else if (operand == '/') {
                total = n1 / n2;
            }
            else if (operand == 'X') {
                total = n1 * n2;
            }
            n1 = total;
            n2 = '';
            screen.innerText = n1;
        }
    }
})


//clear button
let clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    screen.innerText = '';
    n1 = '';
    n2 = '';
    operand = '';
});