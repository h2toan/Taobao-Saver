import autocomplete from './autocomplete.js';
const CATEGORY_ID_LIST = [{
        label: "16448 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Chăm sóc móng",
        value: "16448"
    },
    {
        label: "16658 - Nhà Sách Online/Flashcards",
        value: "16658"
    },
    {
        label: "16659 - Nhà Sách Online/Flashcards/Mặc định",
        value: "16659"
    },
    {
        label: "16660 - Nhà Sách Online/Flashcards/Flashcards cho bé",
        value: "16660"
    },
    {
        label: "16661 - Nhà Sách Online/Flashcards/Flashcards Tiếng Anh",
        value: "16661"
    },
    {
        label: "16662 - Nhà Sách Online/Flashcards/Flashcards Tiếng Nhật",
        value: "16662"
    },
    {
        label: "16663 - Nhà Sách Online/Flashcards/Flashcards Tiếng Trung",
        value: "16663"
    },
    {
        label: "16671 - Máy tính & Laptop/Audio & Video Accessories",
        value: "16671"
    },
    {
        label: "16672 - Máy tính & Laptop/Audio & Video Accessories/Default",
        value: "16672"
    },
    {
        label: "16687 - Máy tính & Laptop/Audio & Video Accessories/Webcam",
        value: "16687"
    },
    {
        label: "16691 - Máy tính & Laptop/Audio & Video Accessories/Thiết bị truyền hình hội nghị",
        value: "16691"
    },
    {
        label: "312 - Sản Phẩm Khác/Khác",
        value: "312"
    },
    {
        label: "16703 - Máy tính & Laptop/Audio & Video Accessories/Loa vi tính",
        value: "16703"
    },
    {
        label: "320 - Sức Khỏe & Sắc Đẹp/Hoá Mỹ Phẩm & Khác",
        value: "320"
    },
    {
        label: "16706 - Máy tính & Laptop/Audio & Video Accessories/Tai nghe vi tính",
        value: "16706"
    },
    {
        label: "16707 - Máy tính & Laptop/Audio & Video Accessories/Phụ kiện âm thanh máy tính",
        value: "16707"
    },
    {
        label: "8535 - Sức Khỏe & Sắc Đẹp/Son & Chăm sóc môi/Son dưỡng",
        value: "8535"
    },
    {
        label: "8536 - Sức Khỏe & Sắc Đẹp/Son & Chăm sóc môi/Son lì",
        value: "8536"
    },
    {
        label: "8537 - Sức Khỏe & Sắc Đẹp/Son & Chăm sóc môi/Son kem",
        value: "8537"
    },
    {
        label: "8538 - Sức Khỏe & Sắc Đẹp/Son & Chăm sóc môi/Son tint",
        value: "8538"
    },
    {
        label: "8539 - Sức Khỏe & Sắc Đẹp/Son & Chăm sóc môi/Son bóng",
        value: "8539"
    },
    {
        label: "8541 - Sức Khỏe & Sắc Đẹp/Son & Chăm sóc môi/Tẩy da chết môi",
        value: "8541"
    },
    {
        label: "8542 - Sức Khỏe & Sắc Đẹp/Chăm sóc da/Kem và sữa dưỡng da",
        value: "8542"
    },
    {
        label: "8543 - Sức Khỏe & Sắc Đẹp/Chăm sóc da/Tẩy trang",
        value: "8543"
    },
    {
        label: "8544 - Sức Khỏe & Sắc Đẹp/Chăm sóc da/Sữa rửa mặt",
        value: "8544"
    },
    {
        label: "8545 - Sức Khỏe & Sắc Đẹp/Chăm sóc da/Toners",
        value: "8545"
    },
    {
        label: "8546 - Sức Khỏe & Sắc Đẹp/Chăm sóc da/Serum",
        value: "8546"
    },
    {
        label: "8547 - Sức Khỏe & Sắc Đẹp/Chăm sóc da/Kem dưỡng mắt",
        value: "8547"
    },
    {
        label: "8548 - Sức Khỏe & Sắc Đẹp/Chăm sóc da/Kem chống nắng",
        value: "8548"
    },
    {
        label: "8549 - Sức Khỏe & Sắc Đẹp/Chăm sóc da/Mặt nạ",
        value: "8549"
    },
    {
        label: "8551 - Sức Khỏe & Sắc Đẹp/Chăm sóc da/Xịt khoáng",
        value: "8551"
    },
    {
        label: "8553 - Sức Khỏe & Sắc Đẹp/Chăm sóc da/Dưỡng da chuyên sâu",
        value: "8553"
    },
    {
        label: "8554 - Sức Khỏe & Sắc Đẹp/Chăm sóc da/Bộ chăm sóc da",
        value: "8554"
    },
    {
        label: "8555 - Sức Khỏe & Sắc Đẹp/Trang điểm da/BB Cream & CC Cream",
        value: "8555"
    },
    {
        label: "8556 - Sức Khỏe & Sắc Đẹp/Trang điểm da/Kem lót",
        value: "8556"
    },
    {
        label: "8557 - Sức Khỏe & Sắc Đẹp/Trang điểm da/Phấn nền",
        value: "8557"
    },
    {
        label: "8558 - Sức Khỏe & Sắc Đẹp/Trang điểm da/Phấn phủ",
        value: "8558"
    },
    {
        label: "8559 - Sức Khỏe & Sắc Đẹp/Trang điểm da/Kem che khuyết điểm",
        value: "8559"
    },
    {
        label: "8560 - Sức Khỏe & Sắc Đẹp/Trang điểm da/Phấn tạo khối",
        value: "8560"
    },
    {
        label: "8561 - Sức Khỏe & Sắc Đẹp/Trang điểm da/Phấn má",
        value: "8561"
    },
    {
        label: "8562 - Sức Khỏe & Sắc Đẹp/Trang điểm da/Bộ trang điểm",
        value: "8562"
    },
    {
        label: "8563 - Sức Khỏe & Sắc Đẹp/Trang điểm mắt/Mascara",
        value: "8563"
    },
    {
        label: "8564 - Sức Khỏe & Sắc Đẹp/Trang điểm mắt/Kẻ mắt",
        value: "8564"
    },
    {
        label: "8565 - Sức Khỏe & Sắc Đẹp/Trang điểm mắt/Phấn mắt",
        value: "8565"
    },
    {
        label: "8566 - Sức Khỏe & Sắc Đẹp/Trang điểm mắt/Chì-bột tán mày",
        value: "8566"
    },
    {
        label: "8567 - Sức Khỏe & Sắc Đẹp/Chăm sóc tóc/Dầu gội-xả",
        value: "8567"
    },
    {
        label: "8568 - Sức Khỏe & Sắc Đẹp/Chăm sóc tóc/Dầu dưỡng tóc",
        value: "8568"
    },
    {
        label: "8569 - Sức Khỏe & Sắc Đẹp/Chăm sóc tóc/Kem ủ-hấp tóc",
        value: "8569"
    },
    {
        label: "8570 - Sức Khỏe & Sắc Đẹp/Chăm sóc tóc/Thuốc nhuộm tóc",
        value: "8570"
    },
    {
        label: "8571 - Sức Khỏe & Sắc Đẹp/Tắm & Chăm sóc cơ thể/Sữa tắm",
        value: "8571"
    },
    {
        label: "8572 - Sức Khỏe & Sắc Đẹp/Tắm & Chăm sóc cơ thể/Xà phòng",
        value: "8572"
    },
    {
        label: "8573 - Sức Khỏe & Sắc Đẹp/Tắm & Chăm sóc cơ thể/Tẩy da chết",
        value: "8573"
    },
    {
        label: "8574 - Sức Khỏe & Sắc Đẹp/Tắm & Chăm sóc cơ thể/Kem dưỡng toàn thân",
        value: "8574"
    },
    {
        label: "8575 - Sức Khỏe & Sắc Đẹp/Tắm & Chăm sóc cơ thể/Dưỡng da tay và chân",
        value: "8575"
    },
    {
        label: "8576 - Sức Khỏe & Sắc Đẹp/Tắm & Chăm sóc cơ thể/Khử mùi",
        value: "8576"
    },
    {
        label: "8577 - Sức Khỏe & Sắc Đẹp/Tắm & Chăm sóc cơ thể/Tẩy lông",
        value: "8577"
    },
    {
        label: "16771 - Thời Trang Trẻ Em/Khác",
        value: "16771"
    },
    {
        label: "16772 - Thời Trang Trẻ Em/Bé gái | 5-14 tuổi",
        value: "16772"
    },
    {
        label: "16773 - Thời Trang Trẻ Em/Bé gái | 5-14 tuổi/Mặc định",
        value: "16773"
    },
    {
        label: "16775 - Thời Trang Trẻ Em/Bé gái | 3 tháng-4 tuổi",
        value: "16775"
    },
    {
        label: "16776 - Thời Trang Trẻ Em/Bé gái | 3 tháng-4 tuổi/Default",
        value: "16776"
    },
    {
        label: "8585 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Dụng cụ làm tóc không dùng nhiệt",
        value: "8585"
    },
    {
        label: "8586 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Kính áp tròng",
        value: "8586"
    },
    {
        label: "16779 - Thời Trang Trẻ Em/Phụ kiện",
        value: "16779"
    },
    {
        label: "16780 - Thời Trang Trẻ Em/Phụ kiện/Mặc định",
        value: "16780"
    },
    {
        label: "16781 - Thời Trang Trẻ Em/Giày dép",
        value: "16781"
    },
    {
        label: "16782 - Thời Trang Trẻ Em/Giày dép/Default",
        value: "16782"
    },
    {
        label: "16783 - Thời Trang Trẻ Em/Bé gái | 5-14 tuổi/Áo khoác",
        value: "16783"
    },
    {
        label: "16784 - Thời Trang Trẻ Em/Bé gái | 5-14 tuổi/Váy đầm",
        value: "16784"
    },
    {
        label: "16785 - Thời Trang Trẻ Em/Bé gái | 5-14 tuổi/Áo",
        value: "16785"
    },
    {
        label: "16786 - Thời Trang Trẻ Em/Bé gái | 5-14 tuổi/Quần/chân váy",
        value: "16786"
    },
    {
        label: "8595 - Thời Trang Nữ/Áo/Áo Croptop",
        value: "8595"
    },
    {
        label: "8596 - Thời Trang Nữ/Áo/Áo hai dây & Áo ba lỗ",
        value: "8596"
    },
    {
        label: "8597 - Thời Trang Nữ/Áo/Áo kiểu",
        value: "8597"
    },
    {
        label: "8598 - Thời Trang Nữ/Áo/Áo sơ mi",
        value: "8598"
    },
    {
        label: "8599 - Thời Trang Nữ/Áo/Áo thun",
        value: "8599"
    },
    {
        label: "8600 - Thời Trang Nữ/Đầm/Đầm dự tiệc",
        value: "8600"
    },
    {
        label: "8601 - Thời Trang Nữ/Đầm/Đầm Maxi",
        value: "8601"
    },
    {
        label: "16794 - Thời Trang Trẻ Em/Bé trai | 5-14 tuổi/Áo khoác",
        value: "16794"
    },
    {
        label: "16795 - Thời Trang Trẻ Em/Bé trai | 5-14 tuổi/Áo",
        value: "16795"
    },
    {
        label: "8604 - Thời Trang Nữ/Đầm/Đầm dáng xòe",
        value: "8604"
    },
    {
        label: "8605 - Thời Trang Nữ/Chân váy/Chân váy ngắn",
        value: "8605"
    },
    {
        label: "8606 - Thời Trang Nữ/Chân váy/Chân váy bút chì",
        value: "8606"
    },
    {
        label: "16799 - Thời Trang Trẻ Em/Bé trai | 5-14 tuổi/Quần",
        value: "16799"
    },
    {
        label: "8608 - Thời Trang Nữ/Áo khoác & Áo vest/Áo khoác da",
        value: "8608"
    },
    {
        label: "8609 - Thời Trang Nữ/Áo khoác & Áo vest/Áo khoác phao",
        value: "8609"
    },
    {
        label: "8610 - Thời Trang Nữ/Áo khoác & Áo vest/Áo khoác dạ",
        value: "8610"
    },
    {
        label: "8611 - Thời Trang Nữ/Áo khoác & Áo vest/Áo chống nắng",
        value: "8611"
    },
    {
        label: "8612 - Thời Trang Nữ/Áo khoác & Áo vest/Áo khoác jeans",
        value: "8612"
    },
    {
        label: "8613 - Thời Trang Nữ/Áo khoác & Áo vest/Áo khoác thun & áo nỉ",
        value: "8613"
    },
    {
        label: "8614 - Thời Trang Nữ/Áo khoác & Áo vest/Áo khoác Cardigan",
        value: "8614"
    },
    {
        label: "8615 - Thời Trang Nữ/Áo khoác & Áo vest/Áo vest & Blazers",
        value: "8615"
    },
    {
        label: "8616 - Thời Trang Nữ/Quần/Legging & Tregging",
        value: "8616"
    },
    {
        label: "8617 - Thời Trang Nữ/Quần/Quần yếm",
        value: "8617"
    },
    {
        label: "16810 - Thời Trang Trẻ Em/Bé trai | 5-14 tuổi/Set trang phục",
        value: "16810"
    },
    {
        label: "8619 - Thời Trang Nữ/Quần/Quần tây",
        value: "8619"
    },
    {
        label: "16812 - Thời Trang Trẻ Em/Bé trai | 5-14 tuổi/Đồ lót, đồ ngủ",
        value: "16812"
    },
    {
        label: "16813 - Thời Trang Trẻ Em/Bé trai | 5-14 tuổi/Đồ bơi",
        value: "16813"
    },
    {
        label: "16814 - Thời Trang Trẻ Em/Bé gái | 3 tháng-4 tuổi/Áo khoác",
        value: "16814"
    },
    {
        label: "16815 - Thời Trang Trẻ Em/Bé gái | 3 tháng-4 tuổi/Váy đầm",
        value: "16815"
    },
    {
        label: "16816 - Thời Trang Trẻ Em/Bé gái | 3 tháng-4 tuổi/Áo",
        value: "16816"
    },
    {
        label: "16817 - Thời Trang Trẻ Em/Bé gái | 3 tháng-4 tuổi/Quần/chân váy",
        value: "16817"
    },
    {
        label: "16818 - Thời Trang Trẻ Em/Bé gái | 3 tháng-4 tuổi/Set trang phục",
        value: "16818"
    },
    {
        label: "16819 - Thời Trang Trẻ Em/Bé gái | 3 tháng-4 tuổi/Đồ lót, đồ ngủ",
        value: "16819"
    },
    {
        label: "16820 - Thời Trang Trẻ Em/Bé gái | 3 tháng-4 tuổi/Đồ bơi",
        value: "16820"
    },
    {
        label: "16821 - Thời Trang Trẻ Em/Bé trai | 3 tháng-4 tuổi",
        value: "16821"
    },
    {
        label: "16822 - Thời Trang Trẻ Em/Bé trai | 3 tháng-4 tuổi/Mặc định",
        value: "16822"
    },
    {
        label: "16823 - Thời Trang Trẻ Em/Bé trai | 3 tháng-4 tuổi/Áo khoác",
        value: "16823"
    },
    {
        label: "16824 - Thời Trang Trẻ Em/Bé trai | 3 tháng-4 tuổi/Áo",
        value: "16824"
    },
    {
        label: "16825 - Thời Trang Trẻ Em/Bé trai | 3 tháng-4 tuổi/Quần",
        value: "16825"
    },
    {
        label: "16826 - Thời Trang Trẻ Em/Bé trai | 3 tháng-4 tuổi/Set trang phục",
        value: "16826"
    },
    {
        label: "16827 - Thời Trang Trẻ Em/Bé trai | 3 tháng-4 tuổi/Đồ lót, đồ ngủ",
        value: "16827"
    },
    {
        label: "16828 - Thời Trang Trẻ Em/Bé trai | 3 tháng-4 tuổi/Đồ bơi",
        value: "16828"
    },
    {
        label: "16829 - Thời Trang Trẻ Em/Sơ sinh | 0-12 tháng",
        value: "16829"
    },
    {
        label: "16830 - Thời Trang Trẻ Em/Sơ sinh | 0-12 tháng/Mặc định",
        value: "16830"
    },
    {
        label: "16831 - Thời Trang Trẻ Em/Sơ sinh | 0-12 tháng/Áo",
        value: "16831"
    },
    {
        label: "16832 - Thời Trang Trẻ Em/Sơ sinh | 0-12 tháng/Quần",
        value: "16832"
    },
    {
        label: "16833 - Thời Trang Trẻ Em/Sơ sinh | 0-12 tháng/Váy đầm/Yếm",
        value: "16833"
    },
    {
        label: "16834 - Thời Trang Trẻ Em/Sơ sinh | 0-12 tháng/Set trang phục/body",
        value: "16834"
    },
    {
        label: "16835 - Thời Trang Trẻ Em/Sơ sinh | 0-12 tháng/Đồ lót, đồ ngủ",
        value: "16835"
    },
    {
        label: "16836 - Thời Trang Trẻ Em/Sơ sinh | 0-12 tháng/Đồ bơi",
        value: "16836"
    },
    {
        label: "16837 - Thời Trang Trẻ Em/Phụ kiện/Túi xách thời trang",
        value: "16837"
    },
    {
        label: "16838 - Thời Trang Trẻ Em/Phụ kiện/Trang sức",
        value: "16838"
    },
    {
        label: "16839 - Thời Trang Trẻ Em/Phụ kiện/Kính mắt",
        value: "16839"
    },
    {
        label: "16840 - Thời Trang Trẻ Em/Phụ kiện/Mũ/Nón",
        value: "16840"
    },
    {
        label: "16841 - Thời Trang Trẻ Em/Phụ kiện/Khăn, tất & găng tay",
        value: "16841"
    },
    {
        label: "16842 - Thời Trang Trẻ Em/Phụ kiện/Phụ kiện tóc",
        value: "16842"
    },
    {
        label: "16843 - Thời Trang Trẻ Em/Giày dép/Bé gái | 5-14 tuổi",
        value: "16843"
    },
    {
        label: "16844 - Thời Trang Trẻ Em/Giày dép/Bé trai | 5-14 tuổi",
        value: "16844"
    },
    {
        label: "16845 - Thời Trang Trẻ Em/Giày dép/Bé gái | 3 tháng-4 tuổi",
        value: "16845"
    },
    {
        label: "16846 - Thời Trang Trẻ Em/Giày dép/Bé  trai | 3 tháng-4 tuổi",
        value: "16846"
    },
    {
        label: "16847 - Thời Trang Trẻ Em/Giày dép/Sơ sinh | 0-12 tháng",
        value: "16847"
    },
    {
        label: "16848 - Thời Trang Nữ/Thời trang bầu và sau sinh",
        value: "16848"
    },
    {
        label: "16849 - Thời Trang Nữ/Thời trang bầu và sau sinh/Mặc định",
        value: "16849"
    },
    {
        label: "16850 - Thời Trang Nữ/Thời trang bầu và sau sinh/Áo bầu",
        value: "16850"
    },
    {
        label: "16851 - Thời Trang Nữ/Thời trang bầu và sau sinh/Váy bầu",
        value: "16851"
    },
    {
        label: "16852 - Thời Trang Nữ/Thời trang bầu và sau sinh/Quần bầu",
        value: "16852"
    },
    {
        label: "16853 - Thời Trang Nữ/Thời trang bầu và sau sinh/Đồ lót bầu",
        value: "16853"
    },
    {
        label: "16854 - Thời Trang Nữ/Thời trang bầu và sau sinh/Đồ bộ bầu",
        value: "16854"
    },
    {
        label: "16880 - Thể Thao & Du Lịch/Trang Phục thể thao/Áo Thể Thao",
        value: "16880"
    },
    {
        label: "8689 - Điện Thoại & Phụ Kiện/Vỏ, Bao & Ốp lưng/Bao da Ipad và Máy tính bảng",
        value: "8689"
    },
    {
        label: "8690 - Điện Thoại & Phụ Kiện/Vỏ, Bao & Ốp lưng/Bao da Samsung",
        value: "8690"
    },
    {
        label: "8691 - Điện Thoại & Phụ Kiện/Vỏ, Bao & Ốp lưng/Ốp Samsung",
        value: "8691"
    },
    {
        label: "8692 - Điện Thoại & Phụ Kiện/Vỏ, Bao & Ốp lưng/Bao da Iphone",
        value: "8692"
    },
    {
        label: "8693 - Điện Thoại & Phụ Kiện/Vỏ, Bao & Ốp lưng/Ốp Iphone",
        value: "8693"
    },
    {
        label: "13738 - Nhà Cửa & Đời Sống/Chăn, Ga, Gối & Nệm/Mùng",
        value: "13738"
    },
    {
        label: "8705 - Điện Thoại & Phụ Kiện/Pin, Cáp & Bộ sạc/Đế sạc",
        value: "8705"
    },
    {
        label: "8706 - Điện Thoại & Phụ Kiện/Pin, Cáp & Bộ sạc/Cáp sạc và cáp OTG",
        value: "8706"
    },
    {
        label: "8707 - Điện Thoại & Phụ Kiện/Pin, Cáp & Bộ sạc/Cốc sạc",
        value: "8707"
    },
    {
        label: "8708 - Điện Thoại & Phụ Kiện/Gậy chụp hình/Remote bluetooth",
        value: "8708"
    },
    {
        label: "8709 - Điện Thoại & Phụ Kiện/Gậy chụp hình/Gậy selfie không bluetooth",
        value: "8709"
    },
    {
        label: "8710 - Điện Thoại & Phụ Kiện/Gậy chụp hình/Gậy selfie có bluetooth",
        value: "8710"
    },
    {
        label: "8712 - Điện Thoại & Phụ Kiện/Điện thoại/Điện thoại phổ thông",
        value: "8712"
    },
    {
        label: "8719 - Điện Thoại & Phụ Kiện/Miếng dán màn hình/Miếng dán tablet",
        value: "8719"
    },
    {
        label: "8720 - Điện Thoại & Phụ Kiện/Miếng dán màn hình/Miếng dán Sony",
        value: "8720"
    },
    {
        label: "8721 - Điện Thoại & Phụ Kiện/Miếng dán màn hình/Miếng dán Oppo",
        value: "8721"
    },
    {
        label: "8722 - Điện Thoại & Phụ Kiện/Miếng dán màn hình/Miếng dán Samsung",
        value: "8722"
    },
    {
        label: "8723 - Điện Thoại & Phụ Kiện/Miếng dán màn hình/Miếng dán Ipad",
        value: "8723"
    },
    {
        label: "8724 - Điện Thoại & Phụ Kiện/Miếng dán màn hình/Miếng dán Iphone",
        value: "8724"
    },
    {
        label: "8725 - Điện Thoại & Phụ Kiện/Sim/Sim số Viettel",
        value: "8725"
    },
    {
        label: "25110 - Thiết Bị Điện Tử/Android Tivi Box/Tivi box ram 4GB",
        value: "25110"
    },
    {
        label: "8727 - Điện Thoại & Phụ Kiện/Sim/Sim số Mobiphone",
        value: "8727"
    },
    {
        label: "8728 - Điện Thoại & Phụ Kiện/Giá đỡ & Kẹp",
        value: "8728"
    },
    {
        label: "8729 - Điện Thoại & Phụ Kiện/Giá đỡ & Kẹp/Khác",
        value: "8729"
    },
    {
        label: "16928 - Thể Thao & Du Lịch/Trang Phục thể thao/Bộ Quần Áo Thể Thao Nam",
        value: "16928"
    },
    {
        label: "16929 - Thể Thao & Du Lịch/Trang Phục thể thao/Quần Áo Bơi/Đi biển",
        value: "16929"
    },
    {
        label: "16930 - Thể Thao & Du Lịch/Trang Phục thể thao/Quần Áo Thể Thao Chống Nắng",
        value: "16930"
    },
    {
        label: "16931 - Thể Thao & Du Lịch/Trang Phục thể thao/Trang Phục Thể Thao Đôi",
        value: "16931"
    },
    {
        label: "16933 - Thể Thao & Du Lịch/Giày Thể Thao",
        value: "16933"
    },
    {
        label: "16934 - Thể Thao & Du Lịch/Giày Thể Thao/Khác",
        value: "16934"
    },
    {
        label: "16935 - Thể Thao & Du Lịch/Giày Thể Thao/Giày Sneaker Thể Thao",
        value: "16935"
    },
    {
        label: "16936 - Thể Thao & Du Lịch/Giày Thể Thao/Giày Chạy Bộ",
        value: "16936"
    },
    {
        label: "16937 - Thể Thao & Du Lịch/Giày Thể Thao/Giày Bóng Rổ",
        value: "16937"
    },
    {
        label: "16938 - Thể Thao & Du Lịch/Giày Thể Thao/Giày Đá Bóng",
        value: "16938"
    },
    {
        label: "16939 - Thể Thao & Du Lịch/Giày Thể Thao/Giày Tennis",
        value: "16939"
    },
    {
        label: "16940 - Thể Thao & Du Lịch/Giày Thể Thao/Giày Cầu Lông",
        value: "16940"
    },
    {
        label: "16941 - Thể Thao & Du Lịch/Giày Thể Thao/Giày Thể Thao Golf",
        value: "16941"
    },
    {
        label: "16942 - Thể Thao & Du Lịch/Giày Thể Thao/Dép & Sandal",
        value: "16942"
    },
    {
        label: "16943 - Thể Thao & Du Lịch/Phụ Kiện Thể Thao/Túi & Ba Lô",
        value: "16943"
    },
    {
        label: "16944 - Thể Thao & Du Lịch/Phụ Kiện Thể Thao/Nón Thể Thao",
        value: "16944"
    },
    {
        label: "16945 - Thể Thao & Du Lịch/Phụ Kiện Thể Thao/Headband, Khăn & Vớ",
        value: "16945"
    },
    {
        label: "16946 - Thể Thao & Du Lịch/Phụ Kiện Thể Thao/Bình Nước",
        value: "16946"
    },
    {
        label: "8755 - Thiết Bị Điện Tử/Thiết bị âm thanh/Loa kéo",
        value: "8755"
    },
    {
        label: "16948 - Thể Thao & Du Lịch/Thể Thao & Thể Hình/Yoga & Pilates",
        value: "16948"
    },
    {
        label: "16949 - Thể Thao & Du Lịch/Thể Thao & Thể Hình/Dụng Cụ Thể Dục, Thể Thao",
        value: "16949"
    },
    {
        label: "8758 - Thiết Bị Điện Tử/Thiết bị âm thanh/Loa di động",
        value: "8758"
    },
    {
        label: "16951 - Thể Thao & Du Lịch/Thể thao ngoài trời/Bóng Đá",
        value: "16951"
    },
    {
        label: "16952 - Thể Thao & Du Lịch/Thể thao ngoài trời/Bóng Chuyền",
        value: "16952"
    },
    {
        label: "16953 - Thể Thao & Du Lịch/Thể thao ngoài trời/Tennis",
        value: "16953"
    },
    {
        label: "16954 - Thể Thao & Du Lịch/Thể thao ngoài trời/Cầu Lông",
        value: "16954"
    },
    {
        label: "16955 - Thể Thao & Du Lịch/Thể thao ngoài trời/Golf",
        value: "16955"
    },
    {
        label: "16956 - Thể Thao & Du Lịch/Thể thao dưới nước/Bơi Lội",
        value: "16956"
    },
    {
        label: "16957 - Thể Thao & Du Lịch/Thể thao dưới nước/Chèo Thuyền",
        value: "16957"
    },
    {
        label: "16958 - Thể Thao & Du Lịch/Thể thao dưới nước/Lặn",
        value: "16958"
    },
    {
        label: "16959 - Thể Thao & Du Lịch/Thể thao dưới nước/Phao Trượt",
        value: "16959"
    },
    {
        label: "16960 - Thể Thao & Du Lịch/Thể thao dưới nước/Áo Cứu Hộ",
        value: "16960"
    },
    {
        label: "16961 - Thể Thao & Du Lịch/Các Môn Thể Thao Khác",
        value: "16961"
    },
    {
        label: "16962 - Thể Thao & Du Lịch/Các Môn Thể Thao Khác/Default",
        value: "16962"
    },
    {
        label: "16963 - Thể Thao & Du Lịch/Vali/ Hành lý/Valy",
        value: "16963"
    },
    {
        label: "16964 - Thể Thao & Du Lịch/Vali/ Hành lý/Túi Du Lịch",
        value: "16964"
    },
    {
        label: "16965 - Thể Thao & Du Lịch/Vali/ Hành lý/Ba Lô Du Lịch",
        value: "16965"
    },
    {
        label: "16966 - Thể Thao & Du Lịch/Vali/ Hành lý/Phụ kiện",
        value: "16966"
    },
    {
        label: "16967 - Thể Thao & Du Lịch/Hoạt Động Dã Ngoại/Bắn Cung, Bắn Súng",
        value: "16967"
    },
    {
        label: "16968 - Thể Thao & Du Lịch/Hoạt Động Dã Ngoại/Đồ Bảo Hộ",
        value: "16968"
    },
    {
        label: "16969 - Thể Thao & Du Lịch/Hoạt Động Dã Ngoại/Phụ Kiện Dã Ngoại",
        value: "16969"
    },
    {
        label: "16970 - Thể Thao & Du Lịch/Hoạt Động Dã Ngoại/Trượt Ván",
        value: "16970"
    },
    {
        label: "16971 - Thể Thao & Du Lịch/Hoạt Động Dã Ngoại/Patin",
        value: "16971"
    },
    {
        label: "16972 - Thể Thao & Du Lịch/Hoạt Động Dã Ngoại/Scooters",
        value: "16972"
    },
    {
        label: "21944 - Voucher & Dịch vụ/Mã Quà Tặng/Khác",
        value: "21944"
    },
    {
        label: "13753 - Nhà Cửa & Đời Sống/Đồ dùng nhà bếp & Phòng ăn/Hộp đựng thức ăn",
        value: "13753"
    },
    {
        label: "8798 - Mẹ & Bé/Đồ dùng cho bé/Đồ dùng ăn dặm",
        value: "8798"
    },
    {
        label: "8799 - Mẹ & Bé/Đồ dùng cho bé/An toàn cho bé",
        value: "8799"
    },
    {
        label: "8800 - Mẹ & Bé/Đồ dùng cho bé/Dụng cụ tắm và vệ sinh cho bé",
        value: "8800"
    },
    {
        label: "8801 - Mẹ & Bé/Đồ dùng cho bé/Tiệt trùng và hâm sữa",
        value: "8801"
    },
    {
        label: "8802 - Mẹ & Bé/Đồ dùng cho bé/Đồ dùng phòng ngủ của bé",
        value: "8802"
    },
    {
        label: "8803 - Mẹ & Bé/Đồ dùng cho bé/Bình Sữa & Phụ kiện",
        value: "8803"
    },
    {
        label: "8821 - Mẹ & Bé/Tã & Bỉm/Tã vải & miếng lót",
        value: "8821"
    },
    {
        label: "8822 - Mẹ & Bé/Tã & Bỉm/Bỉm & Tã giấy",
        value: "8822"
    },
    {
        label: "8823 - Mẹ & Bé/Tã & Bỉm/Giấy ướt & Giấy khô",
        value: "8823"
    },
    {
        label: "8849 - Mẹ & Bé/Ghế, Nôi, Cũi, Xe đẩy & Địu/Xe/ dụng cụ tập đi",
        value: "8849"
    },
    {
        label: "8850 - Mẹ & Bé/Ghế, Nôi, Cũi, Xe đẩy & Địu/Ghế cho bé",
        value: "8850"
    },
    {
        label: "8851 - Mẹ & Bé/Ghế, Nôi, Cũi, Xe đẩy & Địu/Xe đẩy, nôi cũi",
        value: "8851"
    },
    {
        label: "8852 - Mẹ & Bé/Ghế, Nôi, Cũi, Xe đẩy & Địu/Đai/Địu",
        value: "8852"
    },
    {
        label: "8855 - Mẹ & Bé/Vitamin & đồ dùng cho mẹ/Vitamin & kem dưỡng cho mẹ",
        value: "8855"
    },
    {
        label: "17051 - Thể Thao & Du Lịch/Indoor Sports",
        value: "17051"
    },
    {
        label: "17052 - Thể Thao & Du Lịch/Indoor Sports/Khác",
        value: "17052"
    },
    {
        label: "9570 - Thời Trang Nam/Đồ đôi",
        value: "9570"
    },
    {
        label: "8888 - Nhà Cửa & Đời Sống/Đồ dùng nhà bếp & Phòng ăn/Dụng cụ nhà bếp",
        value: "8888"
    },
    {
        label: "8891 - Nhà Cửa & Đời Sống/Đồ dùng nhà bếp & Phòng ăn/Đồ uống trà & Cà Phê",
        value: "8891"
    },
    {
        label: "8894 - Nhà Cửa & Đời Sống/Đồ dùng nhà bếp & Phòng ăn/Đồ dùng phòng bếp",
        value: "8894"
    },
    {
        label: "8896 - Nhà Cửa & Đời Sống/Trang trí nhà cửa/Phụ kiện trang trí",
        value: "8896"
    },
    {
        label: "8898 - Nhà Cửa & Đời Sống/Trang trí nhà cửa/Thảm trang trí",
        value: "8898"
    },
    {
        label: "8899 - Nhà Cửa & Đời Sống/Trang trí nhà cửa/Gương",
        value: "8899"
    },
    {
        label: "8900 - Nhà Cửa & Đời Sống/Trang trí nhà cửa/Đồng hồ treo tường",
        value: "8900"
    },
    {
        label: "8901 - Nhà Cửa & Đời Sống/Chăn, Ga, Gối & Nệm/Phụ kiện ga giường",
        value: "8901"
    },
    {
        label: "8902 - Nhà Cửa & Đời Sống/Chăn, Ga, Gối & Nệm/Nệm",
        value: "8902"
    },
    {
        label: "8903 - Nhà Cửa & Đời Sống/Chăn, Ga, Gối & Nệm/Gối",
        value: "8903"
    },
    {
        label: "8904 - Nhà Cửa & Đời Sống/Chăn, Ga, Gối & Nệm/Chăn",
        value: "8904"
    },
    {
        label: "8905 - Nhà Cửa & Đời Sống/Chăn, Ga, Gối & Nệm/Ga trải giường",
        value: "8905"
    },
    {
        label: "8906 - Nhà Cửa & Đời Sống/Tủ đựng & Hộp lưu trữ/Hộp đựng",
        value: "8906"
    },
    {
        label: "8907 - Nhà Cửa & Đời Sống/Tủ đựng & Hộp lưu trữ/Kệ & Tủ",
        value: "8907"
    },
    {
        label: "8908 - Nhà Cửa & Đời Sống/Đồ dùng phòng tắm/Khăn tắm, thảm",
        value: "8908"
    },
    {
        label: "17102 - Giặt giũ & Chăm sóc nhà cửa/Khác",
        value: "17102"
    },
    {
        label: "8913 - Nhà Cửa & Đời Sống/Ngoài trời & Sân vườn/Cây cảnh và hạt giống",
        value: "8913"
    },
    {
        label: "8914 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Bếp nấu",
        value: "8914"
    },
    {
        label: "17107 - Giặt giũ & Chăm sóc nhà cửa/Giặt giũ",
        value: "17107"
    },
    {
        label: "17108 - Giặt giũ & Chăm sóc nhà cửa/Giặt giũ/Default",
        value: "17108"
    },
    {
        label: "8917 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Nồi cơm điện",
        value: "8917"
    },
    {
        label: "8918 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Lò nướng & Lò vi sóng",
        value: "8918"
    },
    {
        label: "8921 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Ấm siêu tốc & Bình thủy",
        value: "8921"
    },
    {
        label: "8922 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Thiết bị xay, trộn, nghiền",
        value: "8922"
    },
    {
        label: "8944 - Thời Trang Nam/Áo thun/Áo len",
        value: "8944"
    },
    {
        label: "8945 - Thời Trang Nam/Áo thun/Áo nỉ",
        value: "8945"
    },
    {
        label: "8946 - Thời Trang Nam/Áo thun/Áo thun dài tay",
        value: "8946"
    },
    {
        label: "8947 - Thời Trang Nam/Áo thun/Áo ngắn tay không cổ",
        value: "8947"
    },
    {
        label: "8948 - Thời Trang Nam/Áo thun/Áo ngắn tay có cổ",
        value: "8948"
    },
    {
        label: "8949 - Thời Trang Nam/Áo khoác & Áo vest/Áo khoác phao",
        value: "8949"
    },
    {
        label: "8950 - Thời Trang Nam/Áo khoác & Áo vest/Áo khoác dạ",
        value: "8950"
    },
    {
        label: "8951 - Thời Trang Nam/Áo khoác & Áo vest/Áo Vest",
        value: "8951"
    },
    {
        label: "8952 - Thời Trang Nam/Áo khoác & Áo vest/Áo khoác dù",
        value: "8952"
    },
    {
        label: "8953 - Thời Trang Nam/Áo khoác & Áo vest/Áo khoác nhẹ",
        value: "8953"
    },
    {
        label: "8954 - Thời Trang Nam/Quần/Quần lót",
        value: "8954"
    },
    {
        label: "8955 - Thời Trang Nam/Quần/Quần thể thao",
        value: "8955"
    },
    {
        label: "8956 - Thời Trang Nam/Quần/Quần short",
        value: "8956"
    },
    {
        label: "8957 - Thời Trang Nam/Quần/Quần kaki",
        value: "8957"
    },
    {
        label: "8958 - Thời Trang Nam/Quần/Quần Jean",
        value: "8958"
    },
    {
        label: "17179 - Giặt giũ & Chăm sóc nhà cửa/Giấy vệ sinh, khăn giấy",
        value: "17179"
    },
    {
        label: "17180 - Giặt giũ & Chăm sóc nhà cửa/Giấy vệ sinh, khăn giấy/Default",
        value: "17180"
    },
    {
        label: "17181 - Giặt giũ & Chăm sóc nhà cửa/Vệ sinh nhà cửa",
        value: "17181"
    },
    {
        label: "17182 - Giặt giũ & Chăm sóc nhà cửa/Vệ sinh nhà cửa/Default",
        value: "17182"
    },
    {
        label: "17183 - Giặt giũ & Chăm sóc nhà cửa/Vệ sinh bát đĩa",
        value: "17183"
    },
    {
        label: "17184 - Giặt giũ & Chăm sóc nhà cửa/Vệ sinh bát đĩa/Default",
        value: "17184"
    },
    {
        label: "8998 - Giày Dép Nữ/Giày đế bằng/Giày mọi",
        value: "8998"
    },
    {
        label: "8999 - Giày Dép Nữ/Giày đế bằng/Giày oxford",
        value: "8999"
    },
    {
        label: "9000 - Giày Dép Nữ/Giày đế bằng/Giày búp bê",
        value: "9000"
    },
    {
        label: "9033 - Phụ Kiện Thời Trang/Trang sức/Cài áo",
        value: "9033"
    },
    {
        label: "9034 - Phụ Kiện Thời Trang/Trang sức/Bộ trang sức",
        value: "9034"
    },
    {
        label: "9035 - Phụ Kiện Thời Trang/Trang sức/Lắc chân",
        value: "9035"
    },
    {
        label: "9036 - Phụ Kiện Thời Trang/Trang sức/Nhẫn",
        value: "9036"
    },
    {
        label: "9037 - Phụ Kiện Thời Trang/Trang sức/Vòng cổ",
        value: "9037"
    },
    {
        label: "9038 - Phụ Kiện Thời Trang/Trang sức/Bông tai",
        value: "9038"
    },
    {
        label: "9039 - Phụ Kiện Thời Trang/Trang sức/Vòng tay",
        value: "9039"
    },
    {
        label: "9040 - Phụ Kiện Thời Trang/Khăn, Tất & Găng tay/Găng tay",
        value: "9040"
    },
    {
        label: "17233 - Giặt giũ & Chăm sóc nhà cửa/Chất khử mùi, làm thơm/Default",
        value: "17233"
    },
    {
        label: "17234 - Giặt giũ & Chăm sóc nhà cửa/Thuốc diệt côn trùng",
        value: "17234"
    },
    {
        label: "17235 - Giặt giũ & Chăm sóc nhà cửa/Thuốc diệt côn trùng/Default",
        value: "17235"
    },
    {
        label: "17237 - Giặt giũ & Chăm sóc nhà cửa/Túi, màng bọc thực phẩm",
        value: "17237"
    },
    {
        label: "17238 - Giặt giũ & Chăm sóc nhà cửa/Túi, màng bọc thực phẩm/Default",
        value: "17238"
    },
    {
        label: "17240 - Giặt giũ & Chăm sóc nhà cửa/Bao bì, túi đựng rác",
        value: "17240"
    },
    {
        label: "17241 - Giặt giũ & Chăm sóc nhà cửa/Bao bì, túi đựng rác/Default",
        value: "17241"
    },
    {
        label: "17242 - Giặt giũ & Chăm sóc nhà cửa/Giặt giũ/Bột giặt",
        value: "17242"
    },
    {
        label: "17244 - Giặt giũ & Chăm sóc nhà cửa/Giặt giũ/Nước giặt",
        value: "17244"
    },
    {
        label: "17245 - Giặt giũ & Chăm sóc nhà cửa/Giặt giũ/Viên giặt",
        value: "17245"
    },
    {
        label: "17246 - Giặt giũ & Chăm sóc nhà cửa/Giặt giũ/Chất làm mềm vải",
        value: "17246"
    },
    {
        label: "17247 - Giặt giũ & Chăm sóc nhà cửa/Giặt giũ/Chất tẩy quần áo",
        value: "17247"
    },
    {
        label: "17248 - Giặt giũ & Chăm sóc nhà cửa/Giặt giũ/Chất làm sạch máy giặt",
        value: "17248"
    },
    {
        label: "17249 - Giặt giũ & Chăm sóc nhà cửa/Giặt giũ/Nước ủi quần áo",
        value: "17249"
    },
    {
        label: "17250 - Giặt giũ & Chăm sóc nhà cửa/Giấy vệ sinh, khăn giấy/Khăn giấy ướt",
        value: "17250"
    },
    {
        label: "17251 - Giặt giũ & Chăm sóc nhà cửa/Giấy vệ sinh, khăn giấy/Giấy ăn",
        value: "17251"
    },
    {
        label: "17252 - Giặt giũ & Chăm sóc nhà cửa/Giấy vệ sinh, khăn giấy/Giấy vệ sinh cuộn",
        value: "17252"
    },
    {
        label: "17253 - Giặt giũ & Chăm sóc nhà cửa/Vệ sinh nhà cửa/Chất tẩy đa năng",
        value: "17253"
    },
    {
        label: "17254 - Giặt giũ & Chăm sóc nhà cửa/Vệ sinh nhà cửa/Chất tẩy và Khử mùi bồn cầu",
        value: "17254"
    },
    {
        label: "17255 - Giặt giũ & Chăm sóc nhà cửa/Vệ sinh nhà cửa/Nước lau sàn",
        value: "17255"
    },
    {
        label: "17256 - Giặt giũ & Chăm sóc nhà cửa/Vệ sinh nhà cửa/Nước lau kính",
        value: "17256"
    },
    {
        label: "17257 - Giặt giũ & Chăm sóc nhà cửa/Vệ sinh nhà cửa/Nước lau bếp",
        value: "17257"
    },
    {
        label: "17258 - Giặt giũ & Chăm sóc nhà cửa/Vệ sinh nhà cửa/Chất làm sạch và khử mùi thảm",
        value: "17258"
    },
    {
        label: "17259 - Giặt giũ & Chăm sóc nhà cửa/Dụng cụ vệ sinh/Bàn chải",
        value: "17259"
    },
    {
        label: "17260 - Giặt giũ & Chăm sóc nhà cửa/Dụng cụ vệ sinh/Găng tay",
        value: "17260"
    },
    {
        label: "17261 - Giặt giũ & Chăm sóc nhà cửa/Dụng cụ vệ sinh/Miếng cọ rửa, Gậy cọ rửa",
        value: "17261"
    },
    {
        label: "17262 - Giặt giũ & Chăm sóc nhà cửa/Chất khử mùi, làm thơm/Sáp thơm",
        value: "17262"
    },
    {
        label: "17263 - Giặt giũ & Chăm sóc nhà cửa/Chất khử mùi, làm thơm/Xịt thơm",
        value: "17263"
    },
    {
        label: "17264 - Giặt giũ & Chăm sóc nhà cửa/Chất khử mùi, làm thơm/Túi thơm",
        value: "17264"
    },
    {
        label: "17265 - Giặt giũ & Chăm sóc nhà cửa/Chất khử mùi, làm thơm/Giấy thơm phòng, quần áo",
        value: "17265"
    },
    {
        label: "17266 - Giặt giũ & Chăm sóc nhà cửa/Thuốc diệt côn trùng/Bình xịt diệt côn trùng",
        value: "17266"
    },
    {
        label: "17267 - Giặt giũ & Chăm sóc nhà cửa/Thuốc diệt côn trùng/Hóa chất diệt côn trùng",
        value: "17267"
    },
    {
        label: "17268 - Giặt giũ & Chăm sóc nhà cửa/Túi, màng bọc thực phẩm/Túi đựng thực phẩm",
        value: "17268"
    },
    {
        label: "17269 - Giặt giũ & Chăm sóc nhà cửa/Túi, màng bọc thực phẩm/Màng bọc thực phẩm",
        value: "17269"
    },
    {
        label: "11087 - Phụ Kiện Thời Trang/Khẩu trang",
        value: "11087"
    },
    {
        label: "9303 - Mẹ & Bé/Đồ dùng cho bé/Balo cho bé",
        value: "9303"
    },
    {
        label: "9042 - Phụ Kiện Thời Trang/Khăn, Tất & Găng tay/Khăn thời trang",
        value: "9042"
    },
    {
        label: "17657 - Nhà Cửa & Đời Sống/Dụng cụ cầm tay/Dụng cụ đo lường",
        value: "17657"
    },
    {
        label: "17665 - Nhà Sách Online/Sách Ngoại Văn",
        value: "17665"
    },
    {
        label: "17666 - Nhà Sách Online/Sách Ngoại Văn/Khác",
        value: "17666"
    },
    {
        label: "9566 - Thời Trang Nam/Áo nỉ/ Áo len",
        value: "9566"
    },
    {
        label: "9567 - Thời Trang Nam/Áo nỉ/ Áo len/Khác",
        value: "9567"
    },
    {
        label: "9568 - Thời Trang Nam/Đồ bộ/ Đồ mặc nhà",
        value: "9568"
    },
    {
        label: "9569 - Thời Trang Nam/Đồ bộ/ Đồ mặc nhà/Khác",
        value: "9569"
    },
    {
        label: "17231 - Giặt giũ & Chăm sóc nhà cửa/Dụng cụ vệ sinh/Default",
        value: "17231"
    },
    {
        label: "9571 - Thời Trang Nam/Đồ đôi/Khác",
        value: "9571"
    },
    {
        label: "9572 - Thời Trang Nam/Balo/ Túi/ Ví",
        value: "9572"
    },
    {
        label: "9573 - Thời Trang Nam/Balo/ Túi/ Ví/Khác",
        value: "9573"
    },
    {
        label: "9576 - Thời Trang Nam/Phụ kiện nam/Tất/ găng tay",
        value: "9576"
    },
    {
        label: "9577 - Thời Trang Nam/Phụ kiện nam/Mũ/Nón",
        value: "9577"
    },
    {
        label: "9594 - Thời Trang Nam/Mắt kính",
        value: "9594"
    },
    {
        label: "9595 - Thời Trang Nam/Mắt kính/Khác",
        value: "9595"
    },
    {
        label: "9608 - Đồng Hồ/Phụ Kiện Đồng Hồ",
        value: "9608"
    },
    {
        label: "9610 - Đồng Hồ/Đồng hồ nam",
        value: "9610"
    },
    {
        label: "9612 - Đồng Hồ/Đồng hồ nữ",
        value: "9612"
    },
    {
        label: "9615 - Đồng Hồ/Đồng hồ trẻ em",
        value: "9615"
    },
    {
        label: "22091 - Voucher & Dịch vụ/Shopee Official",
        value: "22091"
    },
    {
        label: "9669 - Sức Khỏe & Sắc Đẹp/Vệ sinh phụ nữ & Hỗ trợ tình dục",
        value: "9669"
    },
    {
        label: "9671 - Sức Khỏe & Sắc Đẹp/Chăm sóc răng miệng",
        value: "9671"
    },
    {
        label: "9672 - Sức Khỏe & Sắc Đẹp/Chăm sóc răng miệng/Chăm sóc răng miệng",
        value: "9672"
    },
    {
        label: "9673 - Sức Khỏe & Sắc Đẹp/Máy massage & Thiết bị y tế",
        value: "9673"
    },
    {
        label: "9674 - Sức Khỏe & Sắc Đẹp/Máy massage & Thiết bị y tế/Cân & phân tích lượng mỡ",
        value: "9674"
    },
    {
        label: "9676 - Thể Thao & Du Lịch/Khác",
        value: "9676"
    },
    {
        label: "9677 - Thể Thao & Du Lịch/Khác/Khác",
        value: "9677"
    },
    {
        label: "9678 - Thể Thao & Du Lịch/Thể Thao & Thể Hình",
        value: "9678"
    },
    {
        label: "9679 - Thể Thao & Du Lịch/Thể Thao & Thể Hình/Khác",
        value: "9679"
    },
    {
        label: "9680 - Thể Thao & Du Lịch/Thể thao ngoài trời",
        value: "9680"
    },
    {
        label: "9681 - Thể Thao & Du Lịch/Thể thao ngoài trời/Khác",
        value: "9681"
    },
    {
        label: "9682 - Thể Thao & Du Lịch/Thể thao dưới nước",
        value: "9682"
    },
    {
        label: "9683 - Thể Thao & Du Lịch/Thể thao dưới nước/Khác",
        value: "9683"
    },
    {
        label: "9684 - Thể Thao & Du Lịch/Trang Phục thể thao",
        value: "9684"
    },
    {
        label: "9685 - Thể Thao & Du Lịch/Trang Phục thể thao/Khác",
        value: "9685"
    },
    {
        label: "9686 - Thể Thao & Du Lịch/Vali/ Hành lý",
        value: "9686"
    },
    {
        label: "9687 - Thể Thao & Du Lịch/Vali/ Hành lý/Khác",
        value: "9687"
    },
    {
        label: "9690 - Thể Thao & Du Lịch/Phụ Kiện Thể Thao",
        value: "9690"
    },
    {
        label: "9691 - Thể Thao & Du Lịch/Phụ Kiện Thể Thao/Khác",
        value: "9691"
    },
    {
        label: "9827 - Bách Hoá Online/Ăn vặt & Bánh kẹo",
        value: "9827"
    },
    {
        label: "9828 - Bách Hoá Online/Ăn vặt & Bánh kẹo/Khác",
        value: "9828"
    },
    {
        label: "9829 - Bách Hoá Online/Đậu & Hạt",
        value: "9829"
    },
    {
        label: "9830 - Bách Hoá Online/Đậu & Hạt/Khác",
        value: "9830"
    },
    {
        label: "9831 - Bách Hoá Online/Đồ hộp & Đóng gói",
        value: "9831"
    },
    {
        label: "9832 - Bách Hoá Online/Đồ hộp & Đóng gói/Khác",
        value: "9832"
    },
    {
        label: "9833 - Bách Hoá Online/Nấu ăn & Làm bánh",
        value: "9833"
    },
    {
        label: "9834 - Bách Hoá Online/Nấu ăn & Làm bánh/Khác",
        value: "9834"
    },
    {
        label: "9835 - Bách Hoá Online/Đồ uống",
        value: "9835"
    },
    {
        label: "9836 - Bách Hoá Online/Đồ uống/Khác",
        value: "9836"
    },
    {
        label: "9837 - Bách Hoá Online/Đặc sản Việt",
        value: "9837"
    },
    {
        label: "9838 - Bách Hoá Online/Đặc sản Việt/Khác",
        value: "9838"
    },
    {
        label: "9839 - Bách Hoá Online/Quà biếu",
        value: "9839"
    },
    {
        label: "9840 - Bách Hoá Online/Quà biếu/Khác",
        value: "9840"
    },
    {
        label: "9865 - Thời Trang Nữ/Trang Phục Đông",
        value: "9865"
    },
    {
        label: "9866 - Thời Trang Nữ/Trang Phục Đông/Khác",
        value: "9866"
    },
    {
        label: "9901 - Thiết Bị Điện Gia Dụng/Quạt & Máy nóng lạnh/Quạt",
        value: "9901"
    },
    {
        label: "9902 - Thiết Bị Điện Gia Dụng/Quạt & Máy nóng lạnh/Máy điều hòa",
        value: "9902"
    },
    {
        label: "9903 - Thiết Bị Điện Gia Dụng/Quạt & Máy nóng lạnh/Máy tạo ẩm, Máy lọc khí",
        value: "9903"
    },
    {
        label: "9904 - Thiết Bị Điện Gia Dụng/Quạt & Máy nóng lạnh/Máy nước nóng",
        value: "9904"
    },
    {
        label: "9905 - Thiết Bị Điện Gia Dụng/Quạt & Máy nóng lạnh/Thiết bị sưởi",
        value: "9905"
    },
    {
        label: "9906 - Thiết Bị Điện Gia Dụng/Thiết bị chăm sóc quần áo",
        value: "9906"
    },
    {
        label: "9907 - Thiết Bị Điện Gia Dụng/Thiết bị chăm sóc quần áo/Khác",
        value: "9907"
    },
    {
        label: "9908 - Thiết Bị Điện Gia Dụng/Thiết bị chăm sóc quần áo/Bàn ủi hơi nước",
        value: "9908"
    },
    {
        label: "9909 - Thiết Bị Điện Gia Dụng/Thiết bị chăm sóc quần áo/Bàn ủi khô",
        value: "9909"
    },
    {
        label: "9910 - Thiết Bị Điện Gia Dụng/Thiết bị chăm sóc quần áo/Máy may",
        value: "9910"
    },
    {
        label: "9911 - Thiết Bị Điện Gia Dụng/Máy hút bụi & Thiết bị làm sạch/Máy hút bụi gia đình",
        value: "9911"
    },
    {
        label: "9912 - Thiết Bị Điện Gia Dụng/Máy hút bụi & Thiết bị làm sạch/Robot hút bụi",
        value: "9912"
    },
    {
        label: "9914 - Thiết Bị Điện Gia Dụng/Đồ gia dụng lớn/Máy giặt và sấy",
        value: "9914"
    },
    {
        label: "9916 - Thiết Bị Điện Gia Dụng/Đồ gia dụng lớn/Tủ lạnh",
        value: "9916"
    },
    {
        label: "9917 - Thiết Bị Điện Gia Dụng/Đồ gia dụng lớn/Máy hút khói",
        value: "9917"
    },
    {
        label: "9943 - Nhà Cửa & Đời Sống/Dụng cụ cầm tay",
        value: "9943"
    },
    {
        label: "9944 - Nhà Cửa & Đời Sống/Dụng cụ cầm tay/Default",
        value: "9944"
    },
    {
        label: "10033 - Phụ Kiện Thời Trang/Phụ kiện tóc/Tóc giả",
        value: "10033"
    },
    {
        label: "10034 - Phụ Kiện Thời Trang/Phụ kiện tóc/Phụ kiện tóc",
        value: "10034"
    },
    {
        label: "10035 - Phụ Kiện Thời Trang/Kính mắt/Kính mát",
        value: "10035"
    },
    {
        label: "1871 - Thời Trang Nữ/Áo",
        value: "1871"
    },
    {
        label: "1875 - Thời Trang Nữ/Áo khoác & Áo vest",
        value: "1875"
    },
    {
        label: "1877 - Thời Trang Nữ/Quần",
        value: "1877"
    },
    {
        label: "1879 - Thời Trang Nữ/Đồ lót, Đồ ngủ & Đồ mặc nhà",
        value: "1879"
    },
    {
        label: "1881 - Thời Trang Nữ/Đồ bơi",
        value: "1881"
    },
    {
        label: "1885 - Phụ Kiện Thời Trang/Trang sức",
        value: "1885"
    },
    {
        label: "1889 - Phụ Kiện Thời Trang/Kính mắt",
        value: "1889"
    },
    {
        label: "1891 - Phụ Kiện Thời Trang/Nón & Dù",
        value: "1891"
    },
    {
        label: "1893 - Phụ Kiện Thời Trang/Khăn, Tất & Găng tay",
        value: "1893"
    },
    {
        label: "1899 - Thời Trang Nam/Quần",
        value: "1899"
    },
    {
        label: "1913 - Sức Khỏe & Sắc Đẹp/Trang điểm da",
        value: "1913"
    },
    {
        label: "1915 - Sức Khỏe & Sắc Đẹp/Chăm sóc tóc",
        value: "1915"
    },
    {
        label: "1917 - Sức Khỏe & Sắc Đẹp/Nước hoa",
        value: "1917"
    },
    {
        label: "1919 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp",
        value: "1919"
    },
    {
        label: "1921 - Sức Khỏe & Sắc Đẹp/Vitamin & Thực phẩm chức năng",
        value: "1921"
    },
    {
        label: "1923 - Sức Khỏe & Sắc Đẹp/Mỹ phẩm nam",
        value: "1923"
    },
    {
        label: "1927 - Giày Dép Nữ/Giày cao gót",
        value: "1927"
    },
    {
        label: "1929 - Giày Dép Nữ/Giày sneaker và Giày thể thao",
        value: "1929"
    },
    {
        label: "1931 - Giày Dép Nữ/Bốt",
        value: "1931"
    },
    {
        label: "1933 - Giày Dép Nữ/Giày đế bằng",
        value: "1933"
    },
    {
        label: "1935 - Giày Dép Nữ/Sandal",
        value: "1935"
    },
    {
        label: "1979 - Điện Thoại & Phụ Kiện/Điện thoại",
        value: "1979"
    },
    {
        label: "1981 - Điện Thoại & Phụ Kiện/Pin, Cáp & Bộ sạc",
        value: "1981"
    },
    {
        label: "10174 - Đồng Hồ/Đồng hồ nam/Đồng hồ kim",
        value: "10174"
    },
    {
        label: "10175 - Đồng Hồ/Đồng hồ nam/Đồng hồ điện tử",
        value: "10175"
    },
    {
        label: "10176 - Đồng Hồ/Đồng hồ nữ/Đồng hồ kim",
        value: "10176"
    },
    {
        label: "1985 - Điện Thoại & Phụ Kiện/Vỏ, Bao & Ốp lưng",
        value: "1985"
    },
    {
        label: "10178 - Đồng Hồ/Đồng hồ trẻ em/Đồng hồ kim",
        value: "10178"
    },
    {
        label: "10179 - Đồng Hồ/Đồng hồ trẻ em/Đồng hồ điện tử",
        value: "10179"
    },
    {
        label: "10183 - Phụ Kiện Thời Trang/Kính mắt/Kính cận",
        value: "10183"
    },
    {
        label: "1997 - Nhà Cửa & Đời Sống/Đồ dùng nhà bếp & Phòng ăn",
        value: "1997"
    },
    {
        label: "1999 - Nhà Cửa & Đời Sống/Chăn, Ga, Gối & Nệm",
        value: "1999"
    },
    {
        label: "2001 - Nhà Cửa & Đời Sống/Đồ nội thất",
        value: "2001"
    },
    {
        label: "2003 - Nhà Cửa & Đời Sống/Trang trí nhà cửa",
        value: "2003"
    },
    {
        label: "2007 - Nhà Cửa & Đời Sống/Đồ dùng phòng tắm",
        value: "2007"
    },
    {
        label: "10205 - Giày Dép Nữ/Giày cao gót/ Giày đế xuồng",
        value: "10205"
    },
    {
        label: "10206 - Giày Dép Nữ/Giày cao gót/ Giày đế xuồng/Khác",
        value: "10206"
    },
    {
        label: "10238 - Giày Dép Nữ/Phụ kiện giày",
        value: "10238"
    },
    {
        label: "10239 - Giày Dép Nữ/Phụ kiện giày/vật dụng bảo quản giày",
        value: "10239"
    },
    {
        label: "10260 - Nhà Sách Online/Văn Phòng Phẩm",
        value: "10260"
    },
    {
        label: "10262 - Nhà Sách Online/Văn Phòng Phẩm/Tập - Sổ - Giấy - Bookmark",
        value: "10262"
    },
    {
        label: "10263 - Nhà Sách Online/Văn Phòng Phẩm/Khác",
        value: "10263"
    },
    {
        label: "10354 - Sức Khỏe & Sắc Đẹp/Máy massage & Thiết bị y tế/Máy massage trị liệu",
        value: "10354"
    },
    {
        label: "10356 - Sức Khỏe & Sắc Đẹp/Máy massage & Thiết bị y tế/Máy đo huyết áp",
        value: "10356"
    },
    {
        label: "10357 - Sức Khỏe & Sắc Đẹp/Máy massage & Thiết bị y tế/Nhiệt kế",
        value: "10357"
    },
    {
        label: "10358 - Sức Khỏe & Sắc Đẹp/Máy massage & Thiết bị y tế/Máy đo đường huyết",
        value: "10358"
    },
    {
        label: "10360 - Sức Khỏe & Sắc Đẹp/Máy massage & Thiết bị y tế/Thiết bị y tế khác",
        value: "10360"
    },
    {
        label: "10361 - Sức Khỏe & Sắc Đẹp/Vệ sinh phụ nữ & Hỗ trợ tình dục/Băng vệ sinh",
        value: "10361"
    },
    {
        label: "10362 - Sức Khỏe & Sắc Đẹp/Vệ sinh phụ nữ & Hỗ trợ tình dục/Dung dịch vệ sinh",
        value: "10362"
    },
    {
        label: "10363 - Sức Khỏe & Sắc Đẹp/Vệ sinh phụ nữ & Hỗ trợ tình dục/Que thử thai",
        value: "10363"
    },
    {
        label: "10364 - Sức Khỏe & Sắc Đẹp/Vệ sinh phụ nữ & Hỗ trợ tình dục/Cốc nguyệt san",
        value: "10364"
    },
    {
        label: "10365 - Sức Khỏe & Sắc Đẹp/Vệ sinh phụ nữ & Hỗ trợ tình dục/Bao cao su",
        value: "10365"
    },
    {
        label: "10366 - Sức Khỏe & Sắc Đẹp/Vệ sinh phụ nữ & Hỗ trợ tình dục/Gel bôi trơn",
        value: "10366"
    },
    {
        label: "10367 - Sức Khỏe & Sắc Đẹp/Vệ sinh phụ nữ & Hỗ trợ tình dục/Sản phẩm hỗ trợ khác",
        value: "10367"
    },
    {
        label: "10369 - Sức Khỏe & Sắc Đẹp/Mỹ phẩm nam/Mỹ phẩm chăm sóc râu",
        value: "10369"
    },
    {
        label: "10371 - Sức Khỏe & Sắc Đẹp/Mỹ phẩm nam/Gel-Wax tạo kiểu tóc",
        value: "10371"
    },
    {
        label: "10372 - Sức Khỏe & Sắc Đẹp/Mỹ phẩm nam/Tắm-gội nam",
        value: "10372"
    },
    {
        label: "10373 - Sức Khỏe & Sắc Đẹp/Mỹ phẩm nam/Chăm sóc da mặt nam",
        value: "10373"
    },
    {
        label: "10374 - Sức Khỏe & Sắc Đẹp/Mỹ phẩm nam/Khử mùi cho nam",
        value: "10374"
    },
    {
        label: "10378 - Nhà Sách Online/Văn Phòng Phẩm/Bút - Bút Chì - Bút Màu - Bút Lông",
        value: "10378"
    },
    {
        label: "10379 - Nhà Sách Online/Văn Phòng Phẩm/Máy tính bỏ túi",
        value: "10379"
    },
    {
        label: "10380 - Sức Khỏe & Sắc Đẹp/Vitamin & Thực phẩm chức năng/Dinh dưỡng thể thao- thể hình",
        value: "10380"
    },
    {
        label: "10381 - Sức Khỏe & Sắc Đẹp/Vitamin & Thực phẩm chức năng/Thực phẩm cho sức khỏe",
        value: "10381"
    },
    {
        label: "10382 - Sức Khỏe & Sắc Đẹp/Vitamin & Thực phẩm chức năng/Tăng & Giảm cân",
        value: "10382"
    },
    {
        label: "10383 - Sức Khỏe & Sắc Đẹp/Vitamin & Thực phẩm chức năng/Hỗ trợ làm đẹp da",
        value: "10383"
    },
    {
        label: "10384 - Sức Khỏe & Sắc Đẹp/Vitamin & Thực phẩm chức năng/Bột thảo mộc",
        value: "10384"
    },
    {
        label: "18678 - Máy tính & Laptop/Audio & Video Accessories/Gaming Audio",
        value: "18678"
    },
    {
        label: "8580 - Sức Khỏe & Sắc Đẹp/Vitamin & Thực phẩm chức năng/Vitamin & khoáng chất",
        value: "8580"
    },
    {
        label: "2334 - Thời Trang Nữ/Set trang phục & Jumpsuit",
        value: "2334"
    },
    {
        label: "2335 - Thời Trang Nữ/Đồ đôi",
        value: "2335"
    },
    {
        label: "2336 - Phụ Kiện Thời Trang/Phụ kiện tóc",
        value: "2336"
    },
    {
        label: "2337 - Phụ Kiện Thời Trang/Hình xăm",
        value: "2337"
    },
    {
        label: "2339 - Sức Khỏe & Sắc Đẹp/Son & Chăm sóc môi",
        value: "2339"
    },
    {
        label: "2340 - Sức Khỏe & Sắc Đẹp/Trang điểm mắt",
        value: "2340"
    },
    {
        label: "2341 - Sức Khỏe & Sắc Đẹp/Chăm sóc da",
        value: "2341"
    },
    {
        label: "2349 - Mẹ & Bé/Tã & Bỉm",
        value: "2349"
    },
    {
        label: "2350 - Mẹ & Bé/Ghế, Nôi, Cũi, Xe đẩy & Địu",
        value: "2350"
    },
    {
        label: "2352 - Mẹ & Bé/Đồ dùng cho bé",
        value: "2352"
    },
    {
        label: "8584 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Cọ trang điểm",
        value: "8584"
    },
    {
        label: "2354 - Thiết Bị Điện Gia Dụng/Khác",
        value: "2354"
    },
    {
        label: "2355 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp",
        value: "2355"
    },
    {
        label: "2356 - Thiết Bị Điện Gia Dụng/Quạt & Máy nóng lạnh",
        value: "2356"
    },
    {
        label: "2358 - Thiết Bị Điện Gia Dụng/Máy hút bụi & Thiết bị làm sạch",
        value: "2358"
    },
    {
        label: "2359 - Nhà Cửa & Đời Sống/Dụng cụ & Thiết bị tiện ích",
        value: "2359"
    },
    {
        label: "2370 - Thiết Bị Điện Tử/Tai nghe",
        value: "2370"
    },
    {
        label: "8587 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Kẹp mi",
        value: "8587"
    },
    {
        label: "10568 - Phụ Kiện Thời Trang/Kính mắt/Lens Thời trang",
        value: "10568"
    },
    {
        label: "8588 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Mi giả-Kích mí",
        value: "8588"
    },
    {
        label: "10570 - Phụ Kiện Thời Trang/Dây lưng/Default",
        value: "10570"
    },
    {
        label: "10571 - Phụ Kiện Thời Trang/Phụ kiện cưới",
        value: "10571"
    },
    {
        label: "10572 - Phụ Kiện Thời Trang/Phụ kiện cưới/Default",
        value: "10572"
    },
    {
        label: "10573 - Thời Trang Nữ/Set trang phục & Jumpsuit/Set trang phục",
        value: "10573"
    },
    {
        label: "10574 - Thời Trang Nữ/Set trang phục & Jumpsuit/Jumpsuit",
        value: "10574"
    },
    {
        label: "10575 - Thời Trang Nữ/Set trang phục & Jumpsuit/Trang phục truyền thống",
        value: "10575"
    },
    {
        label: "10576 - Thời Trang Nữ/Phụ kiện may mặc",
        value: "10576"
    },
    {
        label: "8590 - Sức Khỏe & Sắc Đẹp/Nước hoa/Nước hoa nữ",
        value: "8590"
    },
    {
        label: "8591 - Sức Khỏe & Sắc Đẹp/Nước hoa/Bộ nước hoa",
        value: "8591"
    },
    {
        label: "8592 - Sức Khỏe & Sắc Đẹp/Nước hoa/Nước hoa mini",
        value: "8592"
    },
    {
        label: "2403 - Điện Thoại & Phụ Kiện/Gậy chụp hình",
        value: "2403"
    },
    {
        label: "8593 - Sức Khỏe & Sắc Đẹp/Nước hoa/Xịt toàn thân",
        value: "8593"
    },
    {
        label: "8594 - Sức Khỏe & Sắc Đẹp/Nước hoa/Nước hoa nam",
        value: "8594"
    },
    {
        label: "16787 - Thời Trang Trẻ Em/Bé gái | 5-14 tuổi/Set trang phục",
        value: "16787"
    },
    {
        label: "16788 - Thời Trang Trẻ Em/Bé gái | 5-14 tuổi/Đồ lót, đồ ngủ",
        value: "16788"
    },
    {
        label: "2431 - Giày Dép Nam/Giày thể thao/ Sneakers",
        value: "2431"
    },
    {
        label: "2432 - Giày Dép Nam/Giày lười",
        value: "2432"
    },
    {
        label: "2434 - Giày Dép Nam/Giày tây",
        value: "2434"
    },
    {
        label: "2435 - Giày Dép Nam/Dép",
        value: "2435"
    },
    {
        label: "2436 - Giày Dép Nam/Xăng-đan",
        value: "2436"
    },
    {
        label: "16792 - Thời Trang Trẻ Em/Bé trai | 5-14 tuổi",
        value: "16792"
    },
    {
        label: "16793 - Thời Trang Trẻ Em/Bé trai | 5-14 tuổi/Default",
        value: "16793"
    },
    {
        label: "8602 - Thời Trang Nữ/Đầm/Đầm dáng suông",
        value: "8602"
    },
    {
        label: "8603 - Thời Trang Nữ/Đầm/Đầm dáng ôm",
        value: "8603"
    },
    {
        label: "8607 - Thời Trang Nữ/Chân váy/Chân váy dài",
        value: "8607"
    },
    {
        label: "8618 - Thời Trang Nữ/Quần/Quần khaki",
        value: "8618"
    },
    {
        label: "8620 - Thời Trang Nữ/Quần/Quần jeans",
        value: "8620"
    },
    {
        label: "8621 - Thời Trang Nữ/Đồ lót, Đồ ngủ & Đồ mặc nhà/Đồ mặc nhà",
        value: "8621"
    },
    {
        label: "8622 - Thời Trang Nữ/Đồ lót, Đồ ngủ & Đồ mặc nhà/Đồ ngủ",
        value: "8622"
    },
    {
        label: "8623 - Thời Trang Nữ/Đồ lót, Đồ ngủ & Đồ mặc nhà/Bộ đồ lót",
        value: "8623"
    },
    {
        label: "18978 - Chăm sóc thú cưng/Khác",
        value: "18978"
    },
    {
        label: "18979 - Chăm sóc thú cưng/Khác/Default",
        value: "18979"
    },
    {
        label: "18980 - Chăm sóc thú cưng/Chó",
        value: "18980"
    },
    {
        label: "18981 - Chăm sóc thú cưng/Chó/Khác",
        value: "18981"
    },
    {
        label: "18982 - Chăm sóc thú cưng/Chó/Thức ăn cho chó",
        value: "18982"
    },
    {
        label: "18983 - Chăm sóc thú cưng/Chó/Đồ chơi cho chó",
        value: "18983"
    },
    {
        label: "18984 - Chăm sóc thú cưng/Chó/Thời trang cho chó",
        value: "18984"
    },
    {
        label: "18985 - Chăm sóc thú cưng/Chó/Phụ kiện cho chó",
        value: "18985"
    },
    {
        label: "18986 - Chăm sóc thú cưng/Chó/Nhà, chuồng, nệm cho chó",
        value: "18986"
    },
    {
        label: "18987 - Chăm sóc thú cưng/Chó/Chăm sóc sức khoẻ cho chó",
        value: "18987"
    },
    {
        label: "18988 - Chăm sóc thú cưng/Mèo",
        value: "18988"
    },
    {
        label: "18989 - Chăm sóc thú cưng/Mèo/Khác",
        value: "18989"
    },
    {
        label: "18990 - Chăm sóc thú cưng/Mèo/Thức ăn cho mèo",
        value: "18990"
    },
    {
        label: "18991 - Chăm sóc thú cưng/Mèo/Đồ chơi cho mèo",
        value: "18991"
    },
    {
        label: "18992 - Chăm sóc thú cưng/Mèo/Thời trang cho mèo",
        value: "18992"
    },
    {
        label: "18993 - Chăm sóc thú cưng/Mèo/Phụ kiện cho mèo",
        value: "18993"
    },
    {
        label: "18994 - Chăm sóc thú cưng/Mèo/Nhà và nệm cho mèo",
        value: "18994"
    },
    {
        label: "18995 - Chăm sóc thú cưng/Mèo/Chăm sóc sức khoẻ cho mèo",
        value: "18995"
    },
    {
        label: "18996 - Chăm sóc thú cưng/Fish",
        value: "18996"
    },
    {
        label: "18997 - Chăm sóc thú cưng/Fish/Default",
        value: "18997"
    },
    {
        label: "19000 - Chăm sóc thú cưng/Fish/Thức ăn cho cá",
        value: "19000"
    },
    {
        label: "19001 - Chăm sóc thú cưng/Fish/Bể cá, bộ lọc & phụ kiện",
        value: "19001"
    },
    {
        label: "19002 - Chăm sóc thú cưng/Fish/Phụ kiện khác",
        value: "19002"
    },
    {
        label: "19003 - Chăm sóc thú cưng/Chim",
        value: "19003"
    },
    {
        label: "19004 - Chăm sóc thú cưng/Chim/Khác",
        value: "19004"
    },
    {
        label: "19006 - Chăm sóc thú cưng/Chim/Thức ăn cho chim",
        value: "19006"
    },
    {
        label: "19007 - Chăm sóc thú cưng/Chim/Chuồng, lồng và phụ kiện",
        value: "19007"
    },
    {
        label: "19008 - Chăm sóc thú cưng/Hamsters",
        value: "19008"
    },
    {
        label: "19009 - Chăm sóc thú cưng/Hamsters/Phụ kiện khác",
        value: "19009"
    },
    {
        label: "19011 - Chăm sóc thú cưng/Hamsters/Thức ăn cho Hamsters",
        value: "19011"
    },
    {
        label: "19012 - Chăm sóc thú cưng/Hamsters/Chuồng, lồng & phụ kiện",
        value: "19012"
    },
    {
        label: "19018 - Mẹ & Bé/Sữa công thức 0-24 tháng tuổi",
        value: "19018"
    },
    {
        label: "19019 - Mẹ & Bé/Sữa công thức 0-24 tháng tuổi/Default",
        value: "19019"
    },
    {
        label: "19020 - Mẹ & Bé/Sữa công thức 0-24 tháng tuổi/Sữa bột",
        value: "19020"
    },
    {
        label: "19021 - Mẹ & Bé/Sữa công thức 0-24 tháng tuổi/Sữa nước",
        value: "19021"
    },
    {
        label: "19022 - Mẹ & Bé/Thực phẩm bổ sung cho trẻ dưới 6 tháng tuổi",
        value: "19022"
    },
    {
        label: "19023 - Mẹ & Bé/Thực phẩm bổ sung cho trẻ dưới 6 tháng tuổi/Default",
        value: "19023"
    },
    {
        label: "19024 - Mẹ & Bé/Thực phẩm bổ sung cho trẻ dưới 6 tháng tuổi/0-6 months",
        value: "19024"
    },
    {
        label: "19025 - Mẹ & Bé/Sữa trên 24 tháng tuổi",
        value: "19025"
    },
    {
        label: "19026 - Mẹ & Bé/Sữa trên 24 tháng tuổi/Default",
        value: "19026"
    },
    {
        label: "19027 - Mẹ & Bé/Sữa trên 24 tháng tuổi/Sữa bột",
        value: "19027"
    },
    {
        label: "19028 - Mẹ & Bé/Sữa trên 24 tháng tuổi/Sữa nước",
        value: "19028"
    },
    {
        label: "19029 - Mẹ & Bé/Thực phẩm cho bé từ 6 tháng tuổi",
        value: "19029"
    },
    {
        label: "19030 - Mẹ & Bé/Thực phẩm cho bé từ 6 tháng tuổi/Default",
        value: "19030"
    },
    {
        label: "19031 - Mẹ & Bé/Thực phẩm cho bé từ 6 tháng tuổi/Vitamin, thực phẩm bổ sung",
        value: "19031"
    },
    {
        label: "19032 - Mẹ & Bé/Thực phẩm cho bé từ 6 tháng tuổi/Đồ ăn cho bé",
        value: "19032"
    },
    {
        label: "19033 - Mẹ & Bé/Vitamin, thực phẩm bổ sung và đồ dùng cho mẹ",
        value: "19033"
    },
    {
        label: "19034 - Mẹ & Bé/Vitamin, thực phẩm bổ sung và đồ dùng cho mẹ/Các đồ dùng khác cho mẹ",
        value: "19034"
    },
    {
        label: "19035 - Mẹ & Bé/Vitamin, thực phẩm bổ sung và đồ dùng cho mẹ/Sữa & thực phẩm cho mẹ",
        value: "19035"
    },
    {
        label: "19036 - Mẹ & Bé/Vitamin, thực phẩm bổ sung và đồ dùng cho mẹ/Vitamin & thực phẩm chức năng cho mẹ",
        value: "19036"
    },
    {
        label: "19037 - Mẹ & Bé/Vitamin, thực phẩm bổ sung và đồ dùng cho mẹ/Chăm sóc cơ thể mẹ",
        value: "19037"
    },
    {
        label: "19038 - Mẹ & Bé/Vitamin, thực phẩm bổ sung và đồ dùng cho mẹ/Dụng cụ hút sữa & phụ kiện",
        value: "19038"
    },
    {
        label: "19039 - Mẹ & Bé/Vitamin, thực phẩm bổ sung và đồ dùng cho mẹ/Dụng cụ trữ sữa",
        value: "19039"
    },
    {
        label: "19040 - Mẹ & Bé/Vitamin, thực phẩm bổ sung và đồ dùng cho mẹ/Balo, túi xách bỉm sữa",
        value: "19040"
    },
    {
        label: "19041 - Mẹ & Bé/Vitamin, thực phẩm bổ sung và đồ dùng cho mẹ/Miếng lót thấm sữa",
        value: "19041"
    },
    {
        label: "19042 - Điện Thoại & Phụ Kiện/Điện thoại/Smartphone - Điện thoại thông minh",
        value: "19042"
    },
    {
        label: "10917 - Thời Trang Nữ/Quần/Quần Baggy",
        value: "10917"
    },
    {
        label: "10918 - Thời Trang Nữ/Chân váy/Chân váy xoè",
        value: "10918"
    },
    {
        label: "10919 - Thời Trang Nữ/Chân váy/Chân váy xếp ly",
        value: "10919"
    },
    {
        label: "10920 - Thời Trang Nữ/Chân váy/Chân váy chữ A",
        value: "10920"
    },
    {
        label: "10921 - Thời Trang Nữ/Đồ lót, Đồ ngủ & Đồ mặc nhà/Đồ lót định hình",
        value: "10921"
    },
    {
        label: "10922 - Thời Trang Nữ/Áo khoác & Áo vest/Bomber jackets",
        value: "10922"
    },
    {
        label: "10923 - Thời Trang Nữ/Phụ kiện may mặc/Khác",
        value: "10923"
    },
    {
        label: "2802 - Điện Thoại & Phụ Kiện/Miếng dán màn hình",
        value: "2802"
    },
    {
        label: "2803 - Điện Thoại & Phụ Kiện/Sim",
        value: "2803"
    },
    {
        label: "2804 - Mẹ & Bé/Vitamin & đồ dùng cho mẹ",
        value: "2804"
    },
    {
        label: "2805 - Thiết Bị Điện Gia Dụng/Đồ gia dụng lớn",
        value: "2805"
    },
    {
        label: "19190 - Thể Thao & Du Lịch/Phụ Kiện Thể Thao/Đồ Lưu Niệm Thể Thao",
        value: "19190"
    },
    {
        label: "2809 - Nhà Cửa & Đời Sống/Ngoài trời & Sân vườn",
        value: "2809"
    },
    {
        label: "2811 - Nhà Cửa & Đời Sống/Đèn",
        value: "2811"
    },
    {
        label: "2817 - Điện Thoại & Phụ Kiện/Pin sạc dự phòng",
        value: "2817"
    },
    {
        label: "2818 - Sức Khỏe & Sắc Đẹp/Tắm & Chăm sóc cơ thể",
        value: "2818"
    },
    {
        label: "2821 - Thời Trang Nữ/Đầm",
        value: "2821"
    },
    {
        label: "2822 - Thời Trang Nữ/Chân váy",
        value: "2822"
    },
    {
        label: "2823 - Thời Trang Nữ/Trang phục thể thao",
        value: "2823"
    },
    {
        label: "2827 - Thời Trang Nam/Áo thun",
        value: "2827"
    },
    {
        label: "2828 - Thời Trang Nam/Áo sơ mi",
        value: "2828"
    },
    {
        label: "2829 - Thời Trang Nam/Áo khoác & Áo vest",
        value: "2829"
    },
    {
        label: "2831 - Thời Trang Nam/Phụ kiện nam",
        value: "2831"
    },
    {
        label: "19232 - Nhà Sách Online/Sách Tiếng Việt",
        value: "19232"
    },
    {
        label: "19233 - Nhà Sách Online/Sách Tiếng Việt/Khác",
        value: "19233"
    },
    {
        label: "19234 - Nhà Sách Online/Sách Tiếng Việt/Sách Văn Học - Tiểu Thuyết",
        value: "19234"
    },
    {
        label: "19235 - Nhà Sách Online/Sách Tiếng Việt/Sách Nuôi Dạy Con",
        value: "19235"
    },
    {
        label: "19236 - Nhà Sách Online/Sách Tiếng Việt/Sách - Truyện Thiếu Nhi",
        value: "19236"
    },
    {
        label: "19237 - Nhà Sách Online/Sách Tiếng Việt/Sách Kĩ Năng Sống",
        value: "19237"
    },
    {
        label: "19238 - Nhà Sách Online/Sách Tiếng Việt/Sách Học Ngoại Ngữ",
        value: "19238"
    },
    {
        label: "19239 - Nhà Sách Online/Sách Tiếng Việt/Sách Giáo Dục",
        value: "19239"
    },
    {
        label: "19240 - Nhà Sách Online/Sách Tiếng Việt/Sách Kinh Tế",
        value: "19240"
    },
    {
        label: "19241 - Nhà Sách Online/Sách Tiếng Việt/Sách Lịch Sử",
        value: "19241"
    },
    {
        label: "19242 - Nhà Sách Online/Sách Tiếng Việt/Sách Văn Hóa - Du Lịch",
        value: "19242"
    },
    {
        label: "19243 - Nhà Sách Online/Sách Tiếng Việt/Sách Nông - Lâm - Ngư Nghiệp",
        value: "19243"
    },
    {
        label: "19244 - Nhà Sách Online/Sách Tiếng Việt/Sách Y Học",
        value: "19244"
    },
    {
        label: "19245 - Nhà Sách Online/Sách Tiếng Việt/Sách Chính Trị - Pháp Lý",
        value: "19245"
    },
    {
        label: "19246 - Nhà Sách Online/Sách Tiếng Việt/Sách Khoa Học Kỹ Thuật",
        value: "19246"
    },
    {
        label: "19247 - Nhà Sách Online/Sách Tiếng Việt/Sách Thường Thức Đời Sống",
        value: "19247"
    },
    {
        label: "19248 - Nhà Sách Online/Sách Tiếng Việt/Sách Đam Mỹ",
        value: "19248"
    },
    {
        label: "19249 - Nhà Sách Online/Sách Tiếng Việt/Light Novel",
        value: "19249"
    },
    {
        label: "19250 - Nhà Sách Online/Sách Ngoại Văn/Sách Văn Học",
        value: "19250"
    },
    {
        label: "19251 - Nhà Sách Online/Sách Ngoại Văn/Sách Nuôi Dạy Con",
        value: "19251"
    },
    {
        label: "19252 - Nhà Sách Online/Sách Ngoại Văn/Sách - Truyện Thiếu Nhi",
        value: "19252"
    },
    {
        label: "19253 - Nhà Sách Online/Sách Ngoại Văn/Sách Kĩ Năng Sống",
        value: "19253"
    },
    {
        label: "19254 - Nhà Sách Online/Sách Ngoại Văn/Sách Học Ngoại Ngữ",
        value: "19254"
    },
    {
        label: "19255 - Nhà Sách Online/Sách Ngoại Văn/Sách Giáo Dục",
        value: "19255"
    },
    {
        label: "19256 - Nhà Sách Online/Sách Ngoại Văn/Sách Kinh Tế",
        value: "19256"
    },
    {
        label: "19257 - Nhà Sách Online/Sách Ngoại Văn/Sách Lịch Sử",
        value: "19257"
    },
    {
        label: "19258 - Nhà Sách Online/Sách Ngoại Văn/Sách Văn Hóa - Du Lịch",
        value: "19258"
    },
    {
        label: "19259 - Nhà Sách Online/Sách Ngoại Văn/Sách Nông - Lâm - Ngư nghiệp",
        value: "19259"
    },
    {
        label: "19260 - Nhà Sách Online/Sách Ngoại Văn/Sách Y học",
        value: "19260"
    },
    {
        label: "19261 - Nhà Sách Online/Sách Ngoại Văn/Sách Chính trị - Pháp lý",
        value: "19261"
    },
    {
        label: "19262 - Nhà Sách Online/Sách Ngoại Văn/Thường Thức Đời Sống",
        value: "19262"
    },
    {
        label: "19263 - Nhà Sách Online/Sách Ngoại Văn/Sách Khoa Học Kỹ Thuật",
        value: "19263"
    },
    {
        label: "19264 - Nhà Sách Online/Sách Ngoại Văn/Boy Love",
        value: "19264"
    },
    {
        label: "19265 - Nhà Sách Online/Văn Phòng Phẩm/Màu - Mực",
        value: "19265"
    },
    {
        label: "19266 - Nhà Sách Online/Văn Phòng Phẩm/Dụng Cụ Tẩy Xóa",
        value: "19266"
    },
    {
        label: "19267 - Nhà Sách Online/Văn Phòng Phẩm/Bìa - File",
        value: "19267"
    },
    {
        label: "19268 - Nhà Sách Online/Văn Phòng Phẩm/Dụng Cụ Để Bàn",
        value: "19268"
    },
    {
        label: "19269 - Nhà Sách Online/Văn Phòng Phẩm/Dấu và Mực dấu",
        value: "19269"
    },
    {
        label: "19270 - Nhà Sách Online/Văn Phòng Phẩm/Dụng Cụ Kẹp - Bấm",
        value: "19270"
    },
    {
        label: "19271 - Nhà Sách Online/Văn Phòng Phẩm/Dụng Cụ Cắt",
        value: "19271"
    },
    {
        label: "19272 - Nhà Sách Online/Văn Phòng Phẩm/Dụng Cụ Dán",
        value: "19272"
    },
    {
        label: "19273 - Nhà Sách Online/Văn Phòng Phẩm/Thước",
        value: "19273"
    },
    {
        label: "19274 - Nhà Sách Online/Văn Phòng Phẩm/Bảng",
        value: "19274"
    },
    {
        label: "19275 - Nhà Sách Online/Văn Phòng Phẩm/Bao thẻ - Bảng tên - Huy hiệu",
        value: "19275"
    },
    {
        label: "19276 - Nhà Sách Online/Quà Lưu Niệm/Khối Chặn Giấy",
        value: "19276"
    },
    {
        label: "19277 - Nhà Sách Online/Quà Lưu Niệm/Thiệp",
        value: "19277"
    },
    {
        label: "19278 - Nhà Sách Online/Quà Lưu Niệm/Khung Hình",
        value: "19278"
    },
    {
        label: "19279 - Nhà Sách Online/Quà Lưu Niệm/Gương Mini",
        value: "19279"
    },
    {
        label: "19280 - Nhà Sách Online/Quà Lưu Niệm/Đồng Hồ Để Bàn Mini - Đồng Hồ Cát",
        value: "19280"
    },
    {
        label: "19281 - Nhà Sách Online/Quà Lưu Niệm/Tượng Mini - Tượng Tô",
        value: "19281"
    },
    {
        label: "19282 - Nhà Sách Online/Quà Lưu Niệm/Hộp Âm Nhạc",
        value: "19282"
    },
    {
        label: "19283 - Nhà Sách Online/Quà Lưu Niệm/Chuông Gió",
        value: "19283"
    },
    {
        label: "19284 - Nhà Sách Online/Quà Lưu Niệm/Quà Tặng Pha Lê",
        value: "19284"
    },
    {
        label: "19285 - Nhà Sách Online/Quà Lưu Niệm/Hoa Sáp",
        value: "19285"
    },
    {
        label: "8688 - Điện Thoại & Phụ Kiện/Vỏ, Bao & Ốp lưng/Ốp Oppo",
        value: "8688"
    },
    {
        label: "16881 - Thể Thao & Du Lịch/Trang Phục thể thao/Quần Thể Thao",
        value: "16881"
    },
    {
        label: "11212 - Phụ Kiện Thời Trang/Khẩu trang/Khác",
        value: "11212"
    },
    {
        label: "11266 - Sức Khỏe & Sắc Đẹp/Chăm sóc răng miệng/Bàn chải",
        value: "11266"
    },
    {
        label: "11267 - Sức Khỏe & Sắc Đẹp/Chăm sóc răng miệng/Kem đánh răng",
        value: "11267"
    },
    {
        label: "11268 - Sức Khỏe & Sắc Đẹp/Chăm sóc răng miệng/Làm trắng răng",
        value: "11268"
    },
    {
        label: "11269 - Sức Khỏe & Sắc Đẹp/Chăm sóc răng miệng/Vệ sinh miệng",
        value: "11269"
    },
    {
        label: "11270 - Nhà Cửa & Đời Sống/Đồ nội thất/Nội thất phòng ngủ",
        value: "11270"
    },
    {
        label: "11271 - Nhà Cửa & Đời Sống/Đồ nội thất/Nội thất phòng tắm",
        value: "11271"
    },
    {
        label: "11272 - Nhà Cửa & Đời Sống/Đồ nội thất/Nội thất bếp và phòng ăn",
        value: "11272"
    },
    {
        label: "11273 - Nhà Cửa & Đời Sống/Đồ nội thất/Nội thất phòng trẻ em",
        value: "11273"
    },
    {
        label: "11274 - Nhà Cửa & Đời Sống/Đồ nội thất/Nội thất phòng làm việc",
        value: "11274"
    },
    {
        label: "11275 - Nhà Cửa & Đời Sống/Đồ nội thất/Nội thất cho hành lang và lối vào",
        value: "11275"
    },
    {
        label: "11276 - Nhà Cửa & Đời Sống/Đồ dùng phòng tắm/Kệ để đồ phòng tắm",
        value: "11276"
    },
    {
        label: "11277 - Nhà Cửa & Đời Sống/Đồ dùng phòng tắm/Rèm phòng tắm",
        value: "11277"
    },
    {
        label: "11280 - Nhà Cửa & Đời Sống/Dụng cụ & Thiết bị tiện ích/Vệ sinh nhà cửa",
        value: "11280"
    },
    {
        label: "11283 - Nhà Cửa & Đời Sống/Dụng cụ & Thiết bị tiện ích/Bao bì, túi đựng",
        value: "11283"
    },
    {
        label: "11288 - Nhà Cửa & Đời Sống/Dụng cụ & Thiết bị tiện ích/Dụng cụ hỗ trợ vận chuyển hàng",
        value: "11288"
    },
    {
        label: "11289 - Nhà Cửa & Đời Sống/Tủ đựng & Hộp lưu trữ/Khay xếp quần áo",
        value: "11289"
    },
    {
        label: "11290 - Nhà Cửa & Đời Sống/Tủ đựng & Hộp lưu trữ/Tủ đựng văn phòng",
        value: "11290"
    },
    {
        label: "11291 - Nhà Cửa & Đời Sống/Tủ đựng & Hộp lưu trữ/Tủ thuốc",
        value: "11291"
    },
    {
        label: "11292 - Nhà Cửa & Đời Sống/Tủ đựng & Hộp lưu trữ/Tủ giày",
        value: "11292"
    },
    {
        label: "11295 - Nhà Cửa & Đời Sống/Ngoài trời & Sân vườn/Đồ dùng làm vườn",
        value: "11295"
    },
    {
        label: "11297 - Nhà Cửa & Đời Sống/Ngoài trời & Sân vườn/Nội thất ngoài trời",
        value: "11297"
    },
    {
        label: "11298 - Nhà Cửa & Đời Sống/Đèn/Đèn chuyên dụng",
        value: "11298"
    },
    {
        label: "11299 - Nhà Cửa & Đời Sống/Đèn/Đèn pin và đèn sạc",
        value: "11299"
    },
    {
        label: "11300 - Nhà Cửa & Đời Sống/Đèn/Đèn led, bóng đèn và linh kiện đèn",
        value: "11300"
    },
    {
        label: "11301 - Nhà Cửa & Đời Sống/Đèn/Đèn ngoài trời",
        value: "11301"
    },
    {
        label: "11302 - Nhà Cửa & Đời Sống/Đèn/Đèn trần",
        value: "11302"
    },
    {
        label: "11303 - Nhà Cửa & Đời Sống/Đèn/Đèn phòng tắm",
        value: "11303"
    },
    {
        label: "11310 - Nhà Cửa & Đời Sống/Dụng cụ cầm tay/Máy hàn và dụng cụ hàn",
        value: "11310"
    },
    {
        label: "11311 - Nhà Cửa & Đời Sống/Dụng cụ cầm tay/Máy khoan cầm tay",
        value: "11311"
    },
    {
        label: "11314 - Nhà Cửa & Đời Sống/Dụng cụ cầm tay/Dụng cụ sửa chữa",
        value: "11314"
    },
    {
        label: "11316 - Nhà Cửa & Đời Sống/Dụng cụ cầm tay/Máy ép",
        value: "11316"
    },
    {
        label: "11318 - Nhà Cửa & Đời Sống/Dụng cụ cầm tay/Máy xịt rửa",
        value: "11318"
    },
    {
        label: "11319 - Nhà Cửa & Đời Sống/Dụng cụ cầm tay/Máy mài",
        value: "11319"
    },
    {
        label: "11320 - Nhà Cửa & Đời Sống/Dụng cụ cầm tay/Máy cắt",
        value: "11320"
    },
    {
        label: "11321 - Nhà Cửa & Đời Sống/Dụng cụ cầm tay/Máy thổi hơi",
        value: "11321"
    },
    {
        label: "11322 - Nhà Cửa & Đời Sống/Dụng cụ cầm tay/Máy bắt vít",
        value: "11322"
    },
    {
        label: "11323 - Nhà Cửa & Đời Sống/Dụng cụ cầm tay/Súng phun sơn",
        value: "11323"
    },
    {
        label: "11324 - Thời Trang Nam/Áo sơ mi/Ngắn tay",
        value: "11324"
    },
    {
        label: "11325 - Thời Trang Nam/Áo sơ mi/Dài tay",
        value: "11325"
    },
    {
        label: "11326 - Thời Trang Nam/Áo sơ mi/Cổ tàu",
        value: "11326"
    },
    {
        label: "11327 - Thời Trang Nam/Áo sơ mi/Áo kiểu",
        value: "11327"
    },
    {
        label: "11328 - Thời Trang Nam/Phụ kiện nam/Cà vạt",
        value: "11328"
    },
    {
        label: "11329 - Thời Trang Nam/Phụ kiện nam/Khăn choàng",
        value: "11329"
    },
    {
        label: "11332 - Thời Trang Nam/Phụ kiện nam/Hình xăm",
        value: "11332"
    },
    {
        label: "11333 - Thời Trang Nam/Đồ bộ/ Đồ mặc nhà/Bộ đông",
        value: "11333"
    },
    {
        label: "11334 - Thời Trang Nam/Đồ bộ/ Đồ mặc nhà/Bộ hè",
        value: "11334"
    },
    {
        label: "11335 - Thời Trang Nam/Đồ bộ/ Đồ mặc nhà/Bộ thể thao",
        value: "11335"
    },
    {
        label: "11336 - Thời Trang Nam/Đồ đôi/Áo đôi",
        value: "11336"
    },
    {
        label: "11337 - Thời Trang Nam/Đồ đôi/Quần đôi",
        value: "11337"
    },
    {
        label: "11338 - Thời Trang Nam/Đồ đôi/Phụ kiện đôi",
        value: "11338"
    },
    {
        label: "11339 - Thời Trang Nam/Đồ đôi/Áo gia đình",
        value: "11339"
    },
    {
        label: "11340 - Thời Trang Nam/Balo/ Túi/ Ví/Balo",
        value: "11340"
    },
    {
        label: "11341 - Thời Trang Nam/Balo/ Túi/ Ví/Cặp/ Túi công sở",
        value: "11341"
    },
    {
        label: "11342 - Thời Trang Nam/Balo/ Túi/ Ví/Túi đeo chéo",
        value: "11342"
    },
    {
        label: "11343 - Thời Trang Nam/Balo/ Túi/ Ví/Túi bao tử",
        value: "11343"
    },
    {
        label: "11344 - Thời Trang Nam/Balo/ Túi/ Ví/Túi đeo hông",
        value: "11344"
    },
    {
        label: "11345 - Thời Trang Nam/Balo/ Túi/ Ví/Ví ngang",
        value: "11345"
    },
    {
        label: "11346 - Thời Trang Nam/Balo/ Túi/ Ví/Ví đứng",
        value: "11346"
    },
    {
        label: "11347 - Thời Trang Nam/Mắt kính/Kính cận",
        value: "11347"
    },
    {
        label: "11348 - Thời Trang Nam/Mắt kính/Kính lão",
        value: "11348"
    },
    {
        label: "11349 - Thời Trang Nam/Mắt kính/Kính mát",
        value: "11349"
    },
    {
        label: "11350 - Thời Trang Nam/Mắt kính/Kính thời trang",
        value: "11350"
    },
    {
        label: "11351 - Giày Dép Nam/Giày thể thao/ Sneakers/Cổ thấp",
        value: "11351"
    },
    {
        label: "11352 - Giày Dép Nam/Giày thể thao/ Sneakers/Cổ cao",
        value: "11352"
    },
    {
        label: "11353 - Giày Dép Nam/Giày thể thao/ Sneakers/Tăng chiều cao",
        value: "11353"
    },
    {
        label: "11354 - Giày Dép Nam/Giày lười/Giày lười vải",
        value: "11354"
    },
    {
        label: "11355 - Giày Dép Nam/Giày lười/Giày lười da",
        value: "11355"
    },
    {
        label: "11356 - Giày Dép Nam/Giày lười/Giày lười tăng chiều cao",
        value: "11356"
    },
    {
        label: "11357 - Giày Dép Nam/Giày tây/Giày tây",
        value: "11357"
    },
    {
        label: "11358 - Giày Dép Nam/Giày tây/Không dây",
        value: "11358"
    },
    {
        label: "11359 - Giày Dép Nam/Giày tây/Tăng chiều cao",
        value: "11359"
    },
    {
        label: "11360 - Giày Dép Nam/Dép/Dép xỏ ngón",
        value: "11360"
    },
    {
        label: "11361 - Giày Dép Nam/Dép/Dép quai ngang",
        value: "11361"
    },
    {
        label: "11362 - Giày Dép Nam/Dép/Dép bít đầu",
        value: "11362"
    },
    {
        label: "11363 - Giày Dép Nam/Xăng-đan/Quai ngang",
        value: "11363"
    },
    {
        label: "11364 - Giày Dép Nam/Xăng-đan/Quai chéo",
        value: "11364"
    },
    {
        label: "11365 - Giày Dép Nam/Xăng-đan/Xăng-đan đế cao",
        value: "11365"
    },
    {
        label: "11370 - Điện Thoại & Phụ Kiện/Pin sạc dự phòng/10000 - 20000mAh",
        value: "11370"
    },
    {
        label: "11371 - Điện Thoại & Phụ Kiện/Pin sạc dự phòng/5000 - 10000mAh",
        value: "11371"
    },
    {
        label: "11372 - Điện Thoại & Phụ Kiện/Pin sạc dự phòng/< 5000mAh",
        value: "11372"
    },
    {
        label: "11373 - Điện Thoại & Phụ Kiện/Giá đỡ & Kẹp/Giá đỡ",
        value: "11373"
    },
    {
        label: "11374 - Điện Thoại & Phụ Kiện/Giá đỡ & Kẹp/Kẹp",
        value: "11374"
    },
    {
        label: "11375 - Điện Thoại & Phụ Kiện/Giá đỡ & Kẹp/Giá đỡ cho ô tô",
        value: "11375"
    },
    {
        label: "11376 - Đồng Hồ/Đồng hồ nam/Đồng hồ kim-điện tử",
        value: "11376"
    },
    {
        label: "11377 - Đồng Hồ/Đồng hồ nữ/Đồng hồ kim-điện tử",
        value: "11377"
    },
    {
        label: "11378 - Thời Trang Nữ/Đồ bơi/Áo bơi",
        value: "11378"
    },
    {
        label: "11379 - Thời Trang Nữ/Đồ bơi/Quần bơi",
        value: "11379"
    },
    {
        label: "11380 - Thời Trang Nữ/Đồ bơi/Bộ bơi",
        value: "11380"
    },
    {
        label: "11381 - Thời Trang Nữ/Đồ đôi/Áo đôi",
        value: "11381"
    },
    {
        label: "11382 - Thời Trang Nữ/Đồ đôi/Quần đôi",
        value: "11382"
    },
    {
        label: "11383 - Thời Trang Nữ/Đồ đôi/Áo khoác đôi",
        value: "11383"
    },
    {
        label: "11384 - Thời Trang Nữ/Đồ đôi/Đồ gia đình",
        value: "11384"
    },
    {
        label: "11385 - Thời Trang Nữ/Trang phục thể thao/Áo tập",
        value: "11385"
    },
    {
        label: "11386 - Thời Trang Nữ/Trang phục thể thao/Quần tập",
        value: "11386"
    },
    {
        label: "11387 - Thời Trang Nữ/Trang phục thể thao/Bộ đồ tập",
        value: "11387"
    },
    {
        label: "11389 - Thời Trang Nữ/Trang Phục Đông/Đồ len",
        value: "11389"
    },
    {
        label: "11390 - Thời Trang Nữ/Trang Phục Đông/Đồ nỉ",
        value: "11390"
    },
    {
        label: "11391 - Thời Trang Nữ/Trang Phục Đông/Đồ lông",
        value: "11391"
    },
    {
        label: "11392 - Thời Trang Nữ/Trang Phục Đông/Đồ dạ",
        value: "11392"
    },
    {
        label: "11393 - Giày Dép Nữ/Giày cao gót/Trên 10cm",
        value: "11393"
    },
    {
        label: "11394 - Giày Dép Nữ/Giày cao gót/Từ 7-10cm",
        value: "11394"
    },
    {
        label: "11395 - Giày Dép Nữ/Giày cao gót/Dưới 7cm",
        value: "11395"
    },
    {
        label: "8726 - Điện Thoại & Phụ Kiện/Sim/Sim số Vinaphone",
        value: "8726"
    },
    {
        label: "11400 - Đồng Hồ/Phụ Kiện Đồng Hồ/Dây đồng hồ",
        value: "11400"
    },
    {
        label: "11402 - Đồng Hồ/Phụ Kiện Đồng Hồ/Dụng cụ sửa chữa",
        value: "11402"
    },
    {
        label: "11403 - Sức Khỏe & Sắc Đẹp/Hoá Mỹ Phẩm & Khác/Giặt và chăm sóc quần áo",
        value: "11403"
    },
    {
        label: "11404 - Sức Khỏe & Sắc Đẹp/Hoá Mỹ Phẩm & Khác/Vệ sinh nhà cửa",
        value: "11404"
    },
    {
        label: "11406 - Sức Khỏe & Sắc Đẹp/Hoá Mỹ Phẩm & Khác/Khử mùi- sáp thơm phòng",
        value: "11406"
    },
    {
        label: "11407 - Thời Trang Nam/Quần/Quần tây",
        value: "11407"
    },
    {
        label: "11408 - Thời Trang Nam/Áo khoác & Áo vest/Áo khoác nỉ",
        value: "11408"
    },
    {
        label: "11409 - Thời Trang Nam/Áo khoác & Áo vest/Áo cardigan",
        value: "11409"
    },
    {
        label: "11410 - Thời Trang Nam/Áo khoác & Áo vest/Áo mangto",
        value: "11410"
    },
    {
        label: "11411 - Thời Trang Nam/Áo khoác & Áo vest/Áo khoác jeans",
        value: "11411"
    },
    {
        label: "11412 - Thời Trang Nam/Áo khoác & Áo vest/Áo khoác ngắn tay",
        value: "11412"
    },
    {
        label: "11413 - Thời Trang Nam/Áo khoác & Áo vest/Áo vest ghi lê",
        value: "11413"
    },
    {
        label: "11414 - Thời Trang Nam/Áo khoác & Áo vest/Áo blazer",
        value: "11414"
    },
    {
        label: "11415 - Đồng Hồ/Đồng hồ trẻ em/Đồng hồ kim-điện tử",
        value: "11415"
    },
    {
        label: "11416 - Thời Trang Nữ/Đồ bơi/Bikini",
        value: "11416"
    },
    {
        label: "11417 - Giày Dép Nữ/Phụ kiện giày/Dây giày",
        value: "11417"
    },
    {
        label: "11418 - Giày Dép Nữ/Phụ kiện giày/Phụ kiện giày",
        value: "11418"
    },
    {
        label: "11419 - Giày Dép Nữ/Phụ kiện giày/Bảo quản giày",
        value: "11419"
    },
    {
        label: "19712 - Điện Thoại & Phụ Kiện/Máy tính bảng/Kindle",
        value: "19712"
    },
    {
        label: "8753 - Thiết Bị Điện Tử/Thiết bị âm thanh/Phụ kiện âm thanh",
        value: "8753"
    },
    {
        label: "8754 - Thiết Bị Điện Tử/Thiết bị âm thanh/Máy nghe nhạc",
        value: "8754"
    },
    {
        label: "16947 - Thể Thao & Du Lịch/Phụ Kiện Thể Thao/Máy Đo Hiệu Năng Hoạt Động",
        value: "16947"
    },
    {
        label: "8757 - Thiết Bị Điện Tử/Thiết bị âm thanh/Loa bluetooth",
        value: "8757"
    },
    {
        label: "16950 - Thể Thao & Du Lịch/Thể thao ngoài trời/Bóng Rổ",
        value: "16950"
    },
    {
        label: "6043 - Giày Dép Nam/Xăng-đan/Default",
        value: "6043"
    },
    {
        label: "19889 - Đồ Chơi/Đồ chơi giáo dục/Đồ Chơi Nhập Vai",
        value: "19889"
    },
    {
        label: "19890 - Đồ Chơi/Đồ Chơi Mô Hình/Gundam",
        value: "19890"
    },
    {
        label: "19891 - Đồ Chơi/Đồ Chơi Mô Hình/Đồ chơi mô hình tĩnh",
        value: "19891"
    },
    {
        label: "2806 - Nhà Cửa & Đời Sống/Tủ đựng & Hộp lưu trữ",
        value: "2806"
    },
    {
        label: "11809 - Thời Trang Nam/Áo nỉ/ Áo len/Áo ba lỗ",
        value: "11809"
    },
    {
        label: "11810 - Thời Trang Nam/Áo nỉ/ Áo len/Áo cổ trụ",
        value: "11810"
    },
    {
        label: "11816 - Nhà Sách Online/Nhạc Cụ",
        value: "11816"
    },
    {
        label: "11817 - Nhà Sách Online/Nhạc Cụ/Khác",
        value: "11817"
    },
    {
        label: "11841 - Nhà Sách Online/Nhạc Cụ/Ukulele",
        value: "11841"
    },
    {
        label: "11842 - Nhà Sách Online/Nhạc Cụ/Ghi ta",
        value: "11842"
    },
    {
        label: "11843 - Nhà Sách Online/Nhạc Cụ/Piano - Keyboard",
        value: "11843"
    },
    {
        label: "11844 - Nhà Sách Online/Nhạc Cụ/Trống - Bộ gõ",
        value: "11844"
    },
    {
        label: "11845 - Nhà Sách Online/Nhạc Cụ/Phụ kiện âm nhạc",
        value: "11845"
    },
    {
        label: "11846 - Nhà Sách Online/Nhạc Cụ/Sáo - Kèn",
        value: "11846"
    },
    {
        label: "10177 - Đồng Hồ/Đồng hồ nữ/Đồng hồ điện tử",
        value: "10177"
    },
    {
        label: "6085 - Mẹ & Bé/Tã & Bỉm/Khác",
        value: "6085"
    },
    {
        label: "11975 - Bách Hoá Online/Sữa",
        value: "11975"
    },
    {
        label: "11976 - Bách Hoá Online/Sữa/Default",
        value: "11976"
    },
    {
        label: "11977 - Bách Hoá Online/Đồ uống có cồn",
        value: "11977"
    },
    {
        label: "11978 - Bách Hoá Online/Đồ uống có cồn/Default",
        value: "11978"
    },
    {
        label: "20205 - Thiết Bị Điện Tử/Tai Nghe/Earphone Accessories",
        value: "20205"
    },
    {
        label: "20206 - Thiết Bị Điện Tử/Phụ kiện tivi/Tivi Holder",
        value: "20206"
    },
    {
        label: "20207 - Thiết Bị Điện Tử/Phụ kiện tivi/Remote Tivi",
        value: "20207"
    },
    {
        label: "20208 - Thiết Bị Điện Tử/Thiết bị âm thanh/Soundbar",
        value: "20208"
    },
    {
        label: "20209 - Điện Thoại & Phụ Kiện/Máy tính bảng/Masstel",
        value: "20209"
    },
    {
        label: "20210 - Điện Thoại & Phụ Kiện/Máy tính bảng/Kingcom",
        value: "20210"
    },
    {
        label: "20211 - Điện Thoại & Phụ Kiện/Máy tính bảng/Alldocube",
        value: "20211"
    },
    {
        label: "14294 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Phụ tùng & Phụ kiện",
        value: "14294"
    },
    {
        label: "14299 - Thiết Bị Điện Gia Dụng/Máy hút bụi & Thiết bị làm sạch/Máy hút bụi công nghiệp",
        value: "14299"
    },
    {
        label: "14302 - Thiết Bị Điện Gia Dụng/Đồ gia dụng lớn/Máy lọc nước",
        value: "14302"
    },
    {
        label: "12680 - Nhà Sách Online/Quà Lưu Niệm",
        value: "12680"
    },
    {
        label: "6126 - Thời Trang Nữ/Quần/Khác",
        value: "6126"
    },
    {
        label: "8589 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Khuôn mày",
        value: "8589"
    },
    {
        label: "6127 - Thời Trang Nữ/Áo khoác & Áo vest/Khác",
        value: "6127"
    },
    {
        label: "12495 - Ô tô - xe máy - xe đạp/Chăm sóc, sửa chữa xe",
        value: "12495"
    },
    {
        label: "12496 - Ô tô - xe máy - xe đạp/Chăm sóc, sửa chữa xe/Dầu nhớt",
        value: "12496"
    },
    {
        label: "8915 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Máy làm kem, sữa chua",
        value: "8915"
    },
    {
        label: "8916 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Máy làm bánh",
        value: "8916"
    },
    {
        label: "16789 - Thời Trang Trẻ Em/Bé gái | 5-14 tuổi/Đồ bơi",
        value: "16789"
    },
    {
        label: "12681 - Nhà Sách Online/Quà Lưu Niệm/Default",
        value: "12681"
    },
    {
        label: "12792 - Ô tô - xe máy - xe đạp/Chăm sóc ô tô",
        value: "12792"
    },
    {
        label: "12793 - Ô tô - xe máy - xe đạp/Chăm sóc ô tô/Phụ kiện bên trong ô tô",
        value: "12793"
    },
    {
        label: "12805 - Ô tô - xe máy - xe đạp/Chăm sóc, sửa chữa xe/Dụng cụ sửa chữa",
        value: "12805"
    },
    {
        label: "12806 - Ô tô - xe máy - xe đạp/Chăm sóc, sửa chữa xe/Làm đẹp xe",
        value: "12806"
    },
    {
        label: "12813 - Ô tô - xe máy - xe đạp/Chăm sóc ô tô/Phụ kiện bên ngoài, tem ô ô",
        value: "12813"
    },
    {
        label: "12814 - Ô tô - xe máy - xe đạp/Chăm sóc ô tô/Phụ tùng, linh kiện thay thế",
        value: "12814"
    },
    {
        label: "12939 - Voucher & Dịch vụ/Nhà hàng - Ăn uống",
        value: "12939"
    },
    {
        label: "12940 - Voucher & Dịch vụ/Nhà hàng - Ăn uống/Buffet - Nhà hàng - Quán ăn",
        value: "12940"
    },
    {
        label: "12941 - Voucher & Dịch vụ/Du lịch - Khách sạn",
        value: "12941"
    },
    {
        label: "12942 - Voucher & Dịch vụ/Du lịch - Khách sạn/Tour Du Lịch",
        value: "12942"
    },
    {
        label: "12943 - Voucher & Dịch vụ/Sức khỏe - Làm đẹp",
        value: "12943"
    },
    {
        label: "12944 - Voucher & Dịch vụ/Sức khỏe - Làm đẹp/Spa - Massage",
        value: "12944"
    },
    {
        label: "12945 - Voucher & Dịch vụ/Sự kiện - Giải trí",
        value: "12945"
    },
    {
        label: "12946 - Voucher & Dịch vụ/Sự kiện - Giải trí/Sự kiện - Hội thảo",
        value: "12946"
    },
    {
        label: "12947 - Voucher & Dịch vụ/Khóa học",
        value: "12947"
    },
    {
        label: "12948 - Voucher & Dịch vụ/Khóa học/Ngoại ngữ",
        value: "12948"
    },
    {
        label: "12949 - Voucher & Dịch vụ/Nhà hàng - Ăn uống/Cà phê - Kem - Bánh",
        value: "12949"
    },
    {
        label: "12950 - Voucher & Dịch vụ/Nhà hàng - Ăn uống/Thức ăn nhanh",
        value: "12950"
    },
    {
        label: "12951 - Voucher & Dịch vụ/Du lịch - Khách sạn/Khách sạn - Resort",
        value: "12951"
    },
    {
        label: "12952 - Voucher & Dịch vụ/Du lịch - Khách sạn/Vé máy bay",
        value: "12952"
    },
    {
        label: "12953 - Voucher & Dịch vụ/Sức khỏe - Làm đẹp/Salon tóc",
        value: "12953"
    },
    {
        label: "12954 - Voucher & Dịch vụ/Sức khỏe - Làm đẹp/Gym - Yoga",
        value: "12954"
    },
    {
        label: "12955 - Voucher & Dịch vụ/Sức khỏe - Làm đẹp/Nha khoa",
        value: "12955"
    },
    {
        label: "12956 - Voucher & Dịch vụ/Sức khỏe - Làm đẹp/Chăm sóc sức khỏe",
        value: "12956"
    },
    {
        label: "12957 - Voucher & Dịch vụ/Sự kiện - Giải trí/Gói chụp hình",
        value: "12957"
    },
    {
        label: "12958 - Voucher & Dịch vụ/Sự kiện - Giải trí/Karaoke",
        value: "12958"
    },
    {
        label: "12959 - Voucher & Dịch vụ/Sự kiện - Giải trí/Vé xem Phim - Kịch",
        value: "12959"
    },
    {
        label: "12960 - Voucher & Dịch vụ/Khóa học/Nghệ thuật",
        value: "12960"
    },
    {
        label: "12961 - Voucher & Dịch vụ/Khóa học/Kinh doanh",
        value: "12961"
    },
    {
        label: "12962 - Voucher & Dịch vụ/Khóa học/Giao tiếp",
        value: "12962"
    },
    {
        label: "12990 - Ô tô - xe máy - xe đạp/Chăm sóc, sửa chữa xe/Decal",
        value: "12990"
    },
    {
        label: "13036 - Máy ảnh - Máy quay phim/Máy ảnh du lịch & chụp lấy liền",
        value: "13036"
    },
    {
        label: "13037 - Máy ảnh - Máy quay phim/Máy ảnh du lịch & chụp lấy liền/Default",
        value: "13037"
    },
    {
        label: "13038 - Máy ảnh - Máy quay phim/Thẻ nhớ",
        value: "13038"
    },
    {
        label: "13040 - Máy ảnh - Máy quay phim/Camera giám sát & Webcam",
        value: "13040"
    },
    {
        label: "13042 - Máy ảnh - Máy quay phim/Máy ảnh DSLR",
        value: "13042"
    },
    {
        label: "13043 - Máy ảnh - Máy quay phim/Máy ảnh DSLR/Default",
        value: "13043"
    },
    {
        label: "13044 - Máy ảnh - Máy quay phim/Máy ảnh không gương lật",
        value: "13044"
    },
    {
        label: "13045 - Máy ảnh - Máy quay phim/Máy ảnh không gương lật/Default",
        value: "13045"
    },
    {
        label: "13046 - Máy ảnh - Máy quay phim/Phụ kiện máy ảnh",
        value: "13046"
    },
    {
        label: "13048 - Máy ảnh - Máy quay phim/Camera giám sát & Webcam/Camera giám sát",
        value: "13048"
    },
    {
        label: "13049 - Máy ảnh - Máy quay phim/Camera giám sát & Webcam/Đầu ghi hình camera",
        value: "13049"
    },
    {
        label: "13051 - Máy ảnh - Máy quay phim/Camera giám sát & Webcam/Khác",
        value: "13051"
    },
    {
        label: "13052 - Máy ảnh - Máy quay phim/Máy quay phim",
        value: "13052"
    },
    {
        label: "13054 - Máy ảnh - Máy quay phim/Máy quay phim/Máy quay phim",
        value: "13054"
    },
    {
        label: "13057 - Máy ảnh - Máy quay phim/Máy quay phim/Máy quay hành động",
        value: "13057"
    },
    {
        label: "13058 - Máy ảnh - Máy quay phim/Máy quay phim/Máy quay hành trình",
        value: "13058"
    },
    {
        label: "13059 - Máy ảnh - Máy quay phim/Máy quay phim/Khác",
        value: "13059"
    },
    {
        label: "13060 - Máy ảnh - Máy quay phim/Phụ kiện máy ảnh/Ống kính",
        value: "13060"
    },
    {
        label: "13061 - Máy ảnh - Máy quay phim/Phụ kiện máy ảnh/Pin - Sạc máy ảnh",
        value: "13061"
    },
    {
        label: "13062 - Máy ảnh - Máy quay phim/Phụ kiện máy ảnh/Chân máy ảnh & Gậy",
        value: "13062"
    },
    {
        label: "13063 - Máy ảnh - Máy quay phim/Phụ kiện máy ảnh/Balo, túi đựng, bao da",
        value: "13063"
    },
    {
        label: "13064 - Máy ảnh - Máy quay phim/Phụ kiện máy ảnh/Phụ kiện khác",
        value: "13064"
    },
    {
        label: "13065 - Máy tính & Laptop/Laptop",
        value: "13065"
    },
    {
        label: "13066 - Máy tính & Laptop/Laptop/Default",
        value: "13066"
    },
    {
        label: "13067 - Máy tính & Laptop/Máy Tính Bàn",
        value: "13067"
    },
    {
        label: "13068 - Máy tính & Laptop/Máy Tính Bàn/Default",
        value: "13068"
    },
    {
        label: "13069 - Máy tính & Laptop/Linh Kiện Máy Tính",
        value: "13069"
    },
    {
        label: "13071 - Máy ảnh - Máy quay phim/Thẻ nhớ/Đầu đọc và cáp chuyển",
        value: "13071"
    },
    {
        label: "13074 - Máy ảnh - Máy quay phim/Thẻ nhớ/Thẻ nhớ Micro SD",
        value: "13074"
    },
    {
        label: "13075 - Máy ảnh - Máy quay phim/Thẻ nhớ/Thẻ nhớ SD",
        value: "13075"
    },
    {
        label: "13076 - Máy ảnh - Máy quay phim/Thẻ nhớ/Khác",
        value: "13076"
    },
    {
        label: "13077 - Máy tính & Laptop/Chuột, Bàn Phím",
        value: "13077"
    },
    {
        label: "13079 - Máy tính & Laptop/Thiết Bị Mạng",
        value: "13079"
    },
    {
        label: "13081 - Máy tính & Laptop/Máy In, Máy Scan & Máy Chiếu",
        value: "13081"
    },
    {
        label: "13083 - Máy tính & Laptop/USB & Ổ Cứng",
        value: "13083"
    },
    {
        label: "13087 - Máy tính & Laptop/Laptop/Laptop Cơ Bản",
        value: "13087"
    },
    {
        label: "13088 - Máy tính & Laptop/Laptop/Laptop 2 trong 1",
        value: "13088"
    },
    {
        label: "13089 - Máy tính & Laptop/Laptop/MacBook",
        value: "13089"
    },
    {
        label: "13090 - Máy tính & Laptop/Laptop/Laptop Chơi Game",
        value: "13090"
    },
    {
        label: "13091 - Máy tính & Laptop/Laptop/Laptop Cũ",
        value: "13091"
    },
    {
        label: "13092 - Máy tính & Laptop/Máy Tính Bàn/Bộ Máy Tính Bàn",
        value: "13092"
    },
    {
        label: "13093 - Máy tính & Laptop/Máy Tính Bàn/Thùng Máy CPU",
        value: "13093"
    },
    {
        label: "13094 - Máy tính & Laptop/Máy Tính Bàn/Màn Hình",
        value: "13094"
    },
    {
        label: "13095 - Máy tính & Laptop/Máy Tính Bàn/Máy Tính All in one",
        value: "13095"
    },
    {
        label: "13096 - Máy tính & Laptop/Linh Kiện Máy Tính/Mainboard - Bo Mạch Chủ",
        value: "13096"
    },
    {
        label: "13097 - Máy tính & Laptop/Linh Kiện Máy Tính/VGA - Card Màn Hình",
        value: "13097"
    },
    {
        label: "13098 - Máy tính & Laptop/Linh Kiện Máy Tính/Nguồn Máy Tính",
        value: "13098"
    },
    {
        label: "13099 - Máy tính & Laptop/Linh Kiện Máy Tính/CPU - Bộ Vi Xử Lý",
        value: "13099"
    },
    {
        label: "13100 - Máy tính & Laptop/Linh Kiện Máy Tính/Quạt và Tản Nhiệt",
        value: "13100"
    },
    {
        label: "13101 - Máy tính & Laptop/Linh Kiện Máy Tính/Ram Máy Tính",
        value: "13101"
    },
    {
        label: "13102 - Máy tính & Laptop/Linh Kiện Máy Tính/Case Máy Tính",
        value: "13102"
    },
    {
        label: "13103 - Máy tính & Laptop/Linh Kiện Máy Tính/Pin & Bộ Sạc Laptop",
        value: "13103"
    },
    {
        label: "13104 - Máy tính & Laptop/Linh Kiện Máy Tính/Cáp Máy Tính",
        value: "13104"
    },
    {
        label: "13105 - Máy tính & Laptop/Linh Kiện Máy Tính/Khác",
        value: "13105"
    },
    {
        label: "13106 - Máy tính & Laptop/Chuột, Bàn Phím/Bàn Phím Có Dây",
        value: "13106"
    },
    {
        label: "13107 - Máy tính & Laptop/Chuột, Bàn Phím/Bàn Phím Không Dây",
        value: "13107"
    },
    {
        label: "13108 - Máy tính & Laptop/Chuột, Bàn Phím/Chuột Máy Tính Có Dây",
        value: "13108"
    },
    {
        label: "13109 - Máy tính & Laptop/Chuột, Bàn Phím/Chuột Máy Tính Không Dây",
        value: "13109"
    },
    {
        label: "13110 - Máy tính & Laptop/Chuột, Bàn Phím/Bàn Di Chuột",
        value: "13110"
    },
    {
        label: "13111 - Máy tính & Laptop/Chuột, Bàn Phím/Bộ Chuột và Bàn Phím Có Dây",
        value: "13111"
    },
    {
        label: "13112 - Máy tính & Laptop/Chuột, Bàn Phím/Bộ Chuột và Bàn Phím Không Dây",
        value: "13112"
    },
    {
        label: "13115 - Máy tính & Laptop/Thiết Bị Mạng/Bộ Phát Wifi",
        value: "13115"
    },
    {
        label: "13116 - Máy tính & Laptop/Thiết Bị Mạng/Bộ Kích Wifi",
        value: "13116"
    },
    {
        label: "13117 - Máy tính & Laptop/Thiết Bị Mạng/Bộ Thu Wifi",
        value: "13117"
    },
    {
        label: "13118 - Máy tính & Laptop/Thiết Bị Mạng/USB 3G",
        value: "13118"
    },
    {
        label: "13119 - Máy tính & Laptop/Thiết Bị Mạng/Bộ Phát Wifi từ Sim 3G/4G",
        value: "13119"
    },
    {
        label: "13120 - Máy tính & Laptop/Thiết Bị Mạng/Bộ chia mạng",
        value: "13120"
    },
    {
        label: "13121 - Máy tính & Laptop/Thiết Bị Mạng/Khác",
        value: "13121"
    },
    {
        label: "13122 - Máy tính & Laptop/Máy In, Máy Scan & Máy Chiếu/Máy Scan",
        value: "13122"
    },
    {
        label: "13123 - Máy tính & Laptop/Máy In, Máy Scan & Máy Chiếu/Máy In",
        value: "13123"
    },
    {
        label: "13124 - Máy tính & Laptop/Máy In, Máy Scan & Máy Chiếu/Máy Chiếu",
        value: "13124"
    },
    {
        label: "13125 - Máy tính & Laptop/Máy In, Máy Scan & Máy Chiếu/Mực In",
        value: "13125"
    },
    {
        label: "13126 - Máy tính & Laptop/Máy In, Máy Scan & Máy Chiếu/Phụ Kiện Máy In - Máy Scan - Máy chiếu",
        value: "13126"
    },
    {
        label: "13127 - Máy tính & Laptop/Máy In, Máy Scan & Máy Chiếu/Khác",
        value: "13127"
    },
    {
        label: "13129 - Máy tính & Laptop/USB & Ổ Cứng/USB 2.0",
        value: "13129"
    },
    {
        label: "13130 - Máy tính & Laptop/USB & Ổ Cứng/USB 3.0/3.1",
        value: "13130"
    },
    {
        label: "13131 - Máy tính & Laptop/USB & Ổ Cứng/Bộ chia cổng USB",
        value: "13131"
    },
    {
        label: "13132 - Máy tính & Laptop/USB & Ổ Cứng/USB OTG",
        value: "13132"
    },
    {
        label: "13133 - Máy tính & Laptop/USB & Ổ Cứng/Ổ Cứng SSD",
        value: "13133"
    },
    {
        label: "13134 - Máy tính & Laptop/USB & Ổ Cứng/Ổ Cứng Gắn Trong (HDD)",
        value: "13134"
    },
    {
        label: "13135 - Máy tính & Laptop/USB & Ổ Cứng/Ổ Cứng Di Động",
        value: "13135"
    },
    {
        label: "13136 - Máy tính & Laptop/USB & Ổ Cứng/Khác",
        value: "13136"
    },
    {
        label: "13143 - Thiết Bị Điện Tử/Tivi",
        value: "13143"
    },
    {
        label: "13145 - Thiết Bị Điện Tử/Android Tivi Box",
        value: "13145"
    },
    {
        label: "13147 - Thiết Bị Điện Tử/Thiết bị đeo thông minh",
        value: "13147"
    },
    {
        label: "13149 - Voucher & Dịch vụ/Nhà hàng - Ăn uống/Khác",
        value: "13149"
    },
    {
        label: "13150 - Voucher & Dịch vụ/Du lịch - Khách sạn/Khác",
        value: "13150"
    },
    {
        label: "13151 - Voucher & Dịch vụ/Sức khỏe - Làm đẹp/Khác",
        value: "13151"
    },
    {
        label: "13152 - Voucher & Dịch vụ/Sự kiện - Giải trí/Khác",
        value: "13152"
    },
    {
        label: "13153 - Voucher & Dịch vụ/Khóa học/Khác",
        value: "13153"
    },
    {
        label: "13157 - Thiết Bị Điện Tử/Tivi/Dưới 33 inches",
        value: "13157"
    },
    {
        label: "13158 - Thiết Bị Điện Tử/Tivi/33 - 43 inches",
        value: "13158"
    },
    {
        label: "13159 - Thiết Bị Điện Tử/Tivi/44-49 inches",
        value: "13159"
    },
    {
        label: "13160 - Thiết Bị Điện Tử/Tivi/50 - 59 inches",
        value: "13160"
    },
    {
        label: "13161 - Thiết Bị Điện Tử/Tivi/60 - 69 inches",
        value: "13161"
    },
    {
        label: "13162 - Thiết Bị Điện Tử/Tivi/> 70 inches",
        value: "13162"
    },
    {
        label: "13163 - Thiết Bị Điện Tử/Android Tivi Box/Tivi Box Ram 1GB",
        value: "13163"
    },
    {
        label: "13164 - Thiết Bị Điện Tử/Android Tivi Box/Tivi Box Ram 2GB",
        value: "13164"
    },
    {
        label: "13165 - Thiết Bị Điện Tử/Android Tivi Box/Tivi Box Ram 3GB",
        value: "13165"
    },
    {
        label: "13166 - Thiết Bị Điện Tử/Android Tivi Box/Phụ kiện Tivibox",
        value: "13166"
    },
    {
        label: "13167 - Thiết Bị Điện Tử/Thiết bị đeo thông minh/Thiết bị định vị",
        value: "13167"
    },
    {
        label: "13168 - Thiết Bị Điện Tử/Thiết bị đeo thông minh/Thiết bị thực tế ảo",
        value: "13168"
    },
    {
        label: "13169 - Thiết Bị Điện Tử/Thiết bị đeo thông minh/Mắt kính thông minh",
        value: "13169"
    },
    {
        label: "13170 - Thiết Bị Điện Tử/Thiết bị đeo thông minh/Đồng hồ thông minh",
        value: "13170"
    },
    {
        label: "13171 - Thiết Bị Điện Tử/Thiết bị đeo thông minh/Vòng đeo tay sức khỏe",
        value: "13171"
    },
    {
        label: "13172 - Thiết Bị Điện Tử/Thiết bị đeo thông minh/Phụ kiện cho đồng hồ thông minh",
        value: "13172"
    },
    {
        label: "13174 - Điện Thoại & Phụ Kiện/Vỏ, Bao & Ốp lưng/Bao da Oppo",
        value: "13174"
    },
    {
        label: "13175 - Điện Thoại & Phụ Kiện/Miếng dán màn hình/Miếng dán Ipad và Máy tính bảng",
        value: "13175"
    },
    {
        label: "13176 - Điện Thoại & Phụ Kiện/Sim/Sim 3G/4G Mobiphone",
        value: "13176"
    },
    {
        label: "13177 - Điện Thoại & Phụ Kiện/Sim/Sim 3G/4G Vinaphone",
        value: "13177"
    },
    {
        label: "13178 - Điện Thoại & Phụ Kiện/Sim/Sim 3G/4G Viettel",
        value: "13178"
    },
    {
        label: "13186 - Máy tính & Laptop/Phần Mềm",
        value: "13186"
    },
    {
        label: "13187 - Máy tính & Laptop/Phần Mềm/Default",
        value: "13187"
    },
    {
        label: "13188 - Túi Ví/Túi đeo chéo nữ",
        value: "13188"
    },
    {
        label: "13189 - Túi Ví/Túi đeo chéo nữ/Khác",
        value: "13189"
    },
    {
        label: "13190 - Túi Ví/Túi xách nữ",
        value: "13190"
    },
    {
        label: "13191 - Túi Ví/Túi xách nữ/Khác",
        value: "13191"
    },
    {
        label: "13192 - Túi Ví/Ví/Bóp nữ",
        value: "13192"
    },
    {
        label: "13193 - Túi Ví/Ví/Bóp nữ/Khác",
        value: "13193"
    },
    {
        label: "13194 - Túi Ví/Cặp văn phòng",
        value: "13194"
    },
    {
        label: "13195 - Túi Ví/Cặp văn phòng/Khác",
        value: "13195"
    },
    {
        label: "13196 - Túi Ví/Túi đựng tiện ích",
        value: "13196"
    },
    {
        label: "13197 - Túi Ví/Túi đựng tiện ích/Khác",
        value: "13197"
    },
    {
        label: "13198 - Túi Ví/Túi vải/Túi tote",
        value: "13198"
    },
    {
        label: "13199 - Túi Ví/Túi vải/Túi tote/Khác",
        value: "13199"
    },
    {
        label: "13200 - Túi Ví/Phụ kiện túi ví khác",
        value: "13200"
    },
    {
        label: "13201 - Túi Ví/Phụ kiện túi ví khác/Khác",
        value: "13201"
    },
    {
        label: "13202 - Túi Ví/Ví/Bóp nữ/Ví/bóp mini",
        value: "13202"
    },
    {
        label: "13203 - Túi Ví/Ví/Bóp nữ/Ví/bóp dài",
        value: "13203"
    },
    {
        label: "13204 - Túi Ví/Ví/Bóp nữ/Ví/bóp dự tiệc",
        value: "13204"
    },
    {
        label: "13205 - Túi Ví/Ví/Bóp nữ/Ví/bóp đựng thẻ/ hộ chiếu",
        value: "13205"
    },
    {
        label: "13206 - Túi Ví/Balo thời trang",
        value: "13206"
    },
    {
        label: "13207 - Túi Ví/Balo thời trang/Khác",
        value: "13207"
    },
    {
        label: "13208 - Túi Ví/Túi đeo chéo nữ/Túi đeo chéo nữ",
        value: "13208"
    },
    {
        label: "13209 - Túi Ví/Túi xách nữ/Túi xách nữ",
        value: "13209"
    },
    {
        label: "13210 - Túi Ví/Balo thời trang/Balo thời trang",
        value: "13210"
    },
    {
        label: "13211 - Túi Ví/Cặp văn phòng/Cặp văn phòng",
        value: "13211"
    },
    {
        label: "13212 - Túi Ví/Túi đựng tiện ích/Ví/Túi đựng tiện ích",
        value: "13212"
    },
    {
        label: "13213 - Túi Ví/Túi vải/Túi tote/Túi vải",
        value: "13213"
    },
    {
        label: "13214 - Túi Ví/Phụ kiện túi ví khác/Phụ kiện túi ví khác",
        value: "13214"
    },
    {
        label: "13215 - Thiết Bị Điện Tử/Thiết bị âm thanh/Karaoke",
        value: "13215"
    },
    {
        label: "13216 - Thiết Bị Điện Tử/Tai Nghe",
        value: "13216"
    },
    {
        label: "13218 - Thiết Bị Điện Tử/Tai Nghe/Nhét tai bluetooth",
        value: "13218"
    },
    {
        label: "13219 - Thiết Bị Điện Tử/Tai Nghe/Chụp tai bluetooth",
        value: "13219"
    },
    {
        label: "13220 - Thiết Bị Điện Tử/Tai Nghe/Tai nghe có mic",
        value: "13220"
    },
    {
        label: "13221 - Thiết Bị Điện Tử/Tai Nghe/Tai nghe nhét tai",
        value: "13221"
    },
    {
        label: "13222 - Thiết Bị Điện Tử/Tai Nghe/Tai nghe chụp tai",
        value: "13222"
    },
    {
        label: "13223 - Thiết Bị Điện Tử/Tai Nghe/Tai nghe on-ear",
        value: "13223"
    },
    {
        label: "13224 - Thiết Bị Điện Tử/Phụ kiện tivi",
        value: "13224"
    },
    {
        label: "13226 - Thiết Bị Điện Tử/Phụ kiện tivi/Đầu thu kĩ thuật số",
        value: "13226"
    },
    {
        label: "8624 - Thời Trang Nữ/Đồ lót, Đồ ngủ & Đồ mặc nhà/Quần lót nữ",
        value: "8624"
    },
    {
        label: "13246 - Đồ Chơi/Đồ chơi cho trẻ sơ sinh & trẻ nhỏ",
        value: "13246"
    },
    {
        label: "13255 - Đồ Chơi/Đồ chơi giáo dục",
        value: "13255"
    },
    {
        label: "13259 - Đồ Chơi/Đồ chơi vận động & Ngoài trời",
        value: "13259"
    },
    {
        label: "13261 - Đồ Chơi/Búp bê & Đồ chơi nhồi bông",
        value: "13261"
    },
    {
        label: "13263 - Đồ Chơi/Đồ Chơi Mô Hình",
        value: "13263"
    },
    {
        label: "8625 - Thời Trang Nữ/Đồ lót, Đồ ngủ & Đồ mặc nhà/Áo lót",
        value: "8625"
    },
    {
        label: "17230 - Giặt giũ & Chăm sóc nhà cửa/Dụng cụ vệ sinh",
        value: "17230"
    },
    {
        label: "13274 - Đồ Chơi/Đồ chơi cho trẻ sơ sinh & trẻ nhỏ/Giáo dục đầu đời",
        value: "13274"
    },
    {
        label: "13275 - Đồ Chơi/Đồ chơi cho trẻ sơ sinh & trẻ nhỏ/Thảm Chơi",
        value: "13275"
    },
    {
        label: "17232 - Giặt giũ & Chăm sóc nhà cửa/Chất khử mùi, làm thơm",
        value: "17232"
    },
    {
        label: "9041 - Phụ Kiện Thời Trang/Khăn, Tất & Găng tay/Tất",
        value: "9041"
    },
    {
        label: "13293 - Đồ Chơi/Đồ chơi cho trẻ sơ sinh & trẻ nhỏ/Đồ chơi treo cũi, nôi",
        value: "13293"
    },
    {
        label: "8626 - Thời Trang Nữ/Quần/Shorts",
        value: "8626"
    },
    {
        label: "13297 - Đồ Chơi/Đồ chơi giáo dục/Đồ chơi xếp hình, lắp ráp",
        value: "13297"
    },
    {
        label: "13298 - Đồ Chơi/Đồ chơi giáo dục/Đồ chơi phát triển kỹ năng cơ bản",
        value: "13298"
    },
    {
        label: "13299 - Đồ Chơi/Đồ chơi giáo dục/Đồ Chơi toán học",
        value: "13299"
    },
    {
        label: "13300 - Đồ Chơi/Đồ chơi giáo dục/Thủ công, mỹ thuật",
        value: "13300"
    },
    {
        label: "13301 - Đồ Chơi/Đồ chơi giáo dục/Đồ chơi khoa học",
        value: "13301"
    },
    {
        label: "13302 - Đồ Chơi/Đồ chơi vận động & Ngoài trời/Đồ chơi ngoài trời",
        value: "13302"
    },
    {
        label: "13303 - Đồ Chơi/Đồ chơi vận động & Ngoài trời/Lều chơi, nhà banh",
        value: "13303"
    },
    {
        label: "13304 - Đồ Chơi/Đồ chơi vận động & Ngoài trời/Bể bơi, phao bơi",
        value: "13304"
    },
    {
        label: "13305 - Đồ Chơi/Đồ chơi vận động & Ngoài trời/Đồ chơi vận động",
        value: "13305"
    },
    {
        label: "13306 - Đồ Chơi/Đồ chơi vận động & Ngoài trời/Đồ chơi thể thao",
        value: "13306"
    },
    {
        label: "13307 - Đồ Chơi/Búp bê & Đồ chơi nhồi bông/Búp bê, phụ kiện búp bê",
        value: "13307"
    },
    {
        label: "13308 - Đồ Chơi/Búp bê & Đồ chơi nhồi bông/Nhà búp bê",
        value: "13308"
    },
    {
        label: "13310 - Đồ Chơi/Búp bê & Đồ chơi nhồi bông/Thú nhồi bông",
        value: "13310"
    },
    {
        label: "13318 - Đồ Chơi/Búp bê & Đồ chơi nhồi bông/Đồ chơi nhồi bông khác",
        value: "13318"
    },
    {
        label: "13319 - Đồ Chơi/Đồ Chơi Mô Hình/Đồ chơi & bộ sưu tập nhân vật",
        value: "13319"
    },
    {
        label: "13321 - Đồ Chơi/Đồ Chơi Mô Hình/Đồ chơi hóa trang",
        value: "13321"
    },
    {
        label: "13322 - Đồ Chơi/Đồ Chơi Mô Hình/Khác",
        value: "13322"
    },
    {
        label: "13323 - Đồ Chơi/Đồ Chơi Giải Trí/Con quay",
        value: "13323"
    },
    {
        label: "13324 - Đồ Chơi/Đồ Chơi Giải Trí/Đồ chơi trong phòng",
        value: "13324"
    },
    {
        label: "13325 - Đồ Chơi/Đồ Chơi Giải Trí/Đồ chơi điều khiển từ xa",
        value: "13325"
    },
    {
        label: "13326 - Đồ Chơi/Đồ Chơi Giải Trí/Phi tiêu",
        value: "13326"
    },
    {
        label: "13327 - Đồ Chơi/Đồ Chơi Giải Trí/Trò chơi điện tử & phụ kiện",
        value: "13327"
    },
    {
        label: "13328 - Đồ Chơi/Đồ Chơi Giải Trí/Các loại cờ",
        value: "13328"
    },
    {
        label: "13329 - Đồ Chơi/Đồ Chơi Giải Trí/Đồ chơi nhạc cụ",
        value: "13329"
    },
    {
        label: "13330 - Đồ Chơi/Đồ Chơi Giải Trí/Thẻ bài",
        value: "13330"
    },
    {
        label: "13369 - Đồng Hồ/Phụ Kiện Đồng Hồ/Khóa đồng hồ",
        value: "13369"
    },
    {
        label: "13370 - Đồng Hồ/Phụ Kiện Đồng Hồ/Hộp đựng đồng hồ",
        value: "13370"
    },
    {
        label: "13371 - Đồng Hồ/Phụ Kiện Đồng Hồ/Hộp lắc đồng hồ cơ",
        value: "13371"
    },
    {
        label: "13381 - Giày Dép Nữ/Guốc/Dép nữ",
        value: "13381"
    },
    {
        label: "21574 - Bách Hoá Online/Sữa/Sữa bột",
        value: "21574"
    },
    {
        label: "13383 - Điện Thoại & Phụ Kiện/Pin, Cáp & Bộ sạc/Pin gắn trong",
        value: "13383"
    },
    {
        label: "21576 - Bách Hoá Online/Sữa/Sữa đặc",
        value: "21576"
    },
    {
        label: "21577 - Bách Hoá Online/Sữa/Sữa hạt",
        value: "21577"
    },
    {
        label: "21578 - Bách Hoá Online/Sữa/Sữa tuơi",
        value: "21578"
    },
    {
        label: "21579 - Bách Hoá Online/Sữa/Sữa chua uống",
        value: "21579"
    },
    {
        label: "21580 - Bách Hoá Online/Sữa/Khác",
        value: "21580"
    },
    {
        label: "13392 - Giày Dép Nữ/Phụ kiện giày/Hộp đựng giày",
        value: "13392"
    },
    {
        label: "13393 - Giày Dép Nữ/Giày cao gót/ Giày đế xuồng/Từ 7-10cm",
        value: "13393"
    },
    {
        label: "13394 - Giày Dép Nữ/Giày cao gót/ Giày đế xuồng/Dưới 7cm",
        value: "13394"
    },
    {
        label: "13395 - Giày Dép Nữ/Giày cao gót/ Giày đế xuồng/Trên 10cm",
        value: "13395"
    },
    {
        label: "13402 - Giày Dép Nữ/Bốt/Boots",
        value: "13402"
    },
    {
        label: "13403 - Giày Dép Nữ/Guốc/Dép nữ/Dép đi trong nhà",
        value: "13403"
    },
    {
        label: "13407 - Giày Dép Nữ/Guốc/Dép nữ/Dép thời trang",
        value: "13407"
    },
    {
        label: "13413 - Giày Dép Nữ/Guốc/Dép nữ/Guốc",
        value: "13413"
    },
    {
        label: "13414 - Giày Dép Nữ/Giày sneaker và Giày thể thao/Giày thể thao và Sneakers",
        value: "13414"
    },
    {
        label: "13415 - Máy tính & Laptop/Thiết Bị Mạng/Default",
        value: "13415"
    },
    {
        label: "13416 - Máy tính & Laptop/Chuột, Bàn Phím/Default",
        value: "13416"
    },
    {
        label: "13417 - Máy tính & Laptop/Máy In, Máy Scan & Máy Chiếu/Default",
        value: "13417"
    },
    {
        label: "13418 - Máy ảnh - Máy quay phim/Camera giám sát & Webcam/Default",
        value: "13418"
    },
    {
        label: "13419 - Máy ảnh - Máy quay phim/Máy quay phim/Default",
        value: "13419"
    },
    {
        label: "13420 - Máy ảnh - Máy quay phim/Phụ kiện máy ảnh/Default",
        value: "13420"
    },
    {
        label: "13421 - Thiết Bị Điện Tử/Thiết bị đeo thông minh/Default",
        value: "13421"
    },
    {
        label: "13422 - Thiết Bị Điện Tử/Thiết bị âm thanh/Default",
        value: "13422"
    },
    {
        label: "13423 - Thiết Bị Điện Tử/Android Tivi Box/Default",
        value: "13423"
    },
    {
        label: "13424 - Thiết Bị Điện Tử/Tivi/Default",
        value: "13424"
    },
    {
        label: "13425 - Thiết Bị Điện Tử/Phụ kiện tivi/Default",
        value: "13425"
    },
    {
        label: "13426 - Nhà Sách Online/Văn Phòng Phẩm/Default",
        value: "13426"
    },
    {
        label: "13427 - Ô tô - xe máy - xe đạp/Chăm sóc, sửa chữa xe/Default",
        value: "13427"
    },
    {
        label: "13429 - Ô tô - xe máy - xe đạp/Chăm sóc ô tô/Default",
        value: "13429"
    },
    {
        label: "13433 - Máy ảnh - Máy quay phim/Thẻ nhớ/Default",
        value: "13433"
    },
    {
        label: "13436 - Thiết Bị Điện Tử/Tai Nghe/Default",
        value: "13436"
    },
    {
        label: "13438 - Điện Thoại & Phụ Kiện/Pin, Cáp & Bộ sạc/Default",
        value: "13438"
    },
    {
        label: "13439 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Máy sấy tóc",
        value: "13439"
    },
    {
        label: "13440 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Máy uốn/duỗi tóc",
        value: "13440"
    },
    {
        label: "13441 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Máy xông mặt",
        value: "13441"
    },
    {
        label: "13442 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Máy rửa & massage mặt",
        value: "13442"
    },
    {
        label: "13443 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Kim lăn",
        value: "13443"
    },
    {
        label: "13444 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Máy wax lông và phụ kiện",
        value: "13444"
    },
    {
        label: "13445 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Tông đơ cắt tóc",
        value: "13445"
    },
    {
        label: "13446 - Giày Dép Nữ/Giày cao gót/Default",
        value: "13446"
    },
    {
        label: "13447 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Dao - máy cạo râu",
        value: "13447"
    },
    {
        label: "13448 - Sức Khỏe & Sắc Đẹp/Máy massage & Thiết bị y tế/Chăm sóc chấn thương",
        value: "13448"
    },
    {
        label: "13451 - Sức Khỏe & Sắc Đẹp/Vitamin & Thực phẩm chức năng/Hỗ trợ xương khớp",
        value: "13451"
    },
    {
        label: "13452 - Sức Khỏe & Sắc Đẹp/Vitamin & Thực phẩm chức năng/Khác",
        value: "13452"
    },
    {
        label: "13453 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Dụng cụ làm móng",
        value: "13453"
    },
    {
        label: "13458 - Đồng Hồ/Phụ Kiện Đồng Hồ/Default",
        value: "13458"
    },
    {
        label: "13459 - Đồ Chơi/Đồ chơi cho trẻ sơ sinh & trẻ nhỏ/Default",
        value: "13459"
    },
    {
        label: "13460 - Đồ Chơi/Đồ chơi giáo dục/Default",
        value: "13460"
    },
    {
        label: "13461 - Đồ Chơi/Đồ chơi vận động & Ngoài trời/Default",
        value: "13461"
    },
    {
        label: "13464 - Đồ Chơi/Đồ Chơi Mô Hình/Default",
        value: "13464"
    },
    {
        label: "13465 - Đồ Chơi/Đồ Chơi Giải Trí/Default",
        value: "13465"
    },
    {
        label: "13479 - Giày Dép Nữ/Guốc/Dép nữ/Default",
        value: "13479"
    },
    {
        label: "13486 - Nhà Sách Online/Quà Lưu Niệm/Móc khóa",
        value: "13486"
    },
    {
        label: "13487 - Nhà Sách Online/Quà Lưu Niệm/Hộp quà tặng",
        value: "13487"
    },
    {
        label: "13488 - Nhà Sách Online/Quà Lưu Niệm/Túi thơm",
        value: "13488"
    },
    {
        label: "13489 - Nhà Sách Online/Quà Lưu Niệm/Khác",
        value: "13489"
    },
    {
        label: "13497 - Đồ Chơi/Búp bê & Đồ chơi nhồi bông/Default",
        value: "13497"
    },
    {
        label: "13500 - Giày Dép Nữ/Giày đế bằng/Default",
        value: "13500"
    },
    {
        label: "13501 - Giày Dép Nữ/Bốt/Default",
        value: "13501"
    },
    {
        label: "13502 - Giày Dép Nữ/Giày sneaker và Giày thể thao/Default",
        value: "13502"
    },
    {
        label: "13503 - Giày Dép Nữ/Phụ kiện giày/Default",
        value: "13503"
    },
    {
        label: "13506 - Thời Trang Nữ/Thời trang trung niên",
        value: "13506"
    },
    {
        label: "13508 - Thời Trang Nữ/Thời trang trung niên/Khác",
        value: "13508"
    },
    {
        label: "13533 - Mẹ & Bé/Đồ dùng cho bé/Chăm sóc cơ thể bé",
        value: "13533"
    },
    {
        label: "13587 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Máy massage & làm gọn cơ thể",
        value: "13587"
    },
    {
        label: "13588 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Đai nịt bụng giảm mỡ",
        value: "13588"
    },
    {
        label: "8909 - Nhà Cửa & Đời Sống/Đồ dùng phòng tắm/Phụ kiện nhà tắm, nhà vệ sinh",
        value: "8909"
    },
    {
        label: "13702 - Giày Dép Nữ/Sandal/Từ 7-10cm",
        value: "13702"
    },
    {
        label: "13707 - Giày Dép Nữ/Sandal/Dưới 7cm",
        value: "13707"
    },
    {
        label: "13708 - Giày Dép Nữ/Sandal/Trên 10cm",
        value: "13708"
    },
    {
        label: "13716 - Giày Dép Nam/Giày dép Unisex",
        value: "13716"
    },
    {
        label: "13717 - Giày Dép Nam/Giày dép Unisex/Default",
        value: "13717"
    },
    {
        label: "13718 - Giày Dép Nam/Giày dép Unisex/Giày lười",
        value: "13718"
    },
    {
        label: "13719 - Giày Dép Nam/Giày dép Unisex/Giày buộc dây",
        value: "13719"
    },
    {
        label: "13720 - Giày Dép Nam/Giày dép Unisex/Xăng-đan",
        value: "13720"
    },
    {
        label: "13721 - Giày Dép Nam/Giày dép Unisex/Dép",
        value: "13721"
    },
    {
        label: "13724 - Giày Dép Nam/Phụ kiện giày dép",
        value: "13724"
    },
    {
        label: "13725 - Giày Dép Nam/Phụ kiện giày dép/Default",
        value: "13725"
    },
    {
        label: "13729 - Giày Dép Nam/Phụ kiện giày dép/Đồ làm sạch",
        value: "13729"
    },
    {
        label: "13730 - Giày Dép Nam/Phụ kiện giày dép/Dây giày",
        value: "13730"
    },
    {
        label: "13731 - Giày Dép Nam/Phụ kiện giày dép/Tất",
        value: "13731"
    },
    {
        label: "13732 - Giày Dép Nam/Phụ kiện giày dép/Dụng cụ giày dép",
        value: "13732"
    },
    {
        label: "13734 - Nhà Cửa & Đời Sống/Chăn, Ga, Gối & Nệm/Vỏ gối",
        value: "13734"
    },
    {
        label: "13735 - Nhà Cửa & Đời Sống/Chăn, Ga, Gối & Nệm/Bộ chăn ga và vỏ gối",
        value: "13735"
    },
    {
        label: "13736 - Nhà Cửa & Đời Sống/Chăn, Ga, Gối & Nệm/Bộ ga và vỏ gối",
        value: "13736"
    },
    {
        label: "13737 - Nhà Cửa & Đời Sống/Chăn, Ga, Gối & Nệm/Chiếu",
        value: "13737"
    },
    {
        label: "21930 - Voucher & Dịch vụ/Mã Quà Tặng",
        value: "21930"
    },
    {
        label: "13739 - Nhà Cửa & Đời Sống/Đèn/Đèn xông tinh dầu, tinh dầu cho đèn và phụ kiện",
        value: "13739"
    },
    {
        label: "13740 - Nhà Cửa & Đời Sống/Đèn/Đèn tường",
        value: "13740"
    },
    {
        label: "13741 - Nhà Cửa & Đời Sống/Đèn/Đèn bắt muỗi, đèn diệt côn trùng",
        value: "13741"
    },
    {
        label: "13742 - Nhà Cửa & Đời Sống/Đèn/Đèn bàn",
        value: "13742"
    },
    {
        label: "13743 - Nhà Cửa & Đời Sống/Đèn/Đèn đứng",
        value: "13743"
    },
    {
        label: "13744 - Nhà Cửa & Đời Sống/Đèn/Đèn phòng ngủ",
        value: "13744"
    },
    {
        label: "13745 - Nhà Cửa & Đời Sống/Đèn/Đèn trang trí",
        value: "13745"
    },
    {
        label: "13746 - Nhà Cửa & Đời Sống/Đèn/Thiết bị chiếu sáng công nghiệp",
        value: "13746"
    },
    {
        label: "13750 - Nhà Cửa & Đời Sống/Đồ dùng nhà bếp & Phòng ăn/Dao, kéo",
        value: "13750"
    },
    {
        label: "13751 - Nhà Cửa & Đời Sống/Đồ dùng nhà bếp & Phòng ăn/Bộ nồi và chảo",
        value: "13751"
    },
    {
        label: "13752 - Nhà Cửa & Đời Sống/Đồ dùng nhà bếp & Phòng ăn/Bình nước, bình giữ nhiệt",
        value: "13752"
    },
    {
        label: "21945 - Voucher & Dịch vụ/Mã Quà Tặng/Mã Quà Tặng Shopee",
        value: "21945"
    },
    {
        label: "13754 - Nhà Cửa & Đời Sống/Đồ dùng nhà bếp & Phòng ăn/Kệ, hũ gia vị",
        value: "13754"
    },
    {
        label: "13757 - Nhà Cửa & Đời Sống/Đồ dùng nhà bếp & Phòng ăn/Dụng cụ làm bánh",
        value: "13757"
    },
    {
        label: "13758 - Nhà Cửa & Đời Sống/Đồ dùng nhà bếp & Phòng ăn/Phụ kiện bàn ăn",
        value: "13758"
    },
    {
        label: "13759 - Nhà Cửa & Đời Sống/Đồ dùng phòng tắm/Giá, móc treo đồ nhà tắm",
        value: "13759"
    },
    {
        label: "13760 - Nhà Cửa & Đời Sống/Đồ dùng phòng tắm/Khăn mặt, khăn tắm, áo choàng tắm",
        value: "13760"
    },
    {
        label: "13761 - Nhà Cửa & Đời Sống/Đồ dùng phòng tắm/Thảm san hô và các loại thảm thấm nước nhà tắm",
        value: "13761"
    },
    {
        label: "13762 - Nhà Cửa & Đời Sống/Đồ dùng phòng tắm/Thiết bị nhà tắm và nhà vệ sinh",
        value: "13762"
    },
    {
        label: "13763 - Nhà Cửa & Đời Sống/Đồ dùng phòng tắm/Gương",
        value: "13763"
    },
    {
        label: "13764 - Nhà Cửa & Đời Sống/Đồ nội thất/Nội thất phòng khách",
        value: "13764"
    },
    {
        label: "13769 - Nhà Cửa & Đời Sống/Dụng cụ & Thiết bị tiện ích/Áo mưa",
        value: "13769"
    },
    {
        label: "13770 - Nhà Cửa & Đời Sống/Dụng cụ & Thiết bị tiện ích/Giá, móc, cây treo",
        value: "13770"
    },
    {
        label: "13771 - Nhà Cửa & Đời Sống/Dụng cụ & Thiết bị tiện ích/Ổ cắm điện",
        value: "13771"
    },
    {
        label: "13772 - Nhà Cửa & Đời Sống/Dụng cụ & Thiết bị tiện ích/Hệ thống nhà thông minh",
        value: "13772"
    },
    {
        label: "13773 - Nhà Cửa & Đời Sống/Dụng cụ & Thiết bị tiện ích/Bảo hộ lao động",
        value: "13773"
    },
    {
        label: "13777 - Nhà Cửa & Đời Sống/Dụng cụ & Thiết bị tiện ích/Sơn nhà cửa",
        value: "13777"
    },
    {
        label: "13781 - Nhà Cửa & Đời Sống/Dụng cụ & Thiết bị tiện ích/Ổ khóa, chốt, chặn cửa",
        value: "13781"
    },
    {
        label: "13782 - Nhà Cửa & Đời Sống/Dụng cụ cầm tay/Pin, phụ kiện dụng cụ cầm tay",
        value: "13782"
    },
    {
        label: "13783 - Nhà Cửa & Đời Sống/Ngoài trời & Sân vườn/Võng",
        value: "13783"
    },
    {
        label: "13784 - Nhà Cửa & Đời Sống/Ngoài trời & Sân vườn/Trang trí ngoài trời",
        value: "13784"
    },
    {
        label: "13785 - Nhà Cửa & Đời Sống/Trang trí nhà cửa/Giấy và decal dán tường",
        value: "13785"
    },
    {
        label: "13786 - Nhà Cửa & Đời Sống/Trang trí nhà cửa/Khung ảnh và Tranh treo tường",
        value: "13786"
    },
    {
        label: "13787 - Nhà Cửa & Đời Sống/Trang trí nhà cửa/Đồng hồ để bàn",
        value: "13787"
    },
    {
        label: "13788 - Nhà Cửa & Đời Sống/Trang trí nhà cửa/Nến và phụ kiện",
        value: "13788"
    },
    {
        label: "13790 - Nhà Cửa & Đời Sống/Trang trí nhà cửa/Rèm, màn cửa, màn chặn, vách ngăn chia phòng",
        value: "13790"
    },
    {
        label: "13792 - Nhà Cửa & Đời Sống/Trang trí nhà cửa/Gối tựa trang trí",
        value: "13792"
    },
    {
        label: "13793 - Nhà Cửa & Đời Sống/Trang trí nhà cửa/Phụ kiện làm thơm phòng",
        value: "13793"
    },
    {
        label: "13794 - Nhà Cửa & Đời Sống/Trang trí nhà cửa/Đồ thờ cúng",
        value: "13794"
    },
    {
        label: "13795 - Nhà Cửa & Đời Sống/Trang trí nhà cửa/Vật phẩm phong thủy",
        value: "13795"
    },
    {
        label: "13796 - Nhà Cửa & Đời Sống/Trang trí nhà cửa/Lọ hoa và hoa trang trí",
        value: "13796"
    },
    {
        label: "13797 - Nhà Cửa & Đời Sống/Tủ đựng & Hộp lưu trữ/Kệ đựng đồ đa năng",
        value: "13797"
    },
    {
        label: "13801 - Nhà Cửa & Đời Sống/Dụng cụ & Thiết bị tiện ích/Phụ kiện giặt ủi",
        value: "13801"
    },
    {
        label: "13885 - Voucher & Dịch vụ/Nạp tiền tài khoản",
        value: "13885"
    },
    {
        label: "13886 - Voucher & Dịch vụ/Nạp tiền tài khoản/Khác",
        value: "13886"
    },
    {
        label: "13887 - Voucher & Dịch vụ/Nạp tiền tài khoản/Thẻ cào & Thẻ nạp điện thoại Mobiphone",
        value: "13887"
    },
    {
        label: "13888 - Voucher & Dịch vụ/Nạp tiền tài khoản/Thẻ cào & Thẻ nạp điện thoại Vinaphone",
        value: "13888"
    },
    {
        label: "13889 - Voucher & Dịch vụ/Nạp tiền tài khoản/Thẻ cào & Thẻ nạp điện thoại Viettel",
        value: "13889"
    },
    {
        label: "13890 - Voucher & Dịch vụ/Nạp tiền tài khoản/Thẻ game",
        value: "13890"
    },
    {
        label: "13898 - Thiết Bị Điện Tử/Phụ kiện & Thiết bị game",
        value: "13898"
    },
    {
        label: "13899 - Thiết Bị Điện Tử/Phụ kiện & Thiết bị game/Phụ kiện game khác",
        value: "13899"
    },
    {
        label: "22092 - Voucher & Dịch vụ/Shopee Official/Default",
        value: "22092"
    },
    {
        label: "13904 - Máy tính & Laptop/Chuột, Bàn Phím/Chuột Gaming",
        value: "13904"
    },
    {
        label: "13905 - Máy tính & Laptop/Chuột, Bàn Phím/Bàn phím Gaming",
        value: "13905"
    },
    {
        label: "13906 - Đồ Chơi/Đồ chơi cho trẻ sơ sinh & trẻ nhỏ/Lục lạc",
        value: "13906"
    },
    {
        label: "13907 - Đồ Chơi/Đồ chơi giáo dục/Đồ chơi phát nhạc và nhạc cụ",
        value: "13907"
    },
    {
        label: "13908 - Đồ Chơi/Đồ chơi vận động & Ngoài trời/Ball Pits",
        value: "13908"
    },
    {
        label: "13936 - Nhà Cửa & Đời Sống/Dụng cụ & Thiết bị tiện ích/Đồ dùng gia đình",
        value: "13936"
    },
    {
        label: "13937 - Nhà Cửa & Đời Sống/Dụng cụ & Thiết bị tiện ích/Phòng ngừa côn trùng",
        value: "13937"
    },
    {
        label: "14026 - Điện Thoại & Phụ Kiện/Máy tính bảng",
        value: "14026"
    },
    {
        label: "14027 - Điện Thoại & Phụ Kiện/Máy tính bảng/Khác",
        value: "14027"
    },
    {
        label: "14028 - Điện Thoại & Phụ Kiện/Máy tính bảng/Samsung",
        value: "14028"
    },
    {
        label: "14029 - Điện Thoại & Phụ Kiện/Máy tính bảng/Huawei",
        value: "14029"
    },
    {
        label: "14030 - Điện Thoại & Phụ Kiện/Máy tính bảng/iPad",
        value: "14030"
    },
    {
        label: "13265 - Đồ Chơi/Đồ Chơi Giải Trí",
        value: "13265"
    },
    {
        label: "14132 - Thể Thao & Du Lịch/Balo/ Túi",
        value: "14132"
    },
    {
        label: "14133 - Thể Thao & Du Lịch/Balo/ Túi/Default",
        value: "14133"
    },
    {
        label: "14134 - Thể Thao & Du Lịch/Balo/ Túi/Balo du lịch",
        value: "14134"
    },
    {
        label: "14135 - Thể Thao & Du Lịch/Balo/ Túi/Túi du lịch",
        value: "14135"
    },
    {
        label: "14136 - Thể Thao & Du Lịch/Balo/ Túi/Túi thể thao",
        value: "14136"
    },
    {
        label: "14137 - Thể Thao & Du Lịch/Balo/ Túi/Túi tiện ích",
        value: "14137"
    },
    {
        label: "14138 - Thể Thao & Du Lịch/Balo/ Túi/Bộ balo/ túi",
        value: "14138"
    },
    {
        label: "14154 - Thể Thao & Du Lịch/Hoạt Động Dã Ngoại",
        value: "14154"
    },
    {
        label: "14155 - Thể Thao & Du Lịch/Hoạt Động Dã Ngoại/Khác",
        value: "14155"
    },
    {
        label: "14156 - Thể Thao & Du Lịch/Hoạt Động Dã Ngoại/Câu cá",
        value: "14156"
    },
    {
        label: "14157 - Thể Thao & Du Lịch/Hoạt Động Dã Ngoại/Cắm trại",
        value: "14157"
    },
    {
        label: "14160 - Thể Thao & Du Lịch/Hoạt Động Dã Ngoại/Leo núi",
        value: "14160"
    },
    {
        label: "14161 - Thể Thao & Du Lịch/Hoạt Động Dã Ngoại/Phượt",
        value: "14161"
    },
    {
        label: "14162 - Thể Thao & Du Lịch/Thể Thao & Thể Hình/Máy tập",
        value: "14162"
    },
    {
        label: "14167 - Thể Thao & Du Lịch/Thể Thao & Thể Hình/Dụng cụ tập tay/ Tạ",
        value: "14167"
    },
    {
        label: "5988 - Thiết Bị Điện Tử/Tai nghe/Default",
        value: "5988"
    },
    {
        label: "6001 - Thời Trang Nữ/Đầm/Khác",
        value: "6001"
    },
    {
        label: "6002 - Thời Trang Nữ/Chân váy/Khác",
        value: "6002"
    },
    {
        label: "6003 - Thời Trang Nữ/Trang phục thể thao/Khác",
        value: "6003"
    },
    {
        label: "6006 - Thời Trang Nam/Áo thun/Khác",
        value: "6006"
    },
    {
        label: "6007 - Thời Trang Nam/Áo sơ mi/Khác",
        value: "6007"
    },
    {
        label: "6008 - Thời Trang Nam/Áo khoác & Áo vest/Khác",
        value: "6008"
    },
    {
        label: "6010 - Thời Trang Nam/Phụ kiện nam/Khác",
        value: "6010"
    },
    {
        label: "6025 - Sản Phẩm Khác/Khác/Khác",
        value: "6025"
    },
    {
        label: "6027 - Phụ Kiện Thời Trang/Hình xăm/Default",
        value: "6027"
    },
    {
        label: "6028 - Phụ Kiện Thời Trang/Phụ kiện tóc/Khác",
        value: "6028"
    },
    {
        label: "6029 - Phụ Kiện Thời Trang/Khăn, Tất & Găng tay/Khác",
        value: "6029"
    },
    {
        label: "6030 - Phụ Kiện Thời Trang/Nón & Dù/Khác",
        value: "6030"
    },
    {
        label: "6031 - Phụ Kiện Thời Trang/Kính mắt/Khác",
        value: "6031"
    },
    {
        label: "6033 - Phụ Kiện Thời Trang/Trang sức/Khác",
        value: "6033"
    },
    {
        label: "2371 - Thiết Bị Điện Tử/Thiết bị âm thanh",
        value: "2371"
    },
    {
        label: "6036 - Giày Dép Nữ/Sandal/Khác",
        value: "6036"
    },
    {
        label: "6042 - Giày Dép Nam/Dép/Default",
        value: "6042"
    },
    {
        label: "13295 - Đồ Chơi/Đồ chơi cho trẻ sơ sinh & trẻ nhỏ/Đồ chơi nhà tắm",
        value: "13295"
    },
    {
        label: "6044 - Giày Dép Nam/Giày tây/Default",
        value: "6044"
    },
    {
        label: "6046 - Giày Dép Nam/Giày lười/Default",
        value: "6046"
    },
    {
        label: "6047 - Giày Dép Nam/Giày thể thao/ Sneakers/Khác",
        value: "6047"
    },
    {
        label: "6051 - Thời Trang Nam/Quần/Khác",
        value: "6051"
    },
    {
        label: "6061 - Thiết Bị Điện Gia Dụng/Khác/Khác",
        value: "6061"
    },
    {
        label: "6062 - Thiết Bị Điện Gia Dụng/Đồ gia dụng lớn/Khác",
        value: "6062"
    },
    {
        label: "6063 - Thiết Bị Điện Gia Dụng/Máy hút bụi & Thiết bị làm sạch/Khác",
        value: "6063"
    },
    {
        label: "6065 - Thiết Bị Điện Gia Dụng/Quạt & Máy nóng lạnh/Khác",
        value: "6065"
    },
    {
        label: "6066 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Khác",
        value: "6066"
    },
    {
        label: "6068 - Nhà Cửa & Đời Sống/Đồ nội thất/Default",
        value: "6068"
    },
    {
        label: "6069 - Nhà Cửa & Đời Sống/Đèn/Khác",
        value: "6069"
    },
    {
        label: "6071 - Nhà Cửa & Đời Sống/Ngoài trời & Sân vườn/Default",
        value: "6071"
    },
    {
        label: "6074 - Nhà Cửa & Đời Sống/Dụng cụ & Thiết bị tiện ích/Default",
        value: "6074"
    },
    {
        label: "6075 - Nhà Cửa & Đời Sống/Đồ dùng phòng tắm/Default",
        value: "6075"
    },
    {
        label: "6076 - Nhà Cửa & Đời Sống/Tủ đựng & Hộp lưu trữ/Khác",
        value: "6076"
    },
    {
        label: "6077 - Nhà Cửa & Đời Sống/Chăn, Ga, Gối & Nệm/Default",
        value: "6077"
    },
    {
        label: "6078 - Nhà Cửa & Đời Sống/Trang trí nhà cửa/Default",
        value: "6078"
    },
    {
        label: "6079 - Nhà Cửa & Đời Sống/Đồ dùng nhà bếp & Phòng ăn/Default",
        value: "6079"
    },
    {
        label: "21494 - Thiết Bị Điện Tử/Phụ kiện tivi/Cáp Tivi",
        value: "21494"
    },
    {
        label: "6086 - Mẹ & Bé/Đồ dùng cho bé/Other",
        value: "6086"
    },
    {
        label: "14286 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Nồi chiên",
        value: "14286"
    },
    {
        label: "14287 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Nồi áp suất",
        value: "14287"
    },
    {
        label: "14288 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Nồi hầm chậm",
        value: "14288"
    },
    {
        label: "14289 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Bếp gas & Phụ kiện bếp gas",
        value: "14289"
    },
    {
        label: "6098 - Điện Thoại & Phụ Kiện/Sim/Khác",
        value: "6098"
    },
    {
        label: "6099 - Điện Thoại & Phụ Kiện/Miếng dán màn hình/Khác",
        value: "6099"
    },
    {
        label: "14292 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Nồi lẩu & Chảo lẩu",
        value: "14292"
    },
    {
        label: "14293 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Máy pha cà phê",
        value: "14293"
    },
    {
        label: "6102 - Điện Thoại & Phụ Kiện/Pin sạc dự phòng/>20000mAh",
        value: "6102"
    },
    {
        label: "6103 - Điện Thoại & Phụ Kiện/Gậy chụp hình/Khác",
        value: "6103"
    },
    {
        label: "6104 - Điện Thoại & Phụ Kiện/Pin, Cáp & Bộ sạc/Khác",
        value: "6104"
    },
    {
        label: "14297 - Thiết Bị Điện Gia Dụng/Thiết bị chăm sóc quần áo/Máy cắt lông xù",
        value: "14297"
    },
    {
        label: "14298 - Thiết Bị Điện Gia Dụng/Thiết bị chăm sóc quần áo/Phụ tùng & Phụ kiện",
        value: "14298"
    },
    {
        label: "6107 - Điện Thoại & Phụ Kiện/Vỏ, Bao & Ốp lưng/Khác",
        value: "6107"
    },
    {
        label: "14300 - Thiết Bị Điện Gia Dụng/Máy hút bụi & Thiết bị làm sạch/Máy thổi bụi",
        value: "14300"
    },
    {
        label: "14301 - Thiết Bị Điện Gia Dụng/Máy hút bụi & Thiết bị làm sạch/Phụ tùng & Phụ kiện",
        value: "14301"
    },
    {
        label: "10569 - Phụ Kiện Thời Trang/Dây lưng",
        value: "10569"
    },
    {
        label: "14303 - Thiết Bị Điện Gia Dụng/Đồ gia dụng lớn/Tủ đông",
        value: "14303"
    },
    {
        label: "14304 - Thiết Bị Điện Gia Dụng/Đồ gia dụng lớn/Phụ tùng & Phụ kiện",
        value: "14304"
    },
    {
        label: "14305 - Thiết Bị Điện Gia Dụng/Quạt & Máy nóng lạnh/Máy hút ẩm",
        value: "14305"
    },
    {
        label: "14306 - Thiết Bị Điện Gia Dụng/Quạt & Máy nóng lạnh/Phụ tùng & Phụ kiện",
        value: "14306"
    },
    {
        label: "6122 - Thời Trang Nữ/Đồ bơi/Khác",
        value: "6122"
    },
    {
        label: "6123 - Thời Trang Nữ/Đồ lót, Đồ ngủ & Đồ mặc nhà/Khác",
        value: "6123"
    },
    {
        label: "6124 - Thời Trang Nữ/Đồ đôi/Khác",
        value: "6124"
    },
    {
        label: "6125 - Thời Trang Nữ/Set trang phục & Jumpsuit/Khác",
        value: "6125"
    },
    {
        label: "14318 - Máy tính & Laptop/Phụ Kiện Máy Tính Khác",
        value: "14318"
    },
    {
        label: "14319 - Máy tính & Laptop/Phụ Kiện Máy Tính Khác/Default",
        value: "14319"
    },
    {
        label: "6129 - Thời Trang Nữ/Áo/Khác",
        value: "6129"
    },
    {
        label: "6130 - Sức Khỏe & Sắc Đẹp/Hoá Mỹ Phẩm & Khác/Khác",
        value: "6130"
    },
    {
        label: "6132 - Sức Khỏe & Sắc Đẹp/Nước hoa/Khác",
        value: "6132"
    },
    {
        label: "6133 - Sức Khỏe & Sắc Đẹp/Dụng cụ làm đẹp/Khác",
        value: "6133"
    },
    {
        label: "6135 - Sức Khỏe & Sắc Đẹp/Tắm & Chăm sóc cơ thể/Khác",
        value: "6135"
    },
    {
        label: "6136 - Sức Khỏe & Sắc Đẹp/Chăm sóc tóc/Khác",
        value: "6136"
    },
    {
        label: "6137 - Sức Khỏe & Sắc Đẹp/Trang điểm mắt/Khác",
        value: "6137"
    },
    {
        label: "6138 - Sức Khỏe & Sắc Đẹp/Trang điểm da/Khác",
        value: "6138"
    },
    {
        label: "6139 - Sức Khỏe & Sắc Đẹp/Chăm sóc da/Khác",
        value: "6139"
    },
    {
        label: "6140 - Sức Khỏe & Sắc Đẹp/Son & Chăm sóc môi/Khác",
        value: "6140"
    },
    {
        label: "14357 - Ô tô - xe máy - xe đạp/Phụ kiện xe máy",
        value: "14357"
    },
    {
        label: "14358 - Ô tô - xe máy - xe đạp/Phụ kiện xe máy/Phụ kiện khác",
        value: "14358"
    },
    {
        label: "14364 - Ô tô - xe máy - xe đạp/Mũ bảo hiểm",
        value: "14364"
    },
    {
        label: "14365 - Ô tô - xe máy - xe đạp/Mũ bảo hiểm/Default",
        value: "14365"
    },
    {
        label: "14369 - Ô tô - xe máy - xe đạp/Phụ tùng xe máy",
        value: "14369"
    },
    {
        label: "14370 - Ô tô - xe máy - xe đạp/Phụ tùng xe máy/Phụ tùng khác",
        value: "14370"
    },
    {
        label: "14371 - Ô tô - xe máy - xe đạp/Chăm sóc xe máy",
        value: "14371"
    },
    {
        label: "14372 - Ô tô - xe máy - xe đạp/Chăm sóc xe máy/Default",
        value: "14372"
    },
    {
        label: "14373 - Ô tô - xe máy - xe đạp/Mũ bảo hiểm/Mũ bảo hiểm trẻ em",
        value: "14373"
    },
    {
        label: "14374 - Ô tô - xe máy - xe đạp/Mũ bảo hiểm/Mũ bảo hiểm nửa đầu",
        value: "14374"
    },
    {
        label: "14375 - Ô tô - xe máy - xe đạp/Mũ bảo hiểm/Mũ bảo hiểm 3/4 đầu",
        value: "14375"
    },
    {
        label: "14376 - Ô tô - xe máy - xe đạp/Mũ bảo hiểm/Mũ bảo hiểm fullface",
        value: "14376"
    },
    {
        label: "14377 - Ô tô - xe máy - xe đạp/Mũ bảo hiểm/Mũ bảo hiểm xe đạp",
        value: "14377"
    },
    {
        label: "14378 - Ô tô - xe máy - xe đạp/Phụ kiện xe máy/Thiết bị chống trộm",
        value: "14378"
    },
    {
        label: "14379 - Ô tô - xe máy - xe đạp/Phụ kiện xe máy/Đèn trợ sáng, đèn led",
        value: "14379"
    },
    {
        label: "14380 - Ô tô - xe máy - xe đạp/Phụ kiện xe máy/Logo, huy hiệu",
        value: "14380"
    },
    {
        label: "14381 - Ô tô - xe máy - xe đạp/Phụ kiện xe máy/Hành lý, túi treo",
        value: "14381"
    },
    {
        label: "14382 - Ô tô - xe máy - xe đạp/Phụ kiện xe máy/Bạt phủ",
        value: "14382"
    },
    {
        label: "14383 - Ô tô - xe máy - xe đạp/Phụ tùng xe máy/Gương",
        value: "14383"
    },
    {
        label: "14384 - Ô tô - xe máy - xe đạp/Phụ tùng xe máy/Mâm và lốp xe máy",
        value: "14384"
    },
    {
        label: "14385 - Ô tô - xe máy - xe đạp/Phụ tùng xe máy/Ắc quy, bugi",
        value: "14385"
    },
    {
        label: "14386 - Ô tô - xe máy - xe đạp/Phụ tùng xe máy/Hệ thống truyền động, hộp số",
        value: "14386"
    },
    {
        label: "14387 - Ô tô - xe máy - xe đạp/Phụ tùng xe máy/Phanh, giảm sóc",
        value: "14387"
    },
    {
        label: "14388 - Ô tô - xe máy - xe đạp/Phụ tùng xe máy/Hệ thống động cơ, nhiên liệu",
        value: "14388"
    },
    {
        label: "14389 - Ô tô - xe máy - xe đạp/Chăm sóc xe máy/Dầu nhớt và phụ gia",
        value: "14389"
    },
    {
        label: "14390 - Ô tô - xe máy - xe đạp/Chăm sóc xe máy/Bơm, vá lốp",
        value: "14390"
    },
    {
        label: "14391 - Ô tô - xe máy - xe đạp/Chăm sóc xe máy/Dụng cụ, thiết bị bảo dưỡng",
        value: "14391"
    },
    {
        label: "14392 - Ô tô - xe máy - xe đạp/Chăm sóc xe máy/Tem xe máy",
        value: "14392"
    },
    {
        label: "14393 - Ô tô - xe máy - xe đạp/Chăm sóc xe máy/Lau, rửa xe",
        value: "14393"
    },
    {
        label: "14398 - Ô tô - xe máy - xe đạp/Phụ tùng, phụ kiện xe đạp, xe đạp điện",
        value: "14398"
    },
    {
        label: "14399 - Ô tô - xe máy - xe đạp/Phụ tùng, phụ kiện xe đạp, xe đạp điện/Default",
        value: "14399"
    },
    {
        label: "14400 - Ô tô - xe máy - xe đạp/Phụ tùng, phụ kiện xe đạp, xe đạp điện/Phụ kiện xe đạp",
        value: "14400"
    },
    {
        label: "14401 - Ô tô - xe máy - xe đạp/Phụ tùng, phụ kiện xe đạp, xe đạp điện/Phụ tùng xe đạp",
        value: "14401"
    },
    {
        label: "14402 - Ô tô - xe máy - xe đạp/Phụ tùng, phụ kiện xe đạp, xe đạp điện/Phụ kiện xe đạp điện",
        value: "14402"
    },
    {
        label: "14403 - Ô tô - xe máy - xe đạp/Phụ tùng, phụ kiện xe đạp, xe đạp điện/Phụ tùng xe đạp điện",
        value: "14403"
    },
    {
        label: "21575 - Bách Hoá Online/Sữa/Sữa nước",
        value: "21575"
    },
    {
        label: "15023 - Thời Trang Nam/Đồ lót",
        value: "15023"
    },
    {
        label: "15024 - Thời Trang Nam/Đồ lót/Default",
        value: "15024"
    },
    {
        label: "15135 - Thời Trang Nam/Thắt Lưng",
        value: "15135"
    },
    {
        label: "15136 - Thời Trang Nam/Thắt Lưng/Default",
        value: "15136"
    },
    {
        label: "15139 - Thời Trang Nam/Trang Sức Nam",
        value: "15139"
    },
    {
        label: "15140 - Thời Trang Nam/Trang Sức Nam/Default",
        value: "15140"
    },
    {
        label: "15141 - Thời Trang Nam/Đồ Trung Niên",
        value: "15141"
    },
    {
        label: "15142 - Thời Trang Nam/Đồ Trung Niên/Default",
        value: "15142"
    },
    {
        label: "23406 - Ô tô - xe máy - xe đạp/Mô tô, xe máy",
        value: "23406"
    },
    {
        label: "23407 - Ô tô - xe máy - xe đạp/Mô tô, xe máy/Khác",
        value: "23407"
    },
    {
        label: "23411 - Ô tô - xe máy - xe đạp/Xe đạp, xe điện",
        value: "23411"
    },
    {
        label: "23412 - Ô tô - xe máy - xe đạp/Xe đạp, xe điện/Xe đạp đuờng truờng",
        value: "23412"
    },
    {
        label: "23413 - Ô tô - xe máy - xe đạp/Xe đạp, xe điện/Xe điện",
        value: "23413"
    },
    {
        label: "23414 - Ô tô - xe máy - xe đạp/Xe đạp, xe điện/Xe đạp thông dụng",
        value: "23414"
    },
    {
        label: "23415 - Ô tô - xe máy - xe đạp/Xe đạp, xe điện/Xe đạp trẻ em",
        value: "23415"
    },
    {
        label: "23416 - Ô tô - xe máy - xe đạp/Xe đạp, xe điện/Xe đạp thể thao",
        value: "23416"
    },
    {
        label: "23417 - Ô tô - xe máy - xe đạp/Mô tô, xe máy/Xe tay ga",
        value: "23417"
    },
    {
        label: "23418 - Ô tô - xe máy - xe đạp/Mô tô, xe máy/Xe số",
        value: "23418"
    },
    {
        label: "23419 - Ô tô - xe máy - xe đạp/Mô tô, xe máy/Xe côn tay",
        value: "23419"
    },
    {
        label: "23421 - Ô tô - xe máy - xe đạp/Mô tô, xe máy/Xe phân khối lớn",
        value: "23421"
    },
    {
        label: "23422 - Ô tô - xe máy - xe đạp/Mô tô, xe máy/Xe 50 cc",
        value: "23422"
    },
    {
        label: "15359 - Thời Trang Nam/Trang Sức Nam/Bông Tai/Khuyên Tai",
        value: "15359"
    },
    {
        label: "15360 - Thời Trang Nam/Trang Sức Nam/Dây Chuyền",
        value: "15360"
    },
    {
        label: "15361 - Thời Trang Nam/Trang Sức Nam/Vòng Tay/Lắc Tay",
        value: "15361"
    },
    {
        label: "15362 - Thời Trang Nam/Trang Sức Nam/Nhẫn Kim Loại/Nhẫn Đá",
        value: "15362"
    },
    {
        label: "15392 - Nhà Cửa & Đời Sống/Đồ dùng phòng tắm/Dụng cụ cọ rửa nhà tắm, toilet",
        value: "15392"
    },
    {
        label: "23860 - Ô tô - xe máy - xe đạp/Xe Ô tô",
        value: "23860"
    },
    {
        label: "23861 - Ô tô - xe máy - xe đạp/Xe Ô tô/Khác",
        value: "23861"
    },
    {
        label: "23862 - Ô tô - xe máy - xe đạp/Xe Ô tô/Sedan",
        value: "23862"
    },
    {
        label: "23863 - Ô tô - xe máy - xe đạp/Xe Ô tô/SUV",
        value: "23863"
    },
    {
        label: "23864 - Ô tô - xe máy - xe đạp/Xe Ô tô/MPV",
        value: "23864"
    },
    {
        label: "23865 - Ô tô - xe máy - xe đạp/Xe Ô tô/Hatchback",
        value: "23865"
    },
    {
        label: "23866 - Ô tô - xe máy - xe đạp/Xe Ô tô/Bán tải",
        value: "23866"
    },
    {
        label: "14290 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Bếp điện",
        value: "14290"
    },
    {
        label: "14291 - Thiết Bị Điện Gia Dụng/Đồ gia dụng nhà bếp/Máy chế biến thực phẩm",
        value: "14291"
    },
    {
        label: "24560 - Ô tô - xe máy - xe đạp/Xe đạp, xe điện/Xe đạp Fix Gear",
        value: "24560"
    },
    {
        label: "24561 - Ô tô - xe máy - xe đạp/Xe đạp, xe điện/Xe đạp gấp",
        value: "24561"
    },
    {
        label: "24562 - Ô tô - xe máy - xe đạp/Xe đạp, xe điện/Xe đạp đua",
        value: "24562"
    },
    {
        label: "24563 - Ô tô - xe máy - xe đạp/Xe đạp, xe điện/Xe đạp leo núi",
        value: "24563"
    }
];
export default class SurfAndSave {
    constructor(SKU_MAP, ORIGINAL_PRICE, PROMOTION_PRICE) {
        this.SKU_MAP = SKU_MAP;
        this.ORIGINAL_PRICE = ORIGINAL_PRICE;
        this.PROMOTION_PRICE = PROMOTION_PRICE;
    }

