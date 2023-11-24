# 算法

## 如何解题？

基本步骤：

- 分析
  - 理解问题的描述和其真实意图
- 设计
  - 问题的解决思路和途径，程序的整体架构设计
- 实现
  - 编写代码
  - 调试
  - 测试

可利用的工具：

- 计算机知识
- C/C++ 语言基本知识
- 数学知识
- STL
- IDE

基本问题：

- 基础计算
- 格式化输入输出
- 数组处理

## 什么是算法

算法是解决问题的准确而完整的描述，是一系列清晰的指令，能够根据规范的输入，在有限时间内得到需要的输出。

算法有好坏之分，一般以空间复杂度和时间复杂度来衡量。此外，算法的实现难度，维护难度等也是重要的指标。

根据解题思路，算法可以分为枚举算法、递推算法、递归算法、分治算法、贪心算法、动态规划算法等。

## 枚举

又称为暴力算法，是一种基于逐个尝试答案的求解策略。

**基本思路：**

- 确定枚举对象，范围和判定条件
- 逐一枚举并验证

::: tip E0. 鸡兔同笼
一个笼子里面关了鸡和兔子（鸡有 2 只脚，兔子有 4 只脚，没有例外）。已经知道了笼子里面鸡和兔子的总数 `a` 和脚的总数 `b`，问笼子里面有多少只鸡，有多少只兔子？

**题目链接：**

