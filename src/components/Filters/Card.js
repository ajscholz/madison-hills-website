import React from 'react';

export default ({ data }) => {
  return (
    <div className="card">
      <h5>{data.title}</h5>
      <h6>{data.date}</h6>
      <h6>{data.communicator}</h6>
      <h6>
        {data.topics
          .sort()
          .toString()
          .replace(/,/g, ', ')}
      </h6>
    </div>
  );
};