    init() {
        const UI_BOX = `<div id="UI_BOX"><input id="itemCategoryId" class="autocomplete" placeholder="Category ID" name="itemCategoryId"><input id="itemName" placeholder="Item Name" name="itemname"><span id="itemNameWordCount">0</span><span>/120</span><textarea id="itemDescription" placeholder="Description" name="itemdescription"></textarea><span id="itemDescriptionWordCount" class="bottom-100px">0</span><span class="bottom-100px">/3000</span><div id="sendTrigger">Send This Item To Sheet</div></div>`;
        document.getElementById("detail").innerHTML += UI_BOX;
        document.getElementById("sendTrigger").onclick = () => {
            this.sendDataToSheet();
        };
        document.getElementById("itemName").onkeyup = () => {
            this.wordCount("itemName");
        };
        document.getElementById("itemDescription").onkeyup = () => {
            this.wordCount("itemDescription");
        };
        autocomplete(document.getElementById('itemCategoryId'), CATEGORY_ID_LIST);
    }

    async sendDataToSheet() {
        document.getElementById("sendTrigger").innerHTML = `<img src="chrome-extension://hibcabekedaenkbmoofanlnilfmlpkpc/img/loading.svg">`;
        try {
            const PAY_LOAD = this.prepareProductItem();
            await fetch('https://script.google.com/macros/s/AKfycbyMgBYIEkjqgWCTS_v35feyNBC0JtBROS8dQsEuDrptg4yE1Lqmuykrjw/exec', {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(PAY_LOAD)
            });
            document.getElementById("sendTrigger").innerHTML = "Data Sent!";
            document.getElementById("sendTrigger").removeAttribute('onclick');
        } catch (error) {
            console.log(error);
            document.getElementById("sendTrigger").innerHTML = "Some Error Occurred";
        };
    }

