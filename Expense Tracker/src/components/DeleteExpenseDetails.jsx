import React from "react";

function DeleteExpenseDetails({ handleDeletePopup }) {
  return (
    <>
      <div className="overlay">
        <div className="popupConfirm">
          <h4>Do you really want to delete the expense?</h4>
          <div className="buttonGroup">
            <button className="confirmButton" onclick="confirmDelete()">
              Yes
            </button>
            <button className="cancelButton" onClick={()=>{handleDeletePopup(false)}}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default DeleteExpenseDetails;
