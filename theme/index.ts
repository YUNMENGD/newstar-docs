import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Layout from "./Layout.vue";
import "./style.scss";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp(/* { app, router, siteData } */) {
    // ...
  },
} satisfies Theme;
