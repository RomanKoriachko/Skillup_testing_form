// ----- animated buttons ------

$(function () {
    $(".animated-btn")
        .on("mouseenter", function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find("span").css({ top: relY, left: relX });
        })
        .on("mouseout", function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find("span").css({ top: relY, left: relX });
        });
});

// phone input

const input = document.querySelector("#phone1");
const output = document.querySelector("#output");
const inputWrapper = document.querySelector(".form-phone-input");
const formbutton = document.querySelector(".send-form-button");

const iti = window.intlTelInput(input, {
    utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    // nationalMode: true,
    hiddenInput: "phone",
    preferredCountries: ["ua"],
});

const handleChange = () => {
    let text;
    if (input.value) {
        if ((text = iti.isValidNumber())) {
            text =
                "Номер дійсний, повний міжнародний формат: " + iti.getNumber();
            inputWrapper.classList.add("true-number");
            inputWrapper.classList.remove("false-number");
            formbutton.disabled = false;
        } else {
            text = "Недійсний номер";
            inputWrapper.classList.add("false-number");
            inputWrapper.classList.remove("true-number");
            formbutton.disabled = true;
        }
    } else {
        text = "Будь ласка, введіть номер у міжнародному форматі";
    }
    const textNode = document.createTextNode(text);
    output.innerHTML = "";
    output.appendChild(textNode);
};

input.addEventListener("change", handleChange);
input.addEventListener("keyup", handleChange);
