import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("dfr-label")
export class DFRLabel extends LitElement {
    @property() label = "";
    @property() for = "";
    @property({ type: Boolean }) required = false;

    render() {
        return html`<label for="${this.for}" part="label">${this.label}</label
      >${this.required ? html`<span part="asterisk">*</span>` : ""}`;
    }
}
