import PropTypes from "prop-types";

const Button = ({ name, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center py-2 px-4 rounded-lg text-stone-200 bg-green-600 hover:bg-green-800 disabled:bg-gray-500 transition-colors duration-300"
      disabled={disabled}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
