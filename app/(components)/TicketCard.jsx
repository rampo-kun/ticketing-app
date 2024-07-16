"use client";

import Link from "next/link";
import DeleteBlock from "./DeleteBlock";
import Priority from "./Priority";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formatttedDate = date.toLocaleString("en-US", { options });

    return formatttedDate;
  };

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover transition-colors duration-300 rounded-md shadow-lg p-3 m-2 group">
      <div className="flex mb-3">
        <Priority priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} className="group-hover:text-green-400" />
        </div>
      </div>
      <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">{formatTimestamp(ticket.createdAt)}</p>
            <ProgressBar progress={ticket.progress} />
          </div>
          <div className="ml-auto items-end">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
