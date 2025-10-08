console.log("sus")

pass = document.getElementById("user_pass");
confPass = document.getElementById("user_passConf")

form = document.getElementById("formZone")

console.log(form)

function checkPass(){
    if(pass.value.trim() == confPass.value.trim()){
        confPass.setCustomValidity("")
        return true
    }
    else{
        console.log("WRONG")
        confPass.setCustomValidity("Passwords don't match")
        return false
    }
}

confPass.addEventListener("input",(event)=>{

    const isSame = checkPass();

}
)