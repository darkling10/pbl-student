var log = document.querySelector('.login')

const selectElement = document.querySelector('#rollno');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.error');
  if(event.target.value <=999999 && event.target.value>=100000)
  result.textContent = `You like ${event.target.value}`;
});