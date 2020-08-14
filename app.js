(function() {
    var root = document.querySelector("#root");
    root.style.border = "5px outset red";
    root.style.backgroundColor = "lightblue";
    root.style.textAlign = "center";
    root.style.minHeight = "100px";

    var addButton = document.createElement("button");
    addButton.innerText = "Add a paragraph asynchronously";
    addButton.setAttribute("data-test-id", "test-addButton");
    addButton.addEventListener("click", function() {
        var handler = setTimeout(function() {
            var p = document.createElement("p");
            p.innerText = "Hello World";
            p.setAttribute("data-test-id", "test-p");
            root.appendChild(p);

            clearTimeout(handler);
        }, 1500);
    });

    root.appendChild(addButton);
})();