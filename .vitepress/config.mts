import { defineConfig } from 'vitepress';
import generalConfig from '../config/content/generalConfig';
import navContent from '../config/content/navContentConfig';
import sidebarContent from '../config/content/sidebarContentConfig';

export default defineConfig({
  title: generalConfig.siteName,
  description: generalConfig.siteDescription,
  themeConfig: {
    logo: '/assets/images/common/logo.svg',
    nav: navContent,
    sidebar: sidebarContent,
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'},
    }
  })
