module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
    // 'plugin:react-hooks/recommended'
    // 'prettier/@typescript-eslint',
    // 'plugin:prettier/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest: true
  },
  plugins: [
    'react',
    '@typescript-eslint'
    // 'react-hooks'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // ---------------------------------------
    // Stylistic Issues
    // ---------------------------------------
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral']
      }
    ],
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1
      }
    ],
    'no-trailing-spaces': ['warn'],
    'comma-spacing': ['warn'],
    'comma-style': ['warn'],
    'operator-linebreak': ['warn', 'before'],
    'brace-style': ['warn'],
    'keyword-spacing': ['warn'],
    'object-curly-spacing': ['warn', 'always'],
    'space-before-blocks': ['warn', 'always'],
    'spaced-comment': ['warn', 'always'],
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'padded-blocks': ['warn', 'never'],
    'comma-dangle': ['warn', 'never'],
    semi: 'off',
    '@typescript-eslint/semi': ['warn'],
    'space-in-parens': ['warn', 'never'],

    // ---------------------------------------
    // Best Practices
    // ---------------------------------------
    /*
     * `no-undef` option is NOT recommended to be used along with Typescript. See link below:
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
     * Use it only temporarily to check for variables not defined that are not reported from lint task.
     */
    // 'no-undef': ['error'],
    curly: ['warn'],
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    'no-multi-spaces': [
      'warn',
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: false
        }
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],

    // ---------------------------------------
    // NOTE The following rules are disabled becuase linter will never stop complaining.
    // The purpose is to enable (at least some of them) in the future and fix issues step by step.
    // ---------------------------------------
    'prefer-const': 'warn',
    'no-var': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/prefer-as-const': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',

    // React specific rules
    'react/prop-types': 'off',
    'react/no-find-dom-node': 'off',
    'react/jsx-key': ['error']
  },
  overrides: [
    // Override some TypeScript rules just for .js files
  ],
  ignorePatterns: ['CK-Games-Dev_Helpers/**/*', 'lazy_dev/**/*']
};
