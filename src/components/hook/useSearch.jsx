import { useState } from "react";
export default function useSearch(Data) {
    // Quản lý từ khóa người dùng nhập vào
    const [searchTerm, setSearchTerm] = useState("");
    // Tự động lọc danh sách dựa trên searchTerm
    const filteredData = Data.filter((item) =>
        item.tensp.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Trả về một đối tượng chứa 3 thành phần quan trọng
    return {
        searchTerm,
        // Để hiển thị trong ô input
        setSearchTerm,
        // Để cập nhật khi người dùng gõ phím
        filteredData
        // Danh sách sau khi đã lọc để hiển thị lên UI
    };
}