module.exports =
{
    editLinks: true,
    lastUpdated: 'Last Updated', // string | boolean
    base: '/test/',
    locales:
    {
        '/':
        {
            lang: 'zh-cn',
            title: '计算概论学业辅导文档'
        }
    },
    themeConfig:
    {
        nav:
        [
            { text: "C/C++", link: "/" }
        ],
        sidebar:
        [
            {
                title: "先前准备",
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
                collapsable: false,
                children:
                [
                    '/basic/Variables',
                ]
            },
            {
                title: "其他",
                collapsable: false,
                children:
                [
                    '/basic/Debug'
                ]
            }
        ]
    }
}