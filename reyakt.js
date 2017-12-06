var Reyakt = {
  render(destination, component) {
    document.getElementById(destination).appendChild(component);
  },

  makeTag(tag, properties, children) {
    var element = document.createElement(tag);

    Object.keys(properties).forEach(function(property) {
      if (property in element) {
        element.setAttribute(property, properties[property]);
      } else {
        console.error(`[ERROR] - ${property} is not valid!`);
      }  
    });

    if (children) element.innerHTML = children;

    return element;
  }
}