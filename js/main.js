// Small helper JS used across pages
document.addEventListener('DOMContentLoaded', function(){
  const y = new Date().getFullYear();
  document.querySelectorAll('#year, #year2, #year3, #year4, #year5').forEach(el=>{
    if(el) el.textContent = y;
  });
});

function handleSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const alertEl = document.getElementById('formAlert');
  // Basic validation already handled by HTML required attributes.
  // Fallback: open mail client with mailto (server not configured)
  const subject = encodeURIComponent('Portfolio contact from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
  window.location.href = 'mailto:info@example.com?subject=' + subject + '&body=' + body;
  alertEl.style.display='block';
  alertEl.className='alert alert-success';
  alertEl.textContent = 'Your email client should open to send the message. If it did not, please copy & paste your message to info@example.com.';
  return false;
}


//date and time
function updateTime() {
  let d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
  
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let dateShow = d.toLocaleDateString("en-US", options);
  document.getElementById("bemo").innerText = dateShow;
}
updateTime();
setInterval(updateTime, 1000);