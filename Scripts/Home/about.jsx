var React = require("react");
var ReactDOM = require("react-dom");
require("bootstrap");
var Slider = require("react-slick");

var App = React.createClass({
    render: function () {
        return (
            <div>
                <div className="jumbotron">
                    <h2 style={{ textAlign: "center" }}>CÔNG TY TNHH THƯƠNG MẠI VÀ CÔNG NGHIỆP IN NGỌC DU</h2>
                </div>
                <div className="slider-container">
                <Slider dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        adaptiveHeight={false}
                        autoplay={false}
                        autoplaySpeed={8000}
                        initialSlide={0}>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/cuahang-1.jpg" /></div>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/cuahang-2.jpg" /></div>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/cuahang-3.jpg" /></div>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/cuahang-4.jpg" /></div>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/cuahang-5.jpg" /></div>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/cuahang-6.jpg" /></div>
                <div><img style={{ margin: "0 auto", width: "100%" }} src="/Content/images/cuahang-7.jpg" /></div>
                </Slider>
                </div>
                <div className="row" style={{}}>
                    <div className="col-sm-12">
                        <h3>I. GIỚI THIỆU CHUNG</h3>
                        <h4>1. Lĩnh vực kinh doanh chính:</h4>
                        In và các dịch vụ liên quan đến in như:
                        <ul>
                            <li>In màu laser khổ lớn A0 - A1 - A2 - A3 - A4 máy tốc độ cao màu đẹp</li>
                            <li>Photocopy khổ lớn A0 - A1 - A2 - A3 - A4</li>
                            <li>Scan màu khổ lớn A0 - A1 - A2 - A3 - A4</li>
                            <li>Quét ảnh, tạo mẫu, ép plastic, in lưới, in offset</li>
                            <li>Đánh máy vi tính, đóng xén sổ sách, mạ chữ vàng, đóng gáy xoắn</li>
                        </ul>
                        Phân phối bảng cho các trường học
                        <h4>2. Quá trình hình thành và phát triển</h4>
                        Tiền thân của Công ty là Công ty TNHH Thương Mại và Công Nghiệp In Ngọc Du được thành lập vào 2001 có trụ sở đặt tại 20 Trần Cung – Cầu Giấy – Hà Nội, với nhân sự ban đầu là 6 người, nay đã phát triển lên thành 60 người. Lĩnh vực hoạt động chủ yếu của Công ty là in ấn photo cho các đơn vị đóng trên địa bàn Hà Nội. Sau gần 6 năm hoạt động, Lãnh đạo Công ty nhận thấy để nâng cao chất lượng dịch vụ, phát triển và mở rộng hơn nữa lĩnh vực kinh doanh nhằm đáp ứng nhu cầu ngày càng cao của thị trường đồng thời nâng cao uy tín, vị thế của mình trên thị trường .
                        <br />
                        Từ khi thành lập đến nay Công ty chúng tôi luôn duy trì được tốc độ tăng trưởng, phát triển ở mức cao và vững chắc trên mọi mặt. Chúng tôi biết rằng Sự hài lòng của khách hàng chính là điều quyết định tương lai, sự tồn tại và phát triển của công ty, chính vì vậy trong suốt quá trình hình thành và phát triển, tập thể cán bộ công nhân viên công ty luôn làm việc hết mình với phương châm Chất lượng đảm bảo, giá thành hợp lý, phục vụ tận tình, nhanh chóng và chính xác. Với phương châm làm việc đó chúng tôi đã vinh dự được hàng ngàn khách hàng đã tin chọn sử dụng dịch vụ của công ty đánh giá là một trong những địa chỉ đáng tin cậy .
                        <br />
                        Công ty TNHH Thương Mại và Công Nghiệp In Ngọc Du đã mở rộng mạng lưới hoạt động và kinh doanh tại nhiều địa điểm khách nhau, với chất lượng phục vụ ngày càng hoàn thiện hơn, Công ty chúng tôi đã xây dựng được một bộ máy điều hành quản lý chuyên nghiệp biết phối hợp với nhau hiệu quả. Các thành viên trong Công ty luôn nỗ lực hết mình cùng với sự phát triển của Công ty cũng như định hướng và mục tiêu kinh doanh.
                        <br />
                        Đội ngũ CBCNV của Công ty có trình độ chuyên môn cao, Cùng với sự phát triển của Công ty và sự quan tâm sâu sát của Lãnh đạo Công ty, các CBCNV Luôn được tạo mọi điều kiện tốt nhất về môi trường làm việc, các chế độ đãi ngộ xứng đáng với năng lực. Những điều này giúp các CBCNV có thể yên tâm công tác và cống hiến cho Công ty, cũng như thu hút được ngày càng nhiều nguồn nhân lực có chất lượng cao về làm việc lâu dài tại Công ty. Chúng tôi hết sức cảm ơn sự sự tin tưởng và ủng hộ của Quý khách hàng đóng góp phần lớn vào sự phát triển của Công ty chúng tôi.
                        <h3>II. GIÁ TRỊ CÔNG TY</h3>
                        Chúng tôi xác định các yếu tố chính tạo nên giá trị cũng như sự thành công của công ty:
                        <br />
                        Nguồn nhân lực: Chúng tôi xác định nguồn nhân lực là yếu tố sản sinh ra mọi nguồn lực của Công ty. Công ty Chúng tôi chú trọng thu hút nhân tài, đào tạo về nghiệp vụ chuyên môn và công nghệ, sắp xếp bố trí phù hợp và có chế độ đãi ngộ thỏa đáng để xây dựng một lực lượng hùng hậu cho sự phát triển bền vững của Công ty.
                        <br />
                        Tập trung vào chất lượng  sản phẩm và dịch vụ: Chúng tôi nhận thức rằng sự trung thành của khách hàng sẽ đưa Chúng tôi tới thành công và chỉ có duy trì, không ngừng nâng cao chất lượng của sản phẩm và dịch vụ mới là phương tiện mang tính quyết định để giữ vững sự trung thành của khách hàng. Chúng tôi áp dụng công nghệ mới nhất vào tất cả các khâu bao gồm: quản lý dịch vụ, kinh doanh, tiếp thị, quan hệ cộng đồng,  tận tụy và bằng mọi cách đem đến những sản phẩm và dịch vụ tốt nhất cho khách hàng. Tiêu chí của chúng tôi là đem tới cho khách hàng những sự chọn tốt nhất và sản phẩm, dịch vụ mà khách hàng thực sự cần với chi phí thấp nhất, dịch vụ hoàn hảo nhất.
                        <br />
                        Hiện nay dịch vụ in, photocopy, scan màu khổ lớn đang là một mảng kinh doanh phát triển mạnh của công ty Cổ phần Đầu tư và Thương mại Việt Long. Chúng tôi tự hào đã đem lại cho quý khách hàng những sản phẩm với chất lượng cao nhất được thực hiện trên hệ thống dây chuyền máy hiện đại với công nghệ tiên tiến đang được sử dụng nhiều nhất hiện nay. Hiện tại , chúng tôi là một trong những nơi có dịch vụ in, photocopy, scan, hoàn thiện nhất. Chúng tôi luôn luôn thay đổi, áp dụng công nghệ cũng như hệ thống máy mới nhất để mong muốn đem lại hiệu quả công việc và chất lượng sản phẩm cũng như thời gian đáp ứng một cách nhanh và chính xác nhất. Với sự đầu tư về công nghệ, mở rộng mặt bằng sản xuất liên tục nên đòi hỏi phải có đội ngũ kỹ thuật viện lành nghề đáp và chúng tôi đã tuyển chọn và đào tạo được rất nhiều kỹ thuật viên có trình độ chuyên nghiệp, năng động, nhiệt tình và sáng tạo, thành thạo các phần mềm thiết kế đồ hoạ như AutoCAD, PhotoShop, CorelDraw, MapInfo, Microstation, Word, Excel...để đáp ứng những yêu cầu khắt khe nhất của khách hàng.
                        <br />
                        Với sự nỗ lực trong những năm qua Công ty chúng tôi đã được nhiều đối tác là các công ty tư vấn thiết kế xây dựng kiến trúc, viện nghiên cứu kiến trúc - quy hoạch, các trung tâm, xưởng thiết kế xây dựng, rất nhiều các đơn vị đặt trọn niềm tin và công việc với chúng tôi. Hiện nay đã có hơn 200 công ty, cá nhân đặt ký hợp đồng dịch vụ lâu dài với Công ty TNHH Thương Mại và Công Nghiệp In Ngọc Du. Chúng tôi luôn hiểu rằng chất lượng sản phẩm và thời gian hoàn thành luôn là những mối quan tâm của khách hàng. Chính vì vậy chúng tôi đã áp dụng công nghệ tiên tiến nhất để có thể mang đến cho khách hàng những dịch vụ hoàn hảo nhất như chuyển file thiết kế qua mạng, nhận và trả hồ sơ tài liệu miễn phí tận nơi trong Hà Nội. Đặc biệt với công việc ngày càng phát triển và đòi hỏi thời gian bàn giao hồ sơ nhanh chúng tôi có phục vụ khách hàng in hoặc photo 24/24.
                        <br />
                        Lĩnh vực hoạt động:
                        <ul>
                            <li>In : In mầu, in đen trắng, các khổ (nhỏ hơn A4 đến lớn hơn A0 và các khổ cực lớn)</li>
                            <li>Photocopy: Photocopy, thu phóng các khổ</li>
                            <li>Scan: Scan mầu, đen trắng các khổ.</li>
                            <li>Dịch vụ: Đánh máy, In Auto CAD, Photoshop, Corel Draw, Word, Exel, file PDF, MapInfo, Microstation.....</li>
                            <li>Hoàn thiện: Gấp, đóng, cắt hồ sơ và bản vẽ theo yêu cầu.</li>
                            <li>Gáy xoắn nhựa, gáy xoắn kim loại, bìa mạ chữ vàng, gáy keo nhiệt.</li>
                        </ul>
                        - Giá cả hợp lý, chiết khấu cao cho người giới thiệu.
                        <br />
                        - Có xuất hóa đơn tài chính (+ 10% VAT)
                        <br />
                        - Số lượng nhiều và thường xuyên sẽ được giảm giá.
                        <br />
                        Giao nhận tài liệu, hồ sơ theo yêu cầu bằng nhiều hình thức, nhanh, kịp thời. 
                        Khách hàng có thể gửi tài liệu cho chúng tôi theo địa chỉ:
                        <br />
                        <br />
                        Cửa hàng Ngọc Du: ngocduphoto@gmail.com
                        <br />
                        Xưởng sản xuất: sau vận động Mỹ Đình       
                    </div>
                </div>
            </div>
        );
    }
});
ReactDOM.render(<App></App>, document.querySelector(".react-app"));