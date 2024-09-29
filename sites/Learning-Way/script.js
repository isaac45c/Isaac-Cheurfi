function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

function openIframe(iframeId, page) {
  document.getElementById(iframeId).src = page;
  localStorage.setItem('iframePage_' + iframeId, page);
}

function initializeSite() {
  updateVisitorCounter();
  setInterval(updateTime, 1000);
}

function updateVisitorCounter() {
  let count = localStorage.getItem('visitorCount') || 0;
  count++;
  localStorage.setItem('visitorCount', count);
  document.getElementById('visitorCount').textContent = count;
}

function updateTime() {
  const now = new Date();
  document.getElementById('currentTime').textContent = now.toLocaleTimeString();
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
  const scrollButton = document.querySelector('.scroll-to-top');
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
};
