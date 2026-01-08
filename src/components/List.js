import { Component } from "../core/Component";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";

    const $h2 = document.createElement("h2");
    $h2.textContent = "Список донатов";

    const $div = document.createElement("div");
    this.$listContainer = $div;

    this.$rootElement.appendChild($h2);
    this.$rootElement.appendChild($div);
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }
}
