import Component from "../../../../shared/component.js";

class OptionComponent extends Component {
  static render(value) {
    if (!this.isloadedStyles) {
      this.loadStyle("./components/option/option.css");
      this.isloadedStyles = true;
    }

    const optionElement = document.createElement("option");
    optionElement.value = value;
    optionElement.innerHTML = value;

    document.querySelector("select").append(optionElement);
  }
}

export default OptionComponent;
