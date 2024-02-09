import PropTypes from "prop-types";
const Option = ({
  optionName,
  handleClick,
  value,
  selected,
  currSelected,
  currquestion,
}) => {
  return (
    <div
      className={
        " w-[300px] md:w-[500px] md:py-3 text-slate-400 border-2 border-slate-200 rounded-full py-2 px-4 hover:translate-x-4 hover:bg-slate-200 transition-all duration-250 ease-in-out " +
        `${
          selected && currSelected
            ? "bg-cyan-500 text-black translate-x-4 hover:bg-cyan-500"
            : ""
        }` +
        `${
          selected && !currSelected
            ? "bg-amber-500 text-black hover:bg-amber-500 hover:translate-x-0"
            : ""
        }`
      }
      onClick={() => {
        handleClick(value);
      }}
    >
      {optionName}
    </div>
  );
};
Option.propTypes = {
  optionName: PropTypes.string,
  handleClick: PropTypes.func,
  value: PropTypes.number,
  selected: PropTypes.bool,
  currSelected: PropTypes.bool,
  currquestion: PropTypes.number,
};
export default Option;
