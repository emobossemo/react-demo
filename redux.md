## 基本概念

1. Reducer：纯函数，只承担计算 State 的功能，不合适承担其他功能，也承担不了，因为理论上，纯函数不能进行读写操作。
2. View：与 State 一一对应，可以看作 State 的视觉层，也不合适承担其他功能。
3. Action：存放数据的对象，即消息的载体，只能被别人操作，自己不能进行任何操作。

![](./redux-demo/img/structure.png)

## 中间件和异步操作

```javascript

import { applyMiddleware,createStore } from 'redux'

const store = createStore(
        reducer,
        applyMiddleware(createLogger())
)


```
