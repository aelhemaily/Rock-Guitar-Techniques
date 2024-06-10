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

  const faqItems = document.querySelectorAll('.faq-item');
  const faqQuestions = document.querySelectorAll('.faq-question');
  const faqAnswers = document.querySelectorAll('.faq-answer');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    const toggleFaqItem = () => {
      // Hide all other answers
      faqItems.forEach(i => {
        if (i !== item) {
          i.querySelector('.faq-answer').classList.add('hidden');
        }
      });
      // Toggle the clicked question's answer
      answer.classList.toggle('hidden');
    };

    question.addEventListener('click', toggleFaqItem);
    answer.addEventListener('click', toggleFaqItem);
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
