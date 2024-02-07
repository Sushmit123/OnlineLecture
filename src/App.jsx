import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Admin from "./component/admin";
import Login from "./component/login";
import Course from "./component/course";
import Addcourse from "./component/addcourse";
import Addbatch from "./component/addbatch";
import Batches from "./component/batches";
import BatchScheduleForm from "./component/BatchScheduleForm";
import User from "./component/users";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/course" element={<Course />}></Route>
      <Route path="/addcourse" element={<Addcourse />}></Route>
      <Route path="/addbatch/:Id" element={<Addbatch />}></Route>
      <Route path="/batches" element={<Batches />}></Route>
      <Route
        path="/BatchScheduleForm/:courseId"
        element={<BatchScheduleForm />}
      ></Route>
      <Route path="/users" element={<User />}></Route>
    </Routes>
  );
};

export default App;
