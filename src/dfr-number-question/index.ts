import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { DFRBaseQuestion } from "../dfr-base-question/index";
import "../dfr-label";
import "../dfr-message";

@customElement("dfr-number-question")
export class DFRNumberQuestion extends DFRBaseQuestion {
    firstUpdated() {
        const inputElement = this.shadowRoot?.querySelector("input");
        if (inputElement) {
            this.setupInputListener(inputElement);
        }
    }

    render() {
        if (!this.question) return html``;

        const {
            label = "",
            description = "",
            placeholder = "",
            required = false,
            disabled = false,
            min,
            max,
        } = this.question;

        const value = this.value;
        const inputId = this.id || "";

        return html`
      <dfr-label
        label="${label}"
        for="${inputId}"
        ?required=${required}
        exportparts="label, asterisk"
      >
      </dfr-label>
      <dfr-message message="${description}" part="description"> </dfr-message>
      <input
        type="number"
        id="${inputId}"
        part="input"
        placeholder="${placeholder}"
        .value="${value}"
        ?required=${required}
        ?disabled=${disabled}
        min="${min !== undefined ? min : ""}"
        max="${max !== undefined ? max : ""}"
      />
      <dfr-message part="error"></dfr-message>
    `;
    }

    protected validateSpecific(value: string): string {
        if (!this.question) return "";

        const { min, max } = this.question;
        const numValue = Number(value);

        if (min !== undefined && numValue < min) {
            return `Value must be at least ${min}.`;
        }
        if (max !== undefined && numValue > max) {
            return `Value must be no more than ${max}.`;
        }
        return "";
    }
}
