// Get the affiliate-links ul element
const affiliateLinksUl = document.getElementById('affiliate-links');

// Get the video descriptions from the URL parameter and parse it back into an array
const urlParams = new URLSearchParams(window.location.search);
const videoDescriptions = JSON.parse(decodeURIComponent(urlParams.get('videoDescriptions')));

// Loop through the video descriptions and create li elements with links
videoDescriptions.forEach(description => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const matches = description.description.match(urlRegex);
  if (matches) {
    matches.forEach(match => {
      const link = document.createElement('a');
      link.textContent = match;
      link.href = match;
      if (match.startsWith('http') || match.startsWith('https')) {
        const li = document.createElement('li');
        li.appendChild(link);
        affiliateLinksUl.appendChild(li);
        
      }
    });
  }
});

const affiliateLinksselect = document.getElementById('affiliate-links');
const channelName = document.querySelector('#channel-name').value;

affiliateLinksUl.addEventListener('click', function(event) {
  if (event.target.nodeName === 'A') {
    event.preventDefault(); // prevent default link behavior
    const linkHref = event.target.href;
    localStorage.setItem(channelName, linkHref);
    alert('Link saved');
  }
});

