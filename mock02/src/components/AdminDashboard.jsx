import{useState}from"react";
// import sidebar from'./Sidebar';
// import FleetCard from'./FleetCard'
 const AdminDashboard=()=>{
    const [ fleets ,setfleets]=useState([]);

    return(
        <div>
            <sidebar setfleets={setfleets}/>
            <div>
                <h2>fleet list</h2>
                {fleets.map((fleet)=>(
                    <fleetsCard
                    key={fleet.id}
                    fleet={fleet}
                    fleets={fleets}
                    setfleets={setfleets}/>
                )
            )}
            </div>
        </div>
    )
 }
 export default AdminDashboard;
