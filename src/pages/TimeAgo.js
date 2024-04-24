import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ prop }) => {
  let timeAgo = "";
  if (prop) {
    const date = parseISO(prop);
    const timePrediod = formatDistanceToNow(date);
    timeAgo = `${timePrediod} ago `;
  }

  return (
    <div className="d-flex justify-content-end p-2">
      <span title={prop}>
        &nbsp; <i className="text-light fw-medium fst-normal fs-6">{timeAgo}</i>
      </span>
    </div>
  );
};

export default TimeAgo;
