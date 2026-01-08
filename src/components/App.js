import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";

    this.state = {
      total: 0,
      donates: [],
    };

    const $h1 = document.createElement("h1");

    const $span = document.createElement("span");
    $span.textContent = this.state.total;
    this.$total = $span;

    $h1.textContent = `Итого: $${$span.textContent}`;

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);

    this.donateList = donateList;

    this.$rootElement.appendChild($h1);
  }

  onItemCreate(amount) {
    const item = new ListItem({ amount });
    this.state.donates.push(item);
    console.log(this.state.donates);
    this.donateList.addItem(item);
  }
}
