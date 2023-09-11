const index = ({ user: { title, images, span } }) => {
  return (
    <>
      <div className="intro__card">
        <img src={images} alt="card" />
        <h3 className="intro__card_title" title-id="cardtitle">
          {title}
        </h3>
        <p className="intro__card_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          feugiat mauris nisl est accumsan quis tempus.
        </p>
        <span className="intro__card_span">
          {span} <i className="bi bi-chevron-right"></i>
        </span>
      </div>
    </>
  );
};

export default index;
