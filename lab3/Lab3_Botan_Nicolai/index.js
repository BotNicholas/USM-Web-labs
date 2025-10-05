var expander = document.getElementById("expander");
var container = document.querySelector(".container");
var options = document.querySelectorAll(".option");

var isContainerHidden = false;

expander.addEventListener("click", function() {
    isContainerHidden = !isContainerHidden;
    if (isContainerHidden) {
        container.classList.add("container-hidden");
        options.forEach((option) => {option.classList.add("option-hidden");});
    } else {
        container.classList.remove("container-hidden");
        options.forEach((option) => {option.classList.remove("option-hidden");});
    }
})
