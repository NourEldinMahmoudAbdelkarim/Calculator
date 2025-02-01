import Component from "../../../../shared/component.js";

class NavComponent extends Component {
  static render() {
    if (!this.isloadedStyles) {
      this.loadStyle("./components/layout/header/nav/nav.css");
      this.isloadedStyles = true;
    }

    const navDiv = document.createElement("nav");
    navDiv.innerHTML = `
        <h1>Calculator</h1>
    `;

    document.body.prepend(navDiv);
  }
}

export default NavComponent;
