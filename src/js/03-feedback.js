import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');

formRef.addEventListener('submit', onFormSabmit);
formRef.addEventListener('input', throttle(onFormData, 500));
populateForm();

let formData = {
  email: email.value,
  message: message.value,
};

function onFormData(e) {
    if (e.target === email) {
    formData.email = e.target.value;
  }

  if (e.target === message) {
    formData.message = e.target.value;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function onFormSabmit(e) {
    e.preventDefault();

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

  // console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  console.log(formData);
    
};
function populateForm() {
  if (localStorage.getItem('feedback-form-state')) {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

  email.value = data.email;
  message.value = data.message;

}
}



