import axios from "axios";
import React, { useEffect } from "react";
import axiosInstance from "../../axiosInstance";

const Dashboard = () => {
  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axiosInstance.get("/protected-View");
        console.log("Success:", response.data);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    fetchProtectedData();
  }, []);

  return <div className="text-light container">Dashboard</div>;
};

export default Dashboard;
