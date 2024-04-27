import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const DragDrop = () => {
  const [file, setFile] = useState(null);
  console.log(file)
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div>
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    </div>
  );
};

export default DragDrop;