[编程网格](https://programming.pku.edu.cn/problem/d565d6fa3cc94bbf96c7cf2c2854a8af/)
:::

首先假定兔子的数量为 `rabbit`，我们从 `0` 到 `a` 依次枚举兔子的数量，那么鸡的数量 `chicken` 为 `a - rabbit`，接下来，判定我们得到的枚举数 (`rabbit`, `chicken`) 是否满足条件（脚的数量），若满足，则找到了解。

::: details 参考代码
``` cpp
#include <iostream>
using namespace std;

int main()
{
    int a, b;
    cin >> a >> b;
    for (int rabbit = 0; rabbit <= a; ++rabbit)
    {
        int chicken = a - rabbit;
        if (4 * rabbit + 2 * chicken == b)
        {
            cout << chicken << ' ' << rabbit;
            break;
        }
    }
}
```
:::

::: tip E1. 完美立方数
a 的立方 = b 的立方 + c 的立方 + d 的立方 为完美立方等式。例如 12 的立方 = 6 的立方 + 8 的立方 + 10 的立方。编写一个程序，对任给的正整数 N (N ≤ 100)，寻找所有的四元组(a, b, c, d)，使得 a 的立方 = b 的立方 + c 的立方 + d 的立方，其中 a, b, c, d 大于 1, 小于等于 N。

**输出：**

每行输出一个完美立方，按照a的值，从小到大依次输出。当两个完美立方等式中a的值相同，则依次按照b、c、d进行非降升序排列输出，即b值小的先输出、然后c值小的先输出、然后d值小的先输出。

**参考输入：**

```
24
```

**参考输出：**
```
Cube = 6, Triple = (3,4,5)
Cube = 12, Triple = (6,8,10)
Cube = 18, Triple = (2,12,16)
Cube = 18, Triple = (9,12,15)
Cube = 19, Triple = (3,10,18)
Cube = 20, Triple = (7,14,17)
Cube = 24, Triple = (12,16,20)
```

**题目链接：**

[编程网格](https://programming.pku.edu.cn/problem/d47236837ca14d8abdb9df5a5bc27b8d/)
:::

**枚举的对象和范围：**

a[2, N];  
b[2, a - 1];  
c[b, a - 1];  
d[c, a - 1];  

::: details 参考代码
``` cpp
#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    for (int a = 2; a <= n; ++a)
        for (int b = 2; b < a; ++b)
            for (int c = b; c < a; ++c)
                for (int d = c; d < a; ++d)
                    if (a * a * a == b * b * b + c * c * c + d * d * d)
                        cout << "Cube = " << a << ", Triple = (" << b << ',' << c << ',' << d << ')' << endl;
}
```
:::

::: tip E2. 称硬币
赛利有12枚银币。其中有11枚真币和1枚假币。假币看起来和真币没有区别，但是重量不同。但赛利不知道假币比真币轻还是重。于是他向朋友借了一架天平。朋友希望赛利称三次就能找出假币并且确定假币是轻是重。例如:如果赛利用天平称两枚硬币，发现天平平衡，说明两枚都是真的。如果赛利用一枚真币与另一枚银币比较，发现它比真币轻或重，说明它是假币。经过精心安排每次的称量，赛利保证在称三次后确定假币。

**输入：**

第一行是n，表示数据共有n组。
其后是n*3行。每组数据有三行，每行表示一次称量的结果。赛利事先将银币标号为A-L。每次称量的结果用三个以空格隔开的字符串表示：天平左边放置的硬币 天平右边放置的银币 平衡状态。其中平衡状态用"up", "down", 或 "even"表示, 分别为右端高、右端低和平衡。天平左右的银币数总是相等的。

**输出：**

输出为n行。每行输出一组数据中哪一个标号的银币是假币，并说明它比真币轻还是重。
如果第K枚银币是假，并且它是轻的，则输出：  
K is the counterfeit coin and it is light.  
如果第K枚银币是假，并且它是重的，则输出：  
K is the counterfeit coin and it is heavy.

**参考输入：**

```
1
ABCD EFGH even
ABCI EFJK up
ABIJ EFGH even
```

**参考输出：**

```
K is the counterfeit coin and it is light.
```

**题目链接：**

[编程网格](https://programming.pku.edu.cn/problem/003472b1955845bebabfe613f9ebbe3e/)
:::

**枚举对象：**

每个硬币，分轻重两种共 24 类。

**判定条件：**

所给的称量结果。

::: details 参考代码
``` cpp
#include <iostream>
#include <string>
using namespace std;

void check()
{
    string coinsL[3], coinsR[3];
    int res[3];

    // 数据预处理
    for (int i = 0; i < 3; ++i)
    {
        string strRes;
        cin >> coinsL[i] >> coinsR[i] >> strRes;

        // 将结果转换为数字，1 表示左边重，-1 表示右边重。
        if (strRes == "even")
            res[i] = 0;
        else if (strRes == "up")
            res[i] = 1;
        else if (strRes == "down")
            res[i] = -1;
    }

    // 开始枚举假币
    // 先依次枚举为重假币
    for (int i = 0; i < 12; ++i)
    {
        char fakeCoin = 'A' + i;

        // 对枚举结果进行检验
        // 检验结果先假定为 true，检验失败则设置为 false
        bool checkRes = true;
        // -------
        for (int j = 0; j < 3; ++j)
        {
            // 平衡状态下，两边都不应该有假币
            if (res[j] == 0)
            {
                if (coinsL[j].find(fakeCoin) != string::npos || coinsR[j].find(fakeCoin) != string::npos)
                {
                    checkRes = false;
                    break;
                }
            }
            // 假币应出现在右边
            else if (res[j] == -1)
            {
                if (coinsR[j].find(fakeCoin) == string::npos)
                {
                    checkRes = false;
                    break;
                }
            }
            // 假币应出现在左边
            else if (res[j] == 1)
            {
                if (coinsL[j].find(fakeCoin) == string::npos)
                {
                    checkRes = false;
                    break;
                }
            }
        }
        // -------
        // 检验通过，则返回结果，否则继续下一次循环。
        if (checkRes)
            cout << fakeCoin << " is the counterfeit coin and it is heavy." << endl;
    }

    // 依次枚举为轻假币
    for (int i = 0; i < 12; ++i)
    {
        char fakeCoin = 'A' + i;

        // 对枚举结果进行检验
        // 检验结果先假定为 true，检验失败则设置为 false
        bool checkRes = true;
        // -------
        for (int j = 0; j < 3; ++j)
        {
            // 平衡状态下，两边都不应该有假币
            if (res[j] == 0)
            {
                if (coinsL[j].find(fakeCoin) != string::npos || coinsR[j].find(fakeCoin) != string::npos)
                {
                    checkRes = false;
                    break;
                }
            }
            // 假币应出现在左边
            else if (res[j] == -1)
            {
                if (coinsL[j].find(fakeCoin) == string::npos)
                {
                    checkRes = false;
                    break;
                }
            }
            // 假币应出现在右边
            else if (res[j] == 1)
            {
                if (coinsR[j].find(fakeCoin) == string::npos)
                {
                    checkRes = false;
                    break;
                }
            }
        }
        // -------
        // 检验通过，则返回结果，否则继续下一次循环。
        if (checkRes)
            cout << fakeCoin << " is the counterfeit coin and it is light." << endl;
    }
}

int main()
{
    int n;
    cin >> n;
    for (int i = 0; i < n; ++i)
        check();
}
```
:::

枚举算法是一种实现起来较为简单，但效率也较低的一种算法。某些情况下，枚举消耗的时间会随问题的规模以指数级别的方式增长，以致枚举不可解，此时需要寻找其他更加高效的算法。

## 递归

函数调用自身称为递归调用。

::: tip E3. N 皇后问题
n 后问题要求在一个 n * n 格的棋盘上放置n个皇后，使得他们彼此不受攻击。按照国际象棋的规则，一个皇后可以攻击与之处在同一行或同一列或同一斜线上的其它任何棋子。因此，n 后问题等价于要求在一个 n * n 格的棋盘上放置 n 个皇后，使得任何 2 个皇后不能在同一行或同一列或同一斜线上。

**输出：**

输出一个正整数，表明对于给定的 n * n 的棋盘，共有多少种放置方法。

**题目链接：**

[编程网格](https://programming.pku.edu.cn/problem/f452476fa0e544d1a664094fd2dcb998/)
:::

显然，每行只能放置一个皇后，因此，可以逐行枚举。那么八皇后问题需要 8 重循环，n 皇后问题需要 n 重循环。循环的层数不确定，没有固定实现。可以利用递归来替代不固定的多重循环的问题。

``` cpp
// 在 0 ~ x - 1 行皇后以及放置好的情况下，放置第 x 行皇后。
void put(int x)
{
    if (x >= n)
    {
        // 皇后全部放置完毕，输出或统计
        return;
    }
    else
    {
        for (int i = 0; i < n; ++i)
        {
            if (check(i, x))    // 检查是否与已经放置的皇后冲突
            {
                // 放置下一个皇后
                put(x + 1);
            }
        }
    }
}
```

::: details 参考代码
``` cpp
#include <iostream>
using namespace std;

int n;
int board[12];
int ans = 0;

bool check(int x, int y)
{
    // 左上、正下、右下
    int Xdirections[3] {-1, 0, 1};
    int Ydirections[3] {-1, -1, -1};
    // 依次对三个方向进行检查
    for (int i = 0; i < 3; ++i)
    {
        int Xdir = Xdirections[i];
        int Ydir = Ydirections[i];
        int nextX = x + Xdir;
        int nextY = y + Ydir;
        int curX = x;
        int curY = y;
        while (nextX >= 0 && nextX < n && nextY >= 0 && nextY < n)
        {
            curX = nextX;
            curY = nextY;
            if (board[curY] == curX)
                return false;
            nextX += Xdir;
            nextY += Ydir;
        }
    }
    return true;
}

// 在 x 行上放置皇后。
void put(int x)
{
    // 递归终止条件
    if (x >= n)
    {
        ++ans;
        return;
    }
    for (int i = 0; i < n; ++i)
    {
        // 检验是否可以放置皇后
        if (check(i, x))
        {
            // 可以放置皇后，修改当前状态
            board[x] = i;
            // 进入下一层递归
            put(x + 1);
            // 移除当前层递归放置的皇后，恢复状态。
            board[x] = -1;
        }
    }
}

int main()
{
    cin >> n;

    // 初始化
    for (int i = 0; i < n; ++i)
        board[i] = -1;
    put(0);
    cout << ans;
}
```
:::

::: tip E4. 汉诺塔问题
约19世纪末，在欧州的商店中出售一种智力玩具，在一块铜板上有三根杆，最左边的杆上自上而下、由小到大顺序串着由64个圆盘构成的塔。目的是将最左边杆上的盘全部移到中间的杆上，条件是一次只能移动一个盘，且不允许大盘放在小盘的上面。
这是一个著名的问题，几乎所有的教材上都有这个问题。由于条件是一次只能移动一个盘，且不允许大盘放在小盘上面，所以64个盘的移动次数是：18,446,744,073,709,551,615
这是一个天文数字，若每一微秒可能计算(并不输出)一次移动，那么也需要几乎一百万年。我们仅能找出问题的解决方法并解决较小N值时的汉诺塔，但很难用计算机解决64层的汉诺塔。

假定圆盘从小到大编号为1, 2, ...

**输入：**

输入为一个整数后面跟三个单字符字符串。
整数为盘子的数目，后三个字符表示三个杆子的编号。

**输出：**

输出每一步移动盘子的记录。一次移动一行。
每次移动的记录为例如 a->3->b 的形式，即把编号为3的盘子从a杆移至b杆。

**参考输入：**

```
2 a b c
```

**参考输出：**

```
a->1->c
a->2->b
c->1->b
```

**题目链接：**

[编程网格](https://programming.pku.edu.cn/problem/5f2560c51bf740a28cdaf07a2fbedfea/)
:::

::: details 参考代码
``` cpp
#include <iostream>
using namespace std;

char plates[3];

// 用于解析字符
char resolve(int x)
{
    return plates[x];
}

void move(int from, int to, int size)
{
    // 圆盘从小到大编号为 1，2，3，...，n。
    // size == 1 时，直接将盘子从 from 移动到 to 即可。
    if (size == 1)
        cout << resolve(from) << "->" << 1 << "->" << resolve(to) << endl;
    // size >= 1 时，需要三步
    // 第一步，将除了最下面的盘子以外的所有盘子移动到不是 to 的另一个盘子处，称为中转处。
    // 第二步，将最下面的盘子移动到 to 处。
    // 第三步，将中转处的盘子移动到 to 处。
    else
    {
        int another = 0;
        // 寻找 another 的值。
        while (another == from || another == to)
            ++another;
        move(from, another, size - 1);
        cout << resolve(from) << "->" << size << "->" << resolve(to) << endl;
        move(another, to, size - 1);
    }
}

int main()
{
    int n;
    cin >> n;
    cin >> plates[0] >> plates[1] >> plates[2];
    move(0, 1, n);
}
```
:::

::: tip E5. 爬楼梯
树老师爬楼梯，他可以每次走1级或者2级，输入楼梯的级数，求不同的走法数。

例如：楼梯一共有3级，他可以每次都走一级，或者第一次走一级，第二次走两级，也可以第一次走两级，第二次走一级，一共3种方法。

**输入：**

输入包含若干行，每行包含一个正整数N，代表楼梯级数，1≤N≤30。

**输出：**

不同的走法数，每一行输入对应一行输出。

**题目链接：**

[信奥](http://ybt.ssoier.cn:8088/problem_show.php?pid=1204)
:::

::: details 参考代码
``` cpp
#include <iostream>
using namespace std;

int climb(int n)
{
    // n == 1 和 n == 2 的问题规模已知，以此作为递归的终止条件。
    if (n == 1)
        return 1;
    else if (n == 2)
        return 2;
    else
        return climb(n - 1) + climb(n - 2);
}

int main()
{
    int n;
    while (cin >> n)
        cout << climb(n) << endl;
}
```
:::

递归的作用：代替 n 重循环；将问题分解为规模更小的相似的子问题求解。

## 递归与递推的区别

解决 n 阶乘的递归版本：

``` cpp
int factorial(int n)
{
    if (n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}
```

解决 n 阶乘的递推版本：

``` cpp
int ans = 1;
for (int i = 2; i < n; ++i)
    ans *= i;
```

两者最重要的区别是解决问题的架构不同。

递归：自上而下  
递推：自下而上

通常来说，递推会比递归拥有更高的效率，但也更难实现和设计。

## 贪心

## 动态规划

将**一个问题分解为子问题**分阶段求解，并**保存子问题求解的结果**以避免重复计算的方法，通常用于求解最优化问题。