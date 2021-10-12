 var inbox=document.querySelector(".text-paragraph");
 var clearAll=document.querySelector(".clearAll");
 var clear=document.querySelector(".clear");
 var nine=document.querySelector(".nine");
 var eight=document.querySelector(".eight");
 var seven=document.querySelector(".seven");
 var six=document.querySelector(".six");
 var five=document.querySelector(".five");
 var four=document.querySelector(".four");
 var three=document.querySelector(".three");
 var two=document.querySelector(".two");
 var one= document.querySelector(".one");
 var modulo=document.querySelector(".modulo");
 var divison=document.querySelector(".division");
 var multiply=document.querySelector(".multiply");
 var minus=document.querySelector(".minus");
 var plus=document.querySelector(".plus");
 var decimal=document.querySelector(".decimal");
 var zero=document.querySelector(".zero");
 var equal=document.querySelector(".equal");

document.querySelector(".theme").addEventListener("click",function(){
    document.querySelector("body").classList.toggle("dark-body");
    inbox.classList.toggle("dark-para");
    document.querySelector(".main-section").classList.toggle("dark-section");
    clearAll.classList.toggle("dark-btn");
    clear.classList.toggle("dark-btn");
    nine.classList.toggle("dark-btn");
    eight.classList.toggle("dark-btn");
    seven.classList.toggle("dark-btn");
    six.classList.toggle("dark-btn");
    five.classList.toggle("dark-btn");
    four.classList.toggle("dark-btn");
    three.classList.toggle("dark-btn");
    two.classList.toggle("dark-btn");
    one.classList.toggle("dark-btn");
    modulo.classList.toggle("dark-btn");
    divison.classList.toggle("dark-btn");
    multiply.classList.toggle("dark-btn");
    minus.classList.toggle("dark-btn");
    plus.classList.toggle("dark-btn");
    decimal.classList.toggle("dark-btn");
    zero.classList.toggle("dark-btn");
    document.querySelector(".theme").classList.toggle("dark-btn");
    equal.classList.toggle("dark-btn");
   
});

var originalVal="";
zero.addEventListener("click",function(){
    addNumber("0")});
one.addEventListener("click",function(){
    addNumber("1")});
two.addEventListener("click",function(){
    addNumber("2")});
three.addEventListener("click",function(){
    addNumber("3")
});
four.addEventListener("click",function(){
    addNumber("4")
});
five.addEventListener("click",function(){
    addNumber("5")
});
six.addEventListener("click",function(){
    addNumber("6")
});
seven.addEventListener("click",function(){
    addNumber("7")
});
eight.addEventListener("click",function(){
    addNumber("8")
});
nine.addEventListener("click",function(){
    addNumber("9")
});
plus.addEventListener("click",function(){
    addNumber("+")
});
minus.addEventListener("click",function(){
    addNumber("-")
});
modulo.addEventListener("click",function(){
    addNumber("%")
});
divison.addEventListener("click",function(){
    addNumber("/")
});
multiply.addEventListener("click",function(){
    addNumber("*")
});
decimal.addEventListener("click",function(){
    addNumber(".")
});
function addNumber(value){
    originalVal+=value;
    inbox.textContent=originalVal; 

}
clearAll.addEventListener("click",function(){
    inbox.textContent="";
    originalVal="";
});
   
    clear.addEventListener("click",function(){
        inbox.textContent=inbox.textContent.slice(0,inbox.textContent.length-1);
       originalVal=originalVal.slice(0,originalVal.length-1);
        
         
        


    });



equal.addEventListener("click",function(){
   if(originalVal.includes("+")===true){
       calculation("+");
   }
   else if(originalVal.includes("-")===true){
       calculation("-");
   }
   else if(originalVal.includes("*")===true){
       calculation("*");
   }
   else if(originalVal.includes("%")===true){
    calculation("%");
   }
   else if(originalVal.includes("/")===true){
    calculation("/");
   }
   
});
function calculation(sign){
   
        var retriveValue=originalVal.indexOf(sign);
        var first=originalVal.slice(0,retriveValue);
        var last=originalVal.slice(retriveValue+1,originalVal.length);
        var result;
        if(sign==="+"){
             result=parseFloat(first)+parseFloat(last);
        }
        else if(sign==="-"){
            result=parseFloat(first)-parseFloat(last);
        }
        else if(sign==="*"){
            result=parseFloat(first)*parseFloat(last);
        }
        else if(sign==="/"){
            result=parseFloat(first)/parseFloat(last);
        }
        else if(sign==="%"){
            result=parseFloat(first)%parseFloat(last);
        }

        inbox.textContent=result;

  

}

    

