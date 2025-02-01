import Component from "../../../../shared/component.js";

class FormComponent extends Component {
  static render() {
    if (!this.isloadedStyles) {
      this.loadStyle("./components/main/form.css");
      this.isloadedStyles = true;
    }

    const formElement = document.createElement("form");
    formElement.innerHTML = `
        <div id="form">
        </div>
        `;
    formElement.onsubmit = this.submitForm;
    const nav = document.querySelector("nav");
    nav.insertAdjacentElement("afterend", formElement);
  }

  static submitForm(event) {
    event.preventDefault();
    const numberOne = document.querySelector("#numberOne").value;
    const numberTwo = document.querySelector("#numberTwo").value;
    const operator = document.querySelector("#select-input").value;
    const result = new Function(
      `return ${+numberOne} ${operator} ${+numberTwo}`
    )();
    alert(result);
  }
}

export default FormComponent;
