import add_icon from "@/img/add_icon.svg";

const ImageComponent = () => {
  return (
    <div className="image-component">
      <div className="title">Image List</div>
      <div className="image-list-container">
        <div className="button-pannel">
          <div className="add-image-btn">
            <img src={add_icon} />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Coming soon
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
