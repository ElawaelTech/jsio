"use client";
import { useState } from "react";
import { AppValues } from "../../Values";
// import { useParams } from "react-router-dom";
// const parameters = useParams();
export default function logen() {
  const [inputs, setInputs] = useState({
    UserName: "",
    Password: "",
  });
  //------------------------------------
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  //----------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data_ = Object.fromEntries(formData.entries());
    console.log(inputs);
    console.log("data " + data_.name);
    if (inputs.UserName == "" || inputs.UserName == null) {
      return alert("error name");
    }
    try {
      const response = await fetch(AppValues.ApiUrl + "/EmployeesLogin", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        return alert("success");
      } else if (response.status === 400) {
        return alert("errorr 400");
      } else {
        return alert("can not save ");
      }
    } catch (error) {
      return alert(error);
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="container bg-light pt-4" style={{ height: "100vh" }}>
          <div className="row m-auto bg-white" style={{ maxWidth: "400px" }}>
            <div className="col-12 text-center mt-4">
              <img
                src={AppValues.logo}
                alt=""
                style={{ width: "250px", height: "150px" }}
              />
            </div>
            <div className="col-12 mt-4">
              <h3 className="text-green">تسجيل الدخول</h3>
              <label className="col-form-label">اسم المستخدم</label>
              <input
                type="text"
                name="UserName"
                onChange={handleChange}
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-12">
              <label className="col-form-label">كلمه المرور</label>
              <input
                type="text"
                name="Password"
                onChange={handleChange}
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-12 text-center p-4">
              <button type="submit" className="btn btn-green fw-bold w-50">
                تسجيل الدخول
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
