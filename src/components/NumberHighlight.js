import React from 'react';
import { Spinner, Card } from 'reactstrap';

const NumberHighlight = ({ backgroundColor, loading, title, unit, total, amount = 0, color = 'info' }) => {
  return (
    <Card className="p-0">
      <div className={`callout callout-${color} m-0 py-2`}>
        <small className="text-muted h5">{title}</small>
        <br />
        <strong className="h2">
          {loading ?<Spinner color={color} size="sm" className="m-0 mr-2" /> : amount}
        </strong>
        <small className="mx-1">{unit}</small>
      </div>
    </Card>
  );
}

export default NumberHighlight;