Cấu trúc thư mục:

- src: source code

  - main.js => file gốc
  - app.vue => component gốc
  - assets: hình ảnh, font
  - component => chứa các component con.

- component:

  - 3 thành phần:
    - Template: html => Hiển thị.
    - Scripts: xử lý.
    - css: làm đẹp.

- Tạo một component:

  - Tạo file.vue
  - import
  - Khai báo

- 2 ways bindings:
  - Bind dữ liệu hai chiều.
- Phụ thuộc kiểu element
- Lifecycle: Vòng đời của component trong vue
- Binding:

  - value bindings: {{}}
  - property bindings: v-bind:(tên thuộc tính) = "biến" / Viết tắt: ":id="id"
  - Style and class bindings:
    :class

- model:
  - Liên kết element với property
- Event Handling:
  - Bắt sự kiện từ các element
  - v-on:[Tên sự kiện]="function()" (Có thể viết tắt @click)
  - Prevents default event:
    - Hủy bỏ không submit
- Ref:
  - Ánh xạ đến chính element
- Conditional rendering:
  - v-show: ẩn hoặc là hiện 1 element theo điều kiện
  - v-hide: ngược lại v-show
  - v-if: Ẩn/Hiện element theo điều kiện
- List rendering:
  - v-for: render mảng hoặc object
- methods:
  - Hàm của vue object
- Watch:
  - Theo dõi sự thay đổi của data.
- hooks:
  - mounted
- Props:
  - Dữ liệu đẩy từ component cha sang component con.
  - Dùng mảng tên các prop
- filter:
