import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { DFRBaseQuestion } from "../dfr-base-question/index";
import "../dfr-label";
import "../dfr-message";

@customElement("dfr-text-question")
export class DFRTextQuestion extends DFRBaseQuestion {
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
            minLength,
            maxLength,
            pattern,
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
        type="text"
        id="${inputId}"
        part="input"
        placeholder="${placeholder}"
        .value="${value}"
        ?required=${required}
        ?disabled=${disabled}
        minlength="${minLength || ""}"
        maxlength="${maxLength || ""}"
        pattern="${pattern || ""}"
      />
      <dfr-message part="error"></dfr-message>
    `;
    }

    protected validateSpecific(value: string): string {
        if (!this.question) return "";

        const { minLength, maxLength, pattern } = this.question;

        if (minLength && value.length < minLength) {
            return `Minimum length is ${minLength} characters.`;
        }
        if (maxLength && value.length > maxLength) {
            return `Maximum length is ${maxLength} characters.`;
        }
        if (pattern && !new RegExp(pattern).test(value)) {
            return "Invalid format.";
        }
        return "";
    }
}