    prepareProductItem() {
        let productItem = {
            itemCategoryId: document.getElementById('itemCategoryId').value,
            itemName: document.getElementById('itemName').value,
            itemDescription: document.getElementById('itemDescription').value,
            itemSku: this.getItemId(),
            imageList: this.getImageSrcList(),
            variation: this.getVaration()
        };
        return productItem;
    }

    getVaration() {
        const SKU_KEY_NAMES = Object.keys(this.SKU_MAP);
        let variation = [];

        for (let index = 0; index < SKU_KEY_NAMES.length; index++) {
            let productVariationUnit = {};
            const skuUnit = SKU_KEY_NAMES[index];
            const key1 = skuUnit.split(';').reverse()[1];
            const key2 = skuUnit.split(';').reverse()[2];

            productVariationUnit.sku = skuUnit;
            productVariationUnit.variable1Name = this.getPropertyList()[0] ? this.getPropertyList()[0].type : "";
            productVariationUnit.variable1Value = this.getPropertyList()[0] ? this.getPropertyList()[0].dataList.filter(e => e.value == key1)[0].text : "";
            productVariationUnit.variable1ImageSrc = this.getPropertyList()[0].dataList[0].hasOwnProperty('imgSrc') ? this.getPropertyList()[0].dataList.filter(e => e.value == key1)[0].imgSrc : "";
            productVariationUnit.variable2Name = this.getPropertyList()[1] ? this.getPropertyList()[1].type : "";
            productVariationUnit.variable2Value = this.getPropertyList()[1] ? this.getPropertyList()[1].dataList.filter(e => e.value == key2)[0].text : "";
            productVariationUnit.stock = this.SKU_MAP[skuUnit].stock;
            productVariationUnit.price = (this.PROMOTION_PRICE[skuUnit] !== undefined) ? this.PROMOTION_PRICE[skuUnit][0].price : this.ORIGINAL_PRICE[skuUnit].price;

            variation.push(productVariationUnit);
        };
        return variation;
    }

