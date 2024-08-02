import { defineConfig } from 'vitepress';
import generalConfig from '../config/content/generalConfig';
import navContent from '../config/content/navContentConfig';
import sidebarContent from '../config/content/sidebarContentConfig';
import docsContent from '../config/content/docsConfig';

export default defineConfig({
  title: generalConfig.siteName,
  
  description: generalConfig.siteDescription,
  themeConfig: {
    logo: '/assets/images/common/logo.svg',
    docs:docsContent,
    nav: navContent,
    sidebar: sidebarContent,
    footer: {
      message: 'Copyright © 2021 SingularityNET. All rights reserved.',
      copyright: 'Stichting SingularityNET Barbara Strozzilaan 362 1083 HN Amsterdam The Netherlands'},
    }
  })
