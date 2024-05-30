
  const returnToTopBtn = document.getElementById('returnToTopBtn');
  returnToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const returnToTopBtn = document.getElementById('returnToTopBtn');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        returnToTopBtn.style.display = 'block';
      } else {
        returnToTopBtn.style.display = 'none';
      }
    });
  
    returnToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    returnToTopBtn.style.display = 'none';
  });





const scriptURL = 'https://script.google.com/macros/s/AKfycbyP6_Y35OystZNzvNSB4VZBwe78exB5GvK0qR2G2ysqYPuvaRWHtkxH14xpNwqej4V_IQ/exec';
const form = document.getElementById('submit-to-google-sheet');
const statusMessage = document.getElementById('status-message');

form.addEventListener('submit', e => {
  e.preventDefault();
  statusMessage.textContent = 'Sending message...';
  statusMessage.style.color = 'yellow';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        statusMessage.textContent = 'Message sent successfully!';
        statusMessage.style.color = 'green';
        form.reset();
      } else {
        statusMessage.textContent = 'Error sending message. Please try again.';
        statusMessage.style.color = 'red';
      }
    })
    .catch(error => {
      statusMessage.textContent = 'Error sending message. Please try again.';
      statusMessage.style.color = 'red';
    });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
});



function openNav() {
  const sidebar = document.getElementById("mySidebar");
  sidebar.style.width = "0";
  sidebar.style.display = "block"; 
  setTimeout(function() {
    sidebar.style.width = "250px";
  }, 10); 
}

function closeNav() {
  const sidebar = document.getElementById("mySidebar");
  sidebar.style.width = "0";
  setTimeout(function() {
    sidebar.style.display = "none";
  }, 500);
}

function toggleNav() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar.style.width === "250px") {
    closeNav();
  } else {
    openNav();
  }
}

