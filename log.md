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

解决：

增加类型守护

```ts
export function getStringStatusByCurrentStatus(props: OptionsProps) {
  if (props && isStringArr(props.status)) {
    return props.status[props.currentStatus];
  }
}
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

## 2025-03-28

场景：
再路由守卫中，进行数据仓库当前组件的设置时，需要判断是否为组件市场，因为只有组件市场需要设置。

1. 首页进行调整是再localStorage存储激活的页面是组件市场还是编辑器，在路由守卫中进行判断
2. 在路由守卫中更具路由的path进行判断

```ts
// 路由守卫
router.beforeEach((to, from, next) => {
  // 判断是否为组件市场，因为只有组件市场需要记录当前的组件
  // 如果路由包含/materials则为组件市场
  if (to.path.includes('/materials')) {
    console.log(to.name);
  }
  next();
});

场景：
拿到图片上传接口返回的url地址时候，为什么要使用blob的方式？不直接给src赋值？


## 2025-03-29
问题：
图片单选组件在flex布局下，只有两个选项的时候justify-content不生效
解决：
父容器由子元素撑开，由于只有两个子元素的时候没有占满宽度，导致样式不生效。因此需要设置父元素的宽度为100%。