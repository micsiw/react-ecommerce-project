function ShopSelect({ options, orderSelectedOption, setOrderSelectedOption }) {
  return (
    <select
      value={orderSelectedOption}
      onChange={(e) => {
        setOrderSelectedOption(e.target.value);
      }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export default ShopSelect;
