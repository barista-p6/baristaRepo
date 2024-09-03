// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BaristaManagement = () => {
//   const [baristas, setBaristas] = useState([]);

//   useEffect(() => {
//     const fetchBaristas = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/admin/baristas"
//         );
//         setBaristas(response.data);
//       } catch (error) {
//         console.error("Error fetching baristas:", error);
//       }
//     };

//     fetchBaristas();
//   }, []);

//   const handleApprove = async (id) => {
//     try {
//       await axios.put(`http://localhost:3000/api/admin/baristas/${id}/approve`);
//       setBaristas(
//         baristas.map((barista) =>
//           barista._id === id ? { ...barista, isApproved: true } : barista
//         )
//       );
//     } catch (error) {
//       console.error("Error approving barista:", error);
//     }
//   };

//   return (
//     <div className="barista-management">
//       <h2>Barista Management</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Is Approved</th>
//             <th>Balance</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {baristas.map((barista) => (
//             <tr key={barista._id}>
//               <td>{barista.userId.username}</td>
//               <td>{barista.userId.email}</td>
//               <td>{barista.isApproved ? "Yes" : "No"}</td>
//               <td>${barista.businessDetails.balance.toFixed(2)}</td>
//               <td>
//                 {!barista.isApproved && (
//                   <button onClick={() => handleApprove(barista._id)}>
//                     Approve
//                   </button>
//                 )}
//                 {/* <button onClick={() => handleEdit(barista._id)}>Edit</button> */}
//                 <button >Edit</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BaristaManagement;




import React, { useState, useEffect } from "react";
import axios from "axios";

const BaristaManagement = () => {
  const [baristas, setBaristas] = useState([]);

  useEffect(() => {
    const fetchBaristas = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/admin/baristas"
        );
        setBaristas(response.data);
      } catch (error) {
        console.error("Error fetching baristas:", error);
      }
    };

    fetchBaristas();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:3000/api/admin/baristas/${id}/approve`);
      setBaristas(
        baristas.map((barista) =>
          barista._id === id ? { ...barista, isApproved: true } : barista
        )
      );
    } catch (error) {
      console.error("Error approving barista:", error);
    }
  };

  return (
    <div className="barista-management">
      <h2>Barista Management</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Is Approved</th>
            <th>Balance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {baristas.map((barista) => (
            <tr key={barista._id}>
              {/* تأكد من أن الحقول صحيحة بناءً على النموذج الخاص بك */}
              <td>{barista.username}</td> {/* تغيير هنا بناءً على بنية البيانات */}
              <td>{barista.email}</td> {/* تغيير هنا بناءً على بنية البيانات */}
              <td>{barista.isApproved ? "Yes" : "No"}</td>
              <td>${barista.balance ? barista.balance.toFixed(2) : "0.00"}</td> {/* تأكد من وجود خاصية balance */}
              {/* إذا كانت خاصية balance موجودة، يتم تحويلها إلى نص باستخدام toFixed(2). هذا يعرض الرقم مع اثنين منازل عشرية بعد الفاصلة العشرية، حتى لو كان الرقم هو صفر. */}
              <td>
                {!barista.isApproved && (
                  <button onClick={() => handleApprove(barista._id)}>
                    Approve
                  </button>
                )}
                {/* <button onClick={() => handleEdit(barista._id)}>Edit</button> */}
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BaristaManagement;
