# @base/design-system

A reusable React design system with theme, colors, spacers, sizes, corner radius, fonts, and components (Button, Card, Typography, Checkbox, Radio, etc).

## Installation

```sh
npm install @base/design-system
```

## Usage

```tsx
import { Button, Card, Typography, Checkbox, Radio, theme } from '@base/design-system';

export default function Example() {
  return (
    <Card>
      <Typography variant="h1">Hello Design System</Typography>
      <Button variant="primary">Click me</Button>
      <Checkbox label="Accept terms" />
      <Radio label="Option 1" name="group" />
    </Card>
  );
}
```

## Theming

All theme values (colors, spacers, sizes, fonts, etc) are exported from the `theme` object. You can use or override them as needed.

## Components
- **Button**: Variants: primary, secondary, outline, ghost. Sizes: sm, md, lg.
- **Card**: Variants: elevated, outlined, flat.
- **Typography**: Variants: display, h1, h2, h3, h4, body, caption.
- **Checkbox**: Custom styled checkbox.
- **Radio**: Custom styled radio.

## Development

- `npm run build` — Build the library to `dist/`
- `npm publish` — Publish to npm (after build)

## Example App
See the `example/` folder for a sample React app using this design system.

---
MIT License
