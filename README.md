# LearnAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# angular 
# RXJS
RxJS là một thư viện JavaScript được sử dụng trong các ứng dụng Angular và cả các ứng dụng JavaScript khác để làm việc với các luồng dữ liệu bất đồng bộ (asynchronous) và xử lý các sự kiện (event). RxJS dựa trên mô hình lập trình Reactive Programming, nơi các sự kiện và luồng dữ liệu được xem như các chuỗi sự kiện liên tiếp.

RxJS cung cấp một tập hợp các Operators (toán tử) mạnh mẽ để xử lý, biến đổi và kết hợp các luồng dữ liệu. Bằng cách sử dụng các Operators này, bạn có thể thực hiện các tác vụ như lọc, biến đổi, sắp xếp, gộp, gom, tạo ra các luồng dữ liệu mới và nhiều hơn nữa.

Các khái niệm quan trọng trong RxJS bao gồm:

Observable: Đại diện cho một luồng dữ liệu có thể được quan sát. Nó có thể phát ra các giá trị, thông báo lỗi hoặc thông báo hoàn thành.
Observer: Đại diện cho một đối tượng hoặc hàm được sử dụng để quan sát các giá trị phát ra từ Observable.
Operator: Các hàm được sử dụng để biến đổi, lọc và kết hợp các Observable thành các Observable mới.
Subscription: Đại diện cho quá trình đăng ký và huỷ đăng ký quan sát một Observable.
Subject: Là một loại Observable đặc biệt, có khả năng đồng thời làm cả Observable và Observer. Nó có thể phát ra các giá trị và cũng có thể được sử dụng để quan sát các giá trị khác.
RxJS giúp xử lý các tác vụ bất đồng bộ, xử lý sự kiện và làm việc với các luồng dữ liệu một cách dễ dàng và mạnh mẽ. Nó cung cấp một cách trừu tượng hóa và tổ chức dữ liệu bất đồng bộ, giúp bạn viết mã dễ đọc, dễ bảo trì và có khả năng mở rộng trong các ứng dụng của mình.

# operator 
Trong RxJS, có ba loại chính của các Operator:

Creation Operators: Được sử dụng để tạo ra các Observable từ các nguồn khác nhau như một giá trị đơn, một mảng, sự kiện DOM, hoặc kết nối websocket. Ví dụ: of, from, interval, fromEvent, ajax,...

Transformation Operators: Được sử dụng để biến đổi các giá trị trong luồng dữ liệu. Chúng thay đổi hoặc chuyển đổi các giá trị ban đầu thành các giá trị mới. Ví dụ: map, pluck, filter, mergeMap, switchMap, scan,...

Combination Operators: Được sử dụng để kết hợp nhiều Observable lại với nhau. Chúng kết hợp, ghép, hoặc nhóm các Observable lại thành một luồng dữ liệu mới. Ví dụ: merge, concat, combineLatest, forkJoin,...

map: Trong RxJS, Operator map cũng thực hiện một chức năng tương tự, nhưng áp dụng cho mỗi giá trị trong luồng dữ liệu Observable thay vì một mảng. Nó cho phép biến đổi từng giá trị trong luồng dữ liệu thành các giá trị mới bằng cách ánh xạ chúng qua một hàm chuyển đổi

map: Biến đổi từng giá trị trong luồng dữ liệu bằng cách ánh xạ chúng qua một hàm chuyển đổi.

filter: Lọc các giá trị trong luồng dữ liệu dựa trên một điều kiện.

take: Giới hạn số lượng giá trị được lấy từ luồng dữ liệu.

mergeMap / flatMap: Biến đổi từng giá trị trong luồng dữ liệu thành một Observable khác và kết hợp các Observable con thành một luồng dữ liệu duy nhất.

switchMap: Biến đổi từng giá trị trong luồng dữ liệu thành một Observable khác và chỉ phát ra giá trị từ Observable mới nhất, hủy bỏ bất kỳ Observable trước đó.

catchError: Xử lý các lỗi trong luồng dữ liệu bằng cách thay thế chúng bằng giá trị mặc định hoặc luồng dữ liệu thay thế.

tap: Thực hiện một hành động không ảnh hưởng đến giá trị trong luồng dữ liệu, như in ra log hoặc ghi lại các sự kiện.

debounceTime: Chờ một khoảng thời gian sau khi nhận được giá trị cuối cùng, sau đó chỉ phát ra giá trị cuối cùng đó trong luồng dữ liệu.

throttleTime: Chặn việc phát ra các giá trị trong luồng dữ liệu trong một khoảng thời gian sau khi đã phát ra một giá trị.

distinctUntilChanged: Loại bỏ các giá trị trùng lặp liên tiếp trong luồng dữ liệu.

combineLatest: Kết hợp các giá trị từ nhiều Observable thành một luồng dữ liệu mới khi có bất kỳ giá trị nào thay đổi.

forkJoin: Chờ đến khi tất cả các Observable hoàn thành, sau đó phát ra một mảng chứa kết quả từng Observable.

startWith: Chèn một giá trị ban đầu vào đầu luồng dữ liệu.

reduce: Kết hợp các giá trị trong luồng dữ liệu thành một giá trị duy nhất bằng cách sử dụng một hàm kết hợp.

retry: Thử lại Observable khi xảy ra lỗi.
