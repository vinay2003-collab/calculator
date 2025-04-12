document.addEventListener("DOMContentLoaded",function(){
    const inputscreenarea=document.getElementById("input-screen")
    const displayarea=document.getElementById("display")
    const buttons=document.querySelectorAll("button")
    let expression="";
    let shouldClearInput=false;
    
    
    //clear input screen
    function clearInputScreen(){
        //reset expression to empty
        expression="";
        inputscreenarea.value="";
        displayarea.value="";
        shouldClearInput=false;
    }   
    //backspace function (delete last character)
    function deleteLastCharacter(){
        expression = expression.slice(0, -1);
        //update the input screen with new value
        inputscreenarea.value=expression;
    }
    //Evaluate Expression()
    function EvaluateExpression(){
        try{
            const result=eval(expression).toString();
            displayarea.value=expression;
            inputscreenarea.value=result;
            shouldClearInput=true;
            expression="";
        }  catch(error){
            inputscreenarea.value="Error";
        }
    }
    function addOperator(operator){
        if(shouldClearInput){
            clearInputScreen();
        }
        expression =expression + operator;
        inputscreenarea.value=expression;
    }
    function appendToExpression(text){
         if(shouldClearInput){
            clearInputScreen()
         }
         expression=expression+ text;
         inputscreenarea.value=expression;
    }
    //add event listener to each button
    buttons.forEach(function(button){
        button.addEventListener("click",function(){
            if(button.classList.contains("clear-icon")){
                clearInputScreen();
            }
            else if(button.classList.contains("delete-icon")){
                deleteLastCharacter();
            }
            else if(button.classList.contains("divide-icon")){
                addOperator("/");
            }
            else if(button.classList.contains("equals-icon")){
                EvaluateExpression();
            }
            else if(button.classList.contains("multiply-icon")){
                addOperator("*");
            }
            else if(button.classList.contains("plus-icon")){
                addOperator("+");
            }
            else if(button.classList.contains("minus-icon")){
                addOperator("-");
            }
            else if(button.classList.contains("percentage-icon")){
                addOperator("%");
            }
            else{
                appendToExpression(button.innerText);
            }
        });
    });
    });