import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Addbatch = () => {
  let navigate = useNavigate();
  let { Id } = useParams();
  let [data, setData] = useState({
    date: " ",
    time: " ",
    batch: " ",
    sir: " ",
    id: "",
    //   name: "",
    //   level: "",
    //   description: "",
    //   batches: [{}],
  });
  console.log(Id);
  useEffect(() => {
    axios
      .get("http://localhost:3000/course/" + Id)
      .then((d) => setData(d.data));
  }, [Id]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3000/course/" + Id, data).then(
      (d) => console.log(d),
      (e) => e
    );
    navigate("/batches");
    window.location.reload();
  };

  let { date, time, batch, sir } = data;

  return (
    <div className="main-form">
      <form className="form-control" onSubmit={handleSubmit}>
        <div className="input_holder">
          <input
            type="number"
            name="id"
            id="id"
            value={Id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input_holder">
          <input
            type="date"
            name="date"
            id="date"
            placeholder="enter date"
            value={date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input_holder">
          <input
            type="time"
            name="time"
            id="time"
            placeholder="enter time"
            value={time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input_holder">
          <input
            type="text"
            name="batch"
            id="batchname "
            placeholder="enter batch name"
            value={batch}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input_holder">
          <input
            type="text"
            name="sir"
            id="sirname "
            placeholder="enter sir name"
            value={sir}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input_holder btn">
          <input type="submit" value="ADD Batch" />
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

export default Addbatch;
