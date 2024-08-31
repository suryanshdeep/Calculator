document.addEventListener("DOMContentLoaded",()=>{
    let display=document.getElementById('display');
    let currentInput='';
    let operator='';
    let prevInput='';
    document.querySelectorAll(".btn").forEach(button =>{
        button.addEventListener("click",()=>{
            const action=button.dataset.action;
            const value=button.textContent;
            if(action==="number"){
                currentInput+=value;
                display.textContent=currentInput;
            }
            else if(action==="operator"){
                if(currentInput==="" && value==="-"){
                    currentInput=value;
                    display.textContent=currentInput;
                }
                else if(currentInput!==''){
                    prevInput=currentInput;
                    operator=value;
                    currentInput='';     
                }
            }
            else if(action==="result"){
                if(prevInput!==''&& currentInput!=='' && operator!==''){
                const ans=eval(prevInput,currentInput,operator);
                prevInput='';
                operator='';
                currentInput='';
                display.textContent=ans;
                }
            }
            else if(action==="clear"){
                prevInput='';
                currentInput='';
                operator='';
                display.textContent=0;
            }
        });
    });
    function eval(prevInput,currentInput,operator){
        currentInput=parseFloat(currentInput);
        prevInput=parseFloat(prevInput);
        switch(operator){
            case '+':
                return prevInput+currentInput;
            case '-':
              return prevInput-currentInput;
            case '/':
                return prevInput/currentInput;
            case 'x':
                return prevInput*currentInput;
            default:
                return currentInput;
        }
    }
    
});