const hobbyLink = document.getElementById('hobby');

const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];

hobbyLink.innerHTML = randomHobby.name;
hobbyLink.setAttribute('href', randomHobby.url);