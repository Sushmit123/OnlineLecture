import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addcourse = () => {
  let navigate = useNavigate();
  let [data, setdata] = useState({
    id: "",
    name: "",
    level: "",
    description: "",
    batch: [
      {
        date: "",
        time: " ",
        batchname: " ",
        sirname: " ",
      },
    ],
  });
  let handleChange = (e) => {
    let { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    axios.post("http://localhost:3000/course", data).then(
      (d) => console.log(d),
      (e) => console.log(e)
    );
    navigate("/course");
    window.location.reload();
  };
  let { id, name, level, description } = data;
  return (
    <div className="main-form">
      <form className="form-control" onSubmit={handleSubmit}>
        <div className="input_holder">
          <input
            type="number"
            name="id"
            id="id"
            placeholder="enter id"
            value={id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input_holder">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="enter course"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input_holder">
          <input
            type="text"
            name="level"
            id="level"
            placeholder="enter level"
            value={level}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input_holder">
          <input
            type="text"
            name="description"
            id="description "
            placeholder="enter description"
            value={description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input_holder btn">
          <input type="submit" value="ADD Couse" />
          <input
            type="button"
            value="go back"
            onClick={(e) => navigate("/course")}
          />
        </div>
      </form>
    </div>
  );
};

export default Addcourse;
