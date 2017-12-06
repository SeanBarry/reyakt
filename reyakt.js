var Reyakt = {
  render(destination, component) {
    document.getElementById(destination).appendChild(component);
  },

  makeTag(tag, properties, children) {
    var element = document.createElement(tag);

    Object.keys(properties).forEach(function(property) {
      if (property in element) {
        if (property === 'className') {
          element.setAttribute('class', properties[property]);
        } else {
         element.setAttribute(property, properties[property]);
       }
      } else {
        console.error(`[ERROR] - ${property} is not valid!`);
      }  
    });


    if (typeof children === 'string') {
      element.innerHTML = children
    } else if (children instanceof window.Element) {
      element.appendChild(children);
    }
    
    return element;
  }
}