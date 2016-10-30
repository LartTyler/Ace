/**
 * This makes sure that TypeScript knows requiring html files returns raw strings.
 */
declare module "*.html" {
    const contents: string;
    export = contents;
}

/**
 * Ditto for handlebars.
 */
declare module "*.hbs" {
    const contents: string;
    export = contents;
}