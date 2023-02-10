let btn: HTMLButtonElement=<HTMLButtonElement>document.querySelector('button');


if (btn.getAttribute("class")== "active") {
    btn.setAttribute("class", "");
} else {
    btn.setAttribute("class", "active");
}

if (btn.classList.contains("active")){
    btn.classList.remove("active");
}
else {
    btn.classList.add("active");
}
