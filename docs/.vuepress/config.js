module.exports =
{
    base: '/test/',
    locales:
    {
        '/':
        {
            lang: 'zh-CN',
            title: '计算概论学业辅导文档'
        }
    },
    themeConfig:
    {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'FH500/test',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '在 Github 上编辑此页',
        contributors: true,
        lastUpdated: '最后更新时间',
        nav:
        [
            { text: "说明", link: "/" },
            { text: "联系我们", link: "/Contactme" },
            { text: "关于", link: "/About"},
            {
                text: "外部链接",
                items:
                [
                    { text: "留言板", link: "https://o7dphiquc5.feishu.cn/docx/H5imdNTLgo57wexd5mQcCFDFndg?from=from_copylink"},
                    { text: "Github", link: "https://github.com/"},
                    { text: "C++ reference", link: "https://en.cppreference.com/w/"}
                ]
            }
        ],
        sidebar:
        [
            {
                title: "先前准备",
                sidebarDepth: 2,
                collapsable: false,
                children:
                [
                    '/precede/Preface',
                    '/precede/Installation',
                    '/precede/VSCode',
                    '/precede/VSCodeUsage'
                ]
            },
            {
                title: "基本知识",
                sidebarDepth: 2,
                collapsable: false,
                children:
                [
                    '/basic/Variables',
                    '/basic/IO',
                    '/basic/Operator',
                    '/basic/Array',
                    '/basic/Function',
                    '/basic/Pointer',
                    '/basic/Statements'
                ]
            },
            {
                title: "进阶知识",
                sidebarDepth: 2,
                collapsable: false,
                children:
                [
                    '/advance/Scope',
                    '/advance/Algorithm'
                ]
            },
            {
                title: "STL",
                sidebarDepth: 2,
                collapsable: false,
                children:
                [
                    '/STL/Vector',
                    '/STL/String',
/*                     '/STL/Map',
                    '/STL/Set',
                    '/STL/Stack',
                    '/STL/Queue' */
                ]
            },
            {
                title: "计算机基础知识",
                sidebarDepth: 2,
                collapsable: false,
                children:
                [
                    '/computer/conversion',
                    '/computer/hardware',
                ]
            },
            {
                title: "其他",
                sidebarDepth: 2,
                collapsable: false,
                children:
                [
                    '/more/Debug',
                    '/more/VSCodeConfig',
                    '/more/VS',
                    '/more/VPN'
                ]
            },
            {
                title: "速查表",
                sidebarDepth: 2,
                collapsable: false,
                children:
                [
                    '/table/ASCII',
                    '/table/C++Function'
                ]
            }
        ]
    }
}