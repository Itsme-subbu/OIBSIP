
let fahrenheit=document.getElementById("fahrenheit");
let celsius=document.getElementById("celsius");
let num=document.getElementById("mynum");
let result=document.getElementById("result");
function mytemp(){
    console.log(num.value);
    if (fahrenheit.checked){
        let num2=((num.value-32)*5/9).toFixed(2);
        result.innerHTML=`Result : ${num2}°C`
    }
    if (celsius.checked){
        let num2=(num.value*9/5+32).toFixed(2);
        result.innerHTML=`Result : ${num2}°F`
    }
}
