import React from 'react';
import { toast } from "react-toastify";

function TaskStatus({ selectedTickets, onComplete, resolvedTickets }) {
  return (
    <div className="bg-white-900 text-white p-4 rounded-lg shadow-md w-full">
      <h2 className="text-xl text-black font-bold mb-4">Task Status</h2>
      {selectedTickets.length === 0 ? (
        <p className="text-black">Select a ticket to add to Task Status</p>
      ) : (
        <div className="space-y-4">
          {selectedTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white text-gray-900 p-4 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold">{ticket.title}</h3>
              <button
                className="bg-green-600 text-white px-6 py-2 rounded mt-2 hover:bg-green-700 w-full"
                onClick={() => {
                  onComplete(ticket);
                  toast.success(`Ticket "${ticket.title}" marked as resolved`);
                }}
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-lg text-black font-semibold mb-3">Resolved Task</h3>
        {resolvedTickets.length === 0 ? (
          <p className="text-black">No resolved tasks yet.</p>
        ) : (
          <div className="space-y-4">
              {resolvedTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-[#E0E7FF] text-black p-4 rounded-lg shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{ticket.title}</h3>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskStatus;