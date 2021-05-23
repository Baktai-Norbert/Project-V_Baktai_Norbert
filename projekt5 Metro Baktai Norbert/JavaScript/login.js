let usern;
let passw;
let x = 5;

function validate(){
//hitelesítés/bevitt értékek ellenőzése
usern = document.getElementById("uname").value;
passw = document.getElementById("pass").value;
setCookie("user",usern);

if (usern == getCookie("username") && passw == getCookie("password") && usern != "" && usern != null || usern == "guest"){
    
    document.getElementById("wrong").classList.add("d-none");

    if (usern == "guest"){
     setCookie("user", "guest")
     usern = "guest";  
    }
        
    
    let user = document.getElementById("login");
    user.innerHTML = "Fiók váltása";

    let userer = document.getElementById("loginname")
    userer.innerHTML = usern;
    userer.classList.remove("d-none");
    userer.classList.add("d-inline");

    welcomePoPup = document.getElementById("welcome");
    welcomePoPup.classList.remove("d-none");
    welcomePoPup.classList.add("welcomed");

    let welcommen = document.getElementById("welcommen");
    welcommen.classList.remove("d-none");
    welcommen.innerHTML = "<h2>Üdv " + usern + "!</h2><br><p>Köszönöm, hogy bejelentkeztél!</p>";

    let space = document.getElementById("after");
    space.classList.add("d-none");

    offLogWarn();

    let logout = document.getElementById("logout");
    logout.classList.remove("d-none");

    setCookie("logged", "1");
}else{
    document.getElementById("wrong").classList.remove("d-none");
}
}
