# 数组

## 数组的声明

```cpp
    //declare an array of 5 integers
    int myArray1[5];
    //declare an array of 5 strings
    string myStringArray[5];
    //declare an array of 5 doubles
    double myDoubleArray[5];
    //declare an array of 5 characters
    char myCharArray[5];
```

## 数组的初始化

```cpp
    //default initialization of an array
    //all elements are set to 0
    int myArray2[5] = {0};
    //initialize an array with equal values
    int myArray3[5] = {1,2,3,4,5};
    //initialize an array with less values
    int myArray4[5] = {1,2,3};
    //a wrong attempt: initialize an array with more values than the size of the array
    //int myArray5[5] = {1,2,3,4,5,6,7,8,9,10};
    //initialize an array with no values
    int myArray6[5] = {};
```

### 字符数组的特殊初始化

```cpp
    //initialize a char array with characters
    char myCharArray2[5] = {'h','e','l','l','o'};
    //initialize a char array with a string 
    char myCharArray3[6] = "hello";//pay attention to the size of the array
    //visit the elements of an array
    cout << myArray3[0] << endl;
    //change the value of an element
    myArray3[0] = 10;
```

::: warning 
不要访问和使用数组范围外的值
:::

## 多维数组

```cpp
	//decalre a multidimensional array
    int myArray7[2][3];
    //initialize a multidimensional array
    int myArray8[2][3] = {{1,2,3},{4,5,6}};
    //default initialization of a multidimensional array
    int myArray9[2][3] = {{0}};
```

## 数组中指针的使用

```cpp
    //declare an array of 5 integers
    int myArray[5] = {1,2,3,4,5};
    //declare a pointer
    int *myPointer = NULL;
    //assign the address of the array to the pointer
    myPointer = myArray;
    //visit the elements of the array through the pointer
    cout << *myPointer << endl;
		cout << *(myPointer+1) << endl;
		cout << myPointer[1] <<endl;
```


::: tip 贴士
1. 在使用指针访问数组时，注意解引用符 `*` 的优先级高于加号 `+`，如果想先做加运算再取地址，记得加括号。
2. 本质上 `[]` 也是一个运算符， `a[n]` 作用为取指针 `a` 的后 `n` 位地址上的值，相当于先做指针运算，再解引用
:::

```cpp
	
	//The use of pointer in multidimensional arrays
    //declare a multidimensional array
    int myArray2[2][3] = {{1,2,3},{4,5,6}};
    //declare a pointer
    int *myPointer2 = nullptr;
    //assign the address of the multidimensional array to the pointer
    myPointer2 = myArray2[0];
    //visit the elements of the multidimensional array through the pointer
    cout << *myPointer2 << endl;
    //declare a pointer to a pointer
    int **myPointer3 = NULL;
    //assign the address of the pointer to the pointer to the pointer
    myPointer3 = &myPointer2;
    //visit the elements of the multidimensional array through the pointer to the pointer to the pointer
    cout << **myPointer3 << endl;
    cout << *(*myPointer3+1) << endl;
```

::: tip 贴士
注意多维数组中指针的层次性和指向的对象
:::