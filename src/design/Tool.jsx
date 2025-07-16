import PropTypes from "prop-types";

function Tool({ name, link, desc }) {
  return (
    <div className="flex items-center justify-between w-2/5 py-2 gap-4 hover:bg-gray-300 rounded-md px-3 group transition-all duration-300">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 group-hover:underline group-hover:font-bold"
      >
        {name}
      </a>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
}

Tool.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Tool;
