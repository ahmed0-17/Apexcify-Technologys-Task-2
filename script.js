document.addEventListener("DOMContentLoaded", () => {
    const result = document.getElementById("result");

    const buttons = {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9",
        "zero": "0",
        "add": "+",
        "multiply": "*",
        "subtract": "-",
        "divide": "/",
        "dot": ".",

    };

    let screenvalue = "0"; // start with 0
    updateDisplay();

    function updateDisplay() {
        result.innerText = screenvalue;
    }

    // Add click events for number & operators
    for (const id in buttons) {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener("click", () => {
                const value = buttons[id];

                // Handle leading 0
                if (screenvalue === "0" && value !== ".") {
                    screenvalue = value;
                } else {
                    screenvalue += value;
                }
                updateDisplay();
            });
        }
    }

    // Equal button
    const equalBtn = document.getElementById("equal");
    if (equalBtn) {
        equalBtn.addEventListener("click", () => {
            try {
                screenvalue = eval(screenvalue).toFixed(1).toString();
                
            } catch {
                screenvalue = "Error";
            }
            updateDisplay();
        });
    }

    // AC button
    const acBtn = document.getElementById("ac");
    if (acBtn) {
        acBtn.addEventListener("click", () => {
            screenvalue = "0";
            updateDisplay();
        });
    }

    // Remove/backspace button
    const removeBtn = document.getElementById("remove");
    if (removeBtn) {

        removeBtn.addEventListener("click", () => {
            screenvalue = screenvalue.slice(0, -1) || "0";
            updateDisplay();
        });
    }

    // Theme toggle
    const themeToggle = document.getElementById("themeToggle");
    const label = document.querySelector(".toggle-label");

    if (themeToggle) {
        themeToggle.addEventListener("change", function () {
            if (this.checked) {
                document.body.classList.add("dark-theme");
                label.innerText = "Dark Mode";
            } else {
                document.body.classList.remove("dark-theme");
                label.innerText = "Light Mode";
            }
        });
    }


    const dateElement = document.getElementById("date");

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date();
    dateElement.innerText =today.toLocaleDateString(undefined, options);
    

     setInterval(() => {
        const now = new Date();
        document.getElementById("time").innerText = now.toLocaleTimeString();
    }, 1000);


});
