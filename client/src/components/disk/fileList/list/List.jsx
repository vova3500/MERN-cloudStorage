import React from "react";

import dir from "../../../../assets/images/dir.svg";
import file from "../../../../assets/images/file.svg";

import "./file.css";

const List = ({ type, path, date, size }) => {
  return (
    <div className="file">
      <div className="file__type">
        {type === "dir" ? <img src={dir} alt="" /> : <img src={file} alt="" />}
      </div>
      <div className="file__name">{path}</div>
      <div className="file__data">{date}</div>
      <div className="file__size">{size}</div>
    </div>
  );
};

export default List;
