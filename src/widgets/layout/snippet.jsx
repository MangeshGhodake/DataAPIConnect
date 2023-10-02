import { Typography, IconButton } from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";

export const Snippet = ({ title, code }) => {
  const buttonClicked = () => {
    navigator.clipboard.writeText(code);
  };
  return (
    <div>
      <div className="item-center flex justify-between px-3 ">
        <Typography variant="h6" component="p">
          {title}
        </Typography>
        <IconButton variant="text" onClick={buttonClicked}>
          <i className="fa-solid fa-clipboard" />
        </IconButton>
      </div>
      <div className="overflow-x-scroll bg-gray-800 p-2 text-white">
        <Typography
          variant="small"
          component="pre"
          style={{
            fontFamily: "sans-serif",
          }}
        >
          <pre>{code}</pre>
        </Typography>
      </div>
    </div>
  );
};

Snippet.defaultProps = {
  title: "",
  code: "",
};

Snippet.propTypes = {
  title: PropTypes.string,
  code: PropTypes.string,
};
