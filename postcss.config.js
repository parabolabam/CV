import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import eslint from 'vite-plugin-eslint';


export default {
    plugins: [
        eslint(),
        autoprefixer(),
        ...(process.env.NODE_ENV === 'production' ? [cssnano] : []),
    ],
};
