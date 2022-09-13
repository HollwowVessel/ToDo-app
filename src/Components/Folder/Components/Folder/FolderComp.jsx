import React from 'react';
import { Task } from '../../Task';

export const FolderComp = ({ folder }) => {
  return (
    <div>
      <h1>{folder.title}</h1>
      <div className="tasks">
        {folder?.tasks.length ? (
          folder.tasks.map((task, ind) => <Task key={ind} {...task} />)
        ) : (
          <h1>Нет тасков :(</h1>
        )}
      </div>
    </div>
  );
};
