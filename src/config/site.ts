export type SiteConfig = typeof siteConfig;
let base = "/our-city";

export const siteConfig = {
  name: "Vite + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
  ],

  navMenuItems: [
    {
      label: "第一期",
      href: `${base}/issue6`,
    },
    {
      label: "第二期",
      href: `${base}/issue6`,
    },
    {
      label: "第三期",
      href: `${base}/issue6`,
    },
    {
      label: "第四期",
      href: `${base}/issue6`,
    },
    {
      label: "第五期",
      href: `${base}/issue6`,
    },
    {
      label: "第六期",
      href: `${base}/issue6`,
    },
  ],
};
