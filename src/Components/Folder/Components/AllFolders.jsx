import React from 'react';
import { useSelector } from 'react-redux';
import { FolderComp } from './Folder/FolderComp';

export const AllFolders = () => {
  const folders = useSelector((state) => state.changeFolder.folders);
  return (
    <div className="folder-container">
      <h1 onClick={(e) => e.stopPropagation}>Все задачи</h1>
      <div className="folders">
        {folders.map((obj) => {
          if (obj.id === 1) return;
          return <FolderComp key={obj.id} folder={obj} />;
        })}
      </div>
    </div>
  );
};
