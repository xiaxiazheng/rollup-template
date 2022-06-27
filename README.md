### 本地调试

不要用 npm link，会出现 react 版本冲突的问题，要用 yalc，已经内置

### yalc 的使用

```yalc push```

会得到：rollup-template@1.0.0 published in store.

在使用的地方，用 ```yalc add rollup-template@1.0.0``` 即可。

### 组件引入后的使用
```
import { Button, sum, addOne, Counter } from "rollup-template";
import "rollup-template/dist/style.css";
```
样式文件需要单独引入。