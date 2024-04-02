module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier", "plugin:prettier/recommended"],
  rules: {
    //禁止使用eval
    "no-eval": "error",
    //允许使用any类型
    "@typescript-eslint/no-explicit-any": "off",
    //函数必须添加返回类型
    "@typescript-eslint/explicit-function-return-type": "off",
    //允许require引入
    "@typescript-eslint/no-var-requires": "off",
    //perttier错误
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    //禁止存在未使用的变量，未使用参数不提示error
    "no-unused-vars": [
      "error",
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: ".*", args: "none" },
    ]
  }
};
