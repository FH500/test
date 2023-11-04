# VECTOR

首先，我们指出一点： `vector` 相当于不定长数组。

下面假设我们已经写了这些：

```cpp
#include <iostream>
#include <string>
#include <vector>
using namespace std;
```

# 创建一个vector

## 不初始化

我们就像queue、stack那样，用 `vector<typeName>` 来创建一个用来装类型 `typeName` 的vector。

```cpp
vector<int> v;
vector<string> strs;
vector<vector<int> > array2D;
vector<stack<int> > ss;
vector<queue<int> > qs;
```

<aside>
💡 顺便一提，之前所有占位的 `typeName` ，除了 `map` 与 `unordered_map` 的键(第一个类型)，都可以是STL容器。

</aside>

## 初始化

虽然 `vector` 是不定长数组，但我们也当然可以给它一个初始的长度。

```cpp
vector<int> a(10);
```

上面这行代码创建了一个装 `int` 的vector，变量名是 `a` ，初始长度为 `10` ，但是都没有赋值。（在之前未初始化的例子中，vector的初始长度为 `0` ）

---

我们也可以这样：

```cpp
vector<int> a(10,1);
```

上面这行代码不仅创建给了初始长度，还将每个元素的初值设置为了 `1` 。

---

我们也可以直接复制另一个vector：

```cpp
vector<int> b(a);
```

`b` 即为 `a` 的一份复制，这个与下面这行差别不大：

```cpp
vector<int> b = a;
```

---

还有比较像 `string` 中的 `substr` 的方法：

```cpp
vector<int> a(b.begin(),b.begin()+3);
```

上面这行代码， `a` 为 `b` 中的第0、1、2的元素的一个副本。

或者：

```cpp
int b[7]={1,2,3,4,5,9,8};
vector<int> a(b, b+7);
```

这样能够将数组 `b` 中的前7个元素复制出来，作为 `a` 的初值。

# 成员函数

## 添加元素到末尾 `push_back()`

我们可以这样给一个vector末尾添加元素：

```cpp
a.push_back(7);
```

## 删除末尾的元素 `pop_back()`

这样可以删除vector末尾的元素：

```cpp
a.pop_back();
```

## 清空 `clear()`

字面意思，和其他STL容器类似

```cpp
a.clear();
```

## 判断大小 `size()` | 判断是否为空 `empty()`

和其他STL容器类似

```cpp
if(!a.empty()) {
	cout << a.size() << endl;
}
```

# 遍历方法

因为vector为STL容器，所以我们可以这样遍历：（类似 `<map>` 中的方法）

```cpp
for(auto num: a) {
	cout << a << endl;
}
```

也可以传统方法：

```cpp
int l = a.size();
for(int i=0; i<l; i++) {/
	cout << a[i] << endl;
}
```

# 删除元素

erase函数

```cpp
iterator erase (const_iterator position);
iterator erase (const_iterator first, const_iterator last);
```