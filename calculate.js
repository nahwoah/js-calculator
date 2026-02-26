const variable1 = document.querySelector("#variable1")
const btn = document.querySelector(".buttons");


vars = {
    var1: '',
    var2: '',
    result: ''
};

mode = {
    var1: true,
    add: false,
    subtract: false,
    multiply: false,
    divide: false,
    operation: false,
    cleaned: false,
}

btn.addEventListener("click", (event) => {

    let target = event.target;



    switch (target.id) {
        case 'zero':
            if (mode.operation == true) {

                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '0';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;

            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = '0';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '0';
                    variable1.textContent = vars.var1;
                }
            } else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = '0';
                    variable1.innerHTML = vars.var2;
                } else {
                    vars.var2 += '0';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'one':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '1';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '1';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '1';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '1';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '1';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '1';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'two':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '2';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '2';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '2';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '2';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '2';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '2';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'three':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '3';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '3';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '3';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '3';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '3';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '3';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'four':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '4';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '4';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '4';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '4';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '4';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '4';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'five':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '5';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '5';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '5';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '5';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '5';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '5';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'six':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '6';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '6';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '6';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '6';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '6';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '6';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'seven':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '7';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '7';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '7';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '7';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '7';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '7';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'eight':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '8';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '8';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '8';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '8';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '8';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '8';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'nine':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '9';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '9';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '9';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '9';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '9';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '9';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;

        case 'comma':
            console.log(vars.var1.indexOf('.'))
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '0.';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '0.';
                    variable1.textContent = vars.var1;
                }else if(vars.var1.indexOf('.') != -1){
                    break;
                }else{
                    vars.var1 += '.';
                    variable1.textContent = vars.var1;
                }
            } else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '0.';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '.';
                    variable1.innerHTML = vars.var2;
                }
            }

            break;
        case 'clear':
            vars.var1 = ''
            vars.var2 = ''
            vars.result = ''
            variable1.innerHTML = '';
            mode.var1 = true;
            mode.operation = false;
            mode.add = false;
            mode.subtract = false;
            mode.multiply = false;
            mode.divide = false;
            break;
        case 'deletion':
            if (mode.var1 === true){
                vars.var1 = vars.var1.slice(0, -1);
                variable1.innerHTML = vars.var1;

            }else{
                vars.var2 = vars.var2.slice(0, -1);
                variable1.innerHTML = vars.var2;
            }
            break;
        case 'division':
            if(mode.add == true){
                
                result = Number(vars.var1) + Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            } else if(mode.multiply == true){
                result = Number(vars.var1) * Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            } else if(mode.subtract == true){
                result = Number(vars.var1) - Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            } else if(mode.divide == true){
                result = Number(vars.var1) / Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            }
            mode.var1 = false;
                
            mode.add = false;
            mode.subtract = false;
            mode.multiply = false;
            mode.divide = true;
            mode.cleaned = false;
            break;
        case 'multipplication':
            if(mode.add == true){
                
                result = Number(vars.var1) + Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            } else if(mode.subtract == true){
                result = Number(vars.var1) - Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            } else if(mode.divide == true){
                result = Number(vars.var1) / Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            } else if(mode.multiply == true){
                result = Number(vars.var1) * Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            }
            mode.var1 = false;
                
            mode.add = false;
            mode.subtract = false;
            mode.multiply = true;
            mode.divide = false;
            mode.cleaned = false;
            break;
        case 'subtraction':
            if(mode.add == true){
                
                result = Number(vars.var1) + Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                //mode.operation = true;
            } else if(mode.multiply == true){
                result = Number(vars.var1) * Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                //mode.operation = true;
            } else if(mode.divide == true){
                result = Number(vars.var1) / Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                //mode.operation = true;
            } else if(mode.subtract == true){
                result = Number(vars.var1) - Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            }
            
            mode.var1 = false;
                
            mode.add = false;
            mode.subtract = true;
            mode.multiply = false;
            mode.divide = false;
            mode.cleaned = false;
            break;
        case 'addition':
            if(mode.subtract == true){
                
                result = Number(vars.var1) - Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                //mode.operation = true;
            } else if(mode.multiply == true){
                result = Number(vars.var1) * Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                //mode.operation = true;
            } else if(mode.divide == true){
                result = Number(vars.var1) / Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                //mode.operation = true;
            } else if(mode.add == true){
                result = Number(vars.var1) + Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            }
            mode.var1 = false;
                
            mode.add = true;
            mode.subtract = false;
            mode.multiply = false;
            mode.divide = false;
            mode.cleaned = false;
            break;
        case 'equal':
            if (mode.add == true){
                
                result = Number(vars.var1) + Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
                mode.operation = true;
            } else if(mode.subtract == true){
                
                result = Number(vars.var1) - Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
                mode.operation = true;
            } else if (mode.multiply == true){
                
                result = Number(vars.var1) * Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
                mode.operation = true;
            } else if(mode.divide == true){
                
                result = Number(vars.var1) / Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
                mode.operation = true;
            }
            break;
    }
})



