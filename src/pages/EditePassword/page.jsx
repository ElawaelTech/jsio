"use client";
// import Link from "next/link";
// import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { Outlet, Link, useNavigate, router, useParams } from "react-router-dom";
import { AppValues, API, ApiUrl } from "../Values";
import LoginCheck from "../LoginCheck/page";
import Cookies from "js-cookie";
import { Modal, Button } from "react-bootstrap";
export default function EditePassword() {
  const navigate = useNavigate();
  const [errors, Seterrors] = useState("");
  //---------ShowModal----------------------------
  const [ShowModal, SetShowModal] = useState(false);
  const handleCloseModal = () => SetShowModal(false);
  const handleShowModal = () => SetShowModal(true);
  // -------------------------------
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const ID = userinfo[0].ID;
  //---------------------------------
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

    if (window.confirm("هل تريد تعديل كلمة السر  ")) {
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
          e.target.reset();
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
    }
  };

  return (
    <>
      <LoginCheck />
      <form method="POST" onSubmit={handleSubmit}>
        <input type="hidden" name="Action" value="EditPassword" />
        <input type="hidden" name="Username" value={Username} />
        <input type="hidden" name="ID" value={ID} />
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
              <h4 className="fw-bold stc mt-0"> تعديل الباسورد </h4>
            </div>
            <div className="col-1">
              <Link to="../Customer/Support">
                <label
                  className=" btn-green text-center"
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "10px",
                  }}
                >
                  {" ? "}
                </label>
              </Link>
            </div>
            <div className="col-12 text-center text-secondary mt-4">
              <i style={{ fontSize: "80px" }} className="fa-solid fa-key"></i>
            </div>
            <div className="col-master2 col-12 p-0 ">
              <div className="row m-0">
                <div
                  className="col-12 text-center "
                  style={{ height: "10px", maxWidth: "1500px", margin: "auto" }}
                >
                  <label className="message alert-danger px-4 p-1 fw-bold"></label>
                </div>

                <div className="col-lg-12 col-md-12 col-12 col-xm-12 mt-2">
                  <label className="col-form-label "> كلمة السر القديمة</label>
                  <input
                    type="text"
                    name="old"
                    className="form-control"
                    autoComplete="off"
                    value={inputs.old}
                    onChange={handleChange}
                    onDoubleClick={handleDubelClick}
                  />
                </div>

                <div className="col-lg-12 col-md-12 col-12 col-xm-12 mt-2">
                  <label className="col-form-label "> كلمة السر الجديدة</label>
                  <input
                    type="text"
                    name="new"
                    className="form-control"
                    autoComplete="off"
                    value={inputs.new}
                    onChange={handleChange}
                    onDoubleClick={handleDubelClick}
                  />
                </div>

                <div className="col-lg-12 col-md-12 col-12 col-xm-12 mt-2">
                  <label className="col-form-label ">
                    {"   تاكيد كلمة السر الجديدة "}
                  </label>
                  <input
                    type="text"
                    name="renew"
                    className="form-control"
                    autoComplete="off"
                    value={inputs.renew}
                    onChange={handleChange}
                    onDoubleClick={handleDubelClick}
                  />
                </div>

                <div className="col-lg-12 col-md-12 col-12 col-xm-12 my-4 text-center">
                  <button type="submit" className="btn btn-green stc w-75">
                    تعديل
                  </button>
                </div>
              </div>
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
