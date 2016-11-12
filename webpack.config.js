var path = require("path");
var webpack = require("webpack");
module.exports = {
    context: path.join(__dirname, "Scripts"),
    entry: {
        homeIndex: ["./Home/index.jsx"],
        homeAbout: ["./Home/about.jsx"],
        homeKhachHang: ["./Home/khachHang.jsx"],
        homeInDanhThiep: ["./Home/inDanhThiep.jsx"],
        homeInTaiLieuVanPhong: ["./Home/inTaiLieuVanPhong.jsx"],
        homeInGiayAnh: ["./Home/inGiayAnh.jsx"],
        homeInMau: ["./Home/inMau.jsx"],
        homeInKhoLon: ["./Home/inKhoLon.jsx"],
        homeInMenu: ["./Home/inMenu.jsx"],
        homePhotocopy: ["./Home/photocopy.jsx"],
        homeScanMau: ["./Home/scanMau.jsx"],
        homeInThiepMoi: ["./Home/inThiepMoi.jsx"],
        homeInTieuDeThu: ["./Home/inTieuDeThu.jsx"],
        homeInToRoi: ["./Home/inToRoi.jsx"],
    },
    output: {
        path: path.join(__dirname + "/Scripts/built/"),
        filename: "[name].bundle.js".toLowerCase()
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
                query: {
                    presets: ["es2015", "react"]
                }
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
        extensions: ["", ".js", ".jsx"],
        root: [
            path.join(__dirname, "wwwroot")
        ]
    },
    externals: {
    }
};