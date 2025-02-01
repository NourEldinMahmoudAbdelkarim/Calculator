import Component from "../../../shared/component.js";

class FooterComponent extends Component {
  static render() {
    if (!this.isloadedStyles) {
      this.loadStyle("./components/layout/footer/footer.css");
      this.isloadedStyles = true;
    }

    const footerElement = document.createElement("footer");
    footerElement.innerHTML = `<p>Copy Right saved 2024</p>`;

    document
      .querySelector("form")
      .insertAdjacentElement("afterend", footerElement);
  }
}

export default FooterComponent;
