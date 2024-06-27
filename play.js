document.addEventListener("DOMContentLoaded", function () {
    const button1 = document.getElementById("option 1");
    const button2 = document.getElementById("option 2");

    button1.addEventListener("click", function () {
       
        window.location.href = "tutorial.html";
    });

    button2.addEventListener("click", function () {
        
        window.location.href = "level.html";
    });
});
