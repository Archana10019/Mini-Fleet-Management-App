
import { useState } from "react";

const FleetForm = ({ addFleet }) => {
  const [regNo, setRegNo] = useState("");
  const [category, setCategory] = useState("");
  const [driver, setDriver] = useState("");

  const handleAdd = () => {
    if (!regNo || !category || !driver) {
      alert("All fields required");
      return;
    }

    addFleet({
      id: Date.now(),
      regNo,
      category,
      driver,
      available: true,
    });

    setRegNo("");
    setCategory("");
    setDriver("");
  };

  return (
    <div>
      <input placeholder="Vehicle Reg No" value={regNo} onChange={(e) => setRegNo(e.target.value)} />
      <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input placeholder="Driver Name" value={driver} onChange={(e) => setDriver(e.target.value)} />
      <button onClick={handleAdd}>Add Fleet</button>
    </div>
  );
};

export default FleetForm;
