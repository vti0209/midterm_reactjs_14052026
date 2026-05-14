# Tính Điểm Trung Bình Và Xếp Loại Học Lực

## Mô tả

Ứng dụng sử dụng ReactJS và `useState` để tính điểm trung bình của 2 học kỳ và xếp loại học lực.

Đây là bài kiểm tra giữa kỳ môn ReactJS được thực hiện theo yêu cầu của giảng viên bộ môn.

### Sinh viên thực hiện: **Hồ Văn Tiết**
### Đơn vị học tập: **Passerelles Numériques Vietnam(PNV) & DA NANG COLLEGE(DNC)**

## Chức năng

* Nhập điểm học kỳ 1.
* Nhập điểm học kỳ 2.
* Chọn năm học (`Year`).
* Nhấn nút **OK** để hiển thị điểm trung bình và xếp loại học lực.
* Nhấn nút **Cancel** để xóa dữ liệu và đưa form về trạng thái ban đầu.

## Công thức tính

### Year = 1

* `(semester1 + semester2) / 2`

### Year = 2

* `(semester1 + semester2 * 2) / 3`

## Xếp loại học lực

* Điểm trung bình ≥ 8 → Học sinh giỏi
* Điểm trung bình ≥ 6.5 → Khá
* Điểm trung bình ≥ 5 → Trung bình
* Điểm trung bình < 5 → Yếu

## Công nghệ sử dụng

* ReactJS
* useState
* JavaScript
* JSX
