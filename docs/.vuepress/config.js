module.exports =
{
    themeConfig:
    {
        nav:
        [
            { text: "Home", link: "/" }
        ],
        sidebarDepth: 2,
        displayAllHeaders: true,
        sidebar:
        [
            {
                title: "Title1",
                collapsable: false,
                children: ['/']
            },
            {
                title: "Title2",
                collapsable: false,
                children: ['/basic/']
            }
        ]
    }
}