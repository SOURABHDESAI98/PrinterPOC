// UploadFile.tsx
import React, { useState } from 'react';
//
 const PrinterAttachment: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const uploadFile = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    console.log('File to upload:', file);

    // try {
    //   await axios.post('https://localhost:5001/api/print', formData, {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //   });
    //   alert('Uploaded and sent to printer.');
    // } catch (error) {
    //   alert(error);
    // }
  };

  return (
    <div>
      <input type="file" accept=".pdf,.zpl,.txt" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload & Print</button>
    </div>
  );
};

export default PrinterAttachment;
