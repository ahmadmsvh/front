var x = "";
var xx = "+";
var y = 0;
operator = "+";
oper_reap_counter = 1;
equal_sgn_flg = false;

function get_botton(value){
    if (equal_sgn_flg == true){
        clean();
    }
    value_num = parseInt(value);
    if (!(isNaN(value_num))){
        x += value;
        document.getElementById("input-lcd").innerHTML = x;
        xx += value;
        oper_reap_counter = 0;
    }
    else if (isNaN(value_num) & oper_reap_counter == 0){
        x += value;
        document.getElementById("input-lcd").innerHTML = x;
        xx += value;
        oper_reap_counter = 1;
    }
    
}
function get_operator(value){
    if (oper_reap_counter == 0){
        console.log(xx,y,operator); 
        answer = calculate(y,xx,operator);
        operator = value;
        y = answer;
        document.getElementById("output-lcd").innerHTML = answer;
        x = answer;
        xx = "";
        if (equal_sgn_flg == true){
            clean();
        }
        if (value == "="){
            equal_sgn_flg = true;
        }
    }   
}
function calculate(a,b,operator){
    if (operator == "+"){
        b = b.substr(1);
        return parseFloat(a) + parseFloat(b);
    }
    else if (operator == "-"){
        b = b.substr(1);
        return a - b;
    }
    else if (operator == "x"){
        b = b.substr(1);
        return a * b;
        // x.toExponential(6);
    }
    else if (operator == "/"){
        b = b.substr(1);
        return a / b;
    }
}
function clean(){
    document.getElementById("input-lcd").innerHTML = "";
    document.getElementById("output-lcd").innerHTML = "";
    x = "";
    xx = "+";
    y = 0;
    operator = "+";
    oper_reap_counter = 1;
    equal_sgn_flg = false;
}