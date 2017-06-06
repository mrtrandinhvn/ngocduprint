var path = require("path");
var webpack = require("webpack");
var autoprefixer = require("autoprefixer");
module.exports = (env) => {
    console.log(env);
    return {
        devtool: (env && env.production) ? "source-map" : "eval",
        context: path.join(__dirname, "Scripts"),
        entry: {
            homeIndex: ["./Home/index.jsx"],
            homeAbout: ["./Home/about.jsx"],
            homeKhachHang: ["./Home/khachHang.jsx"]
        },
        output: {
            path: path.join(__dirname + "/Scripts/built/"),
            filename: "[name].bundle.js".toLowerCase()
        },
        module: {
            rules: [
                {
                    test: /\.jsx$|\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "react"],
                        plugins: ["transform-object-rest-spread"]
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        },
                        "postcss-loader"
                    ]
                },
                {
                    test: /\.less$/,
                    exclude: /node_modules/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        },
                        "postcss-loader",
                        "less-loader"
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        },
                        "postcss-loader",
                        {
                            loader: "sass-loader",
                            options: {
                                includePaths: [
                                    path.resolve(__dirname, "./node_modules")
                                ],
                                outputStyle: "compressed"
                            }
                        }
                    ],
                }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ],
        resolve: {
            extensions: [".js", ".jsx", ".css", ".scss"],
            modules: [
                "node_modules",
                path.join(__dirname, "Content")
            ]
        },
        externals: {
            $: "jQuery"
        }
    };
};