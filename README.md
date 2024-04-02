### @h5easy/eslint-config-ts 包使用方法

## 使用方法

#### 第一步
```javascript
 npm i @h5easy/eslint-config-ts -D
```

#### 第二步

在项目根目录下面新建 .eslintrc.js 配置文件 文件配置如下

```javascript
 module.exports = {
    extends: ["@h5easy/eslint-config-ts"],
};
 
```

#### 第三步

在项目根目录下面新建 .prettierrc 配置文件 文件配置如下

```javascript
{
    "tabWidth": 4,
    "trailingComma": "none",
    "endOfLine": "auto",
    "semi": true,
    "printWidth": 120,
    "singleQuote": false
}
```

#### 第四步

在项目根目录下面新建 `.editorconfig` 配置文件 文件配置如下

```javascript
root = true
[*]
end_of_line = lf
charset = utf-8
indent_style = space
indent_size = 4
insert_final_newline = true
trim_trailing_whitespace = true

```

#### 注意

```javascript
安装了 @h5easy/eslint-config-ts 之后 原本项目里面的关于 eslint prettier

的依赖都可以去掉了 

```