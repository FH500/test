# 指针

## 指针是什么

**本质上 指针是C&C++中的一种复合变量类型**

- 这说明指针本身是一个变量，可以进行读写等操作
- 指针内存放的是对象的地址
- 由于指针本身也是对象，所以存在指针的指针、指针的指针的指针、指针的指针的指针的指针……

## 解引用符和取地址符

- `*` 解引用符号
用于对一个指针来进行解引用，即 `*a` 会返回 `a` 指针所存放的地址对应内存上的值
- `&` 取地址符号
 对任意一个对象进行取地址操作， `&a` 会返回 `a` 的地址

## 指针的声明、定义以及简单使用

```cpp
   	//declare a pointer
    int *myPointer = NULL;//pay attention to the initialization of a pointer
    //declare a variable
    int myVariable = 10;
    //assign the address of the variable to the pointer
    myPointer = &myVariable;
    //visit the value of the variable through the pointer
    cout << *myPointer << endl;
   //visit the address of the variable
    cout << &myVariable << endl;
    //visit the address of the pointer
    cout << &myPointer << endl;
```

:::warning 指针的初始化
为防止指针在没有初始化的情况下成为野指针，请一定要对指针进行初始化，以避免程序出错。一般来说习惯将指针初始化为空指针 `NULL` 。此外 C++ 中还有 `nullptr` 来表示空指针
:::

## 指针的指针

我们可以定义指针的指针，在给指针的指针赋值时，一定要注意类型的匹配

```cpp
    //declare a pointer to a pointer
    int **myPointer2 = NULL;
    //assign the address of the pointer to the pointer to the pointer
    myPointer2 = &myPointer;
    //a wrong attempt: assign the address of the variable to the pointer to the pointer
    //myPointer2 = &myVariable;
```

## 常量指针、指针常量、指向常量的指针常量

在不同位置， `const` 的作用不同

```cpp
//declare a pointer to a constant
    const int *myPointer3 = NULL;
    //assign the address of the variable to the pointer to a constant
    myPointer3 = &myVariable;
    //visit the value of the variable through the pointer to a constant
    cout << *myPointer3 << endl;
    //a wrong attempt: change the value of the variable through the pointer to a constant
    //*myPointer3 = 20;

    //declare a constant pointer
    int * const myPointer4 = &myVariable;
    //a wrong attempt: assign the address of the variable to the constant pointer
    //myPointer4 = NULL;
    //visit the value of the variable through the constant pointer
    cout << *myPointer4 << endl;
    //change the value of the variable through the constant pointer
    *myPointer4 = 20;

    //declare a constant pointer to a constant
    const int * const myPointer5 = &myVariable;
    //a wrong attempt: assign the address of the variable to the constant pointer to a constant
    //myPointer5 = NULL;
    //a wrong attempt: change the value of the variable through the constant pointer to a constant
    //*myPointer5 = 20;
    //visit the value of the variable through the constant pointer to a constant
    cout << myPointer5 << endl;
```