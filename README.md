# travelapp

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
### 初始化css样式
在min.js中引入reset.css

### 解决移动端点击事件300ms的延迟
1、npm install fastclick --save
2、import fastClick from 'fastclick'
3、fastClick.
  attach(
  document.
  body) 调用fastClick.js

 ### 主题颜色封装
 1、yarn add stylus stylus-loader --save 
 2、创建一个styl的文件通过$符创建一个颜色变量并引入
 3、使用 $名称

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
