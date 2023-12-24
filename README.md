## 项目使用
- 实现 `react-router-dom` 基本原理

### React 生僻 api 用法
- React.Children
  - React.Children.count()： 统计 props.children 数量
  - React.Children.map()：对于 props.children 逐个重写，比如重写 props，并返回一个新的数组
  - React.Children.toArray()：将 props.children 转换成数组
  - React.Children.forEach()：对 props.children 逐个执行额外逻辑，不返回任何数据
- React.cloneElement()
- 参考
  - [React 进阶 - React.Children、React.cloneElement 用法](https://juejin.cn/post/7055954719801344013)
  - [官网 React.Children 用法](https://react.dev/reference/react/Children)
  - [官网 React.cloneElement 用法](https://react.dev/reference/react/cloneElement)

### 项目创建命令
```shell
# React + TypeScript + Vite
pnpm create vite@latest projectName --template react-ts
```
