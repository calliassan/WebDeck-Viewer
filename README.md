WebDeck Viewer

A simple and efficient React application to view multiple websites by uploading an Excel or CSV file.

---

Features

- Upload Excel (.xlsx) or CSV files
- Automatically load and display websites
- Navigate using buttons
- Keyboard navigation (Left/Right arrows)
- Auto-fix URLs (adds https:// if missing)
- Error handling for invalid or blocked websites
- Open website in new tab if iframe fails

---

Project Structure

src/
App.jsx
components/
FileUpload.jsx
Viewer.jsx
Controls.jsx


---

Excel Format
Make sure your file has a column like:

| url |
|-----|
| https://google.com |
| https://github.com |
| youtube.com |

---

Installation
```bash
npm install
npm run dev
