import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActive, setFolders } from '../../../redux/slices/folderSlice';

export const Task = ({ id, desc, checked }) => {
  const dispatch = useDispatch();
  const folder = useSelector((state) => state.changeFolder.currentFolder);
  function handleActive() {
    dispatch(setActive({ id: id, checked: !checked }));
    dispatch(
      setFolders({
        ...folder,
        tasks: [
          ...folder.tasks.filter((task) => task.id !== id),
          { id: id, desc: desc, checked: !checked },
        ],
      })
    );
  }
  return (
    <div className="task">
      <div className="task-container">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => handleActive()}
        />
        <span className="checkmark"></span>
      </div>
      <p
        className="task__desc"
        style={{ textDecoration: checked ? 'line-through' : 'none' }}
      >
        {desc}
      </p>
    </div>
  );
};
