import * as XLSX from "xlsx";

const FileUpload = ({ setUrls, setIndex }) => {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet);

      // Make it flexible (url / URL / link)
      const extracted = json
        .map((row) => row.url || row.URL || row.link)
        .filter(Boolean);

      setUrls(extracted);
      setIndex(0);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="upload">
      <input type="file" accept=".xlsx,.csv" onChange={handleFile} />
    </div>
  );
};

export default FileUpload;
