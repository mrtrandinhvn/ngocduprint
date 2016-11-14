require("!style-loader!css-loader!postcss-loader!global.css");
var React = require("react");
var ReactDOM = require("react-dom");
require("bootstrap");
var Slider = require("react-slick");
var Lightbox = require("react-images");

var images = [
    { src: "/Content/images/sanpham-danhthiep.gif", action: "/Home/InDanhThiep" },
    { src: "/Content/images/sanpham-dongquyen.gif", action: "/Home/InTaiLieuVanPhong" },
    { src: "/Content/images/sanpham-giayanh.gif", action: "/Home/InGiayAnh" },
    { src: "/Content/images/sanpham-inmau.gif", action: "/Home/InMau" },
    { src: "/Content/images/sanpham-largeprinting.gif", action: "/Home/InKhoLon" },
    { src: "/Content/images/sanpham-menu.gif", action: "/Home/InMenu" },
    { src: "/Content/images/sanpham-photocopy.gif", action: "/Home/Photocopy" },
    { src: "/Content/images/sanpham-scanmau.gif", action: "/Home/ScanMau" },
    { src: "/Content/images/sanpham-thiepmoi.gif", action: "/Home/ThiepMoi" },
    { src: "/Content/images/sanpham-tieudethu.gif", action: "/Home/InTieuDeThu" },
    { src: "/Content/images/sanpham-toroi.gif", action: "/Home/InToRoi" }
];
var App = React.createClass({
    getInitialState: function () {
        return {
            lightboxIsOpen: false,
            currentImage: 0
        }
    },
    openLightbox: function (index) {
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    },
    closeLightbox: function () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    },
    gotoPrevious: function () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    },
    gotoNext: function () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    },
    gotoImage: function (index) {
        this.setState({
            currentImage: index,
        });
    },
    handleClickImage: function () {
        if (this.state.currentImage === images.length - 1) return;
        this.gotoNext();
    },
    render: function () {
        var imgSlide = images.map(function (image, index) {
            return (
                <div key={index} onClick={function () { this.openLightbox(index) }.bind(this) }>
                    <img style={{ margin: "0 auto", width: "100%" }} src={image.src} />
                    <a className="btn btn-default" href={image.action}>Xem thêm</a>
                </div>
            );
        }.bind(this));
        return (
            <div>
                <div className="jumbotron"
                     style={{
                    backgroundImage: "url(\"/Content/images/banner-home.jpg\")",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "-200px"
                }}>
                    <div className="" style={{
                            float: "right",
                            backgroundColor: "rgba(255,255,255,0.8)",
                            padding:"5px"
                        }}>
                    <h2 style={{ textAlign: "center" }}>Công ty cổ phần in Ngọc Du</h2>
                    <h2 style={{ fontStyle: "italic", color: "#000054", fontWeight: "bold", textAlign: "center" }}>
                        Uy tín là sức mạnh
                    </h2>
                    <br />
                    <h2 style={{ color: "red", fontWeight: "bold" }}>*Liên hệ*</h2>
                    <p>
                    <span className="glyphicon glyphicon-home"></span> Số 20, Trần Cung, Hà Nội
                    <br />
                    <span className="glyphicon glyphicon-home"></span> Xưởng sản xuất đằng sau SVĐ Mỹ Đình
                    <br />
                    <span className="glyphicon glyphicon-envelope"></span> ngocduphoto@gmail.com
                    <br />
                    <span className="glyphicon glyphicon-phone-alt"></span> (04)62696225
                    <br />
                    <span className="glyphicon glyphicon-phone"></span> 0914811747
                    <br />
                    </p>
                    </div>
                    <div style={{clear:"both"}}></div>
                </div>
                <div className="slider-container" style={{
                        margin: "0 auto",
                        padding: "40px",
                        color: "#333",
                        background: "#419be0",
                        width: "100%"

                    }}>
                    <Lightbox currentImage={this.state.currentImage}
                              images={images}
                              isOpen={this.state.lightboxIsOpen}
                              onClickImage={this.handleClickImage}
                              onClickNext={this.gotoNext}
                              onClickPrev={this.gotoPrevious}
                              onClickThumbnail={this.gotoImage}
                              onClose={this.closeLightbox}
                              showThumbnails={true}></Lightbox>
                <Slider dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        adaptiveHeight={false}
                        autoplay={false}
                        autoplaySpeed={8000}
                        initialSlide={0}>
                    {imgSlide}
                </Slider>
                </div>
                <div className="row" style={{}}>
                    <div className="col-sm-4">
                        <h2>In</h2>
                        <div className="row">
                            <div className="col-sm-6" title="In danh thiếp"><a href="/Home/InDanhThiep"><img style={{ width: "100%" }} src="/Content/images/sanpham-danhthiep.gif" /></a></div>
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