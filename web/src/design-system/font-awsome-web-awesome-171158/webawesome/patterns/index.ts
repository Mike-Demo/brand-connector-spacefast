/**
 * Standard patterns — page-level pieces every project built on this design
 * system ships: the site footer and the open-source license page.
 */
export { SiteFooter, DEFAULT_SOCIAL_LINKS } from "./site-footer";
export type { SiteFooterProps, SiteFooterSocialLink } from "./site-footer";
export { LicensesPage, baseCredits } from "./licenses";
export type { LicenseEntry, LicenseGroup, LicensesPageProps } from "./licenses";
export { HCaptcha, HCAPTCHA_TEST_SITE_KEY } from "./hcaptcha";
export type { HCaptchaProps, HCaptchaHandle } from "./hcaptcha";
