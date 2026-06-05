if (!localStorage.getItem("count")) {
    localStorage.setItem("count", 0);
}



function counter() {
    let count = parseInt(localStorage.getItem("count"));
    count++;
    document.querySelector("h1").innerHTML = count;
    localStorage.setItem("count", count);
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("h1").innerText = localStorage.getItem("count");
    document.querySelector("button").onclick = counter;

    // setInterval(counter, 1000);
});