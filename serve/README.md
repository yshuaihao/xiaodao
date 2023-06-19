# NODE 服务端代码库
## README

### 基本命令如下

```js
npm run serve: dev // 开发模式
npm run serve: build // 打包项目
npm run serve: start // 运行打包后的项目
```

### 文档链接
typeorm
```js
https://typeorm.bootcss.com/
```

### 开发过程中出现的错误
```js
Error [ERR_UNSUPPORTED_DIR_IMPORT]
    // https://www.likecs.com/ask-171336.html
    将 /index.js 附加到导入路径的末尾：
    例如：import ... from './models => import ... from './models/index.js'
    替代方式：
        将--experimental-specifier-resolution=node 添加到 node 命令。
```

