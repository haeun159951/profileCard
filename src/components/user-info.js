const Email = require('./email');
const Name = require('./name');
class UserInfo {
  constructor(name, email) {
    this.email = email;
    this.name = name;
  }

  render() {
    const div = document.createElement('div');

    div.className = 'profile-info';

    const name = new Name(this.name);
    const email = new Email(this.email);

    div.appendChild(name.render());
    div.appendChild(email.render());

    return div;
  }
}
module.exports = UserInfo;
