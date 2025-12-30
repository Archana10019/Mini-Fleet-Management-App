import FleetForm from "./FleetForm";

const Sidebar = ({ addFleet }) => {
  return (
    <div style={{ width: "250px", padding: "10px", borderRight: "1px solid #ccc" }}>
      <h3> Sidebar</h3>
      <h2>add Fleet</h2>
      <FleetForm addFleet={addFleet} />
    </div>
  );
};

export default Sidebar;
