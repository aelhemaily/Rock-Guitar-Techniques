document.addEventListener("DOMContentLoaded", function() {
  var returnToTopBtn = document.getElementById("returnToTopBtn");
  var faqDiv = document.getElementById("faq");

  returnToTopBtn.addEventListener("click", function() {
    faqDiv.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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