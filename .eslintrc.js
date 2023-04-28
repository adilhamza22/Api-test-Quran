module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  
  plugins: [
    "jest",
    "jasmine"
  ],
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:jasmine/recommended"
  ],
  rules: {
    "jest/expect-expect": "error",
    "jasmine/no-focused-tests": "error",
    "jasmine/no-disabled-tests": "warn"
  },
  env: {
    "jasmine": true
  },
  globals: {
  },
  
}
