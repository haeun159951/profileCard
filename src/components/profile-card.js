const Avatar = require('./avatar');
const Name = require('./name');
const UserInfo = require('./user-info');

class ProfileCard {
  constructor(id, name, email, avatarUrl) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.avatarUrl = avatarUrl;
  }

  render() {
    // Create the entire profile card, with img, name, email etc.
    const section = document.createElement('section');
    section.id = `user-${this.id}`;
    section.className = 'profile-card';
    const avatar = new Avatar(this.avatarUrl, this.name);

    const userInfo = new UserInfo(this.name, this.email);
    section.appendChild(avatar.render());
    section.appendChild(userInfo.render());

    return section;
  }
}

module.exports = ProfileCard;
