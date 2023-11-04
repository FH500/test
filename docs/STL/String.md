# STRING

## **C++的string标准库**

string是C++标准库的重要部分，主要用于字符串处理。使用string库需要在同文件中包括该库 

```cpp
#include<string>
```

### **声明**

```cpp
string s;
string ss[10];
```

### **初始化**

使用等号的初始化叫做拷贝初始化，不使用等号的初始化叫直接初始化。

```cpp
#include<iostream>
#include<string>

using namespace std;

int main(){
    string s;               //  默认初始化，一个空白的字符串
    string s1("ssss");      // s1是字面值"ssss"的副本
    string s2(s1);          // s2是s1的副本
    string s3 = s2;         // s3是s2的副本
    string s4(10, '4');     // s4初始化
    string s5 = "Andre";    // 拷贝初始化
    string s6 = string(10, 'c');    // 可拷贝初始化，生成一个初始化好的对象，拷贝给s6

    char cs[] = "12345";
    string s7(cs, 3);       // 复制字符串cs的前三个字符到s当中

    string s8 = "abcde";
    string s9(s8, 2);

    string s10 = "asdsfasdgf";
    string s11(s10, 3, 4);  // s11是s10从下标3开始4个字符的拷贝，超出s10.size出现未定义
    return 0;
}
```

### **string类型的读入**

```cpp
string s;
cin >> s;   //不能读入空格，以空格，制表符，回车符作为结束标志
getline(cin, s); //可以读入空格和制表符，以回车符作为结束的标志
```

### **字符串末尾添加字符**

可以用+号和append()函数在函数的末尾添加字符。

```cpp
string s;
s += 'a';
s.append('a');
```

### **sting类型变量的访问**

string字符串变量访问可以采用at, operator[]来访问指定index对应的字符。其中at有越界检查,如果index越界，无论Debug还是在Release编译的环境下，程序异常跳出执行；operator[]无越界检查，如果index越界，则会取得不可预知的字符。

```cpp
string s("abcd");
cout << s[0] << s.at(2) << endl;
```

### **string类型的长度**

```cpp
string s = "Hello, world!"
int len = s.size();
int len = s.length();   //这两种方式是等价的
```

### **查找字符串的子字符串**

```cpp
string s = abcdefg, subs = "efg";
int pos = s.find(subs); // 如果找到子字符串则返回首次匹配的位置，否则返回-1
```

### **指向首字符和末尾字符的迭代器（begin,end）**

```cpp
string s("abcdefg");
for(string::iterator it = s.begin(); it != s.end(); it++)
{
    cout << *it;
}

//逆向迭代器
for (string::iterator it = s.rbegin(); it != s.rend(); it++)
   { cout << *it;  } 

//采用auto实现迭代器

for(auto itr : s)
{
    cout << itr << endl;
}
```

![https://pic4.zhimg.com/80/v2-7ff65bc40e209fe291362f8f44470047_1440w.webp](https://pic4.zhimg.com/80/v2-7ff65bc40e209fe291362f8f44470047_1440w.webp)

### **empty(), clear()**

empty()可以用来检查字符串是否为空，clear()用来清空字符串。

```cpp
string s1 = "012345";
if(!s1.empty()){
    cout << s1.length << endl;
    s1.clear();
}
```

### **insert()在指定index处插入字符或字符串**

```cpp
// insert原型函数，在index插入count个字符ch。
// insert(size_type index, size_type count, char ch)

string s1 = "abc";
s1.insert(1, 2, 'D')    // "aDDbc"
```

### **erase()删除字符**

erase()函数有三个原型:

```cpp
string& erase(size_t pos = 0, size_t n = npos);
iterator erase(iterator position);
iterator erase(iterator first, iterator last);
```

因此erase()总共有三种用法:

```cpp
erase(pos, n);      //删除从pos开始的n个字符,比如erase(0, 1)就是删除第一个字符
erase(position);    //删除从position处的一个字符(position是个string类型的迭代器)
erase(first, last); //删除从first到last之间的字符(first和last都是迭代器)
```

应用实例：

```cpp
string str ("This is an example phrase.");
string::iterator it;

// 第(1)种用法
str.erase (10,8);
cout << str << endl;        // "This is an phrase."

// 第(2)种用法
it=str.begin()+9;
str.erase (it);
cout << str << endl;        // "This is a phrase."

// 第(3)种用法
str.erase (str.begin()+5, str.end()-7);
cout << str << endl;        // "This phrase."
```

### **获取子字符串substr()**

- 函数原型:

```cpp
string substr(size_t pos = 0, size_t len = npos) const;
```

- 功能: 从子字符串中获取想要的子字符串
- 参数：
    - pos: 想要获取的子字符串的第一个字符的位置，如果pos等于字符串长度，则该函数返回一个空字符串，如果等于字符串长度，则该函数返回一个空的字符串，如果该长度大于字符串长度，则抛出一个out_of_range。 注：第一个字符的下标从0开始。
    - len： 子字符串中要包含的字符数, string::npos的值表示知道字符串末尾的所有字符。
- 返回值：带有对象子字符串的字符串对象。

应用实例:

```cpp
string s1 **=** "Hello World"
string s2 **=** s1.substr(3, 5);
string s3 **=** s1.substr(3, str**::**npos); *//截取从下标3到结束的子字符串*
```