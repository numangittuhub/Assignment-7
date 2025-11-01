
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import ticketData from "./data/tickets.json";

function App() {
  const [tickets, setTickets] = useState(ticketData);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);

  const handleSelectTicket = (ticket) => {
    if (!selectedTickets.find((t) => t.id === ticket.id)) {
      setSelectedTickets([...selectedTickets, ticket]);
      setTickets(tickets.map((t) => (t.id === ticket.id ? { ...t, status: "In Progress" } : t)));
    }
  };

  const handleCompleteTicket = (ticket) => {
    setSelectedTickets(selectedTickets.filter((t) => t.id !== ticket.id));
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    setResolvedTickets([...resolvedTickets, ticket]);
    setResolvedCount(resolvedCount + 1);
  };

  const inProgressCount = selectedTickets.length;

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-white">
      <Navbar />
      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
     
      <main className="flex flex-col bg- md:flex-row p-4 gap-4 flex-1">
       
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} onSelect={handleSelectTicket} />
          ))}
        </div>
        
        <div className="w-full md:w-1/3">
          <TaskStatus
            selectedTickets={selectedTickets}
            onComplete={handleCompleteTicket}
            resolvedTickets={resolvedTickets}
          />
        </div>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;