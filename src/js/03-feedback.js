import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const localStorageData = localStorage.getItem(localStorageKey);
const formAutoFillData = JSON.parse(localStorageData);

if (localStorageData) {
    form.elements.email.value = formAutoFillData.email;
    form.elements.message.value = formAutoFillData.message;
};

form.addEventListener("input", throttle(saveInputDataToLocalStorage, 500));
form.addEventListener("submit", clearFormAndStorage);

function saveInputDataToLocalStorage(event) {
    inputData = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };

    const localStorageData = localStorage.setItem(localStorageKey, JSON.stringify(inputData));
};

function clearFormAndStorage (event) {
  event.preventDefault();
    console.log({
        email: form.elements.email.value,
        message: form.elements.message.value
    });
    localStorage.removeItem(localStorageKey);
    form.reset();
};


