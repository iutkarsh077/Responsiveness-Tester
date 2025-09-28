# Responsive Website Tester

A lightweight React + Tailwind app to preview websites at different device sizes. Useful for quick manual responsive checks and sharing common device presets.

---

## Features

* Choose from preset devices (Mobile, Tablet, Desktop, Custom).
* Live iframe preview of any URL.
* Custom width & height inputs for arbitrary sizes.
* Scales the preview to fit the viewport on small screens.
* Clean responsive UI built with Tailwind CSS.

---

## Tech stack

* React (TypeScript)
* Tailwind CSS
* Plain HTML iframe for preview

---

## Project structure (example)

```
/src
  /components
    RealTimeScreen.tsx     # main preview + controls
    WebsiteUrl.tsx         # url input + action button
  /constants
    index.ts               # Screens presets (width/height/icon)
  /types
    index.ts               # shared TS types
  App.tsx
  main.tsx
```

---

## Installation

```bash
# clone
git clone <repo-url>
cd <repo-folder>

# install
npm install

# dev
npm run dev
```

> If you use Yarn: replace `npm` with `yarn`.

---

## Usage

1. Start the dev server (`npm run dev`).
2. Enter a URL in the input (e.g. `https://example.com`) and click **Test Responsiveness**.
3. Select a preset device or choose **Custom** and enter width/height.
4. The preview will show the site inside an iframe. If the selected width exceeds your viewport, the preview scales down to fit.

---

## Component overview

### `WebsiteUrl` props

```ts
type Url = {
  url: string;
  setUrl: (u: string) => void;
}
```

### `RealTimeScreen` props

```ts
type Props = {
  url: string;
}
```

#### Behaviour

* Clicking a preset sets `screenWidth` and `screenHeight` and updates the iframe.
* When `Custom` is selected, two numeric inputs appear for width and height.
* Values are stored as numbers; inputs should use `Number(e.target.value)` when calling setters.
* The iframe is wrapped so we can: scale the preview for small viewports, allow scrolling, or disable interactions (via `pointer-events-none`).

---

## Customization

* Edit `Screens` in `/constants` to add/remove presets.
* Adjust min/max validation for the custom inputs (clamp on `onChange`).
* Add orientation toggle (portrait/landscape) by swapping width/height.
* Wrap the iframe in a device frame (CSS) to show bezels.

---

## Accessibility & Privacy

* The iframe content is from third-party origins — avoid auto-submitting forms inside the iframe.

---

## Known limitations

* Some websites disallow rendering in iframes (`X-Frame-Options` / `Content-Security-Policy`). Those sites won't load
