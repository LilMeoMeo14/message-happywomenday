// Đợi cho toàn bộ trang web được tải xong
document.addEventListener('DOMContentLoaded', () => {

    // 1. Tìm phần tử có id 'greeting-message'
    const greetingElement = document.getElementById('greeting-message');

    // 2. Gắn một trình nghe sự kiện "click" vào nó
    greetingElement.addEventListener('click', () => {
        
        // 3. Hiển thị hộp thoại prompt để hỏi tên
        const ten = prompt("Tên của bạn là gì?", "Tên bạn");

        // 4. Kiểm tra xem người dùng có nhập tên không
        if (ten && ten.trim() !== "") {
            
            // 5. Cập nhật nội dung của phần tử
            greetingElement.textContent = "Gửi đến " + ten.trim() + "!";
        }
    });

});