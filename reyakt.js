var Reyakt = {
  render(destination, component) {
    document.getElementById(destination).appendChild(component);
  },

  makeTag(tag, content) {
    var element = document.createElement(tag);
    if (content) element.innerHTML = content;
    return element;
  }
}