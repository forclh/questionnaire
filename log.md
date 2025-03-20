# 一些开发记录

## 2025-03-25

问题：

二级路由导入出现ts报错，提示打不到module，但是编译成功，运行也不报错

```js
component: () => import('@/views/MaterialsView/SelectGroupView.vue');
```

解决：

[参考](https://www.cnblogs.com/llcdbk/p/11930815.html)
