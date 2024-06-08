import { customElement } from "lit/decorators.js";
import { FloatingActionButton } from "./floating-action-button";
import styles from "./floating-action-button.style";

/**
 * ### Example
 *
 *
 * ##### Simple
 *
 * ```html
 * <tap-floating-aciton-button></tap-floating-action-button>
 * ```
 *
 * ##### With Label and Placeholder
 *
 * ```html
 * <tap-floating-action-button title="enter a title"><tap-icon-default slot="leading" width="24" height="24"></tap-icon-default></tap-floating-action-button>
 * ```
 *
 * @summary A floating action button.
 *
 * @prop {`string`} [`title`=`''`] - The title of the FAB.
 *
 * @csspart [`fab`] - The main container for the FAB.
 * @csspart [`title`] - The title for the FAB.
 *
 * @cssprop [`--tap-font-family`=`--tap-sys-font-family`] - The font family used in FAB.
 * @cssprop [`--tap-fab-color-surface`=`--tap-sys-color-surface-primary`] - The backgroud color for the FAB container.
 * @cssprop [`--tap-fab-border-stroke`=`--tap-sys-stroke-1`] - The border width of the FAB container.
 * @cssprop [`--tap-fab-border-color`=`--tap-sys-color-border-primary`] - The border color of the FAB container.
 * @cssprop [`--tap-fab-radius`=`--tap-sys-radius-full`] - The border radius of the FAB container.
 * @cssprop [`--tap-fab-spacing`=`--tap-sys-spacing-full`] - The padding of the FAB container.
 * @cssprop [`--tap-fab-title-font-size`=`--tap-sys-typography-body-sm-size`] - The font size of the FAB title.
 * @cssprop [`--tap-fab-title-line-height`=`--tap-sys-typography-body-sm-height`] - The line height of the FAB title.
 * @cssprop [`--tap-fab-title-font-weight`=`--tap-sys-typography-body-sm-weight`] - The font weight of the FAB title.
 * @cssprop [`--tap-fab-title-vertical-spacing`=`--tap-sys-spacing-0`] - Vertical padding of the FAB title.
 * @cssprop [`--tap-fab-title-horizontal-spacing`=`--tap-sys-spacing-4`] - Horizontal padding of the FAB title.
 */

@customElement("tap-floating-action-button")
export class TapFloatingActionButton extends FloatingActionButton {
    static readonly styles = [styles];
}

declare global {
    interface HTMLElementTagNameMap {
        "tap-floating-action-button": TapFloatingActionButton;
    }
}
