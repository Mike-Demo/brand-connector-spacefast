/**
 * Types for the hydration-aware vendored Web Awesome bundle
 * (built by scripts/build-vendor.ts).
 *
 * Same surface as ./webawesome.bundle, plus Lit's hydration support imported
 * before any component so server-rendered declarative shadow roots hydrate.
 */
export * from "./webawesome.bundle";
