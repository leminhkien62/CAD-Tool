# 🚀 CAD Tools - Tất cả trong 1 Port

## ✨ Đặc điểm

- **1 Port duy nhất**: http://localhost:801
- **Launcher tích hợp**: Chuyển đổi giữa 2 app ngay trong 1 trang
- **Không cần mở tab mới**: Iframe embed cả 2 ứng dụng
- **Phím tắt**: Alt+1 (CAD Viewer), Alt+2 (STEP Reader)

---

## 🚀 Cách 1: Tự động (Khuyến nghị)

### Bước 1: Build
```bash
# Build CAD Viewer
cd cad-viewer-local
pnpm build

# Build STEP Reader
cd ..\StepFileReader\web
npm run build
```

### Bước 2: Deploy
```powershell
# Chuột phải PowerShell -> Run as Administrator
cd "C:\Users\VN26223\Desktop\View CAD"
.\deploy-1-port.ps1
```

### Bước 3: Mở ứng dụng
**Double-click:** `Mo-CAD-Tools.bat`

Hoặc mở browser: **http://localhost:801**

✅ **XONG!**

---

## 📐 Cấu trúc Deploy

```
http://localhost:801/
├── /                    → Launcher (trang chính)
├── /cad-viewer/         → CAD Viewer  
└── /step-reader/        → STEP Reader
```

**Launcher** tự động load 2 app vào iframe, chuyển đổi bằng tabs ở header!

---

## ⌨️ Phím tắt

Khi ở trong Launcher:
- **Alt + 1** - Chuyển sang CAD Viewer
- **Alt + 2** - Chuyển sang STEP Reader

---

## 🔄 Cập nhật sau khi sửa code

1. Build lại app cần cập nhật
2. Chạy lại: `.\deploy-1-port.ps1`
3. Refresh browser (Ctrl+F5)

Hoặc restart IIS:
```powershell
Restart-Website -Name "CAD-Tools"
```

---

## Các file quan trọng

| File | Mô tả |
|------|-------|
| `deploy-1-port.ps1` | Deploy tự động - Tất cả trên 1 port |
| `CAD-Tools-Launcher.html` | Trang launcher với tabs |
| `Mo-CAD-Tools.bat` | Mở launcher nhanh |

---

## Truy cập

- **Trang chính**: http://localhost:801
- **CAD Viewer**: http://localhost:801/cad-viewer/
- **STEP Reader**: http://localhost:801/step-reader/

**Khuyến nghị**: Dùng trang chính để chuyển đổi giữa 2 app!

---

## Quản lý IIS

### Mở IIS Manager
`Win + R` → Gõ `inetmgr` → Enter

### Start/Stop website
1. Click vào website
2. Bên phải chọn **Start** / **Stop** / **Restart**

### Xem log lỗi
`C:\inetpub\logs\LogFiles\`

---

## Troubleshooting

### Lỗi: "IIS chưa được cài đặt"
**Cài IIS:**
1. `Win + R` → `appwiz.cpl`
2. Turn Windows features on/off
3. Tick **Internet Information Services**
4. OK và đợi cài đặt

### Lỗi: Website không load hoặc iframe trống
**Cài URL Rewrite:**
https://www.iis.net/downloads/microsoft/url-rewrite

### Lỗi: Port đã được sử dụng
**Đổi port khi deploy:**
```powershell
.\deploy-1-port.ps1 -Port 9090
```

### Iframe không hiển thị (X-Frame-Options)
Nếu app không hiển thị trong iframe, check console browser (F12).
Một số app có thể block iframe, nhưng CAD Viewer và STEP Reader nên hoạt động OK.

---

## Tips & Tricks

### Tạo Desktop Shortcut

1. Chuột phải Desktop → New → Shortcut
2. Paste: `http://localhost:801`
3. Đặt tên: `CAD Tools`

### Bookmark trang chính

1. Mở http://localhost:801
2. Nhấn `Ctrl + D` để bookmark
3. Truy cập nhanh mọi lúc!

### Sử dụng phím tắt

- **Alt + 1**: Chuyển sang CAD Viewer
- **Alt + 2**: Chuyển sang STEP Reader

---

## Kiến trúc Deploy

```
localhost:801/
├── index.html          → Launcher (trang chính với tabs)
├── cad-viewer/         → CAD Viewer app
│   ├── index.html
│   └── assets/
├── step-reader/        → STEP Reader app
│   ├── index.html
│   └── assets/
└── web.config          → IIS configuration
```

**1 website, 1 port, 2 apps trong iframe!**

---

## Tổng kết

### ✅ Ưu điểm:
- ⚡ **1 Port duy nhất**: Chỉ cần nhớ localhost:801
- 🎯 **Chuyển đổi nhanh**: Click tab hoặc dùng phím tắt
- � **Responsive**: Header tabs thích ứng mobile
- 🚀 **Lazy loading**: STEP Reader chỉ load khi cần
- 🔄 **Dễ cập nhật**: Build → Deploy lại

### 📁 Files quan trọng:
- `deploy-1-port.ps1` - Deploy script
- `CAD-Tools-Launcher.html` - Trang chính với tabs
- `Mo-CAD-Tools.bat` - Mở nhanh

### 🎉 Kết quả:
**1 trang web duy nhất, chuyển đổi mượt mà giữa 2 ứng dụng!**

---

**Có vấn đề?** Xem chi tiết trong `HUONG-DAN-NHANH-IIS.md`
