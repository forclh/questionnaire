# 一些开发记录

## 2025-03-20

问题：

二级路由导入出现ts报错，提示打不到module，但是编译成功，运行也不报错

```js
component: () => import('@/views/MaterialsView/SelectGroupView.vue');
```

解决：

[参考](https://www.cnblogs.com/llcdbk/p/11930815.html)

## 2025-03-22

知识点：

1. vue-router中的exact-active-class类
2. sass 中的 > 选择器语法

问题：

定义业务组件的JSON schema时导出不能使用对象，否则会导致多个业务组件共同一个数据状态

## 2025-03-23

知识点：

1. TS类型声明复习
2. TS与Vue的结合使用

## 2025-03-26

待优化：
SingleSelect组件传递titleSize和descSize时，需要将数字类型转换为字符串类型。

```vue
<MaterialsHeader
  :serialNum="serialNum"
  :title="computedStatus.title"
  :desc="computedStatus.desc"
  :titleSize="String(computedStatus.titleSize)"
  :descSize="String(computedStatus.descSize)"
/>
```

## 2025-03-27

问题1：
Provide和Inject的类型推断问题

解决：
[官网](https://cn.vuejs.org/guide/typescript/composition-api#typing-provide-inject)
[掘金博客](https://juejin.cn/post/7169219400003190791)

问题2：
switch-case语句由于没有break，导致的类型推断问题

知识点：

1. ts中的类型守卫
