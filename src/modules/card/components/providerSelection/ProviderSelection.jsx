import "./ProviderSelection.scss";

const ProviderSelection = ({ providers }) => {
  return (
    <div className="provider-selection">
      <div className="provider-selection__wrapper">
        <label className="provider-selection__label" htmlFor="supplier">
          Supplier:
        </label>
        <select className="provider-selection__select" id="supplier">
          {providers.map((provider) => (
            <option key={provider.id} value={provider.id}>
              {provider.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProviderSelection;
