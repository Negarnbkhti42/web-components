import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./switch";

@customElement("app-root")
export class AppRoot extends LitElement {
  render() {
    return html` <tap-switch></tap-switch> `;
  }
}
