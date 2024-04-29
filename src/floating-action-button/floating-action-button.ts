import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class FloatingActionButton extends LitElement {
    @property() title: string = '';
    @property() showBadge: boolean = false;

    render() {
        return html`
        <div class="fab">
            <slot name="leading"></slot>
            <span class="fab__title">${this.title}</span>
            <slot name="trailing"></slot>
        </div>
        `
    }
}