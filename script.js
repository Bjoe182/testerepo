document.addEventListener('DOMContentLoaded', function(){

    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '0';
    let operator = null;
    let previousInput = null;
    let expression = '';

    buttons.forEach(buttons => {
        button.addEventListener('click', () => { 
            const buttonText = button.texContent;

            if (button.id === 'c') {
                currentInput = '0';
                operator = null;
                previousInput = null;
                expression = '';
                display.value = currentInput; 
           
            }  else if (button.id === 'ce') {
                currentInput = '0';
                display.value = currentInput;
            
            }  else if (button.id === 'backspace') {
                currentInput = currentInput.slice(0, -1) || '0';
                display.value = currentInput;
            
            }  else if (button.id === 'equals') {
                if (operator && previousInput !== null) {
                    currentInput = calculate(parseFloat(previousInput), parseInt(currentInput), operator)
                    operator = null;
                    previousInput = null;
                    expression = '';
                    display.value = currentInput;
                
                }
            }else if (isOperator(buttonText)) {
                if (operator && previousInput !== null){
                    currentInput = calculate(parseFloat(previousInput), parseInt(currentInput), operator)
                }
                operator = buttonText;
                previousInput = currentInput;
                expression += ' ' + previousInput + ' ' + operator;
                display.value = expression;
                currentInput = '';

            }else if (button.id === 'plusminus') {
                currentInput = String(parseFloat(currentInput)* -1);
                display.value = currentInput;
            
            }else if (button.id === 'percent') {  
                currentInput = String(parseFloat(currentInput) / 100);
                display.value = currentInput;

            }else if (button.id === 'inverse') {  
                currentInput = String(parseFloat(currentInput));
                display.value = currentInput;    
            
            }else if (button.id === 'square') {  
                currentInput = String(Math.pow(parseFloat(currentInput), 2));
                display.value = currentInput;        
            
            }else if (button.id === 'sqrt') {  
                currentInput = String(Math.sqrt(parseFloat(currentInput)));
                display.value = currentInput; 
            
            }else {
                if (currentInput === '0') {
                    currentInput - buttonText;
                }else {
                    currentInput = buttonText;
                }
                display.value = expression + ' ' + currentInput
            }   

            
            
                });
            }
          }); 

          function isOperator
    });

});
