document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".option");
    const submitButton = document.getElementById("submit");
    const message = document.getElementById("message");

    options.forEach((option) => {
        option.addEventListener("click", () => {
            options.forEach((opt) => opt.classList.remove("selected"));
            option.classList.add("selected");
        });
    });

    submitButton.addEventListener("click", () => {
        const selectedOption = document.querySelector(".option.selected");

        if (selectedOption && selectedOption.id === "option3") {
            message.textContent = "Correct!";
            message.style.color = "green";

            
            window.location.href = "page2.html";
        } else {
            message.textContent = "Incorrect.";
            message.style.color = "red";
        }
    });
});

