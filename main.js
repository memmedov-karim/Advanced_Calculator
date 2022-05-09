const ValueOfButtons = document.querySelectorAll(".number");
const monitor = document.querySelector(".monitor");
const operations = document.querySelectorAll(".operations");
const clear = document.querySelector(".clear");
const ans = document.querySelector(".equal");
const answer = document.querySelector(".answer");
const extra = document.querySelector(".extra_s");
const advanced = document.querySelector(".advanced");
for(let i of ValueOfButtons){
    i.addEventListener("click",()=>{
        monitor.innerHTML+=i.value;
        

    })
}
for(let op of operations){
    op.addEventListener("click",()=>{
        monitor.innerHTML+=op.value;
    })
}
clear.addEventListener("click",()=>{
    monitor.innerHTML = "";
    answer.innerHTML = ""
})
ans.addEventListener("click",()=>{
    // console.log(monitor.innerHTML)
    for(let per of monitor.innerText){
        if(per == "%"){
            let m = monitor.innerText.split("%")
            answer.innerHTML = (Number(m[0])*Number(m[1]))/100;
            console.log((Number(m[0])*Number(m[1]))/100)
        }
    }
    if(monitor.innerText.substring(0,3)=="sin"){
        
        answer.innerHTML = Math.sin(eval(monitor.innerText.substring(3,)))
    }
    if(monitor.innerText.substring(0,3)=="cos"){
        
        answer.innerHTML = Math.cos(eval(monitor.innerText.substring(3,)))
    }
    if(monitor.innerText.substring(0,2)=="tg"){
        
        answer.innerHTML = Math.tan(eval(monitor.innerText.substring(2,)))
    }
    if(monitor.innerText.substring(0,5)=="log10"){
        answer.innerHTML = Math.log10(eval(monitor.innerText.substring(5,)))
        console.log("ok")
    }
    my_num = ""
    if(monitor.innerText[monitor.innerText.length-1] == "!"){
        
        for(let num of monitor.innerText){
            if(Number(num)==num){
                my_num+=num
            }
        }
        let fac = 1;
        my_num = Number(my_num);
        for(let x=1;x<=my_num;x++){
            fac*=x
        }
        answer.innerHTML = fac

    }
    else{
        answer.innerHTML = eval(monitor.innerHTML)
    }
    

    
    }
)

extra.addEventListener("click",()=>{
    if(advanced.className=="advanced"){
        advanced.className = "advanced_active"
        extra.innerText = "close"
    }
    else{
        extra.innerText = "extra"
        advanced.className = "advanced"

    }
    
})
