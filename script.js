function getSpeaker() {
    let speakers = '';
  
    fetch('./speakers.json')
      .then((res) => res.json())
      .then((data) => {
        data.forEach((speaker) => {
          speakers += `

          <div class="speakers">
          <div class="img-holder">
              <img src="${speaker.image}" alt="">
          </div>
          <div class="speaker-info">
              <h3 class="speaker-name">${speaker.name}</h3>
              <p class="speaker-title">${speaker.title}</p>
              <hr>
              <p class="speaker-bio">${speaker.bio}</p>
          </div>
      </div>`;
        });
        document.getElementById('speaker-holder').innerHTML = speakers;
      });
  }
  
  window.addEventListener('load', getSpeaker());