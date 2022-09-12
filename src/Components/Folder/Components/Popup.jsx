import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, setFolders } from '../../../redux/slices/folderSlice';
import './style.scss';

export const Popup = ({ handleClick }) => {
  const dispatch = useDispatch();
  const { folders, currentFolder } = useSelector((state) => state.changeFolder);
  const [text, setText] = useState('');
  function handleAddTask(e, text) {
    if (!text.trim().length) return;
    if (e.type !== 'click' && e.type !== 'keyup') {
      return;
    }
    if (e.type === 'keyup' && e.key !== 'Enter') {
      return;
    }
    setText('');
    dispatch(addTask({ desc: text, checked: false }));
    let id;
    if (folders[0].tasks.length) {
      id = folders[0].tasks[folders[0].tasks.length - 1].id + 1;
    } else {
      id = 1;
    }
    console.log(id);
    dispatch(
      setFolders({
        ...currentFolder,
        tasks: [...currentFolder.tasks, { id, desc: text, checked: false }],
      })
    );
    handleClick();
  }

  return (
    <div className="task-popup">
      <input
        placeholder="Текст задачи"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={(e) => handleAddTask(e, e.target.value)}
      />
      <div>
        <button className="add" onClick={(e) => handleAddTask(e, text)}>
          Добавить задачу
        </button>
        <button className="close" onClick={handleClick}>
          Отмена
        </button>
      </div>
    </div>
  );
};
