import React, { useEffect, useState } from 'react';
import './Receipt.css';

function Receipt() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // Here you would fetch data from the myAARP Medicare API
    const samplePlans = [
      'Plan 1',
      'Plan 2',
      'Plan 3',
    ];
    setPlans(samplePlans);
  }, []);

  return (
    <div className="receipt">
      <h2>Your Medicare Plans</h2>
      {plans.map((plan, index) => (
        <div key={index} className="receipt-item">
          {plan}
        </div>
      ))}
    </div>
  );
}

export default Receipt;
