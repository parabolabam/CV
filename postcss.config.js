import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';

module.exports = {
    plugins: [
        react(),
        eslint(),
        autoprefixer(),
        ...(process.env.NODE_ENV === 'production' ? [cssnano] : []),
    ],
};
