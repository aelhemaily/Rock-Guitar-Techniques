document.addEventListener('DOMContentLoaded', function() {
  const returnToTopBtn = document.getElementById('returnToTopBtn');
  const sidebar = document.getElementById("mySidebar");
  const volumeToggle = document.getElementById('volume-toggle');
  let isMuted = true;

  returnToTopBtn.style.display = 'none';
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

  // Sidebar Functions
  function openNav() {
    sidebar.style.width = "0";
    sidebar.style.display = "block";
    setTimeout(function() {
      sidebar.style.width = "250px";
    }, 10);
  }

  function closeNav() {
    sidebar.style.width = "0";
    setTimeout(function() {
      sidebar.style.display = "none";
    }, 500);
  }

  function toggleNav() {
    if (sidebar.style.width === "250px") {
      closeNav();
    } else {
      openNav();
    }
  }

  window.toggleNav = toggleNav;

  // Vol Toggle
  volumeToggle.src = 'images/volume-off.png';

  function initTechnique(cardId, audioId) {
    const card = document.getElementById(cardId);
    const audio = document.getElementById(audioId);
    audio.muted = true;

    card.addEventListener('mouseenter', function() {
      if (!isMuted) {
        audio.play();
      }
    });

    card.addEventListener('mouseleave', function() {
      audio.pause();
      audio.currentTime = 0;
    });

    return audio;
  }

  // Initialize tech
  const audios = [
    'power-chords-audio', 'barre-chords-audio', 'broken-chords-audio', 'octave-double-stops-audio',
    'palm-muting-audio', 'hammer-ons-audio', 'pull-offs-audio', 'trills-audio', 'slides-audio',
    'bending-audio', 'vibrato-audio', 'tremolo-picking-audio', 'gallop-picking-audio', 'tapping-audio',
    'natural-harmonics-audio', 'pinch-harmonics-audio', 'string-skipping-audio', 'sweep-picking-audio',
    'whammy-bar-riffs-audio', 'downpicking-audio'
  ].map(id => initTechnique(id.replace('-audio', '-card'), id));

  volumeToggle.addEventListener('click', function() {
    isMuted = !isMuted;
    audios.forEach(audio => {
      audio.muted = isMuted;
    });
    volumeToggle.src = isMuted ? 'images/volume-off.png' : 'images/volume-on.png';
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const volumeToggle = document.getElementById('volume-toggle');
  const volumeButtonAudio = document.getElementById('volume-button-audio');

  let isMuted = true;
  volumeToggle.src = 'images/volume-off.png';
  volumeToggle.addEventListener('click', function() {

    const wasMuted = isMuted;
    isMuted = !isMuted;

    if (wasMuted && !isMuted) {
      volumeButtonAudio.play();
    } else {
      volumeButtonAudio.pause();
      volumeButtonAudio.currentTime = 0;
    }

    volumeToggle.src = isMuted ? 'images/volume-off.png' : 'images/volume-on.png';
  });
});