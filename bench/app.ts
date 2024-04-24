import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./app.style.js";

import "../src/banner/index.js";
import "../src/icons/index.js";
import "../src/bottom-navigation/index.js";
import "../src/bottom-navigation-item/index.js";
import "../src/button/index.js";
import "../src/badge/index.js";
import "../src/badge-wrapper/index.js";

@customElement("tap-app")
export class TapApp extends LitElement {
  static readonly styles = [styles];

  render() {
    return html`
      <tap-banner
        variant="hero"
        heading="زمان برای همه ارزشمند است"
        description="با حضور به‌موقع در مبدا، دقایق انتظار سفیران را کاهش دهیم."
        image="https://s3-alpha-sig.figma.com/img/e03a/b170/dcd9666b879bbdb6598653f5ea557ade?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NCys36vOQ-X22ieqUxtagnpV0OUkkf-ebqFg0LkYmEdspKBmmdKpNrYMaNTkk-euzyJMStun~Ylzp3WyEDLYnDrlclKpAa1NjUzxTLFr1aib35E4i7ocr9GiiVDvz04pimbJCyvnooXoXNkq6WU-bgM2JL0h3hyC~vmRVgMYZ2zPq2pbT6EwoJK~UFa~05k-ArhXNcpDZCk24rJZOY3CB8CBLA4DHyYLu9j-WfTZuV5ZMQcv2Bb6nEOWBSsmwrkOVYW66xLjesDeKea~8yktJcYP5RYq~9Oa0dyYFteXBCmPOK7qwpj63WfBTicFLJnjOJ5C5gWZpieSOChVZlrm4A__"
        background-color="rgba(230, 242, 237, 1)"
      >
      </tap-banner>
      <div class="services">
        <div class="service large" style="grid-area: 1 / 1 / 2 / 4;">
          <img src="https://static.tapsi.cab/passenger/ride-request.png" />
          <span>درخواست تپسی</span>
        </div>
        <div class="service large" style="grid-area: 1 / 4 / 2 / 7;">
          <div class="visual">
            <tap-badge value="تخفیف" variant="info"></tap-badge>
            <img src="https://static.tapsi.cab/passenger/moto-peyk.png" />
          </div>
          <span>پیک فوری</span>
        </div>
        <div class="service small" style="grid-area: 2 / 1 / 3 / 3;">
          <img src="https://static.tapsi.cab/passenger/intercity.png" />
          <span>بین شهری</span>
        </div>
        <div class="service small" style="grid-area: 2 / 3 / 3 / 5;">
          <img src="https://static.tapsi.cab/passenger/eco-peyk.png" />
          <span>پیک اقتصادی</span>
        </div>
        <div style="grid-area: 2 / 5 / 3 / 7;">
          <tap-badge-wrapper>
            <tap-badge slot="badge" value="تخفیف" variant="info"></tap-badge>
            <div class="service small">
              <img src="https://static.tapsi.cab/passenger/school.png" />
              <span>سرویس مدرسه</span>
            </div>
          </tap-badge-wrapper>
        </div>
      </div>

      <tap-bottom-navigation>
        <tap-bottom-navigation-item>
          سرویس‌ها
          <tap-icon-square-grid-rounded
            slot="icon"
          ></tap-icon-square-grid-rounded>
          <tap-icon-square-grid-rounded-fill
            slot="active-icon"
          ></tap-icon-square-grid-rounded-fill>
        </tap-bottom-navigation-item>
        <tap-bottom-navigation-item>
          تخفیف‌ها
          <tap-icon-coupon slot="icon"></tap-icon-coupon>
          <tap-icon-coupon-fill slot="active-icon"></tap-icon-coupon-fill>
        </tap-bottom-navigation-item>
        <tap-bottom-navigation-item>
          پروفایل
          <tap-icon-person slot="icon"></tap-icon-person>
          <tap-icon-person-fill slot="active-icon"></tap-icon-person-fill>
        </tap-bottom-navigation-item>
      </tap-bottom-navigation>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tap-app": TapApp;
  }
}
