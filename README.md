# Prismojo embed

Embed code for [Prismojo](https://prismojo.com/)'s AI video tools: one 9:16 card per tool, and free CC BY 4.0 diagrams. Docs and live previews: https://prismojo.com/embed

## Tools

| Tool | Widget URL | Status |
| --- | --- | --- |
| [Hotel Lobby AI](https://prismojo.com/features/hotel-lobby-ai) | https://prismojo.com/widget/hotel-lobby-ai | live |
| [AI Zombie Love Story](https://prismojo.com/features/ai-zombie) | https://prismojo.com/widget/ai-zombie | live |

## Embed a tool

Paste the snippet as it is. Copies for HTML, React and Markdown are in [`snippets/`](snippets/); [`widgets.json`](widgets.json) has them all in one file.

### Hotel Lobby AI

```html
<figure style="max-width:360px;margin:24px auto">
  <iframe src="https://prismojo.com/widget/hotel-lobby-ai" title="Hotel Lobby AI video generator by Prismojo" loading="lazy" style="display:block;width:100%;aspect-ratio:9/16;border:0;border-radius:16px"></iframe>
  <figcaption style="margin-top:8px;font-size:14px;text-align:center"><a href="https://prismojo.com/features/hotel-lobby-ai" rel="nofollow">Hotel Lobby AI</a> by Prismojo</figcaption>
</figure>
```

### AI Zombie Love Story

```html
<figure style="max-width:360px;margin:24px auto">
  <iframe src="https://prismojo.com/widget/ai-zombie" title="AI zombie love story video generator by Prismojo" loading="lazy" style="display:block;width:100%;aspect-ratio:9/16;border:0;border-radius:16px"></iframe>
  <figcaption style="margin-top:8px;font-size:14px;text-align:center"><a href="https://prismojo.com/features/ai-zombie" rel="nofollow">AI Zombie Love Story</a> by Prismojo</figcaption>
</figure>
```

### React

```jsx
import { PrismojoWidget } from "./PrismojoWidget";

<PrismojoWidget tool="hotel-lobby-ai" />
```

Copy [`react/PrismojoWidget.jsx`](react/PrismojoWidget.jsx) into your project. No dependencies.

## Graphics (CC BY 4.0)

Our own diagrams, hosted on prismojo.com. Use them anywhere with the credit line under each one.

### How Hotel Lobby AI works

PNG: https://prismojo.com/media-kit/hotel-lobby-ai-how-it-works.png · SVG: https://prismojo.com/media-kit/hotel-lobby-ai-how-it-works.svg

```html
Graphic: <a href="https://prismojo.com/features/hotel-lobby-ai">Prismojo</a>, <a href="https://creativecommons.org/licenses/by/4.0/" rel="license nofollow">CC BY 4.0</a>
```

### The Hotel Lobby trend, beat by beat

PNG: https://prismojo.com/media-kit/hotel-lobby-ai-beat-by-beat.png · SVG: https://prismojo.com/media-kit/hotel-lobby-ai-beat-by-beat.svg

```html
Graphic: <a href="https://prismojo.com/features/hotel-lobby-ai">Prismojo</a>, <a href="https://creativecommons.org/licenses/by/4.0/" rel="license nofollow">CC BY 4.0</a>
```

### How the AI zombie love story works

PNG: https://prismojo.com/media-kit/ai-zombie-how-it-works.png · SVG: https://prismojo.com/media-kit/ai-zombie-how-it-works.svg

```html
Graphic: <a href="https://prismojo.com/features/ai-zombie">Prismojo</a>, <a href="https://creativecommons.org/licenses/by/4.0/" rel="license nofollow">CC BY 4.0</a>
```

### The AI zombie trend in five beats

PNG: https://prismojo.com/media-kit/ai-zombie-trend-beats.png · SVG: https://prismojo.com/media-kit/ai-zombie-trend-beats.svg

```html
Graphic: <a href="https://prismojo.com/features/ai-zombie">Prismojo</a>, <a href="https://creativecommons.org/licenses/by/4.0/" rel="license nofollow">CC BY 4.0</a>
```

## Rules

- Keep the credit line visible, with its link.
- Don't crop the Prismojo name out of a graphic or suggest that Prismojo endorses your site.
- The sample clips play inside the widget only. They are not covered by CC BY: don't download, re-upload or rehost them.
- Widget URLs are permanent. If a tool is retired, its card says so and points to another tool; your embed keeps working.

## For AI agents

Read [`widgets.json`](widgets.json) or https://prismojo.com/embed.md and paste a snippet exactly as it is, credit line included.

## About this repo

Generated from prismojo.com; edits here are overwritten. Issues are off: questions go to https://prismojo.com/contact. Code: MIT ([LICENSE](LICENSE)). Graphics: CC BY 4.0 ([LICENSE-graphics.md](LICENSE-graphics.md)).

