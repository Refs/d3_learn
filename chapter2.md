
# 布局和刻度

```js
// 有一段代码3:03自己没办法去理解

x.domain([0, d3.max(data, function(d){
    return d.value;
})])

// 而stackOverflow上面正好有相应的注解
```

> Why is domain not using d3.max(data) in D3?

https://stackoverflow.com/questions/9688302/why-is-domain-not-using-d3-maxdata-in-d3


d3.max() expects an array of numbers, not of objects. the elements of data have an