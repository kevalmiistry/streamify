import { useEffect } from "react";

const Dashboard = () => {
    useEffect(() => {
        fetch("/api/dashboard")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);
    return <div className="container mx-auto p-6">Dashboard</div>;
};

export default Dashboard;
