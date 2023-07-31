var display = ""
var button = document.querySelectorAll(".button");
Array.from(button).forEach(function(button){
   button.addEventListener("click", function(event){
    if(event.target.innerHTML == "="){
        display = eval(display)
        document.querySelector("input").value = display;

    }
    else if(event.target.innerHTML == "AC"){
        display = ""
        document.querySelector("input").value = display;

        }
    
    else{
    console.log(event.target);
    display = display + event.target.innerHTML ;
    document.querySelector("input").value = display;
    }
   
    
});
});
