# 语句

语句（Statements）是程序的执行片段。我们的函数体就是由语句序列组成的。一般的语句会以分号 `;` 作为结束的标志。如下是一些语句的示例：

``` cpp
int main()
{
    int n = 1;                          // 声明语句
    n = n + 1;                          // 表达式语句
    cout << "n = " << n << '\n';        // 表达式语句
    return 0;                           // 返回语句
}
```

目前来说，常用的语句有以下几种：

- 声明语句
- 表达式语句
- 选择语句
- 循环语句
- 跳转语句
- 复合语句

除了复合语句外，你应该已经都很熟悉了，我们具体来介绍复合语句。

复合语句使用花括号 `{}` 包裹起来，顾名思义复合语句里面可以写入多条其他的语句。

``` cpp
// 下面 {} 包括起来的部分就是一个复合语句。
{
    int a = 0;
    a += 5;
    cout << a << endl;
}
```

`if` 语句的分支实际上只能写入一条语句，但显然一条语句往往是不够用的，这时复合语句就有用场了，因此 `if` 语句的两种常用的写法实际上就是一般语句和复合语句的区别。

``` cpp
// 用法 1
if (expression)
    singleStatement;
// 用法 2
if (expression)
{
    statement1;
    statement2;
    //...
}
```