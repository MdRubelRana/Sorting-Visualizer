function bubbleSort()
{
    c_delay=0;

    for(var i = 0; i < array_size - 1; i++)
    {
        for(var j = 0; j < array_size - i - 1; j++)
        {
            divUpdate(divs[j], div_sizes[j], "yellow");
            if(div_sizes[j] > div_sizes[j + 1])
            {
                divUpdate(divs[j], div_sizes[j], "red");
                divUpdate(divs[j + 1], div_sizes[j + 1], "red");

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                divUpdate(divs[j], div_sizes[j], "red");
                divUpdate(divs[j + 1], div_sizes[j + 1], "red");
            }
            divUpdate(divs[j], div_sizes[j], "#2d3436");
        }
        divUpdate(divs[j], div_sizes[j], "green");
    }
    divUpdate(divs[0], div_sizes[0], "green");

    enableButton();
}