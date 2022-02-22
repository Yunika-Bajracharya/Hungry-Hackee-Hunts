//-----------------------------------------------------------------------------------------------

//Selection Sort
// asynchronous function to perform "Selection Sort"
async function SelectionSort(l,r,delay = 100) {
    let bars = document.querySelectorAll(".block");
    // Assign 0 to min_idx
    var min_idx = l;
    document.
    getElementsByClassName("range")[0].innerText = `[${l},${r}]`;
    for (var i = 0; i < r+1; i += 1) {
    
        // Assign i to min_idx
        min_idx = i;
    
        // Provide color to the ith bar
        bars[i].style.backgroundColor = "red";
        for (var j = i + 1; j < bars.length; j += 1) {
    
        // Provide color to the jth bar
        bars[j].style.backgroundColor = "yellow";
            
        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
            resolve();
            }, 300)
        );
    
        // To store the integer value of jth bar to var1
        var val1 = parseInt(bars[j].childNodes[0].innerHTML);
    
        // To store the integer value of (min_idx)th bar to var2
        var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
            
        // Compare val1 & val2
        if (val1 < val2) {
            if (min_idx !== i) {
    
            // Provide  color to the (min-idx)th bar
            bars[min_idx].style.backgroundColor = " pink";
            }
            min_idx = j;
        } else {
    
            // Provide  color to the jth bar
            bars[j].style.backgroundColor = " pink";
        }
        }
    
        // To swap ith and (min_idx)th bar
        var temp1 = bars[min_idx].style.height;
        var temp2 = bars[min_idx].childNodes[0].innerText;
        bars[min_idx].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;
        
        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 300)
        );
    
        // Provide skyblue color to the (min-idx)th bar
        bars[min_idx].style.backgroundColor = "pink";
    
        // Provide lightgreen color to the ith bar
        bars[i].style.backgroundColor = " #6b5b95";

        
    }
    }
    