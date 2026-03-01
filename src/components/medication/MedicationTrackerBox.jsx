import { useState } from "react";
import "../../styles/medication.css";

function MedicationTrackerBox() {
  const [medName, setMedName] = useState("");
  const [medications, setMedications] = useState([]);

  const addMedication = () => {
    if (!medName) return;

    const newMed = {
      name: medName,
      taken: 0,
      missed: 0
    };

    setMedications([...medications, newMed]);
    setMedName("");
  };

  const markTaken = (index) => {
    const updated = [...medications];
    updated[index].taken += 1;
    setMedications(updated);
  };

  const markMissed = (index) => {
    const updated = [...medications];
    updated[index].missed += 1;
    setMedications(updated);
  };

  const calculateAdherence = (taken, missed) => {
    const total = taken + missed;
    if (total === 0) return 0;
    return Math.round((taken / total) * 100);
  };

  return (
    <div className="med-container">
      <h2>Medication Tracker</h2>

      <input
        type="text"
        placeholder="Enter medicine name"
        value={medName}
        onChange={(e) => setMedName(e.target.value)}
      />
      <button onClick={addMedication}>Add Medicine</button>

      {medications.map((med, index) => {
        const adherence = calculateAdherence(med.taken, med.missed);

        return (
          <div key={index} className="med-card">
            <h4>{med.name}</h4>
            <p>Taken: {med.taken} | Missed: {med.missed}</p>
            <p>Adherence: {adherence}%</p>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${adherence}%` }}
              ></div>
            </div>

            <button onClick={() => markTaken(index)}>Taken</button>
            <button onClick={() => markMissed(index)} className="missed-btn">
              Missed
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default MedicationTrackerBox;