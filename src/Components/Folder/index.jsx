import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es';
import { Task } from './Task';
import './style.scss';
import { Popup } from './Components/Popup';
import { editFolder, onLoad } from '../../redux/slices/folderSlice';
import { FolderContainer } from './Components/FolderContainer';
import { AllFolders } from './Components/AllFolders';

export const Folder = () => {
	const dispatch = useDispatch();
	const folder = useSelector((state) => state.changeFolder.currentFolder).id;
	console.log(folder);
	useEffect(() => {
		dispatch(onLoad());
	});
	if (folder === 1) {
		return <AllFolders />;
	} else {
		return <FolderContainer />;
	}
};
