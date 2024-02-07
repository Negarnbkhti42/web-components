import { customElement } from "lit/decorators.js";
import { Switch } from "./switch";

@customElement("tap-switch")
export class TapSwitch extends Switch {}

declare global {
  interface HTMLElementTagNameMap {
    "tap-switch": TapSwitch;
  }
}
