import React, { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [major, setMajor] = useState("");
    const [students, setStudents] = useState([]);

    const addStudent = () => {
        if (name.trim() === "" || age.trim() === "" || major.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        const newStudent = {
            id: Date.now(),
            name: name,
            age: age,
            major: major,
        };

        setStudents([...students, newStudent]);

        setName("");
        setAge("");
        setMajor("");
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h1 style={styles.title}>Student Information System</h1>

                <p style={styles.developer}>
                    Developed By: 101346033 || Syed Saim Hussain || DevOps
                </p>

                <div style={styles.form}>
                    <div style={styles.row}>
                        <label style={styles.label}>Name:</label>
                        <input
                            style={styles.input}
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div style={styles.row}>
                        <label style={styles.label}>Age:</label>
                        <input
                            style={styles.input}
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <div style={styles.row}>
                        <label style={styles.label}>Major:</label>
                        <input
                            style={styles.input}
                            type="text"
                            value={major}
                            onChange={(e) => setMajor(e.target.value)}
                        />
                    </div>

                    <button style={styles.button} onClick={addStudent}>
                        Add Student
                    </button>
                </div>

                <h2 style={styles.studentTitle}>Student List</h2>

                {students.length === 0 ? (
                    <p style={styles.empty}>No students added yet</p>
                ) : (
                    <div>
                        {students.map((student) => (
                            <div key={student.id} style={styles.studentCard}>
                                <strong>{student.name}</strong>
                                <div>Age: {student.age}</div>
                                <div>Major: {student.major}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
    },

    container: {
        width: "500px",
        maxWidth: "90%",
        margin: "0 auto",
        paddingTop: "50px",
        textAlign: "center",
    },

    title: {
        fontSize: "36px",
        marginBottom: "35px",
    },

    developer: {
        color: "#8e248f",
        fontWeight: "bold",
        marginBottom: "45px",
    },

    form: {
        width: "360px",
        maxWidth: "100%",
        margin: "0 auto",
    },

    row: {
        display: "flex",
        alignItems: "center",
        marginBottom: "28px",
    },

    label: {
        width: "90px",
        textAlign: "right",
        marginRight: "15px",
        fontSize: "18px",
    },

    input: {
        width: "220px",
        height: "42px",
        border: "1px solid #999",
        padding: "5px 10px",
        fontSize: "16px",
    },

    button: {
        backgroundColor: "#45b657",
        color: "#ffffff",
        border: "none",
        padding: "14px 25px",
        fontSize: "16px",
        cursor: "pointer",
        marginBottom: "25px",
    },

    studentTitle: {
        fontSize: "28px",
        marginTop: "10px",
    },

    empty: {
        fontSize: "17px",
    },

    studentCard: {
        borderBottom: "1px solid #dddddd",
        padding: "12px",
        textAlign: "left",
    },
};

export default App;