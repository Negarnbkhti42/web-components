import { customElement } from "lit/decorators.js";
import { FloatingActionButton } from "./floating-action-button";
import styles from "./floating-action-button.style";

@customElement("tap-floating-action-button")
export class TapFloatingActionButton extends FloatingActionButton {
    static readonly styles = [styles];
}

declare global {
    interface HTMLElementTagNameMap {
        "tap-floating-action-button": TapFloatingActionButton;
    }
}
