import PropTypes from "prop-types";
import querryString from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon }) => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  /* ------- 1. Create query string ------ */
  const handleClk = () => {
    let currentQuery = { category: label };
    const url = querryString.stringifyUrl({
      url: "/",
      query: currentQuery,
    });
    // url output-----> /Category=label

    /* ------------- 2. Set query string in url ------------- */
    navigate(url);
  };
  return (
    <div
      onClick={handleClk}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        category === label && "border-b-neutral-800 text-neutral-800"
      } `}
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
