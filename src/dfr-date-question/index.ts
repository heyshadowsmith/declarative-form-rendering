import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { DFRBaseQuestion } from "../dfr-base-question";
import "../dfr-label";
import "../dfr-message";

@customElement("dfr-date-question")
export class DFRDateQuestion extends DFRBaseQuestion {
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
            minDate,
            maxDate,
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
        type="date"
        id="${inputId}"
        part="input"
        placeholder="${placeholder}"
        .value="${value}"
        ?required=${required}
        ?disabled=${disabled}
        min="${minDate || ""}"
        max="${maxDate || ""}"
      />
      <dfr-message part="error"></dfr-message>
    `;
    }

    protected validateSpecific(value: string): string {
        if (!this.question) return "";

        const { minDate, maxDate } = this.question;

        if (!value) return "";

        const dateValue = new Date(value);

        if (minDate) {
            const min = new Date(minDate);
            if (dateValue < min) {
                return `Date must be on or after ${minDate}.`;
            }
        }

        if (maxDate) {
            const max = new Date(maxDate);
            if (dateValue > max) {
                return `Date must be on or before ${maxDate}.`;
            }
        }

        return "";
    }
}
