import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('.feedback-form input')
const textareaRef = document.querySelector('.feedback-form textarea');
// const buttonRef = document.querySelector('.feedback-form button');

formRef.addEventListener('submit', onFormSabmit);
formRef.addEventListener('input', throttle(onFormData, 500));



const formData = {};

function onFormData(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}




function onFormSabmit(e) {
    e.preventDefault();

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
};

function dataLocalStorage() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (data) {
    inputRef.value = data.email;
    textareaRef.value = data.message;
    };
};a