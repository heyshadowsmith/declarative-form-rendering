import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("dfr-message")
export class DFRMessage extends LitElement {
    @property({ type: String }) message = "";

    render() {
        if (!this.message) return html``;

        return html`<span part="message">${this.message}</span>`;
    }
}