function logKey(e) {
  switch (e.code) {
        case 'Numpad0':
        case 'Digit0':
            if (mode.operation == true) {

                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '0';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;

            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = '0';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '0';
                    variable1.textContent = vars.var1;
                }
            } else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = '0';
                    variable1.innerHTML = vars.var2;
                } else {
                    vars.var2 += '0';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'Numpad1':
        case 'Digit1':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '1';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '1';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '1';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '1';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '1';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '1';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'Numpad2':
        case 'Digit2':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '2';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '2';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '2';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '2';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '2';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '2';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'Numpad3':
        case 'Digit3':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '3';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '3';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '3';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '3';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '3';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '3';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'Numpad4':
        case 'Digit4':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '4';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '4';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '4';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '4';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '4';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '4';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'Numpad5':
        case 'Digit5':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '5';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '5';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '5';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '5';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '5';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '5';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'Numpad6':
        case 'Digit6':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '6';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '6';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '6';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '6';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '6';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '6';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'Numpad7':
        case 'Digit7':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '7';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '7';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '7';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '7';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '7';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '7';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'Numpad8':
        case 'Digit8':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '8';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '8';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '8';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '8';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '8';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '8';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'Numpad9':
        case 'Digit9':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '9';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '9';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '9';
                    variable1.textContent = vars.var1;
                }
            } else if(mode.add == true || mode.subtract == true || mode.divide == true || mode.multiply ==true){
                if(mode.cleaned == false){
                    vars.var2 = '';
                    mode.cleaned = true;
                }
                vars.var2 += '9';
                variable1.innerHTML = vars.var2;
            }else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '9';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '9';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;

        case 'NumpadDecimal':
        case 'Period':
            console.log(vars.var1.indexOf('.'))
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '0.';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '0.';
                    variable1.textContent = vars.var1;
                }else if(vars.var1.indexOf('.') != -1){
                    break;
                }else{
                    vars.var1 += '.';
                    variable1.textContent = vars.var1;
                }
            } else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '0.';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '.';
                    variable1.innerHTML = vars.var2;
                }
            }

            break;
        case 'clear':
            vars.var1 = ''
            vars.var2 = ''
            vars.result = ''
            variable1.innerHTML = '';
            mode.var1 = true;
            mode.operation = false;
            mode.add = false;
            mode.subtract = false;
            mode.multiply = false;
            mode.divide = false;
            break;
        case 'Backspace':
            if (mode.var1 === true){
                vars.var1 = vars.var1.slice(0, -1);
                variable1.innerHTML = vars.var1;

            }else{
                vars.var2 = vars.var2.slice(0, -1);
                variable1.innerHTML = vars.var2;
            }
            break;
        case 'NumpadDivide':
            if(mode.add == true){
                
                result = Number(vars.var1) + Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            } else if(mode.multiply == true){
                result = Number(vars.var1) * Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            } else if(mode.subtract == true){
                result = Number(vars.var1) - Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            } else if(mode.divide == true){
                result = Number(vars.var1) / Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            }
            mode.var1 = false;
                
            mode.add = false;
            mode.subtract = false;
            mode.multiply = false;
            mode.divide = true;
            mode.cleaned = false;
            break;
        case 'NumpadMultiply':
            if(mode.add == true){
                
                result = Number(vars.var1) + Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            } else if(mode.subtract == true){
                result = Number(vars.var1) - Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            } else if(mode.divide == true){
                result = Number(vars.var1) / Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            } else if(mode.multiply == true){
                result = Number(vars.var1) * Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            }
            mode.var1 = false;
                
            mode.add = false;
            mode.subtract = false;
            mode.multiply = true;
            mode.divide = false;
            mode.cleaned = false;
            break;
        case 'NumpadSubtract':
            if(mode.add == true){
                
                result = Number(vars.var1) + Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                //mode.operation = true;
            } else if(mode.multiply == true){
                result = Number(vars.var1) * Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                //mode.operation = true;
            } else if(mode.divide == true){
                result = Number(vars.var1) / Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                //mode.operation = true;
            } else if(mode.subtract == true){
                result = Number(vars.var1) - Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            }
            
            mode.var1 = false;
                
            mode.add = false;
            mode.subtract = true;
            mode.multiply = false;
            mode.divide = false;
            mode.cleaned = false;
            break;
        case 'NumpadAdd':
            if(mode.subtract == true){
                
                result = Number(vars.var1) - Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                //mode.operation = true;
            } else if(mode.multiply == true){
                result = Number(vars.var1) * Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                //mode.operation = true;
            } else if(mode.divide == true){
                result = Number(vars.var1) / Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                //mode.operation = true;
            } else if(mode.add == true){
                result = Number(vars.var1) + Number(vars.var2);
                vars.var1 = result
                variable1.textContent = result;
                
            }
            mode.var1 = false;
                
            mode.add = true;
            mode.subtract = false;
            mode.multiply = false;
            mode.divide = false;
            mode.cleaned = false;
            break;
        case 'NumpadEnter':
            if (mode.add == true){
                
                result = Number(vars.var1) + Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
                mode.operation = true;
            } else if(mode.subtract == true){
                
                result = Number(vars.var1) - Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
                mode.operation = true;
            } else if (mode.multiply == true){
                
                result = Number(vars.var1) * Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
                mode.operation = true;
            } else if(mode.divide == true){
                
                result = Number(vars.var1) / Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
                mode.operation = true;
            }
            break;
    }
}

addEventListener("keypress", logKey);
