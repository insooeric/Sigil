import { useEffect, useState, useRef } from "react";
import default_preview_icon from "@/img/default_preview_icon.svg";
import invalid_image_icon from "@/img/invalid_image_icon.svg";
import loading_icon from "@/img/loading_icon.svg";

const SandboxPage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageLoadError, setImageLoadError] = useState("");
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
    setIsLoadingImage(true);
    if (!imageUrl) {
      setImageLoadError("");
      setIsLoadingImage(false);
      return;
    }

    const img = new Image();
    img.onload = () => {
      setImageLoadError("");
      setIsLoadingImage(false);
    };
    img.onerror = () => {
      setImageLoadError("invalid");
      setIsLoadingImage(false);
    };

    img.src = imageUrl;
  }, [imageUrl]);

  return (
    <div className="sandbox-page">
      <h1>Sandbox</h1>
      <p className="description">
        View your badge by copying and pasting the url!
      </p>
      <div className="sandbox-container">
        <div className="url-text">
          <textarea
            ref={textAreaRef}
            value={imageUrl}
            placeholder="Put your url here to see the preview"
            onChange={(e) => {
              setImageUrl(e.target.value);
              setImageLoadError("");
            }}
            required
          />
        </div>
        <div className="image-container">
          {imageUrl ? (
            imageLoadError === "invalid" ? (
              <div className="error-container">
                <img src={invalid_image_icon} alt="Invalid Image" />
                <p>
                  ( ؕؔʘ̥̥̥̥ ه ؔؕʘ̥̥̥̥ )?
                  <br />
                  Unable to load the image
                </p>
              </div>
            ) : isLoadingImage === true ? (
              <div className="loading-container">
                <img src={loading_icon} alt="Loading" />
                Loading image...
              </div>
            ) : (
              <img src={imageUrl} alt="Preview" />
            )
          ) : (
            <div className="default-container">
              <img src={default_preview_icon} alt="Default" />
            </div>
          )}
        </div>
      </div>
      {/* {isLoadingImage == true ? "Loading image" : "Loaded"} */}
    </div>
  );
};

export default SandboxPage;
