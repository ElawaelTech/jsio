"use client";
// import Link from "next/link";
// import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { Outlet, Link, useNavigate, router, useParams } from "react-router-dom";
import { AppValues, API, ApiUrl } from "../Values";
import Cookies from "js-cookie";
import { Modal, Button } from "react-bootstrap";
export default function ForgetPassword() {
  const navigate = useNavigate();
  const [errors, Seterrors] = useState("");
  //---------ShowModal----------------------------
  const [ShowModal, SetShowModal] = useState(false);
  const handleCloseModal = () => SetShowModal(false);
  const handleShowModal = () => SetShowModal(true);

  const [inputs, setInputs] = useState({});

  //-------------------------------------------------------------
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleDubelClick = (e) => {
    const name = e.target.name;
    const value = "";
    setInputs((values) => ({ ...values, [name]: value }));
  };
  //----------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data_ = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(API.Login, {
        method: "POST",
        body: JSON.stringify(data_),
      });
      console.log(response);
      const data = await response.json();
      console.log(data);

      if (data.errors != "") {
        Seterrors(data.errors);
        handleShowModal();
      }
      if (data.msg != "") {
        Seterrors(data.msg);
        handleShowModal();
      }
      if (response.ok) {
      } else if (response.status === 400) {
        return alert("errorr 400");
      } else {
        return alert("can not save ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <input type="hidden" name="Action" value="ForgetPassword" />
        <div className="container">
          <div
            className="row bg-white p-0 py-3"
            style={{ maxWidth: "500px", margin: "auto" }}
          >
            <div className="col-1">
              <i
                onClick={() => navigate(-1)}
                className="fa-solid fa-chevron-right  mt-2 fs-5 "
              ></i>
            </div>
            <div className="col-10 text-center">
              <h6 className="fw-bold stc mt-0"> نسيت كلمة السر </h6>
            </div>

            <div className="col-12 text-center text-secondary  mt-4">
              <i
                style={{ fontSize: "60px" }}
                className="fa-light fa-face-clouds"
              ></i>

              <h5
                className=" fw-bold  p-0 pb-1 text-secondary text-center Arial px-0"
                style={{fontSize:"14px"}}
              >
                فضلًا أدخل رقم الهاتف أو البريد الإلكتروني المسجل لدينا. سوف
                تستلم كود التفعيل ورابط لإنشاء كلمة مرور جديدة عبر بريدك
                الإلكتروني.
              </h5>
              <hr />
            </div>
            <div className="col-lg-12 col-md-12 col-12 col-xm-12 mt-2">
              <label style={{fontSize:"13px"}} className="col-form-label ">
                {"  البريد الالكترونى / الهاتف "}
              </label>
              <input
                type="text"
                name="email"
                className="form-control"
                autoComplete="off"
                value={inputs.email}
                onChange={handleChange}
                onDoubleClick={handleDubelClick}
              />
            </div>
            <div className="col-lg-12 col-md-12 col-12 col-xm-12 my-4 text-center">
              <button
              style={{fontSize:"14px"}}
                type="submit"
                className="btn btn-green stc w-75  p-2 fw-bold"
              >
                موافق
              </button>

              <h1 className="text-cecondary fw-bold fs-6 mt-3">او</h1>
              <hr />
              <Link style={{fontSize:"15px"}} className="text-green fw-bold" to="../RestorePassword">
                استرجاع الحساب بكود التفعيل
              </Link>
            </div>
          </div>
        </div>
      </form>
      <MSG />
    </>
  );

  function MSG() {
    return (
      <>
        <Modal show={ShowModal} onHide={handleCloseModal}>
          <Modal.Body>
            <div className="row">
              <div className="col-12 text-center">
                <h4 className="text-start p-0 m-0">خطا </h4>
                <hr />
                <h5 className=" text-center ">{errors}</h5>
                <button
                  onClick={() => handleCloseModal()}
                  className="btn btn-danger w-50 m-3"
                >
                  OK
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
