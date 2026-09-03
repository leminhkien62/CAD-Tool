# Hướng dẫn sử dụng index.html

## Giới thiệu

File `index.html` là trang launcher đơn giản nối 2 ứng dụng đã deploy riêng biệt.

## Yêu cầu

Bạn cần có 2 ứng dụng đã chạy trên 2 port khác nhau:
- CAD Viewer: http://localhost:8080
- STEP Reader: http://localhost:8081

## Cách dùng

### Option 1: Mở trực tiếp (Không cần deploy)

1. **Double-click** file `index.html`
2. File sẽ mở trong browser mặc định
3. Click vào tabs để chuyển đổi giữa 2 app

✅ **Đơn giản nhất!** Không cần deploy gì cả.

### Option 2: Deploy lên IIS (Để dùng port đẹp hơn)

1. Tạo website mới trong IIS:
   - Site name: `CAD-Hub`
   - Physical path: `C:\Users\VN26223\Desktop\View CAD`
   - Port: `80` hoặc `8888`

2. Truy cập:
   - http://localhost (nếu port 80)
   - http://localhost:8888 (nếu port 8888)

## Tùy chỉnh Port

Nếu 2 app của bạn chạy ở port khác, sửa trong file `index.html`:

```javascript
// Dong 104-105
const CAD_VIEWER_PORT = 8080;   // Thay doi port CAD Viewer
const STEP_READER_PORT = 8081;  // Thay doi port STEP Reader
```

Hoặc sửa trực tiếp:
```html
<!-- Dong 98 -->
<iframe id="frame-cad-viewer" class="app-frame active" src="http://localhost:8080"></iframe>
```

## Phím tắt

- **Alt + 1**: Chuyển sang CAD Viewer
- **Alt + 2**: Chuyển sang STEP Reader

## Tính năng

✅ Chuyển đổi mượt mà giữa 2 app
✅ Lazy loading (STEP Reader chỉ load khi click)
✅ Loading indicator
✅ Responsive design
✅ Keyboard shortcuts
✅ Không cần deploy (mở trực tiếp được)

## Troubleshooting

### Iframe trống hoặc không load

**Kiểm tra:**
1. 2 app có đang chạy không?
   - Mở http://localhost:8080 riêng
   - Mở http://localhost:8081 riêng
   
2. Port có đúng không?
   - Check lại port trong IIS Manager
   - Sửa trong file index.html nếu cần

### Lỗi CORS hoặc X-Frame-Options

Một số app có thể block iframe. Nếu gặp lỗi này:
1. Mở F12 Developer Tools
2. Xem Console có lỗi gì
3. Có thể cần thêm header trong IIS để cho phép iframe

### App không hiển thị đúng

Thử hard refresh:
- Windows: `Ctrl + Shift + R`
- hoặc `Ctrl + F5`

## Cấu trúc

```
index.html (file này)
    ↓
    ├─→ http://localhost:8080 (CAD Viewer) - Trong iframe
    └─→ http://localhost:8081 (STEP Reader) - Trong iframe
```

## Kết luận

**Đây là giải pháp đơn giản nhất!**
- Không cần deploy thêm gì
- Không cần copy file
- Chỉ cần double-click `index.html`
- 2 app vẫn chạy độc lập ở port riêng

🎉 **Bookmark file index.html hoặc tạo shortcut trên Desktop!**
