import add_icon from "@/img/add_icon.svg";

const ImageComponent = () => {
  return (
    <div className="image-component">
      <div className="title">Image List</div>
      <div className="image-list-container">
        <div className="image-main-add">
          <img src={add_icon} />
        </div>
        <div className="loading-container">
          {/* <img
            src={loading_icon}
            className="loading-animation"
            alt="Loading images..."
          />
          <p>Loading images...</p> */}
          Coming soon
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
