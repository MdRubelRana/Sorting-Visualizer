var speed=1000;

input_sort_speed.addEventListener("input", sortSpeed);

function sortSpeed()
{
    var visible_speed=input_sort_speed.value;
    switch(parseInt(visible_speed)){
        case 1: 
            speed = 1;
            break;
        case 2: 
            speed = 10;
            break;
        case 3: 
            speed = 100;
            break;
        case 4: 
            speed = 1000;
            break;
        case 5: 
            speed = 10000;
            break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        
}

var delay_time=10000/(Math.floor(array_size/10)*speed);   
var c_delay=0;

function divUpdate(cont, height, color){
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function enableButton(){
    window.setTimeout(function(){
        for(var i = 0; i < button_algo.length; i++)
        {
            button_algo[i].classList=[];
            button_algo[i].classList.add("butt_unselected");

            button_algo[i].disabled=false;
            input_array_size.disabled=false;
            input_generate_array.disabled=false;
            input_sort_speed.disabled=false;
        }
    },c_delay+=delay_time);
}