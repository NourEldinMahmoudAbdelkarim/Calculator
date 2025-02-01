import Component from "./../../shared/component.js";

class inputComponent extends Component {
  static render(id, type, placeholder) {
    if (!this.isloadedStyles) {
      this.loadStyle("./components/input/input.css");
      this.isloadedStyles = true;
    }

    const inputElement = document.createElement("input");
    inputElement.type = type;
    inputElement.id = id;
    inputElement.placeholder = placeholder;
    document
      .querySelector("form")
      .insertAdjacentElement("beforeend", inputElement);
  }
}

export default inputComponent;
