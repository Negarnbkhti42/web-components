import { css } from "lit";

export default css`

    :host {
        font-family: var(--tap-sys-font-family);
    }

    .fab {
        background: var(--tap-sys-color-surface-primary);
        border: var(--tap-sys-stroke-1) solid var(--tap-sys-color-border-primary);
        border-radius: var(--tap-sys-radius-full);
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.10);
        padding: var(--tap-sys-spacing-3) var(--tap-sys-spacing-4);
        display: inline-flex;
        align-items: center;
    }

    .fab__title {
        font-size: var(--tap-sys-typography-body-sm-size);
        line-height: var(--tap-sys-typography-body-sm-height);
        font-weight: var(--tap-sys-typography-body-sm-weight);
    }

`;