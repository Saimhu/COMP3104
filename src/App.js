import React, { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [major, setMajor] = useState("");
    const [students, setStudents] = useState([]);

    const addStudent = () => {
        if (!name || !age || !major) {
            alert("Please fill in all fields.");
            return;
        }

        setStudents([
            ...students,
            {
                id: Date.now(),
                name: name,
                age: age,
                major: major,
            },
        ]);

        setName("");
        setAge("");
        setMajor("");
    };

    return (
        <div
            style={{
                width: "500px",
                margin: "50px auto",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h1>Student Information System</h1>

            <p
                style={{
                    color: "purple",
                    fontWeight: "bold",
                    margin: "35px 0",
                }}
            >
                Developed By: 101346033 || Syed Saim Hussain || DevOps
            </p>

            <div style={{ marginBottom: "20px" }}>
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ padding: "10px", marginLeft: "15px" }}
                />
            </div>

            <div style={{ marginBottom: "20px" }}>
                <label>Age: </label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    style={{ padding: "10px", marginLeft: "28px" }}
                />
            </div>

            <div style={{ marginBottom: "20px" }}>
                <label>Major: </label>
                <input
                    type="text"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    style={{ padding: "10px", marginLeft: "15px" }}
                />
            </div>

            <button
                onClick={addStudent}
                style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "12px 22px",
                    cursor: "pointer",
                    fontSize: "16px",
                }}
            >
                Add Student
            </button>

            <h2 style={{ marginTop: "35px" }}>Student List</h2>

            {students.length === 0 ? (
                <p>No students added yet</p>
            ) : (
                students.map((student) => (
                    <div key={student.id} style={{ marginBottom: "15px" }}>
                        <strong>{student.name}</strong>
                        <p>
                            Age: {student.age} | Major: {student.major}
                        </p>
                    </div>
                ))
            )}
        </div>
    );
}

export default App;