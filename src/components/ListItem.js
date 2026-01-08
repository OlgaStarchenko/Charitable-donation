import { Component } from "../core/Component";

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: this.props.amount,
    };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";

    const date = document.createElement("p");
    const bold = document.createElement("b");
    bold.textContent = `$${this.state.amount}`;
    date.textContent = `${this.state.date} - `;
    console.log(date, bold);

    this.$rootElement.appendChild(date);
    this.$rootElement.appendChild(bold);
  }
}
