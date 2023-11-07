const _ = require('lodash');
const formEl = document.querySelector(".feedback-form")

formEl.addEventListener('input',_.throttle(onFormInput, 500))
formEl.addEventListener('submit', onFormSubmit)

const lokalStorageKey = "feedback-form-state"

function onFormInput(e) {
    e.preventDefault()
    const inputEl = formEl.elements.email
    const messageEl = formEl.elements.message

    const formData = {
        email: inputEl.value,
        message: messageEl.value
    }
    localStorage.setItem(lokalStorageKey, JSON.stringify(formData))
}

function onFormSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);

    const formDataObj = {};

    formData.forEach((value, name) => {
      formDataObj[name] = value;
    });
    console.log(formDataObj);
  
  e.currentTarget.reset();
}

const loadSavedData = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (error) {
    return localStorage.getItem(key)
  }
}

if (loadSavedData(lokalStorageKey) !== null) {
  formEl.elements.email.value = loadSavedData(lokalStorageKey).email
  formEl.elements.message.value = loadSavedData(lokalStorageKey).message
}
