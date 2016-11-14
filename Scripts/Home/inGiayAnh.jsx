require("!style-loader!css-loader!postcss-loader!global.css");
var React = require("react");
var ReactDOM = require("react-dom");
require("bootstrap");

var App = React.createClass({
    render: function () {
        return (
            <div>
                <h1 className="page-title">In Giấy Ảnh</h1>
                <div className="banner" style={{
                        backgroundImage: "url(\"/Content/images/sanpham-giayanh.gif\")",
                    }}></div>
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Bảng giá dịch vụ</h3>
                    </div>
                </div>
            </div>
        );
    }
});
ReactDOM.render(<App></App>, document.querySelector(".react-app"));