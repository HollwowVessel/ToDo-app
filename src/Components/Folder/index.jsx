import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es';
import './style.scss';
import { onLoad } from '../../redux/slices/folderSlice';
import { FolderContainer } from './Components/FolderContainer';
import { AllFolders } from './Components/AllFolders';

export const Folder = () => {
  const dispatch = useDispatch();
  const folder = useSelector((state) => state.changeFolder.currentFolder).id;
  useEffect(() => {
    dispatch(onLoad());
  });
  if (folder === 1) {
    return <AllFolders />;
  } else {
    return <FolderContainer />;
  }
};
