class Component {
  static isloadedStyles = false;

  static loadStyle(href) {
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = href;
    document.head.append(linkElement);
  }
}

export default Component;
