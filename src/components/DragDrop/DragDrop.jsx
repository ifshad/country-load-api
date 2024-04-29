import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const DragDrop = () => {
  const [file, setFile] = useState(null);
  console.log(file);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} classes="drop_area" />
    </div>
  );
};

export default DragDrop;
