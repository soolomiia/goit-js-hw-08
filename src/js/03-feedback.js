
const form = document.querySelector('form');
const local = {};

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();
  form.elements.email.value = '';
  form.elements.message.value = '';
});

form.addEventListener('input', event => {
  local.email = form.elements.email.value;
  local.message = form.elements.message.value;
});

form.addEventListener(
  'input',
  _.throttle(() => {
    localStorage.setItem('feedback-form-state', JSON.stringify(local));
  }, 500)
);

try {
  const start = JSON.parse(localStorage.getItem('feedback-form-state'));
  form.elements.email.value = start.email;
  form.elements.message.value = start.message;
} catch (e) {}