function enterNumber(){
    let u_input = Number(prompt("Enter a number between 2 - 10 "));
    console.log(u_input);
    return u_input;
    
}

function validateNumber(input){
    if(input <=1 || input>=11)
    {
        console.log(false)
        document.getElementById("validity").innerHTML = `Your input ${input} was not valid. The valid input number is between 2 and 10. Please reload this page and try again`;
        document.getElementById("validity").style.color = "red";
    }

    else
    {
        console.log(true);
        document.getElementById("validity").innerHTML = `The value ${input} you typed was valid`;
    }
}

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

function displayPyriamid(input){
    let N = input;
    let i;
    let k;
    let line;
    

}