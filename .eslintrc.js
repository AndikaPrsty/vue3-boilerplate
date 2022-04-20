// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-mixed-spaces-and-tabs': 'error',
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/attribute-order': 'off',
    'vue/attribute-hyphenation': ['off', 'never', {ignore: ['custom-prop']}],
    'vue/multi-word-component-names': 'off',
    'vue/valid-v-model': 'off',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
