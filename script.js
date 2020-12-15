let orderPizzaForm = document.forms.orderPizza;
let userFields = document.querySelectorAll('.user-field');

orderPizzaForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let allErrors = document.querySelectorAll('.error');
  for (let error of allErrors) {
    error.remove();
  }

  for (let userField of userFields) {
    if (!userField.value) {
      validField(userField);
    }
  }
});

function validField(field) {
  if (field.name === 'userName') {
    let errorElem = document.createElement('div');
    errorElem.classList.add('error');
    errorElem.innerHTML = 'Заполните поле Имя. Мы должны как-то к вам обращаться';
    field.insertAdjacentElement('afterend', errorElem);
  }
  
  if (field.name === 'userPhone') {
    let errorElem = document.createElement('div');
    errorElem.classList.add('error');
    errorElem.innerHTML = 'Заполните поле Телефон. Мы будем звонить в 3 часа ночи))';
    field.insertAdjacentElement('afterend', errorElem);
  }

  if (field.name === 'userComment') {
    let errorElem = document.createElement('div');
    errorElem.classList.add('error');
    errorElem.innerHTML = 'Заполните поле Комментарий. Нам просто скучно, пишите нам много текста';
    field.insertAdjacentElement('afterend', errorElem);
  }
};

for (let userField of userFields) {
  userField.addEventListener('blur', (e) => {
    if (e.target.nextSibling.classList && e.target.nextSibling.classList.contains('error')) {
      e.target.nextSibling.remove()
    }
  })
}

