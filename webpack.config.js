const nodeExternals = require("webpack-node-externals")

module.exports = [
    {
        mode: "development",
        entry: "./src/main.ts",
        target: "electron-main",
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: /src/,
                    use: [
                        {
                            loader: "ts-loader"
                        }
                    ]
                }
            ]
        },
        output: {
            path: __dirname + "/build",
            filename: "main.js"
        }
    },
    {
        mode: "development",
        entry: "./src/editor.ts",
        target: "electron-renderer",
        devtool: "source-map",
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: /src/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "ts-loader"
                        }
                    ]
                },
                {
                    test: /\.s[ac]ss$/,
                    include: /src/,
                    use: [
                        "style-loader", "css-loader", "sass-loader"
                    ]
                }
            ]
        },
        resolve: {
            extensions: [
                ".ts", ".scss"
            ],
            modules: ["node_modules"]
        },
        output: {
            path: __dirname + "/build",
            filename: "editor.js"
        }
    }
]