//using querySelector
const yeartodate = document.querySelector('#yeartodate');
const option1 = {year: 'numeric'};
yeartodate.textContent = new Date().toLocaleDateString('en-UK', option1)

const todaysdate = document.getElementById('todaysdate');
const option2 = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
todaysdate.textContent = new Date().toLocaleDateString('en-UK', option2)
