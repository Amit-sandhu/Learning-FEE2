// import { useState } from "react";

// function Tabs(){
//     const [activeTab,setActiveTab] = useState("profile");
//     return (
//         <>
//         <div className="tabs-container">
//             <h2>Student Dashboard</h2>
//             <div className="tabs">
//                 <button onClick={()=>setActiveTab("profile")}>Profile</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <button onClick={()=>setActiveTab("courses")}>Courses</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <button onClick={()=>setActiveTab("result")}>Result</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             </div>

//             <div className="tab-contents">
//                 {activeTab==="profile" && 
//                     <div>
//                         Name : Amit<br/>
//                         Group : G1 - 2510990027 <br />
//                     </div>
//                 }
//                 {activeTab==="courses" && 
//                     <div>
//                         Java<br/>
//                         Python <br />
//                         OOPS <br />
//                         FEE <br />
//                     </div>
//                 }
//                 {activeTab==="result" && 
//                     <div>
//                         Java 70%<br/>
//                         Python 80%<br />
//                         OOPS 80%<br />
//                         FEE 80%<br />
//                     </div>
//                 }
//             </div>
//         </div>
//         </>
//     );
// }

// export default Tabs;