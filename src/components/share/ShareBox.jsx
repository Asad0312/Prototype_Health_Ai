import { useState } from "react";
import "../../styles/share.css";

function ShareBox() {
  const [email, setEmail] = useState("");
  const [accessType, setAccessType] = useState("temporary");
  const [sharedList, setSharedList] = useState([]);

  const handleShare = () => {
    if (!email) return;

    const newEntry = {
      email,
      accessType
    };

    setSharedList([...sharedList, newEntry]);
    setEmail("");
  };

  return (
    <div className="share-container">
      <h2>Share Medical Records</h2>

      <input
        type="email"
        placeholder="Enter doctor's email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <select
        value={accessType}
        onChange={(e) => setAccessType(e.target.value)}
      >
        <option value="temporary">Temporary Access</option>
        <option value="permanent">Permanent Access</option>
      </select>

      <button onClick={handleShare}>Grant Access</button>

      {sharedList.length > 0 && (
        <div className="shared-list">
          <h3>Shared With:</h3>
          <ul>
            {sharedList.map((item, index) => (
              <li key={index}>
                {item.email} — {item.accessType}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShareBox;