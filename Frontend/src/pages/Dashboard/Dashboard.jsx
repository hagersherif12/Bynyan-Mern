import { Routes, Route } from "react-router-dom";
import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/Sidebar/Sidebar";
import HomeDashboard from "./HomeDashboard";
import Users from "./Users";
import Projects from "./Projects";
import TableDashboard from "../../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../../components/ui/FormDashboard/FormDashboard";
import Developers from "./Developers";
import { useState, useRef } from "react";

function Dashboard() {

  const [isTyping, setIsTyping] = useState(false);

  const typingTimer = useRef(null);

  const handleChange = () => {
    setIsTyping(true);

    clearTimeout(typingTimer.current);

    typingTimer.current = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
        <Sidebar  isTyping={isTyping} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />

            <Route path="/users" element={<Users />}>
              {/* First Child */}
              <Route index element={<TableDashboard />} />
              {/* Second Child */}
              <Route path="add" element={<FormDashboard handleChange={handleChange} />} />
            </Route>

            {/* developers */}
            <Route path="/developers" element={<Developers />}>
              {/* First Child */}
              <Route index element={<TableDashboard />} />
              {/* Second Child */}
              <Route path="add" element={<FormDashboard />} />
            </Route>

            {/* projects */}
            <Route path="/projects" element={<Projects />}>
              {/* First Child */}
              <Route index element={<TableDashboard />} />
              {/* Second Child */}
              <Route path="add" element={<FormDashboard />} />
            </Route>


          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
