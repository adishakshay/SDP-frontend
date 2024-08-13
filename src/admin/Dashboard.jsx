import React, { useState, useEffect } from 'react';
import '../asserts/Dashboard.css'; // Make sure to correct the path

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [paymentCount, setPaymentCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('http://localhost:8082/adminuser/users/count');
        const userCount = await userResponse.json();
        setUserCount(userCount);

        const eventResponse = await fetch('http://localhost:8082/adminuser/events/count');
        const eventCount = await eventResponse.json();
        setEventCount(eventCount);

        const paymentResponse = await fetch('http://localhost:8082/adminuser/payments/count');
        const paymentCount = await paymentResponse.json();
        setPaymentCount(paymentCount);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="dashboard-stats-container">
        <div className="dashboard-stat-box">
          <div className="stat-value">{userCount}</div>
          <div className="stat-label">Total Users</div>
        </div>
        <div className="dashboard-stat-box">
          <div className="stat-value">{eventCount}</div>
          <div className="stat-label">Total Event Registrations</div>
        </div>
        <div className="dashboard-stat-box">
          <div className="stat-value">{paymentCount}</div>
          <div className="stat-label">Total Payments</div>
        </div>
      </div>
      {/* Remove the charts temporarily */}
      <div className="dashboard-charts">
        <p>Charts will appear here.</p>
      </div>
    </div>
  );
};

export default Dashboard;
