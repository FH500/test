(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{315:function(t,s,a){t.exports=a.p+"assets/img/1.dc29ca8a.png"},316:function(t,s,a){t.exports=a.p+"assets/img/2.d862a6ee.png"},317:function(t,s,a){t.exports=a.p+"assets/img/3.a26970b1.png"},318:function(t,s,a){t.exports=a.p+"assets/img/4.0ae92d9a.png"},319:function(t,s,a){t.exports=a.p+"assets/img/29.2e499453.png"},320:function(t,s,a){t.exports=a.p+"assets/img/5.38f2a77a.png"},321:function(t,s,a){t.exports=a.p+"assets/img/6.6b2ae059.png"},322:function(t,s,a){t.exports=a.p+"assets/img/7.2a3a2f29.png"},323:function(t,s,a){t.exports=a.p+"assets/img/8.78386779.png"},324:function(t,s,a){t.exports=a.p+"assets/img/9.f6502c1d.png"},325:function(t,s,a){t.exports=a.p+"assets/img/10.95b66814.png"},326:function(t,s,a){t.exports=a.p+"assets/img/11.c88cfcab.png"},327:function(t,s,a){t.exports=a.p+"assets/img/12.ce4f8bad.png"},328:function(t,s,a){t.exports=a.p+"assets/img/13.8322e997.png"},329:function(t,s,a){t.exports=a.p+"assets/img/14.6fc9e193.png"},330:function(t,s,a){t.exports=a.p+"assets/img/15.27d24b53.png"},331:function(t,s,a){t.exports=a.p+"assets/img/23.38dff109.png"},332:function(t,s,a){t.exports=a.p+"assets/img/24.b26576a9.png"},333:function(t,s,a){t.exports=a.p+"assets/img/25.6af071a4.png"},334:function(t,s,a){t.exports=a.p+"assets/img/26.3f2a94c0.png"},335:function(t,s,a){t.exports=a.p+"assets/img/27.402591e3.png"},336:function(t,s,a){t.exports=a.p+"assets/img/28.251b257a.png"},337:function(t,s,a){t.exports=a.p+"assets/img/16.a1b6f8c8.png"},338:function(t,s,a){t.exports=a.p+"assets/img/17.a11a7c4a.png"},339:function(t,s,a){t.exports=a.p+"assets/img/18.0b3500f4.png"},340:function(t,s,a){t.exports=a.p+"assets/img/19.eb17ade4.png"},341:function(t,s,a){t.exports=a.p+"assets/img/20.e81a7cad.png"},342:function(t,s,a){t.exports=a.p+"assets/img/21.57c20957.png"},343:function(t,s,a){t.exports=a.p+"assets/img/22.40c0c1e7.png"},406:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[t._v("#")]),t._v(" 调试")]),t._v(" "),s("p",[t._v("调试（Debug）可以帮助我们检查代码中的错误，同时也是非常重要的检查代码运行状态的手段，下面我们以 VSCode 为例介绍如何进行调试。不同的 IDE 的调试方法大体上相同，因此如果你使用的 IDE 不是 VSCode 也不用担心，了解基本的调试思想后，再去熟悉操作也是可以的。")]),t._v(" "),s("h2",{attrs:{id:"以-vscode-为例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以-vscode-为例"}},[t._v("#")]),t._v(" 以 VSCode 为例")]),t._v(" "),s("p",[t._v("在 VSCode 打开你想要进行调试的代码，在此我们使用下面的加法程序。")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果你安装了扩展 "),s("code",[t._v("C/C++ Runner")]),t._v("，那么编译完成后可以按下 "),s("code",[t._v("Ctrl+Alt+D")]),t._v(" 进行调试。如果你没有此扩展，在左上方的菜单 "),s("code",[t._v("Run")]),t._v(" 在下拉菜单中点击 "),s("code",[t._v("Start Debugging")]),t._v(" 或者也可以直接按下快捷键 "),s("code",[t._v("F5")]),t._v("。进行调试后，我们可以看到下方的调试控制台输出了一些信息。现阶段我们可以不用在意调试控制台的信息，我们也不会用到调试控制台。")]),t._v(" "),s("h3",{attrs:{id:"设置断点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置断点"}},[t._v("#")]),t._v(" 设置断点")]),t._v(" "),s("p",[t._v("运行调试后，我们看到有一个一闪而过的黑色窗口。这是因为开始调试后，我们的程序以很快的速度运行完毕并关闭了。为了关注我们感兴趣的地方，我们需要设置"),s("strong",[t._v("断点")]),t._v("。例如，我们在 "),s("code",[t._v("c = a + b;")]),t._v(" 这一行设置一个断点。首先，将鼠标移到这行的行号左边，我们看到出现一个虚化小红点，我们点击小红点，可以看到小红点实体化了，这样我们就成功设置了断点。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(315),alt:"1"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(316),alt:"2"}})]),t._v(" "),s("p",[t._v("在此点击调试，这时我们看到 VSCode 窗口有了一些变化。首先断点所在的那一会高亮了，同时行号旁边出现了黄色小箭头。箭头的意义表示我们的代码已经执行到了本行之前。同时，左侧调试子窗口中出现了我们程序中的变量和他们目前的值。可以看到 "),s("code",[t._v("a = 1")]),t._v("，"),s("code",[t._v("b = 2")]),t._v(" 与我们设定的值相同。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(317),alt:"3"}})]),t._v(" "),s("p",[t._v("接下来，我们需要执行下一步 "),s("code",[t._v("c = a + b")]),t._v("。点击上方悬浮窗口中的 "),s("code",[t._v("Step Over")]),t._v("，黄色箭头移动到下一行，"),s("code",[t._v("c = a + b")]),t._v(" 这一语句执行完毕，同时我们也可以在左边的窗口看到 "),s("code",[t._v("c")]),t._v(" 的值变为了 "),s("code",[t._v("3")]),t._v("，与预期相符。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(318),alt:"4"}})]),t._v(" "),s("p",[t._v("此外，将鼠标悬停在变量上方也可以直接查看这个变量的值。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(319),alt:"29"}})]),t._v(" "),s("p",[t._v("再次点击 "),s("code",[t._v("Step Over")]),t._v("（或者按快捷键 "),s("code",[t._v("F10")]),t._v("），执行输出语句 "),s("code",[t._v("cout << c")]),t._v("。到这里你可能想问，我们的输入输出窗口在哪？如果你没有打开很多窗口的话，你应该已经注意到了，我们在开始调试的时候就出现了一个黑乎乎的窗口，这个窗口就是我们的输入输出窗口。在调试的时候，程序终端（输入输出窗口）会从 VSCode 的内置终端中分离出来，如果你不喜欢分离出来的窗口，可以参阅"),s("RouterLink",{attrs:{to:"/more/VSCodeConfig.html#在调试时使用内置集成终端"}},[t._v("如何在 VSCode 调试时使用内置集成终端")]),t._v("。")],1),t._v(" "),s("p",[s("img",{attrs:{src:a(320),alt:"5"}})]),t._v(" "),s("p",[t._v("可以看到，执行完成了，程序终端上输出了 "),s("code",[t._v("3")]),t._v("。到此，程序的所有语句都已经执行完了，再次点击逐过程（"),s("code",[t._v("Step Over")]),t._v("）我们的程序就会关闭掉，然后调试也会随之结束。")]),t._v(" "),s("p",[s("strong",[t._v("断点的作用")]),t._v("就是当我们的代码执行到断点所在的位置时，程序将会停止，这时，我们可以观察各个变量的情况，检查程序的运行状况是否符合预期。")]),t._v(" "),s("h3",{attrs:{id:"继续-单步进入与单步跳出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继续-单步进入与单步跳出"}},[t._v("#")]),t._v(" 继续，单步进入与单步跳出")]),t._v(" "),s("p",[t._v("如果我们的程序很长，比如对于几百行的代码，你肯定不会期望点几百次 "),s("code",[t._v("逐过程")]),t._v(" 来慢慢执行代码。因此我们需要使用 "),s("code",[t._v("继续")]),t._v("("),s("code",[t._v("Continue")]),t._v(")。"),s("code",[t._v("继续")]),t._v(" 功能需要配合断点使用。你可以在代码中设置多个断点，如图。当我们点击 "),s("code",[t._v("继续")]),t._v(" 后，代码将会一直执行，直到命中下一个断点。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(321),alt:"6"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(322),alt:"7"}})]),t._v(" "),s("p",[s("code",[t._v("单步进入")]),t._v("（"),s("code",[t._v("Step Into")]),t._v("）与 "),s("code",[t._v("逐过程")]),t._v(" 很相似，区别在于 "),s("code",[t._v("单步进入")]),t._v(" 将会试图进入函数，或者其他可展开的代码之中，而 "),s("code",[t._v("逐过程")]),t._v(" 则跳过其执行的细节，达到下一行的语句中。这里虽然涉及到了"),s("a",{attrs:{href:"/404"}},[t._v("函数")]),t._v("的概念，但即便你还没有学习函数也不用担心，相信你可以在之后理解这部分的内容。下面的演示中，我们需要用到一个带有函数的代码。")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("square")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("square")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:a(323),alt:"8"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(324),alt:"9"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(325),alt:"10"}})]),t._v(" "),s("p",[t._v("与 "),s("code",[t._v("单步进入")]),t._v(" 相反，"),s("code",[t._v("单步跳出")]),t._v("("),s("code",[t._v("Step Out")]),t._v(")则从函数中跳出，返回到上一层调用者函数中。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(326),alt:"11"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(327),alt:"12"}})]),t._v(" "),s("h3",{attrs:{id:"结束调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束调试"}},[t._v("#")]),t._v(" 结束调试")]),t._v(" "),s("p",[t._v("要想终止调试，需要点击 "),s("code",[t._v("停止")]),t._v("（"),s("code",[t._v("Stop")]),t._v("）按钮，仅仅关闭终端是不会结束调试的。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(328),alt:"13"}})]),t._v(" "),s("h3",{attrs:{id:"添加监视变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加监视变量"}},[t._v("#")]),t._v(" 添加监视变量")]),t._v(" "),s("p",[t._v("如果你的程序里面有很多变量，你可能会被调试窗口里繁多的变量搞得眼花缭乱。添加监视变量可以让你把注意力集中在你感兴趣的变量上。在调试窗口的 "),s("code",[t._v("Watch")]),t._v(" 栏中的 "),s("code",[t._v("Add Expression")]),t._v("（加号）按钮，然后输入变量的名称即可添加监视变量。进行调试，可以看到我们能够监视其变化。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(329),alt:"14"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(330),alt:"15"}})]),t._v(" "),s("h3",{attrs:{id:"带条件的断点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带条件的断点"}},[t._v("#")]),t._v(" 带条件的断点")]),t._v(" "),s("p",[t._v("对于执行几十次甚至上百次的循环，如果你在其中设置断点的话每次循环都会命中断点，然而，有时你只想关注某个特殊情况下的断点，这时就可以使用条件断点。如图，鼠标悬停在 "),s("code",[t._v("断点")]),t._v(" 上，右键，在下拉菜单中点击 "),s("code",[t._v("Edit Breakpoint..")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(331),alt:"23"}})]),t._v(" "),s("p",[t._v("然后可以输入一个表达式，表达式的语法与 C 的语法完全相同，当表达式的值为真时，断点才能被命中。在此，我们输入 "),s("code",[t._v("i == 5")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(332),alt:"24"}})]),t._v(" "),s("p",[t._v("再次编译调试，可以看到触发断点时，"),s("code",[t._v("i")]),t._v(" 的值为 "),s("code",[t._v("5")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(333),alt:"25"}})]),t._v(" "),s("p",[t._v("你也可以使用更加复杂的例子，如下。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(334),alt:"26"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(335),alt:"27"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(336),alt:"28"}})]),t._v(" "),s("p",[t._v("可以看到，在我们所设置的条件 "),s("code",[t._v("a >= 15 && i < 8")]),t._v(" 下，断点被命中了两次。")]),t._v(" "),s("h3",{attrs:{id:"捕获异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#捕获异常"}},[t._v("#")]),t._v(" 捕获异常")]),t._v(" "),s("h3",{attrs:{id:"切换调用栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换调用栈"}},[t._v("#")]),t._v(" 切换调用栈")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("拓展内容")]),t._v(" "),s("p",[t._v("本部分为拓展内容。")])]),t._v(" "),s("h2",{attrs:{id:"visual-studio-调试操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-调试操作"}},[t._v("#")]),t._v(" Visual Studio 调试操作")]),t._v(" "),s("p",[t._v("Visual Studio 的调试方法与 VSCode 基本完全相同（毕竟是同一个妈生的...）。在上方工具栏中点击 "),s("code",[t._v("本地 Windows 调试器")]),t._v(" 即可进行调试。在调试模式下，工具栏中会出现调试相关的操作，使用快捷键或者点击即可进行相应操作。左下方的 "),s("code",[t._v("自动窗口")]),t._v(" 可以监视变量的值，切换到 "),s("code",[t._v("监视")]),t._v(" 选项单则可以添加监视变量。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(337),alt:"16"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(338),alt:"17"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(339),alt:"18"}})]),t._v(" "),s("h2",{attrs:{id:"dev-c-调试操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dev-c-调试操作"}},[t._v("#")]),t._v(" Dev-C++ 调试操作")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("在此，我还是要再次强调，不推荐使用 Dev-C++ 来编写代码。如果你打算使用 Dev-C++，那就继续往下看吧，或者考虑"),s("a",{attrs:{href:"/precede/Installation"}},[t._v("安装使用其他的 IDE")]),t._v("。")])]),t._v(" "),s("p",[t._v("使用 Dev-C++ 调试之前，如图，先将编译器切换为 "),s("code",[t._v("TDM-GCC 4.9.2 64-bit Debug")]),t._v(" 或 "),s("code",[t._v("TDM-GCC 4.9.2 32-bit Debug")]),t._v("。然后先点击 "),s("code",[t._v("编译")]),t._v(" 然后点击调试。设置断点，继续，逐过程等操作与 VSCode 相同，不在赘述。")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("一定要先切换编译器再进行调试！在 Release 编译器下进行调试会致使 Dev-C++ 崩溃，损失你的代码进度！")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(340),alt:"19"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(341),alt:"20"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(342),alt:"21"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(343),alt:"22"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);