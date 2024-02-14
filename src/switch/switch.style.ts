import { css } from "lit";

export default css`
  :host {
    display: inline-block;
  }

  [hidden] {
    display: none !important;
  }

  :host(:disabled) {
    pointer-events: none;
    cursor: not-allowed;
  }

  :host(:disabled) #container {
    cursor: not-allowed;
  }

  :host(:disabled:focus-within) #container {
    outline: none;
  }

  #container {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  #container::before {
    position: absolute;
    display: block;
    content: "";
  }
`;
