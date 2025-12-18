import React from 'react';
import { Button, Card, Typography, Checkbox, Radio } from '@base/design-system';

export default function App() {
  return (
    <div style={{ padding: 32, background: '#f9fafb', minHeight: '100vh' }}>
      <Card>
        <Typography variant="h1">Design System Example</Typography>
        <Typography variant="body" style={{ marginBottom: 16 }}>
          This is a demo of the design system components.
        </Typography>
        <Button variant="primary" size="md" style={{ marginRight: 8 }}>Primary</Button>
        <Button variant="secondary" size="md" style={{ marginRight: 8 }}>Secondary</Button>
        <Button variant="outline" size="md" style={{ marginRight: 8 }}>Outline</Button>
        <Button variant="ghost" size="md">Ghost</Button>
        <div style={{ marginTop: 24 }}>
          <Checkbox label="Accept terms" />
          <Radio label="Option 1" name="group" style={{ marginLeft: 16 }} />
          <Radio label="Option 2" name="group" style={{ marginLeft: 8 }} />
        </div>
      </Card>
    </div>
  );
}
