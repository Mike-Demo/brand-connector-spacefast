/**
 * Types for the vendored Web Awesome bundle (built by scripts/build-vendor.ts).
 *
 * Importing the bundle registers every <wa-*> custom element as a side
 * effect. Only the setup helpers the design system calls are declared here;
 * component props are typed by the React wrappers in ../react.
 */

/** Overrides where icon SVGs are fetched from. */
export declare function setIconPath(path: string): void;

/** Overrides where component modules and assets are fetched from. */
export declare function setBasePath(path: string): void;

/** Resolves once every custom element in the document is defined. */
export declare function allDefined(root?: Element | Document): Promise<void>;
