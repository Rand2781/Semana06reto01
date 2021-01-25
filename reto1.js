let miBoton=document.getElementById("btn")
let input=document.getElementById("inputtext")
let divlista=document.getElementById("lista")


// btn.addEventListener("click",function(){
//     alert("Diste Click!")
// })

miBoton.addEventListener("click", function(){
    console.log(inputtext.value)
})

input.addEventListener("keyup", function(e){
    if(e.key==="enter"){
        let newitem=document.createElement("p")
        newitem.innerHTML=inputtext.value
        divlista.appendChild(newitem)
        inputtext.value=""
    }
})
