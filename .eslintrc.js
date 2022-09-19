module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  // 配置js全局变量，因为是uni-app，全局的uni是不需要引入的，还有5+的plus对象
  globals: {
    uni: 'readonly',
    plus: 'readonly',
    wx: 'readonly'
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "eslint:recommended",
    '@vue/prettier'
    "airbnb-base",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "vue/html-self-closing": "off",
    "linebreak-style": [0, "error", "windows"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "global-require": "off",
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off",
    "no-useless-escape": "off",
    "import/no-unresolved": "off",
    "no-restricted-syntax": "off",
    "consistent-return": "off",
    "no-param-reassign": "off",
    "no-console": "off",
    "no-shadow": "off",
    "prefer-destructuring": "off",
    "max-len": "off",
    "import/no-absolute-path": "off",
    "default-case": "off",
    "no-plusplus": "off",
    "no-use-before-define": "off",
    "array-callback-return": "off",
    "brace-style": "off",
    "no-tabs": "off",
    "guard-for-in": "off",
    eqeqeq: "off",
    "import/extensions": "off",
    camelcase: "off",
    "import/no-dynamic-require": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-unused-expressions": "off",
    "func-names": "off",
    "import/no-named-as-default": "off",
    "no-empty-function": "off",
  },
};
