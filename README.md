# Tính Điểm Trung Bình Và Xếp Loại Học Lực

## Mô tả

Ứng dụng được xây dựng bằng **ReactJS** sử dụng `useState` để quản lý dữ liệu và tính điểm trung bình của 2 học kỳ theo hệ số năm học.

Sau khi tính toán, hệ thống sẽ tự động xếp loại học lực dựa trên điểm trung bình của sinh viên.

Đây là bài kiểm tra giữa kỳ môn **ReactJS** được thực hiện theo yêu cầu của giảng viên bộ môn.

---

### Sinh viên thực hiện: **Hồ Văn Tiết**

### Đơn vị học tập:

**Passerelles Numériques Vietnam (PNV)** 
&
**Da Nang College (DNC)**

---

# Chức năng

* Nhập điểm học kỳ 1.
* Nhập điểm học kỳ 2.
* Chọn năm học.
* Kiểm tra dữ liệu đầu vào:

  * Không cho nhập nhỏ hơn `0`
  * Không cho nhập lớn hơn `10`
* Tính điểm trung bình theo hệ số.
* Hiển thị xếp loại học lực.
* Nút **OK** dùng để tính kết quả.
* Nút **Cancel** dùng để reset toàn bộ dữ liệu.

---

# Công thức tính điểm trung bình

## Tính hệ số

```js id="3ok5kk"
weight1 = year + 1
weight2 = year + 2
```

---

## Công thức tổng quát

\text{Average} = \frac{HK1 \times w_1 + HK2 \times w_2}{w_1 + w_2}

Trong đó:

* `HK1`: Điểm học kỳ 1
* `HK2`: Điểm học kỳ 2
* `w1`: Hệ số HK1
* `w2`: Hệ số HK2

---

## Ví dụ

### Year = 1

```js id="a4r5g2"
weight1 = 2
weight2 = 3
```

\frac{HK1 \times 2 + HK2 \times 3}{2 + 3}

---

### Year = 2

```js id="8dwq2v"
weight1 = 3
weight2 = 4
```

\frac{HK1 \times 3 + HK2 \times 4}{3 + 4}

---

# Xếp loại học lực

| Điểm trung bình | Xếp loại      |
| --------------- | ------------- |
| `>= 8`          | Học sinh giỏi |
| `>= 6.5`        | Khá           |
| `>= 5`          | Trung bình    |
| `< 5`           | Yếu           |

---

# Kiến thức React sử dụng

* ReactJS
* useState Hook
* State Object
* Event Handling
* Controlled Component
* Conditional Rendering
* Destructuring
* Spread Operator (`...`)
* Computed Property (`[name]`)
* JSX
* Form Validation

---

# Công nghệ sử dụng

* ReactJS
* JavaScript
* JSX
* CSS

---

# Giao diện chức năng

* Input nhập điểm HK1
* Input nhập điểm HK2
* Select chọn năm học
* Hiển thị điểm trung bình
* Hiển thị xếp loại học lực
* Nút OK
* Nút Cancel

---

# Luồng hoạt động

1. Người dùng nhập điểm HK1 và HK2.
2. Chọn năm học.
3. Hệ thống kiểm tra dữ liệu đầu vào hợp lệ.
4. Nhấn nút **OK** để tính điểm trung bình.
5. Hệ thống hiển thị:

   * Điểm trung bình
   * Xếp loại học lực
6. Nhấn **Cancel** để reset form.

---

# Tác giả

**Hồ Văn Tiết**
Sinh viên tại **Passerelles Numériques Vietnam (PNV)** & **Da Nang College (DNC)**
