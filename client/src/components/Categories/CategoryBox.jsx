import PropTypes from "prop-types";
import querryString from "query-string";
import { useNavigate } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon }) => {
  const navigate = useNavigate();

  const handleClk = () => {
    let currentQuery = { category: label };

    const url = querryString.stringifyUrl({
      url: "/",
      query: currentQuery,
    });

    // console.log(url);
    navigate(url);
  };
  return (
    <div
      onClick={handleClk}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
};

export default CategoryBox;
