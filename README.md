# State of JS Frameworks

The purpose of this repo is to quickly compare current JavaScript & TypeScript
frameworks for building web sites. Specifically geared to The Guardian’s use
cases, these frameworks need to support server-side rendering, hydration on
the client-side and support for [Source], our design system.

[Source]: https://github.com/guardian/source

## Current selection

- [Astro](/astro)
- [Elder JS](/elder-js)
- [NextJS](/next-js)
- [Svelte Kit](/svelte-kit)

## Comparison

| Framework support         | Astro | Svelte | Next | Elder | React |
|---------------------------|-------|--------|------|-------|-------|
| Server-side Rendering     |       | Yes    |      |       | Meh   |
| Partial Hydration         |       | No     |      |       | Meh   |
| Source support            |       | Meh    |      |       | Yes   |
| React components          |       | No     |      |       | Yes   |