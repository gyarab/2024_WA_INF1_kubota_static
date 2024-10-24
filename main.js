
let current = false;
let count = 0;

function zmenaVzhledu() {
    var vzhled = document.getElementsByTagName("link")[0];
    if (vzhled.getAttribute("href") == "style.css") {
        vzhled.setAttribute("href", "alt.css");
    } else {
        vzhled.setAttribute("href", "style.css");
    }
}

function plus() {
    count += 1;
    document.getElementById("count").innerHTML = "Count: " + count;
}

function minus() {
    count -= 1;
    document.getElementById("count").innerHTML = "Count: " + count;
}

function remove() {
    element.parentNode.removeChild(element);
}

function novy() {
    let element = document.getElementById("mainElement");
    let div = document.createElement("div");
    div.classList.add("newDiv");
    div.innerHTML=count;
    element.appendChild(div);
}
function showPasswords() {
    if (current == true) {
        document.getElementById("leonheslo").innerHTML = "●●●●●●●●●●●●●●●";
        document.getElementById("gruheslo").innerHTML = "●●●●";
        document.getElementById("tonheslo").innerHTML = "●●●●●●●●●●●●●●●";
        document.getElementById("komenskyheslo").innerHTML = "●●●●●●●●●●●●●";
        current = false;
    }else{
        document.getElementById("leonheslo").innerHTML = "leonovoHeslo123";
        document.getElementById("gruheslo").innerHTML = "1234";
        document.getElementById("tonheslo").innerHTML = "BlenderjeGOATTT";
        document.getElementById("komenskyheslo").innerHTML = "Raj_srdce_ATD";
        current = true;
    }
}