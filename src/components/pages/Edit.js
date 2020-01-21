import React from 'react';
import AddLabelForm from '../forms/AddLabelForm';
import DeleteList from '../containers/DeleteList';

const Edit = () => {
  return (
    <div className="page page-edit">
      <DeleteList />
      <AddLabelForm />
    </div>
  );
}

export default Edit;
