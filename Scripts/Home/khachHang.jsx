var React = require("react");
var ReactDOM = require("react-dom");
require("bootstrap");
var Slider = require("react-slick");

var App = React.createClass({
    render: function () {
        return (
            <div>
                <div className="jumbotron">
                    <h2 style={{ textAlign: "center" }}>CÁC KHÁCH HÀNG ĐÃ TIN TƯỞNG SỬ DỤNG DỊCH VỤ IN ẤN CỦA NGỌC DU</h2>
                </div>
                <div className="slider-container" style={{
                        margin: "0 auto",
                        padding: "40px",
                        color: "#333",
                        background: "#419be0",
                        width: "100%"

                    }}>
                <Slider dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={5}
                        slidesToScroll={1}
                        adaptiveHeight={false}
                        autoplay={false}
                        autoplaySpeed={8000}
                        initialSlide={0}
                        focusOnSelect={true}
                        center>
                <div><img style={{ margin: "0 auto", padding: "0 2px", height: "128px", width: "128px" }} src="/Content/images/khachhang-1.jpg" /></div>
                <div><img style={{ margin: "0 auto",padding:"0 2px", height: "128px",width:"128px"}} src="/Content/images/khachhang-2.jpg" /></div>
                <div><img style={{ margin: "0 auto",padding:"0 2px", height: "128px",width:"128px"}} src="/Content/images/khachhang-3.jpg" /></div>
                <div><img style={{ margin: "0 auto",padding:"0 2px", height: "128px",width:"128px"}} src="/Content/images/khachhang-4.jpg" /></div>
                <div><img style={{ margin: "0 auto",padding:"0 2px", height: "128px",width:"128px"}} src="/Content/images/khachhang-5.jpg" /></div>
                <div><img style={{ margin: "0 auto",padding:"0 2px", height: "128px",width:"128px"}} src="/Content/images/khachhang-6.jpg" /></div>
                <div><img style={{ margin: "0 auto",padding:"0 2px", height: "128px",width:"128px"}} src="/Content/images/khachhang-7.jpg" /></div>
                </Slider>
                </div>
            </div>
        );
    }
});
ReactDOM.render(<App></App>, document.querySelector(".react-app"));