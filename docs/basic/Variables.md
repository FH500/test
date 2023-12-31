# 变量与类型

## 变量的定义

解决问题时必然涉及到数据处理，而数据处理又必然离不开数据存储。在计算机中，使用一种名叫变量的东西来存储数据。

我们可以使用以下的语句来定义，或者说创建一个变量。
``` cpp
int a;
```
在这里，我们创建了一个变量，其名字为 `a` ，定义并创建好变量以后，你就可以在之后通过变量的名字来调用这个变量了。`int` 表明我们创建的变量的类型为 `int` 型，如果你不知道类型是什么也完全不用担心，我们马上就会介绍。最后，千万别忘了语句最后的分号 `;` 。

**一般地，变量的定义语句如下**
``` cpp
T name;
```
其中 `T` 为变量的类型，`name` 为变量的名字。

在定义变量的同时，我们通常会赋予其一个初始值，这叫做**初始化**。下面的例子演示了如何在定义变量的同时进行初始化。

``` cpp
int a = 10;
```

C/C++ 中遵循先定义，后使用的规则。在使用变量前，你必须先进行声明，否则编译器将会报错。下面就是一个错误实例。

``` cpp
a = 10 + 5;     //在这里，编译器抛出了一个错误：
                //this declaration has no storage class or type specifier
int a;
```

声明多个**同类型的**变量时，你可以类似下面将他们放在一起，用逗号 `,`，从而省略掉一些代码。

``` cpp
int a, b, c;
//相当于
int a;
int b;
int c;
```

## 变量的命名

### 命名规则

你应该或多或少听说过了变量名的命名规则，简单概括就是以下三点：

1. 只能使用下划线 `_`，英文字母和数字。
2. 不能以数字开头。
3. 不能与 C/C++ 中的关键字冲突。

直接来做些练习吧！下面哪些变量的命名是正确的？

1. `ikun111`
2. `瓜瓜`
3. `___func`
4. `GenShin`
5. `a0##c`
6. `88liyunlong`
7. `まりさ`
8. `double`
9.  `student_name`
10. `😓😓😓`

::: details 查看答案
只有 `1，3，4，9` 是正确的。
:::

### 命名规范

虽然变量的命名只要符合规则就可以通过编译了，但我还是要提醒你，在命名变量时，应该使用具有可读性的名字，如 `student_name` 表示学生的名字， `teacherNum` 表示老师的数量，避免使用一些无意义的名字如 `a1`，`wt` 等。

然而，变量的名字也应该尽可能短，以便于拼写和记忆，过长的名字会给输入带来麻烦，尤其是一些很常用的变量，如 for 循环中的循环变量，因此，我们往往约定俗称，使用单个字母 `i` 来表示循环变量；一些局部变量，如函数参数，也会使用单个字母来命名。总之，这是一个需要你自己把握的问题。

通常而言，我们也不会使用下划线 `_` 来命名变量，尤其是以 `_` 开头的变量，因为这是 C/C++ 头文件和库的命名风格，我们应该避免与之冲突。

## 类型

生活中几乎处处都存在着分类。走进图书馆里查阅图书时，你肯定看到过书架上有序而严谨的分类标签，通过这些标签你很快就能找到你想要的书本；走在路上，你可能时不时会遇到可爱的小猫，尽管它们外貌形态各异，但它们都享有相同的生物学上的分类——猫科猫属（一些题外话：虽然小猫很可爱，但我个人还是更喜欢小狗~摊牌了！！我就是犬控🥵🥵🥵！）。分类在生活学习和科学研究中起着非常重要的作用。

在 C/C++ 中，我们依据变量所储存的数据的类型来对其进行分类。变量的类型有很多种，幸运的是，你只需要掌握以下 5 种类型就能处理现阶段会出现的所有问题了。

|  类型  |           说明           |        示例        |
| :----  | :----------------------: | :----------------: |
|  int   |      整型，表示整数      |        `2`         |
| double |     浮点型，表示实数     |       `2.5`        |
|  char  |   字符型，表示单个字符   |       `'x'`        |
| string | 字符串型，表示一个字符串 | `"a short string"` |
|  bool  |  布尔类型，表示布尔代数  |       `true`       |

