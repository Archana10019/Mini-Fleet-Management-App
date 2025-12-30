import { useState, useCallback } from "react";
import Sidebar from "./Sidebar";
import FleetCard from "./FleetCard";

const AdminDashboard = () => {
  const [fleets, setFleets] = useState([]);

  // ADD
  const addFleet = useCallback((fleet) => {
    setFleets((prev) => [...prev, fleet]);
  }, []);

  // UPDATE DRIVER
  const updateDriver = useCallback((id, name) => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, driver: name } : f
      )
    );
  }, []);

  // TOGGLE AVAILABILITY
  const toggleAvailability = useCallback((id) => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, available: !f.available } : f
      )
    );
  }, []);

  // DELETE
  const deleteFleet = useCallback((id) => {
    if (window.confirm("Are you sure?")) {
      setFleets((prev) => prev.filter((f) => f.id !== id));
    }
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar addFleet={addFleet} />

      {/* Fleet List */}
      <div>
        <h2>Fleet List</h2>

        {fleets.map((fleet) => (
          <FleetCard
            key={fleet.id}
            fleet={fleet}
            onUpdate={updateDriver}
            onToggle={toggleAvailability}
            onDelete={deleteFleet}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

