function clickElement(){
    // document.getElementById("hamburger").onclick = function(){
    //     alert("Clicked");
    // }
    document.getElementById("hamburger").addEventListener("click", ()=> {
        // alert("Clicked");
        var navBar = document.getElementById("navbar");

        // navBar.classList.toggle('nav-toggle');
    
        if(navBar.style.left == '0%'){
            navBar.style.left = '-100%';
            navBar.style.transition = 'transition: all 0.2s ease-in-out';
        }
        else{
            navBar.style.left = '0%';
            navBar.style.transition = 'transition: all 0.2s ease-in-out';
        }
    });
}
function toggleNavbar(){
    var hamburgers = document.getElementById("hamburger");
    hamburgers.addEventListener("click", toggleFunc());
}

function toggleFunc(){
    var navBar = document.getElementById("navbar");

    // navBar.classList.toggle('nav-toggle');

    if(navBar.style.left == '0%'){
        navBar.style.left = '100%';
    }
    else{
        navBar.style.left = '0%';
    }
}

