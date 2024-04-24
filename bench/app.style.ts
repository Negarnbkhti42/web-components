import { css } from "lit";

export default css`
  .services {
    padding: 32px 16px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }

  .service {
    font-family: var(--tap-sys-font-family);
    background: var(--tap-sys-color-surface-secondary);
    color: var(--tap-sys-color-content-primary);
    border-radius: var(--tap-sys-radius-4);

    grid-area: 1 / 4 / 2 / 7;
    display: flex;
    flex-direction: column;
  }

  .service img {
    width: 72px;
    height: 72px;
  }

  .large {
    line-height: var(--tap-sys-typography-label-sm-height);
    font-size: var(--tap-sys-typography-label-sm-size);
    font-weight: var(--tap-sys-typography-label-sm-weight);
    align-items: flex-end;
    padding: 12px;
  }

  .large span {
    align-self: flex-start;
  }

  .large .visual {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .small {
    line-height: var(--tap-sys-typography-label-xs-height);
    font-size: var(--tap-sys-typography-label-xs-size);
    font-weight: var(--tap-sys-typography-label-xs-weight);
    align-items: center;
    padding: 8px;
  }
`;
