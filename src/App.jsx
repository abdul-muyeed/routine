import { useState } from "react";
import "./App.css";
const  CourseInfo = {
  CSE3111 : `
  Software Engineering
  KJR - Mr. Kazi Jahidur Rahman
  `,
  CSE3121 : `
  Database Management Systems
  MMA - Mr. Md. Morshedul Arefin
  `,
  CSE3131 : `
  Web Engineering
  MMR - Mr. AFM Mahbubur Rahman
  `,
  CSE3141 : `
  Compiler Design
  MSI - Dr. Md. Saiful Islam
  `,
  CSE3151 : `
  Engineering Ethics and Environment Protection
  MHK - Dr. Md. Humayun Kabir
  `,
  ICE3161 : `
  Communication Engineering
  AZ - Asif Zaman
  `,
  CSE3112 : `
  Software Engineering Lab
  KJR - Mr. Kazi Jahidur Rahman
  `,
  CSE3122 : `
  Database Management Systems Lab
  MMA - Mr. Md. Morshedul Arefin
  `,
  CSE3132 : `
  Web Engineering Lab
  MMR - Mr. AFM Mahbubur Rahman
  `,
  CSE3142 : `
  Compiler Design Lab
  MSI - Dr. Md. Saiful Islam
  `,
  CSE3162 : `
  Communication Engineering Lab
  AZ - Asif Zaman
  `,

}

const routine = [
  [
    {
      name: "Time",
    },
    {
      name: "09:00 AM - 10:00 AM",
    },
    {
      name: "10:00 AM - 11:00 AM",
    },
    {
      name: "11:00 AM - 12:00 PM",
    },
    {
      name: "12:00 PM - 01:00 PM",
    },
    {
      name: "02:00-03:00 PM",
    },
    {
      name: "03:00-04:00 PM",
    },
  ],
  [
    {
      name: "Sunday",
    },
    {
      name: "CSE3111",
    },
    {
      name: "CSE3121",
    },
    
    {
      name: "CSE3141",
      colspan: 2,
    },
    {
      name: "CSE3142",
      colspan: 2,
    },
  ],
  [
    {
      name: "Monday",
    },
    {
      name: "CSE3151",
    },
    {
      name: "ICE3161",
    },
    {
      name: "CSE3131",
    },
    {
      name: "CSE3111",
    },
    {
      name: "CSE3112",
      colspan: 2,
    },
  ],
  [
    {
      name: "Tuesday",
    },
    {
      name: "-",
    },
    {
      name: "CSE3121",
    },
    {
      name: "CSE3122",
      colspan: 2,
    },
    {
      name: "-",
      colspan: 2,
    },
  ],
  [
    {
      name: "Wednesday",
    },
    {
      name: "CSE3151",
    },
    {
      name: "CSE3141",
    },
    {
      name: "ICE3161",
      
    },
    {
      name: "CSE3131",
    },
    {
      name: "CSE3162",
      colspan: 2,
    },
  ],
  [
    {
      name: "Thursday",
    },
    {
      name: "-",
    },
    {
      name: "CSE3121",
    },
    {
      name: "CSE3111",
    },
    {
      name: "CSE3131",
    },
    {
      name: "CSE3132",
      colspan: 2,
    },
  ],

];

function App() {
  const [highlightedCourse, setHighlightedCourse] = useState(null);

  const handleCourseClick = (courseCode) => {
    setHighlightedCourse(courseCode);
    setTimeout(() => {
      setHighlightedCourse(null);
    }, 2000);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center mb-4">Class Routine</h1>
        <table className="table table-bordered table-striped">
          <thead>
            {routine.map((row, rowIndex) => (
              rowIndex === 0 &&
              <tr key={rowIndex}>
                {row.map((col, colIndex) => (
                  <th key={colIndex}>
                    {col.name}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {routine.map((row, rowIndex) => (
              rowIndex !== 0 &&
              <tr key={rowIndex}>
                {row.map((col, colIndex) => (
                  <td key={colIndex} title={CourseInfo[col.name]} colSpan={col.colspan} onClick={() => handleCourseClick(col.name)}
                  style={{
                    backgroundColor:
                      highlightedCourse === col.name ? "yellow" : "white",
                    cursor: "pointer",
                  }}  >
                    {col.name}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
