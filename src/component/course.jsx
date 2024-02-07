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
      axios.delete(`http://localhost:3000/course/${id}`);
      window.location.reload();
    }
  };

  return (
    <section className="contaiiner">
      <article>
        <aside>
          <h1>Admin panel</h1>
          <Link to={"/addcourse"}>ADD COURSE</Link>
          <table className="table-data">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Level</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {data.map((v, i) => {
                const { id, name, level, description } = v;
                return (
                  <tr key={i + 1}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{level}</td>
                    <td>{description}</td>

                    <td className="display">
                      <button onClick={(e) => handleDelete(id)}>
                        Delete Course
                      </button>

                      <Link to={`/addbatch/${id}`}>Add Batch </Link>

                      <Link to={`/batches`}> see Batch</Link>
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
