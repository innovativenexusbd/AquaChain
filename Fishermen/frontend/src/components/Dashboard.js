import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [fishermen, setFishermen] = useState([]);
    const [approved, setApproved] = useState(false);

    useEffect(() => {
        const fetchUnapprovedFishermen = async () => {
            try {
                const res = await apiService.getUnapprovedFishermen();
                setFishermen(res.data);
            } catch (err) {
                alert('Error: ' + err.message);
            }
        };

        fetchUnapprovedFishermen();

        const fetchApprovalStatus = async () => {
            try {
                const res = await apiService.getApprovalStatus();
                setApproved(res.data.approved);
            } catch (err) {
                alert('Error: ' + err.message);
            }
        };

        fetchApprovalStatus();
    }, []);

    const approveFisherman = async (id) => {
        try {
            await apiService.approveFisherman(id);
            alert('Fisherman approved');
            setFishermen(fishermen.filter(fisherman => fisherman._id !== id));
        } catch (err) {
            alert('Error: ' + err.message);
        }
    };

    return (
        <div>
            <h2>Dashboard</h2>
            {approved ? (
                <div>
                    <h3>Fisherman Approved Links</h3>
                    <ul>
                        <li><Link to="/fish-data">Fish Data Entering</Link></li>
                        <li><Link to="/iot-connection">IoT Connection Page</Link></li>
                        <li><Link to="/fish-stock-management">Fish Stock Management</Link></li>
                        <li><Link to="/fishing-quota-management">Fishing Quota Management</Link></li>
                        <li><Link to="/resource-allocation">Resource Allocation</Link></li>
                        <li><Link to="/microloan">Microloan Requesting and Receiving</Link></li>
                        <li><Link to="/crowdfunding">Crowdfunding Request and Receive</Link></li>
                        <li><Link to="/marketplace">Marketplace Access</Link></li>
                        <li><Link to="/orders-payments">Orders and Payments</Link></li>
                        <li><Link to="/reviews">Review Watching Section</Link></li>
                        <li><Link to="/carbon-footprint">Carbon Footprint Tracking Section</Link></li>
                        <li><Link to="/waste-management">Waste Management Data and Proof Entry</Link></li>
                        <li><Link to="/disaster-recovery">Disaster Recovery Data Entry and Proof</Link></li>
                        <li><Link to="/data-analytics">Data Analytics and Reporting</Link></li>
                        <li><Link to="/regulatory-compliance">Regulatory Compliance</Link></li>
                        <li><Link to="/export-documentation">Export Documentation</Link></li>
                        <li><Link to="/sustainability-certification">Sustainability Certification</Link></li>
                    </ul>
                </div>
            ) : (
                <div>
                    <h3>Pending Approval</h3>
                    <p>Your account is pending approval. Please wait for the admin to approve your account.</p>
                </div>
            )}

            <h3>Unapproved Fishermen</h3>
            <ul>
                {fishermen.map(fisherman => (
                    <li key={fisherman._id}>
                        {fisherman.name} - {fisherman.email}
                        <button onClick={() => approveFisherman(fisherman._id)}>Approve</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
