import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "../../redux/actions/file";

import Button from "../../utisl/button/Button";
import FileList from "./fileList/FileList";

import "./disk.css";

const Disk = () => {
  const dispatch = useDispatch();

  const currentDir = useSelector(({ file }) => file.currentDir);

  React.useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir, dispatch]);

  return (
    <div className="disk">
      <div className="disk__btns">
        <div className="disk__back">
          <Button>Назад</Button>
        </div>
        <div className="disk__create">
          <Button>Cоздать папку</Button>
        </div>
      </div>
      <FileList />
    </div>
  );
};

export default Disk;
