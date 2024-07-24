import { defineConfig } from 'vitepress';
import generalConfig from '../config/content/generalConfig';
import navContent from '../config/content/navContentConfig';
import sidebarContent from '../config/content/sidebarContentConfig';

export default defineConfig({
  title: generalConfig.siteName,
  description: generalConfig.siteDescription,
  themeConfig: {
    nav: navContent,
    sidebar: sidebarContent,
  },
})
