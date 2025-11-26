import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { DFRBaseQuestion } from "../dfr-base-question/index";
import "../dfr-label";
import "../dfr-message";

interface SelectOption {
    value: string | number;
    label: string;
    disabled?: boolean;
}

@customElement("dfr-select-question")
export class DFRSelectQuestion extends DFRBaseQuestion {
    firstUpdated() {
        const inputElement = this.shadowRoot?.querySelector("select");
        if (inputElement) {
            this.setupInputListener(inputElement as any);
        }
    }

    render() {
        if (!this.question) return html``;

        const {
            label = "",
            description = "",
            required = false,
            disabled = false,
            options = [],
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
      <select
        id="${inputId}"
        part="input"
        ?required=${required}
        ?disabled=${disabled}
        .value="${value}"
      >
        <option value="" ?disabled=${true} ?selected=${!value}>
          Select an option...
        </option>
        ${(options as SelectOption[]).map(
            (opt) => html`
            <option
              value="${opt.value}"
              ?selected=${String(opt.value) === String(value)}
              ?disabled=${opt.disabled || false}
            >
              ${opt.label}
            </option>
          `,
        )}
      </select>
      <dfr-message part="error"></dfr-message>
    `;
    }
}
