import React from "react";
import { useSelector } from "react-redux";

import List from "./list/List";

import "./fileList.css";

const FileList = () => {
  const files = useSelector(({ file }) => file.files);

  return (
    <div className="filelist">
      <div className="filelist__header">
        <div className="filelist__type">Тип</div>
        <div className="filelist__name">Название</div>
        <div className="filelist__data">Дата</div>
        <div className="filelist__size">Размер</div>
      </div>
      {!files.length ? (
        <div className="loader">Файлы не найдены</div>
      ) : (
        files.map((file) => <List {...file} />)
      )}
    </div>
  );
};

export default FileList;
