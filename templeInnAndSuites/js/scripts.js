const yearToDate = document.querySelector("#yeartodate");
const option2 = {year: 'numeric'};
yearToDate.textContent = new Date().toLocaleDateString('en-UK', option2)

const lastUpdate = document.querySelector("#lastmodifieddate");
lastUpdate.textContent = document.lastModified
