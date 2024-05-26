import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';

export default [
    ...pluginVue.configs['flat/recommended'],
    eslintPluginPrettierRecommended,
    {
        rules: {
            semi: 'error',
        },
    },
];
