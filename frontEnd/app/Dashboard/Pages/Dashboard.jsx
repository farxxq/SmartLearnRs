import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const user_id = localStorage.getItem("user_id");
      if (!user_id) return;
      try {
        const response = await axios.get(`http://127.0.0.1:5001/api/users/profile/${user_id}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      {userData ? (
        <div className="p-6 bg-white rounded shadow">
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Recommended Study Level: {userData.recommendations[0]?.recommendation || "N/A"}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
