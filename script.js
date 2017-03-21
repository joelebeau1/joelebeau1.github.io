console.log("The script is running!");

function addRedBorder(event) {
    console.log(event);
    index.style.border = "3px solid red";
}

var index = document.getElementsById("index-links");
index.addEventListener("click", addRedBorder);

