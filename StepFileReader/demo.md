# Hướng dẫn Deploy meshStep Web lên IIS

## Tổng quan

Project này là một **Vite static site** (HTML + JS + CSS thuần).  
Không cần Node.js runtime trên server — chỉ cần IIS serve thư mục `dist/` sau khi build.

---

## Bước 1 — Cài đặt prerequisites (máy build)

Cần có **Node.js 18+** trên máy dùng để build (không cần cài trên server IIS).

```powershell
# Kiểm tra version
node -v   # phải >= 18
npm -v
```

---

## Bước 2 — Build project

```powershell
# Vào thư mục web
cd "C:\Users\VN26223\Downloads\meshStep-main\meshStep-main\web"

# Cài dependencies (chỉ cần chạy lần đầu hoặc khi thay đổi package.json)
npm install

# Build ra thư mục dist/
npm run build
```

Sau khi chạy xong, thư mục `web\dist\` sẽ chứa toàn bộ file tĩnh cần deploy:

```
web\dist\
  index.html
  assets\
    *.js
    *.css
    ...
```

---

## Bước 3 — Cài đặt IIS trên Windows Server

Nếu IIS chưa được bật:

1. Mở **Server Manager** → **Add Roles and Features**
2. Chọn **Web Server (IIS)**
3. Trong **Role Services**, đảm bảo chọn:
   - **Static Content**
   - **URL Rewrite** ← cần cài thêm module riêng (xem bên dưới)
4. Hoàn thành wizard

### Cài URL Rewrite Module

Tải và cài từ: https://www.iis.net/downloads/microsoft/url-rewrite  
(Bắt buộc để file `web.config` hoạt động đúng)

---

## Bước 4 — Tạo Site trên IIS

### Cách 1: Dùng IIS Manager (GUI)

1. Mở **IIS Manager** (`inetmgr`)
2. Trong panel trái, click chuột phải vào **Sites** → **Add Website**
3. Điền:
   - **Site name**: `meshStep` (hoặc tên tuỳ ý)
   - **Physical path**: trỏ tới thư mục `dist\` (xem Bước 5)
   - **Binding**: chọn port (ví dụ `8080`) hoặc hostname
4. Click **OK**

### Cách 2: Dùng PowerShell

```powershell
Import-Module WebAdministration

New-WebSite -Name "meshStep" `
            -Port 8080 `
            -PhysicalPath "C:\inetpub\wwwroot\meshstep" `
            -ApplicationPool "DefaultAppPool"
```

---

## Bước 5 — Copy file dist lên server

Copy toàn bộ nội dung thư mục `web\dist\` vào Physical Path đã chọn ở Bước 4.  
Ví dụ copy vào `C:\inetpub\wwwroot\meshstep\`:

```powershell
# Chạy trên máy build (hoặc dùng robocopy / xcopy)
robocopy "web\dist" "C:\inetpub\wwwroot\meshstep" /E /PURGE
```

Đảm bảo file `web.config` cũng nằm trong thư mục đó:

```
C:\inetpub\wwwroot\meshstep\
  index.html
  web.config          ← file này quan trọng
  assets\
    ...
```

> **Lưu ý**: File `web.config` đã được tạo sẵn tại `web\web.config`.  
> Khi chạy `npm run build`, Vite sẽ copy nó vào `dist\` nếu đặt trong thư mục `public\`.  
> Xem Bước 6 để tự động hoá bước này.

---

## Bước 6 — Tự động copy web.config vào dist khi build

Để `web.config` tự động xuất hiện trong `dist\` mỗi lần build:

```powershell
# Tạo thư mục public nếu chưa có
mkdir "web\public"

# Copy web.config vào public/ (Vite sẽ tự copy sang dist/)
copy "web\web.config" "web\public\web.config"
```

Từ đó, mỗi lần chạy `npm run build` thì `dist\web.config` sẽ có sẵn.

---

## Bước 7 — Cấp quyền cho IIS

IIS cần quyền đọc thư mục. Chạy lệnh sau (thay đường dẫn nếu khác):

```powershell
# Cấp quyền Read cho IIS_IUSRS
icacls "C:\inetpub\wwwroot\meshstep" /grant "IIS_IUSRS:(OI)(CI)R" /T
```

---

## Bước 8 — Kiểm tra

1. Mở **IIS Manager** → chọn site → click **Browse** (hoặc mở trình duyệt)
2. Truy cập `http://localhost:8080` (hoặc port đã cấu hình)
3. App phải load được và cho phép mở file STEP

---

## Cấu hình deploy deploy trên subpath (tuỳ chọn)

Nếu muốn deploy tại `http://server/meshstep/` thay vì root:

Vite config đã có `base: "./"` — URL tương đối — nên **không cần rebuild**.  
Chỉ cần tạo **Application** trong IIS thay vì Site:

1. IIS Manager → Sites → chọn site cha (Default Web Site)
2. Chuột phải → **Add Application**
3. Alias: `meshstep`, Physical path: trỏ tới thư mục `dist\`

---

## Xử lý lỗi thường gặp

| Lỗi | Nguyên nhân | Cách sửa |
|-----|-------------|----------|
| HTTP 404 khi reload trang | URL Rewrite chưa cài | Cài module URL Rewrite từ iis.net |
| JS/CSS không load (MIME error) | MIME type chưa đăng ký | Đã có trong `web.config`, kiểm tra file có trong dist chưa |
| HTTP 500.19 | Lỗi syntax trong `web.config` | Xem Event Viewer hoặc IIS log |
| Trang trắng, console lỗi CORS | Worker script bị block | Kiểm tra response header `Content-Type` cho file `.js` |
| "The URL Rewrite Module not installed" | Module thiếu | Cài URL Rewrite từ link ở Bước 3 |

---

## Tóm tắt nhanh (checklist)

- [ ] Cài Node.js trên máy build
- [ ] Chạy `npm install` và `npm run build` trong thư mục `web/`
- [ ] Bật IIS + cài URL Rewrite Module
- [ ] Tạo site IIS trỏ vào thư mục `dist/`
- [ ] Copy `web.config` vào cùng thư mục với `index.html`
- [ ] Cấp quyền `IIS_IUSRS` đọc thư mục
- [ ] Truy cập thử và kiểm tra console trình duyệt
