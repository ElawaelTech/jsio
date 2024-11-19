"use client";
// import Link from "next/link";
// import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { Outlet, Link, useNavigate, router, useParams } from "react-router-dom";
import { AppValues, API, ApiUrl } from "../../Values";
import LoginCheck from "../../LoginCheck/page";
import Cookies from "js-cookie";
import { Modal, Button } from "react-bootstrap";
export default function DellerEditeProfile() {
  const navigate = useNavigate();
  const [errors, Seterrors] = useState("");
  const [Governorates, SetGovernorates] = useState([]);
  const [SelectGovernorates, SetSelectGovernorates] = useState("");
  const [Cities, SetCities] = useState([]);
  const [City, setCity] = useState("");
  //---------ShowModal----------------------------
  const [ShowModal, SetShowModal] = useState(false);
  const handleCloseModal = () => SetShowModal(false);
  const handleShowModal = () => SetShowModal(true);
  // -------------------------------
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const ID = userinfo[0].ID;
  //---------------------------------
  const [inputs, setInputs] = useState({
    Name: userinfo[0].Name,
    City: userinfo[0].City,
    State: userinfo[0].State,
    Address: userinfo[0].Address,
    Mobail: userinfo[0].Mobail,
    Email: userinfo[0].Email,
    RkhsaType: userinfo[0].RkhsaType,
    CarType: userinfo[0].CarType,
    LawhatNumber: userinfo[0].LawhatNumber,
    LawhatLeters: userinfo[0].LawhatLeters,
    CarSerialNumber: userinfo[0].CarSerialNumber,
    v_number: userinfo[0].v_number,
    v_ex: userinfo[0].v_ex,
    v_c: userinfo[0].v_c,
    Description: userinfo[0].Description,
  });

  useEffect(() => {
    GetGovernorates();
  }, []);
  //-------------------------------------------------------------
  async function GetGovernorates() {
    try {
      const post = {
        Action: "Governorates",
      };
      const result = await fetch(API.Cities, {
        method: "POST",
        body: JSON.stringify(post),
      });
      const body = await result.json();
      console.log(body);
      SetGovernorates(body);
    } catch (error) {
      return error;
    }
  }
  //-------------------------------------------------------------
  async function GetCities(e) {
    try {
      setCity(e.target.selectedOptions[0].text);
      const post = {
        Action: "Cities",
        governorate_id: e.target.value,
      };
      const result = await fetch(API.Cities, {
        method: "POST",
        body: JSON.stringify(post),
      });
      const body = await result.json();
      console.log(body);
      SetCities(body);
    } catch (error) {
      return error;
    }
  }
  //----------------------------------------
  //------------------------------------
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

    if (window.confirm("هل تريد تعديل بيانات الحساب  ")) {
      try {
        const response = await fetch(API.DellerAccount, {
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
          // e.target.reset();
          // navigate("../Login");
          Cookies.set("userinfo", JSON.stringify(data.data), { expires: 365 }); // Sets a cookie for 365 days
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
        <input type="hidden" name="Action" value="EditProfile" />
        <input type="hidden" name="Username" value={Username} />
        <input type="hidden" name="ID" value={ID} />
        <div className="container">
          <div
            className="row bg-white p-0 py-3"
            style={{ maxWidth: "500px", margin: "auto" }}
          >
            <div className="col-1">
              {/* <Link to="../Customer/Setting">
            <i className="fa-solid fa-chevron-right  mt-2 fs-5 text-whte"></i>
          </Link> */}

              <i
                onClick={() => navigate(-1)}
                className="fa-solid fa-chevron-right  mt-2 fs-5 "
              ></i>
            </div>
            <div className="col-10 text-center">
              <h4 className="fw-bold stc mt-0"> تعديل الحساب </h4>
            </div>
            <div className="col-1">
              <Link to="../Deller/Support">
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
              <i
                style={{ fontSize: "80px" }}
                className="fa-solid fa-circle-user"
              ></i>
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
                  <label className="col-form-label ">الاسم بالكامل</label>
                  <input
                    type="text"
                    name="Name"
                    className="form-control"
                    autoComplete="off"
                    value={inputs.Name}
                    onChange={handleChange}
                  />
                </div>
                {/*  
            <div className="col-lg-6 col-md-6 col-6 col-xm-12">
              <label className="col-form-label ">المحافطة</label>
              <input type="hidden" name="City" value={City} />
              <select
                onChange={GetCities}
                name="City_"
                className="form-control"
              >
                <option value=""></option>
                {Governorates.map((x, index) => {
                  return (
                    <option
                      key={index}
                      data-governorate={x.governorate_name_ar}
                      value={x.id}
                    >
                      {x.governorate_name_ar}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-lg-6 col-md-6 col-6 col-xm-12">
              <label className="col-form-label ">المدينة</label>
              <select
                name="State"
                className="form-control"
                value={inputs.State}
                onChange={handleChange}
              >
                <option value=""></option>
                {Cities.map((x, index) => {
                  return (
                    <option key={index} value={x.city_name_ar}>
                      {x.city_name_ar}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-lg-12 col-md-12 col-12 col-xm-12">
              <label className="col-form-label ">الشارع</label>
              <input
                type="text"
                name="Address"
                className="form-control"
                autoComplete="off"
                value={inputs.Address}
                onChange={handleChange}
              />
            </div>
            */}
                <div className="col-lg-12 col-md-12 col-12 col-xm-12">
                  <label className="col-form-label ">رقم الموبايل</label>
                  <input
                    type="number"
                    name="Mobail"
                    className="form-control"
                    autoComplete="off"
                    value={inputs.Mobail}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-12 col-xm-12">
                  <label className="col-form-label ">الايميل</label>
                  <input
                    type="text"
                    name="Email"
                    className="form-control"
                    autoComplete="off"
                    value={inputs.Email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-lg-12 col-md-12 col-12 col-xm-12">
                  <label className="col-form-label "> رقم الفيزا</label>
                  <input
                    type="text"
                    name="v_number"
                    className="form-control"
                    autoComplete="off"
                    value={inputs.v_number}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-12 col-xm-12">
                  <label className="col-form-label "> نوع الرخصة</label>
                  <select
                    name="RkhsaType"
                    className="form-control"
                    value={inputs.RkhsaType}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="خاص">خاص</option>
                    <option value="عام">عام</option>
                  </select>
                </div>
                <div className="col-lg-12 col-md-12 col-12 col-xm-12">
                  <label className="col-form-label "> نوع السبارة</label>

                  <select
                    name="CarType"
                    className="form-control"
                    value={inputs.CarType}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="دراجة">دراجة</option>
                    <option value="سيارة">سيارة</option>
                    <option value="سكوتر">سكوتر</option>
                    <option value="بدون">بدون</option>
                  </select>
                </div>
                <div className="col-6">
                  <label className="col-form-label "> رقم اللوحات اعداد</label>
                  <input
                    type="number"
                    name="LawhatNumber"
                    className="form-control"
                    autoComplete="off"
                    value={inputs.LawhatNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <label className="col-form-label "> رقم اللوحات حروف</label>
                  <input
                    type="text"
                    name="LawhatLeters"
                    className="form-control"
                    autoComplete="off"
                    value={inputs.LawhatLeters}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-12 col-xm-12">
                  <label className="col-form-label ">
                    {" "}
                    الرقم التسلسلى للسيارة
                  </label>
                  <input
                    type="text"
                    name="CarSerialNumber"
                    className="form-control"
                    autoComplete="off"
                    value={inputs.CarSerialNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-12 col-xm-12 my-4 text-center">
                  <button type="submit" className="btn btn-green stc w-75">
                    حفظ
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
