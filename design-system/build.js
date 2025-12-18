// Simple build script to run tsc
const { execSync } = require('child_process');

try {
  execSync('tsc --project tsconfig.json', { stdio: 'inherit' });
  console.log('Build successful!');
} catch (e) {
  console.error('Build failed.');
  process.exit(1);
}
