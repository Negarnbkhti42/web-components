import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class FloatingActionButton extends LitElement {
    @property() title: string = '';
    @property() showBadge: boolean = false;

    render() {
        return html`
        <div class="fab">
            <span class="fab__title">${this.title}</span>
        </div>
        `
    }
}