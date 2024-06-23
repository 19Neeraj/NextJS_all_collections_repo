// components/ConfirmationModal.js
import React from "react";

const ConfirmationModal = ({ show, onConfirm, onCancel}) => {
  if (!show) return null;

  return (
    // <section className=" fixed w-[100vw] h-[100vh] bg-bodyColor">
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
        <div className="bg-white p-6 rounded-md shadow-md w-96">
          <h2 className="text-xl text-textDark font-semibold mb-4">Confirm Delete</h2>
          <p className="mb-6 text-textDark">
            Are you sure you want to delete this Post? This Post cannot be
            undone.
          </p>
          <div className="flex justify-end">
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-gray-300 rounded-md text-gray-700 mr-2 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    // </section>
  );
};

export default ConfirmationModal;
