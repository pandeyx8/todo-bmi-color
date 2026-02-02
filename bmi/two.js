const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    let message = '';
    if (bmi < 18.6) message = 'under weight';
    else if (bmi > 18.6 && bmi < 24.9) message = 'normal';
    else message = 'over weight';

    results.innerHTML = `<span>${bmi}</span>
    <p>${message}</p>`;
  }
});
