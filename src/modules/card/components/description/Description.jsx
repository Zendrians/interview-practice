import "./Description.scss";

const Description = ({ name, description, price }) => {
  const usdFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="description">
      <h4 className="description__product-name">{name}</h4>
      <p className="description__description">{description}</p>
      <p className="description__price">
        <strong>{usdFormatter.format(price)}</strong>
      </p>
    </div>
  );
};

export default Description;
