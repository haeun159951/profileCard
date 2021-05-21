const { load } = require('./users');
const ProfileCard = require('./components/profile-card');

function init() {
  const main = document.querySelector('main');

  load() //
    .then((users) => {
      if (!users && users.length) {
        main.innerHTML = 'unable to run user data';
        return;
      }
      users.forEach((user) => {
        // Extract and prepare the user properties we care about
        const id = user.id;
        const name = `${user.first_name} ${user.last_name}`;
        const email = user.email;
        const avatarUrl = user.avatar;

        // Create a ProfileCard of DOM nodes for each user
        const profileCard = new ProfileCard(id, name, email, avatarUrl);

        main.appendChild(profileCard.render());
      });
    });
}

window.onload = init;
