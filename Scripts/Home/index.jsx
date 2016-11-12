var React = require("react");
var ReactDOM = require("react-dom");
require("bootstrap");
var Slider = require("react-slick");

var App = React.createClass({
    render: function () {
        return (
            <div>
                <div className="jumbotron">
                    <h2 style={{ textAlign: "center" }}>Công ty cổ phần in Ngọc Du</h2>
                    <h2 style={{ fontStyle: "italic", color: "#000054", fontWeight: "bold", textAlign: "center" }}>
                        Uy tín là sức mạnh
                    </h2>
                    <br />
                    {
                    //<h2 style={{ color: "red", fontWeight: "bold" }}>*Chuyên*</h2>
                    //<ul>
                    //    <li>Photocopy + In ấn hồ sơ</li>
                    //    <li>Photocopy A4-A0</li>
                    //    <li>In màu A0-A4</li>
                    //    <li>In hóa đơn bán hàng, phiếu xuất kho</li>
                    //    <li>In vé xe, nhãn mác sản phẩm</li>
                    //    <li>In Catalogue, tờ rơi, tờ gấp, kẹp file, sách, tạp chí,...</li>
                    //</ul>
                    }

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
                        slidesToShow={1}
                        slidesToScroll={1}
                        adaptiveHeight={false}
                        autoplay={false}
                        autoplaySpeed={8000}
                        initialSlide={0}>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/sanpham-danhthiep.gif" />        <a className="btn btn-default" href="/Home/InDanhThiep">Xem thêm</a></div>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/sanpham-dongquyen.gif" />        <a className="btn btn-default" href="/Home/InTaiLieuVanPhong">Xem thêm</a></div>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/sanpham-giayanh.gif" />          <a className="btn btn-default" href="/Home/InGiayAnh">Xem thêm</a></div>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/sanpham-inmau.gif" />            <a className="btn btn-default" href="/Home/InMau">Xem thêm</a></div>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/sanpham-largeprinting.gif" />    <a className="btn btn-default" href="/Home/InKhoLon">Xem thêm</a></div>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/sanpham-menu.gif" />             <a className="btn btn-default" href="/Home/InMenu">Xem thêm</a></div>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/sanpham-photocopy.gif" />        <a className="btn btn-default" href="/Home/Photocopy">Xem thêm</a></div>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/sanpham-scanmau.gif" />          <a className="btn btn-default" href="/Home/Scanmau">Xem thêm</a></div>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/sanpham-thiepmoi.gif" />         <a className="btn btn-default" href="/Home/InThiepMoi">Xem thêm</a></div>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/sanpham-tieudethu.gif" />        <a className="btn btn-default" href="/Home/InTieuDeThu">Xem thêm</a></div>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/sanpham-toroi.gif" />            <a className="btn btn-default" href="/Home/InToRoi">Xem thêm</a></div>
                </Slider>
                </div>
                <div className="row" style={{}}>
                    <div className="col-sm-4">
                        <h2>In</h2>
                        <div className="row">
                            <div className="col-sm-6" title="In danh thiếp"><a href="/Home/InDanhThiep"><img style={{ width: "100%" }} src="/Content/images/sanpham-danhthiep.gif"/></a></div>
                            <div className="col-sm-6" title="In tài liệu văn phòng"><a href="/Home/InTaiLieuVanPhong"><img style={{ width: "100%" }} src="/Content/images/sanpham-dongquyen.gif" /></a></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6" title="In giấy ảnh"><a href="/Home/InGiayAnh"><img style={{ width: "100%" }} src="/Content/images/sanpham-giayanh.gif" /></a></div>
                            <div className="col-sm-6" title="In màu"><a href="/Home/InMau"><img style={{ width: "100%" }} src="/Content/images/sanpham-inmau.gif" /></a></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6" title="In khổ lớn"><a href="/Home/InKhoLon"><img style={{ width: "100%" }} src="/Content/images/sanpham-largeprinting.gif" /></a></div>
                            <div className="col-sm-6" title="In menu"><a href="/Home/InMenu"><img style={{ width: "100%" }} src="/Content/images/sanpham-menu.gif" /></a></div>
                        </div>
                        
                        <div className="row">
                            <div className="col-sm-6" title="In thiệp mời"><a href="/Home/InThiepMoi"><img style={{ width: "100%" }} src="/Content/images/sanpham-thiepmoi.gif" /></a></div>
                            <div className="col-sm-6" title="In tiêu đề thư"><a href="/Home/InTieuDeThu"><img style={{ width: "100%" }} src="/Content/images/sanpham-tieudethu.gif" /></a></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6" title="In tờ rơi"><a href="/Home/InToRoi"><img style={{ width: "100%" }} src="/Content/images/sanpham-toroi.gif" /></a></div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <h2>Photocopy</h2>
                        <div className="row">
                            <div className="col-sm-6" title="Photocopy"><a href="/Home/Photocopy"><img style={{ width: "100%" }} src="/Content/images/sanpham-photocopy.gif" /></a></div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <h2>Scan</h2>
                        <div className="row">
                            <div className="col-sm-6" title="Scan màu"><a href="/Home/ScanMau"><img style={{ width: "100%" }} src="/Content/images/sanpham-scanmau.gif" /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
ReactDOM.render(<App></App>, document.querySelector(".react-app"));