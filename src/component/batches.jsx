import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {
  let [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/course").then(
      (d) => {
        setdata(d.data);
      },
      (e) => e
    );
  }, []);
  let handleDelete = (id) => {
    let res = window.confirm("are you sure ? do you want to continue");
    if (res) {
      axios.delete(`http://localhost:3000/batches/${id}`);
      window.location.reload();
    }
  };

  return (
    <section className="contaiiner">
      <article>
        <aside>
          <h1>Admin panel</h1>
          {/* <Link to={"/addcourse"}>ADD COURSE</Link> */}
          <table className="table-data">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Time</th>
                <th>batchname</th>
                <th>sir name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((v, i) => {
                const { id, date, time, batch, sir } = v;
                return (
                  <tr key={i + 1}>
                    <td>{id}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td>{batch}</td>
                    <td>{sir}</td>

                    <td className="display">
                      <button onClick={(e) => handleDelete(id)}>
                        Delete Batch
                      </button>

                      <Link to={`/course`}>Go back</Link>

                      {/* <Link to={`/addbatch/${id}`}>Add Batch</Link> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </aside>
      </article>
    </section>
  );
};

export default Course;
