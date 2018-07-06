# ts-tween
用typescript编写的简单实用的动画库

## 实用例子
```
import { Tween, easing } from '../animation/index';
new Tween({
  from: {y: 100},
  to: {y: 0},
  ease: easing.quarticInOut,
  duration: 600,
  update: (result) => {
    // 更新运动元素位置
  }
}).start()
```

## API
### 参数
参数  | 描述
------------- | -------------
from  | 运动的起始值，只支持对象
to  | 运动的结束值，只支持对象
duration  | 运动持续时间
ease  | 缓动函数，具体请查看代码easing（支持自定义，请参考easing）
update  | 数据更新回调函数
complete  | 运动结束回调函数
