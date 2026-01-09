import { Component } from "../core/Component";

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: "",
    };
    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";
    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));

    const $label = document.createElement("label");
    $label.htmlFor = "enter_amount";
    $label.setAttribute("tupe", "number");
    $label.textContent = "Введите сумму в $";

    const $input = document.createElement("input");
    $input.id = "enter_amount";
    this.$input = $input;
    this.$input.addEventListener("input", this.handleInput.bind(this));

    const $button = document.createElement("button");
    $button.textContent = "Задонатить";
    this.$button = $button;

    this.$rootElement.appendChild($label);
    this.$rootElement.appendChild($input);
    this.$rootElement.appendChild($button);
  }

  handleInput(event) {
    this.state.amount = event.target.value;

    if (this.isValid) {
      this.$button.disabled = false;
    } else {
      this.$button.disabled = true;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount));
      this.state.amount = "";
      this.$input.value = "";
    }
  }

  get isValid() {
    if (this.state.amount > 0 && this.state.amount < 101) {
      return true;
    } else {
      return false;
    }
  }
}
