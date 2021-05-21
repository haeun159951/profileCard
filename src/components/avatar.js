class Avatar {
  constructor(imgUrl, name) {
    this.imgUrl = imgUrl;
    this.name = name;
  }

  //img src=""

  render() {
    const img = document.createElement('img');
    img.src = this.imgUrl;
    img.alt = this.name;
    img.title = this.name;
    img.className = 'profile-avatar';
    img.width = 128;
    img.height = 128;

    return img;
  }
}
module.exports = Avatar;
