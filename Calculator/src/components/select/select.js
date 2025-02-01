import Component from "../../../../shared/component.js";
import OptionComponent from "../option/option.js";

class SelectComponent extends Component {
  static render() {
    if (!this.isloadedStyles) {
      this.loadStyle("./components/select/select.css");
      this.isloadedStyles = true;
    }

    const selectElement = document.createElement("select");
    selectElement.id = "select-input";

    document
      .getElementById("numberOne")
      .insertAdjacentElement("afterend", selectElement);
  }
}

export default SelectComponent;
