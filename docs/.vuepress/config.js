module.exports =
{
    base: '/test/',
    themeConfig:
    {
        nav:
        [
            { text: "Home", link: "/" }
        ],
        sidebar:
        [
            {
                title: "先前准备",
                sidebarDepth: 2,
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
                children: ['/basic/Variables']
            },
            {
                title: ""
            }
        ]
    }
}