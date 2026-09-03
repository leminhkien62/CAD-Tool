# Hướng dẫn Deploy CAD Viewer lên IIS

## Bước 1: Build dự án

```bash
pnpm build
```

Lệnh này sẽ build tất cả các packages, bao gồm:
- `cad-viewer-example` (full-featured viewer)
- `cad-simple-viewer-example` (simple viewer)

## Bước 2: Chọn phiên bản để deploy

Bạn có 2 lựa chọn:

### Option 1: Full-featured Viewer (Khuyến nghị)
- Thư mục build: `packages/cad-viewer-example/dist/`
- Chứa đầy đủ tính năng
- URL mặc định: http://localhost/

### Option 2: Simple Viewer
- Thư mục build: `packages/cad-simple-viewer-example/dist/`
- Giao diện đơn giản hơn
- URL mặc định: http://localhost/

## Bước 3: Cài đặt trên IIS

### 3.1. Mở IIS Manager
1. Nhấn `Windows + R`
2. Gõ `inetmgr` và nhấn Enter

### 3.2. Tạo website mới

1. **Chuột phải vào "Sites"** → Chọn **"Add Website"**
2. Điền thông tin:
   - **Site name**: `CAD-Viewer` (hoặc tên bạn muốn)
   - **Physical path**: Browse đến thư mục:
     - Full viewer: `E:\Cad_View\cad-viewer\packages\cad-viewer-example\dist`
     - Simple viewer: `E:\Cad_View\cad-viewer\packages\cad-simple-viewer-example\dist`
   - **Port**: `8080` (hoặc port khác bạn muốn)
   - **Host name**: (để trống hoặc nhập domain nếu có)

3. Nhấn **OK**

### 3.3. Cấu hình URL Rewrite (Quan trọng!)

IIS cần được cấu hình để hỗ trợ Single Page Application (SPA). File `web.config` đã được tạo tự động.

**Nếu chưa có URL Rewrite Module:**
1. Download từ: https://www.iis.net/downloads/microsoft/url-rewrite
2. Cài đặt và khởi động lại IIS

### 3.4. Kiểm tra MIME Types

IIS cần hiểu các file types của ứng dụng web hiện đại:

1. Chọn website vừa tạo
2. Double-click **"MIME Types"**
3. Kiểm tra các extensions sau đã có chưa:
   - `.js` → `application/javascript`
   - `.json` → `application/json`
   - `.wasm` → `application/wasm`
   - `.svg` → `image/svg+xml`
   - `.woff` → `font/woff`
   - `.woff2` → `font/woff2`

Nếu thiếu, thêm vào bằng cách:
- Chuột phải → **Add**
- File extension: `.wasm`
- MIME type: `application/wasm`

## Bước 4: Cấu hình Static File Caching (Tùy chọn)

Để tăng hiệu suất:

1. Chọn website
2. Double-click **"HTTP Response Headers"**
3. Chuột phải → **"Set Common Headers"**
4. Check **"Enable HTTP keep-alive"**

## Bước 5: Start Website

1. Chọn website vừa tạo
2. Chuột phải → **"Manage Website"** → **"Start"**

## Bước 6: Truy cập ứng dụng

Mở trình duyệt và truy cập:
```
http://localhost:8080
```

(Thay `8080` bằng port bạn đã cấu hình)

## Troubleshooting

### Lỗi 404 Not Found khi reload trang
→ Đảm bảo đã cài đặt URL Rewrite và file `web.config` tồn tại

### Lỗi 500 Internal Server Error
→ Kiểm tra file `web.config` có đúng cú pháp không
→ Xem IIS logs tại: `C:\inetpub\logs\LogFiles\`

### Không load được file .wasm
→ Kiểm tra MIME type cho `.wasm` đã được thêm

### Lỗi CORS khi load DWG/DXF từ nguồn khác
→ Thêm CORS headers vào `web.config` nếu cần

## Production Deployment

Khi deploy lên production:

1. **Tối ưu hóa**: Build đã được optimize rồi
2. **HTTPS**: Bật SSL certificate
3. **Compression**: Bật Gzip/Brotli compression trong IIS
4. **Caching**: Cấu hình cache headers cho static assets
5. **Security**: Cấu hình security headers (CSP, X-Frame-Options, etc.)

## Cập nhật ứng dụng

Khi có thay đổi:

1. Build lại: `pnpm build`
2. Stop website trong IIS
3. Copy files mới từ `dist` folder
4. Start website lại

Hoặc sử dụng deployment script tự động (xem file `deploy-to-iis.ps1`)
