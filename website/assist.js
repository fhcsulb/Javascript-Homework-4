//this is a function to prompt the user to enter their numerical input
function enterNumber(){
    let u_input = Number(prompt("Enter a number between 2 - 10 "));
    console.log(u_input);
    return u_input;
    
}

//validate that the number was some valid input. 
//if it wasn't then prompt the user to reload the page. 
function validateNumber(input){
    if(input <=1 || input>=11)
    {
       
        document.getElementById("validity").innerHTML = `Your input ${input} was not valid. The valid input number is between 2 and 10. Please reload this page and try again.`;
        document.getElementById("validity").style.color = "red";
       return false;
    }

    else
    {
       
        document.getElementById("validity").innerHTML = `Your input number was ${input}`;
        return true;
    }
}

//function that calculates how many times you need to divide by
//2 to get a value that is smaller than 1 millionth.
function DivideMillionCount(input){
    let N = input;
    let  count = 0;
    while(N > 0.000001)
    {
        N = N/2
        count+=1;
    }
    console.log("Count: "+count);
    document.getElementById("million").innerHTML = `The number of times to divide the number ${input} by 2 to get a value less than one-millionth is ${count}`;
}

//function that displays the * pyriamid. 
function displayPyriamid(input){
    let N = input;
    let arr = [];
    let i;
    let k;
    let line;
    let pyriamid_section

    for(i = 0; i < N; i++)
    {
        string="";
        for(k=i;k<N;k++)
        {
            string+= "*";
        }
        console.log(string);
        arr.push(string);

    }

   for (let i in arr)
   {
      pyriamid_section = document.getElementById("pyriamid");
      line = document.createElement("p");
      let stars = document.createTextNode(arr[i]);
      line.appendChild(stars);
      pyriamid_section.appendChild(line);
   }

   //manipulate the pyriamid section color and style here. Do this so that 
   //only if the pyriamid is created will the green border show up.
    pyriamid_section.style.borderColor = "green";
    pyriamid_section.style.borderStyle = "solid";

}