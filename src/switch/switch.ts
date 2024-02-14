import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export class Switch extends LitElement {
  static readonly styles = [];

  static readonly shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static readonly formAssociated = true;

  @property({ reflect: true, type: Boolean }) checked = false;

  disabled = this.hasAttribute("disabled");

  override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute("role", "checkbox");
    this.addEventListener("click", this.#onClick);
    this.addEventListener("keyup", this.#onKeyup);
  }

  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
    this.requestUpdate();
  }

  override render() {
    return html` <div tabindex="0"></div> `;
  }

  #onClick() {
    this.#toggle();
  }

  #onKeyup(event: KeyboardEvent) {
    switch (event.key) {
      case " ":
      case "Enter":
        event.preventDefault();
        this.#toggle();
    }
  }

  #toggle() {
    if (this.disabled) {
      return;
    }

    this.checked = !this.checked;
    this.dispatchEvent(new Event("change", { bubbles: true }));
  }
}
