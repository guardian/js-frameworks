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

```zsh
pnpm -r build-and-preview
```

| Framework support         | Astro | Svelte| Next  | Elder | React |
|---------------------------|-------|-------|-------|-------|-------|
| Server-side Rendering     | Yes   | Yes   | Yes   |       | Meh   |
| Partial Hydration         | Yes   | No    | No    |       | Meh   |
| Source support            | Yes†  | Meh   | Yes   |       | Yes   |
| React components          | Yes   | No    | Yes   |       | Yes   |
| Initial JS load size      | 12 kB | 20 kB?| 66 kB | ???   | ???   |

†: Attempts at using vanilla-extract failed, but a PR against the repo exists: