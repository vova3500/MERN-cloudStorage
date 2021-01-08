import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDir, getFiles } from "../../redux/actions/file";

import Button from "../../utisl/button/Button";
import FileList from "./fileList/FileList";

import "./disk.css";

const Disk = () => {
  const dispatch = useDispatch();

  const currentDir = useSelector(({ file }) => file.currentDir);

  React.useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir, dispatch]);

  const headleAddDir = () => {
    let result = prompt("Введите название папки");
    dispatch(createDir(currentDir, result));
  };

  return (
    <div className="disk">
      <div className="disk__btns">
        <div className="disk__back">
          <Button>Назад</Button>
        </div>
        <div onClick={headleAddDir} className="disk__create">
          <Button>Cоздать папку</Button>
        </div>
      </div>
      <FileList />
    </div>
  );
};

export default Disk;
