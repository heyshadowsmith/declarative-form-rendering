import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { DFRBaseQuestion } from "../dfr-base-question/index";
import "../dfr-label";
import "../dfr-message";

@customElement("dfr-number-select-question")
export class DFRNumberSelectQuestion extends DFRBaseQuestion {
    firstUpdated() {
        const inputElement = this.shadowRoot?.querySelector("input");
        const outputElement = this.shadowRoot?.querySelector("output");

        if (inputElement && outputElement) {
            // Update output display when input changes
            inputElement.addEventListener("input", (e) => {
                outputElement.textContent = (e.target as HTMLInputElement).value;
            });

            this.setupInputListener(inputElement);
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

        // Determine min and max from options array
        const numOptions = options as number[];
        const min = numOptions.length > 0 ? Math.min(...numOptions) : 0;
        const max = numOptions.length > 0 ? Math.max(...numOptions) : 10;
        const step = 1;

        return html`
      <dfr-label
        label="${label}"
        for="${inputId}"
        ?required=${required}
        exportparts="label, asterisk"
      >
      </dfr-label>
      <dfr-message message="${description}" part="description"> </dfr-message>
      <div part="range-container">
        <input
          type="range"
          id="${inputId}"
          part="input"
          min="${min}"
          max="${max}"
          step="${step}"
          .value="${value}"
          ?required=${required}
          ?disabled=${disabled}
        />
        <output part="range-value" for="${inputId}">${value}</output>
      </div>
      <dfr-message part="error"></dfr-message>
    `;
    }
}
