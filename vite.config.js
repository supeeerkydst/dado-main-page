import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// replace with your GitHub username and repo name
const repoName = 'supeeerkydst.github.io/dado-main-page';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});
