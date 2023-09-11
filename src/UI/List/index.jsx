const componentName = ({ data: { images, title, size, narxi } }) => {
  return (
    <>
      <div className="gallary__boots_div">
        <img src={images} alt="rasm" />
        <div className="puma_div">
          <h3 className="gallary__boots_title">{title}</h3>
          <p className="gallary__boots_text">
            Size: <b>{size}</b>
          </p>
          <p className="gallary__boots_text" style={{ padding: "10px 0" }}>
            Price: <b> {narxi}</b>
          </p>
          <button className="nav__btn">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default componentName;
