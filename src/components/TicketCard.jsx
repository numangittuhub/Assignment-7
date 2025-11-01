import React from 'react';
import { toast } from "react-toastify";

function TicketCard({ ticket, onSelect }) {
  const handleClick = () => {
    onSelect(ticket);
    toast.info(`Ticket "${ticket.title}" added to Task Status`);
  };

  return (
    <div
      className="bg-white p-3 md:p-4 rounded-lg border border-gray-200 shadow-sm cursor-pointer transition duration-200 hover:bg-gray-50"
      onClick={handleClick}
    >
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-1 md:space-y-0">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug">{ticket.title}</h3>
        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap">
          {ticket.status}
        </span>
      </div>
      
      
      <p className="text-xs md:text-sm text-gray-600 mt-2">{ticket.description}</p>
      
     
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-3 text-xs text-gray-500 space-y-2 md:space-y-0">
        <div className="flex flex-wrap items-center space-x-2">
          <span className="bg-red-100 text-red-800 font-medium px-2 py-0.5 rounded">
            #{ticket.id} {ticket.priority}
          </span>
          <span>{ticket.customer}</span>
        </div>
        <span className="md:ml-auto">{new Date(ticket.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default TicketCard;