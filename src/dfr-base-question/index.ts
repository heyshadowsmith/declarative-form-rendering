import { LitElement } from "lit";
import { property } from "lit/decorators.js";

export interface Question {
    label?: string;
    description?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    [key: string]: any;
}

export abstract class DFRBaseQuestion extends LitElement {
    @property({
        converter: {
            fromAttribute: (value: string | null) => {
                if (!value) return undefined;
                // If it looks like a JSON object, parse it
                if (value.trim().startsWith("{")) {
                    try {
                        return JSON.parse(value);
                    } catch {
                        return undefined;
                    }
                }
                // Otherwise, treat it as a path to resolve from window
                return value
                    .split(".")
                    .reduce((acc: any, part: string) => acc && acc[part], window);
            },
            toAttribute: (value: Question | undefined) => {
                return value ? JSON.stringify(value) : null;
            },
        },
    })
    question?: Question;

    @property({ type: String, reflect: true }) value = "";

    protected _dirty = false;

    willUpdate(changedProperties: Map<string, any>) {
        if (changedProperties.has("question")) {
            if (!this.question) {
                this.style.display = "none";
            } else {
                this.style.display = "";
            }
        }
    }

    protected setupInputListener(inputElement: HTMLInputElement) {
        inputElement.addEventListener("input", (e) => {
            this.value = (e.target as HTMLInputElement).value;
            this._dirty = true;
            this.validate(this.value);
            this.dispatchEvent(
                new CustomEvent("value-changed", {
                    detail: { value: this.value },
                    bubbles: true,
                    composed: true,
                }),
            );
        });
    }

    protected validate(value: string) {
        if (!this.question || !this._dirty) return;

        const { required } = this.question;
        const errorAtom = this.shadowRoot?.querySelector(
            'dfr-message[part="error"]',
        );
        if (!errorAtom) return;

        let errorMessage = "";

        if (required && !value) {
            errorMessage = "This field is required.";
        } else {
            errorMessage = this.validateSpecific(value);
        }

        errorAtom.setAttribute("message", errorMessage);

        if (errorMessage) {
            this.setAttribute("invalid", "");
        } else {
            this.removeAttribute("invalid");
        }
    }

    protected validateSpecific(value: string): string {
        return "";
    }
}