::: warning
C 语言中没有 `string` 类型和 `bool` 类型，因此，你得用一些不同的方法来解决问题。后面会介绍在面对相关问题时，只使用 C 语言的处理方法。
:::

上面的表格的实例中，给出了不同类型的具体的值，我们称之为**字面量**。在不需要数据存储的场景中，我们可以偷个懒，省略掉变量的定义和初始化，直接使用字面量进行算术计算或其他操作。显然，不同类型的字面量有其不同的风格。

### int 型

int 型的字面量直接用整数来表示。此外若整数前有前缀 `0` 时，其表示一个八进制数；整数前有前缀 `0x` 或 `0X` 时，其表示十六进制数。

``` cpp
int a = -631;        //十进制数 -631。
int b = 031;        //有前缀 0，表示八进制数 31。
int c = 0xA0;       //有前缀 0x，表示十六进制数 A0。
int d = 0XAbCdd0;   //有前缀 0X，表示十六进制数 AbCdd0。
```

尽管在十六进制数的表示中，大小写不敏感，但我建议你使用小写前缀 0x 和大写字母 ABCDEF 来表示数字，并保持良好的代码风格。上面的变量 `d` 的字面量就是一个合法但很糟糕的写法。

### 浮点型

浮点型是用来存储实数一种类型。表示浮点数时，你的数字中必须带有小数点 `.`，否则计算机会将其视为整型。反之，只要数字中带有 `小数点`，就会被视为浮点型。

``` cpp
double a = 1.32;
double b = 0.0;     //浮点数 0 的表示方法，需要特别注意，不要漏掉小数点。
double c = -3.3;
```

受制于浮点数的精度限制，在进行某些计算时，浮点数并不是总能精确地计算出结果。

``` cpp
double a = 3.14159265358979324684;
cout << setprecision(30) << a;      //setprecision 用于修改浮点数输出时显示的小数位数，其包含于头文件 iomanip 中。
```

运行以上的代码时会输出：

``` cpp
//我们嵌入的结果：3.14159265358979324684
3.14159265358979311599796346854
```

代码：

``` cpp
double a = 0.1 + 0.1 + 0.1;
cout << setprecision(30) << a;
```

输出：

``` cpp
0.300000000000000044408920985006
```

尽管如此，在一定范围内，浮点数的计算结果还是准确的，因此你可以放心地使用它来进行计算。

### char 型

char 型表示单个字符，其字面量需要用单引号 `'` 包起来。

``` cpp
char a = 'a';
char b = 'b';
char c = '1';
char d = '+';
```

字符是一个非常复杂的东西，这里我不深入地去介绍了。在这里，你只需要注意，char 型只能存储 [ASCII 码]() 内的字符，非 ASCII 码字符是无法放进 char 里面的，例如中文、日文字符，中文的全角符号 `；`，`！`，`？`，`“`，`‘`，`。` 等等。

此外，出于某些原因，我们用特殊的记号来代表某些字符，这类字符我们称为**转义字符**。使用转义字符主要是为了便于编程的时候输入一些不易输入的字符，如空字符，换行符，或者是为了避免与我们编程语言中的特殊记号冲突，如字符字面量的提示符单引号 `'`，甚至转义字符中的反斜杠 `\`。

``` cpp
char a = '\n';  //换行符。
char b = '\t';  //制表符，相当于 tab 键。
char c = '\0';  //空字符，在 ASCII 码中的值为 0。
char d = '\'';  //单引号。
char e = '\"';  //双引号。
char f = '\\';  //反斜杠。
```

### string 型

string 型的字面量用双引号 `"` 包起来。string 可以看作是由很多个 char 组成的，因此，你也不应往 string 里放入 char 不能放入的东西。

``` cpp
string a = "abcd";
string b = "12345";
string c = "+-*/"
```

::: warning 注意
要使用 string 类型，需要在代码的头部引入头文件 `string`。
``` cpp
#include <string>
```
:::

### bool 型

bool 型很简单，只需要使用 `true` 和 `false` 来分别表示真和假即可。注意别把 `true` 拼成 `ture`，或者把 `false` 给拼成 `flase` 啦！

``` cpp
bool a = true;
bool b = false;
```