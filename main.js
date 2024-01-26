login=()=>{
    let username=nam.value
    let pasword=psw.value

    if(!pasword||!username){
        alert("not matiching username pasword please check")
    }
    else{
        localStorage.setItem("username",username)
        console.log(`username:${username} password:${pasword}`)
        window.location="dashbord.html"
    }
}