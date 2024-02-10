function setUpGoogleSheets() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxwqbUuJGFQ03tjE4ipOrgV24_jLUZFGG3RAjQsDwu_3iED2YdV2AVhnRrqcgyrB8Fx/exec';
  const form = document.querySelector('#scoutingForm');
  const btn = document.querySelector('#submit');

  form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerHTML = "Sending...";

    /*
    let fd = getData(false);
    try {
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }
    } catch (error) {
      console.error('Error iterating over form data:', error);
    }
    */

    fetch(scriptURL, { method: 'POST', body: fd })
      .then(response => response.json())
      .then(data => {
        alert('Success!', data);
      })
      .catch(error => {
        alert('Error!', error.message);
      })
      .finally(() => {
        btn.disabled = false;
        btn.innerHTML = "Send to Google Sheets";
      });
  });
}


/* 

*****OLD CODE*****

function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxwqbUuJGFQ03tjE4ipOrgV24_jLUZFGG3RAjQsDwu_3iED2YdV2AVhnRrqcgyrB8Fx/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Sending..."

      let fd = getData(false)
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      fetch(scriptURL, { method: 'POST', body: fd })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
}
*/