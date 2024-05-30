

const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type');

const songFilename = `songjsonfiles/${type}.json`;
const techniquesFilename = 'techniques.json';


Promise.all([
  fetch(songFilename).then(response => response.json()),
  fetch(techniquesFilename).then(response => response.json())
])
.then(([songsData, techniquesData]) => {
  const songs = songsData;
  const techniques = techniquesData;


  let originalBackground = 'url("images/bg-body.png")';
 
  function resetBackground() {
    document.body.style.backgroundImage = originalBackground;
  }

function changeBackground(backgroundUrl) {
    document.body.style.backgroundImage = `url(${backgroundUrl})`;
}

const appender = document.getElementsByClassName('download-box-content')[0];
const downloadBox = document.getElementById('bob');
const sectionDiv = document.getElementById('section-div');
const gridBox = document.getElementById('grid-box');
const gridChild = gridBox.children[4];

document.addEventListener('click', function(event) {
  if (event.target.matches('#closeX')) {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }
});

function changeBackground(link) { 
  console.log(link);
    document.body.style.backgroundImage = `url("${link}")`;
  
       document.getElementsByClassName('song-info')[0].style.display = 'block';

  }


const sectionMarker = sectionDiv.children[0];
const wthBox = document.getElementById('wth-box');
const genreBox = document.getElementById('genre-box');
const dykBox = document.getElementById('didyouknow-box');
const dykMarker = dykBox.children[1];
const tipBox = document.getElementById('box-bottom');



let wthTitleContent;
techniques.forEach(tech => {
  if (type === tech.type) { 
  
    const wthTitleContent = tech.wthTitle
  .split(/WTH\s+is|WTH\s+are/)[1]
  .replace(/[!?]$/, '')
  .trim();
    console.log(wthTitleContent);
    const tabTitle = document.getElementById('tab-title');
    tabTitle.textContent = wthTitleContent;

  const sectionTitle = document.createElement('h1');
  sectionTitle.textContent = tech.sectionTitle;
  sectionDiv.insertBefore(sectionTitle, sectionMarker);
  sectionTitle.classList.add('section-title');

  const wthTitle = document.createElement('h2');
  wthTitle.textContent = tech.wthTitle;
  wthBox.appendChild(wthTitle);
  wthTitle.classList.add('box-title');

  const wthContent = document.createElement('p');
  wthContent.textContent = tech.wthContent;
  wthBox.appendChild(wthContent);
  wthContent.classList.add('box-content');
  
  const genreContent = document.createElement('p');
  genreContent.textContent = tech.genreContent;
  genreBox.appendChild(genreContent);
  genreContent.classList.add('box-content');

  const dykSubtitle = document.createElement('p');
  dykSubtitle.textContent = tech.  dykSubtitle;
  dykBox.insertBefore(dykSubtitle, dykMarker);
dykSubtitle.classList.add('box-title');
dykSubtitle.id = 'dyk-subtitle';

const dykContent = document.createElement('p');
 dykContent.textContent = tech.dykContent;
  dykBox.appendChild(dykContent);
  dykContent.classList.add('did-you-know-text');

  const tipTitleOne = document.createElement('p');
  tipTitleOne.textContent = tech.tipTitleOne;
  tipBox.appendChild(tipTitleOne);
  tipTitleOne.classList.add('learning-tip');

  const tipOneContent = document.createElement('p');
  tipOneContent.textContent = tech.tipOneContent;
  tipBox.appendChild(tipOneContent);
  tipOneContent.classList.add('box-content');
  
  const tipTitleTwo = document.createElement('p');
  tipTitleTwo.textContent = tech.tipTitleTwo;
  tipBox.appendChild(tipTitleTwo);
  tipTitleTwo.classList.add('learning-tip');

  const tipTwoContent = document.createElement('p');
  tipTwoContent.textContent = tech.tipTwoContent;
  tipBox.appendChild(tipTwoContent);
  tipTwoContent.classList.add('box-content');

  const tipTitleThree = document.createElement('p');
  tipTitleThree.textContent = tech.tipTitleThree;
  tipBox.appendChild(tipTitleThree);
  tipTitleThree.classList.add('learning-tip');

  const tipThreeContent = document.createElement('p');
  tipThreeContent.textContent = tech.tipThreeContent;
  tipBox.appendChild(tipThreeContent);
  tipThreeContent.classList.add('box-content');


  }
});
songs.forEach(song => { 
  if (song.section === type) { 
    const title = document.createElement('li');
    title.classList.add('song');
    title.textContent = song.title;
    appender.appendChild(title);

    

    const songInfo = document.createElement('div');
    songInfo.className = 'song-info';
    songInfo.id = "song-info-id";
    gridBox.insertBefore(songInfo, gridChild);

    
    const closeButton = document.createElement('div');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '<i class="fas fa-times" id="closeX"></i>';
    songInfo.appendChild(closeButton);

    closeButton.addEventListener('click', function() {
      songInfo.style.display = 'none';
    });

    
    const boxSong = document.createElement('p');
    boxSong.textContent = song.title;
    songInfo.appendChild(boxSong);
    boxSong.id = 'boxSong';

    const locationP = document.createElement('p');
    locationP.textContent = 'Location: ';
    const locationSpan = document.createElement('span');
    locationSpan.id = 'location1';
    locationSpan.textContent = song.location;
    locationP.appendChild(locationSpan);
    songInfo.appendChild(locationP);

    const songLinkP = document.createElement('p');
    songLinkP.textContent = 'Song Link: ';
    const songLinkA = document.createElement('a');
    songLinkA.href = song.songLink;
    songLinkA.textContent = ' Watch on YouTube';
    songLinkP.appendChild(songLinkA);
    songInfo.appendChild(songLinkP);

    const coverLinkP = document.createElement('p');
    coverLinkP.textContent = 'Song Cover: ';
    const coverLinkA = document.createElement('a');
    coverLinkA.href = song.coverLink;
    coverLinkA.textContent = ' Cover on YouTube';
    coverLinkP.appendChild(coverLinkA);
    songInfo.appendChild(coverLinkP);

    const tuningP = document.createElement('p');
    tuningP.textContent = 'Tuning: ';
    const tuningSpan = document.createElement('span');
    tuningSpan.id = 'tuning1';
    tuningSpan.textContent = song.tuning;
    tuningP.appendChild(tuningSpan);
    songInfo.appendChild(tuningP);

    const genreP = document.createElement('p');
    genreP.textContent = 'Genre: ';
    const genreSpan = document.createElement('span');
    genreSpan.id = 'genre1';
    genreSpan.textContent = song.genre;
    genreP.appendChild(genreSpan);
    songInfo.appendChild(genreP);

    const originP = document.createElement('p');
    originP.textContent = 'Origin: ';
    const originSpan = document.createElement('span');
    originSpan.id = 'origin1';
    originSpan.textContent = song.origin;
    originP.appendChild(originSpan);
    songInfo.appendChild(originP);

    const wikiP = document.createElement('p');
    const wikiA = document.createElement('a');
    wikiA.href = song.wiki;
    wikiA.textContent = ' More about this artist';
    wikiP.appendChild(wikiA);
    songInfo.appendChild(wikiP);

    const downloadButton = document.createElement('button');
    downloadButton.className = 'flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full';
    downloadButton.textContent = 'Download Tab';
    downloadButton.onclick = function() {
        window.location.href = song.downloadSource;
    };
    songInfo.appendChild(downloadButton);


    const links = songInfo.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
      links[i].setAttribute('target', '_blank');
    }



    songInfo.style.display = 'none';

    function changeBackground(backgroundUrl) {
     
      document.body.style.backgroundImage = `url(${backgroundUrl})`;
      document.body.style.backgroundPosition = 'center';
  }
  
 
  title.onclick = function() {
      changeBackground(song.background);
      document.querySelectorAll('.song-info').forEach(info => {
          info.style.display = 'none';
      });
      songInfo.style.display = 'block';
      songInfo.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  
let originalBackground = 'url("images/bg-body.png")';

function changeBackground(backgroundUrl) {
    document.body.style.backgroundImage = `url(${backgroundUrl})`;
    document.body.style.backgroundPosition = 'center';
}

closeButton.addEventListener('click', () => {
    document.body.style.backgroundImage = originalBackground;
});

  }
  
});

})


document.addEventListener('DOMContentLoaded', function() {
  const returnToTopBtn = document.getElementById('returnToTopBtn');
  returnToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
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