import React, { useState, ChangeEvent, DragEvent, useEffect } from "react";
import styles from "./styles.module.scss";

interface ProfilePictureInputProps {
  onChange: (value: any) => void;
  value?: {
    inputType: string;
    file: File | string | null;
    imageUrl: string;
  } | null;
}

const ProfilePictureInput: React.FC<ProfilePictureInputProps> = ({
  onChange,
  value,
}) => {
  const [inputType, setInputType] = useState("local");
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (value) {
      setInputType(value.inputType);
      if (typeof value.file !== "string") setFile(value.file);
      setImageUrl(value.imageUrl);
      setPreview(value.imageUrl);
    }
  }, [value]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile as File);

    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      setPreview(dataUrl);
      onChange({ inputType, file: dataUrl, imageUrl });
    };
    reader.readAsDataURL(selectedFile as Blob);
  };

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    setImageUrl(url);
    setPreview(url);
    onChange({ inputType, file, imageUrl: url });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputType = event.target.value;
    setInputType(newInputType);

    setFile(null);
    setImageUrl("");
    setPreview(null);
    onChange({ inputType: newInputType, file: null, imageUrl: "" });
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files?.[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(selectedFile as Blob);

    onChange({ inputType, file: selectedFile, imageUrl });
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="local"
            checked={inputType === "local"}
            onChange={handleInputChange}
          />
          Upload from Local File
        </label>
        {inputType === "local" && (
          <div>
            <input type="file" onChange={handleFileChange} />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                style={{
                  marginTop: "1rem",
                  maxWidth: "200px",
                  maxHeight: "200px",
                }}
              />
            )}
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              style={{
                border: "1px dashed #aaa",
                padding: "1rem",
                marginTop: "1rem",
              }}
            >
              Drag and drop file here
            </div>
          </div>
        )}
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="url"
            checked={inputType === "url"}
            onChange={handleInputChange}
          />
          Provide URL
        </label>
        {inputType === "url" && (
          <div>
            <input
              type="text"
              placeholder="Enter Image URL"
              value={imageUrl}
              onChange={handleUrlChange}
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                style={{
                  marginTop: "1rem",
                  maxWidth: "200px",
                  maxHeight: "200px",
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePictureInput;
