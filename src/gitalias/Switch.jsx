import PropTypes from "prop-types";

function Switch({ values, selected, onSelect, elementWidth = 80 }) {
  const selectedIndex = values.indexOf(selected);
  return (
    <div
      style={{ width: values.length * elementWidth + 10 }}
      className="relative flex gap-[10px] bg-stone-700 text-stone-400 items-center justify-center rounded-md h-[45px] px-[5px] py-[5px]"
    >
      {values.map((value, index) => (
        <div
          key={index}
          style={{ width: elementWidth }}
          className={`cursor-pointer select-none px-2 py-4 flex items-center justify-center z-10 ${
            selectedIndex === index ? "text-stone-200" : ""
          }`}
          onClick={() => onSelect(value)}
        >
          <p>{value}</p>
        </div>
      ))}
      <div
        style={{ left: selectedIndex * elementWidth + 5, width: elementWidth }}
        className="absolute bg-stone-900 h-[40px] z-0 rounded-md transition-all duration-300"
      ></div>
    </div>
  );
}

Switch.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  elementWidth: PropTypes.number,
};

export default Switch;