    getPropertyList() {
        let propertyList = [];
        const PROPERTY_UL_LIST = document.querySelectorAll("ul.J_TSaleProp");

        for (let index = 0; index < PROPERTY_UL_LIST.length; index++) {
            const PROPERTY_NODE_UL = PROPERTY_UL_LIST[index];
            let property = {};
            property.type = PROPERTY_NODE_UL.dataset.property;
            property.dataList = [];

            for (let i = 0; i < PROPERTY_NODE_UL.childElementCount; i++) {
                const PROPERTY_NODE_LI = PROPERTY_NODE_UL.children[i];
                let dataValueMap = {
                    value: PROPERTY_NODE_LI.dataset.value,
                    text: PROPERTY_NODE_LI.childNodes[1].childNodes[1].textContent,
                };

                if (PROPERTY_NODE_LI.childNodes[1].style.backgroundImage !== "") {
                    dataValueMap.imgSrc = location.protocol + PROPERTY_NODE_LI.childNodes[1].style.backgroundImage.match(/\/\/.+\.jpg(?=_)/)[0];
                };

                property.dataList.push(dataValueMap);
            };
            propertyList.push(property);
        };
        return propertyList.reverse();
    }

    getImageSrcList() {
        const IMAGE_NODE_LIST = document.querySelectorAll('#J_UlThumb img');
        const SRC_LIST = [];

        for (let index = 0; index < IMAGE_NODE_LIST.length; index++) {
            const SRC = IMAGE_NODE_LIST[index].src.replace(/_\d+x\d+\.jpg.*/, '');
            SRC_LIST.push(SRC);
        };
        return SRC_LIST;
    }

    getItemId() {
        return location.search.match(/(?:id=)(\d+)/)[1];
    }

    wordCount(id) {
        return document.getElementById(`${id}WordCount`).innerText = document.getElementById(`${id}`).value.length;
    }
}