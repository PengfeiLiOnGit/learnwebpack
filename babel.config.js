const presets = [
    [
        "@babel/env",
        {
            targets :{
                edge:"8",
                firefox:"52",
                chrome:"50",
                safari:"11.1"
            },
            // 我们所使用的 env preset 提供了一个 "useBuiltIns" 参数，当此参数设置为 "usage" 时，
            // 就会加载上面所提到的最后一个优化措施，也就是只包含你所需要的 polyfill。
            useBuiltIns : "usage",
            corejs: { version: 3, proposals: true }
        }
    ]
];

// 导出配置
module.exports = {presets};
