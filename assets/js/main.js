


var input_array_size=document.getElementById('array-size'), array_size=input_array_size.value;
var input_generate_array=document.getElementById("generate-array");
var input_sort_speed=document.getElementById("sort-speed");


var button_algo=document.querySelectorAll(".algo-button button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";



input_generate_array.addEventListener("click", generateNewArray);
input_array_size.addEventListener("input", updateArraySize);

function generateNewArray(){
    cont.innerHTML="";

    for(var i = 0; i < array_size; i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(input_array_size.max - input_array_size.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.2;
        divs[i].style=" margin:0%" + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function updateArraySize(){
    array_size=input_array_size.value;
    generateNewArray();
}

window.onload=updateArraySize();


for(var i = 0; i < button_algo.length; i++){
    button_algo[i].addEventListener("click", runSortingAlgo);
}

function disabledButton(){
    for(var i=0;i<button_algo.length;i++)
    {
        button_algo[i].classList=[];
        button_algo[i].classList.add("butt_locked");

        button_algo[i].disabled=true;
        input_array_size.disabled=true;
        input_generate_array.disabled=true;
        input_sort_speed.disabled=true;
    }
}

function runSortingAlgo(){
    disabledButton();

    this.classList.add("active");
    switch(this.innerHTML)
    {
        case "Bubble":
            bubbleSort();
            break;

        case "Selection":
            selectionSort();
            break;

        case "Insertion":
            insertionSort();
            break;

        case "Merge":
            mergeSort();
            break;

        case "Quick":
            quickSort();
            break;
            
        case "Heap":
            heapSort();
            break;
    }
}
