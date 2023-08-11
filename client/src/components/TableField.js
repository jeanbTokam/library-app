import React from 'react';

const TableField = ({ fieldName, settingsField, removeBook, editBook }) => {
  return (
    <div className="tableField">
      {fieldName}
      {settingsField && (
        <>
          <i onClick={editBook} className="fa-solid fa-pen-to-square"></i>
          <i onClick={removeBook} className="fa-solid fa-trash"></i>
        </>
      )}
    </div>
  );
}

export default TableField;