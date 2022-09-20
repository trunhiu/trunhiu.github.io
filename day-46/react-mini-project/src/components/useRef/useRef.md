Ứng dụng của useRef:

1. Lưu trữ lại 1 tham chiếu.

- Nó luôn luôn giữ lại được giá trị trước đó của 1 biến giữa những lần component được re-render và sẽ không bị mất đi.
- Việc thay đổi giá trị của 1 tham chiếu không gây ra việc re-render lại component.
- useState cũng giữ được giá trị giữa những lần component được re-render nhưng việc thay đổi giá trị của 1 tham chiếu sẽ khiến cho useState gây ra việc re-render lại component.
- Những biến cần hiển thị lên UI thì chúng ta sử dụng useState còn ngược lại thì nên dùng useRef nó sẽ không gây ra việc re-render lại component.

2. Được sử dụng để trích suất đến các thành phần DOM.

3. lấy được giá trị trước đó của State
