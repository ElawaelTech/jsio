import { AppValues, API } from "../../Values";
import { Outlet, Link, useNavigate, router, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Modal, Button } from "react-bootstrap";

export default function DellerAddAccount() {
  const navigate = useNavigate();
  const [errors, Seterrors] = useState("");
  const [Governorates, SetGovernorates] = useState([]);
  const [SelectGovernorates, SetSelectGovernorates] = useState("");
  const [Cities, SetCities] = useState([]);
  const [Inputs, setInputs] = useState([]);
  const [City, setCity] = useState("");

  //---------ShowModal----------------------------
  const [ShowModal, SetShowModal] = useState(false);
  const handleCloseModal = () => SetShowModal(false);
  const handleShowModal = () => SetShowModal(true);

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
      console.log(e.target.selectedOptions[0].text);
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
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //--------------------------------
  const handleDubelClick = (e) => {
    const name = e.target.name;
    const value = "";
    setInputs((values) => ({ ...values, [name]: value }));
  };
//----------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data_ = Object.fromEntries(formData.entries());

    if (window.confirm("هل تريد اضافة حساب جديد")) {
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
      <form method="POST" onSubmit={handleSubmit}>
        <input type="hidden" name="Action" value="Register" />
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
              <h4 className="fw-bold stc mt-0"> اضافة حساب مندوب </h4>
            </div>
            <div className="col-1">
              <Link href="#">
                <label
                  className=" btn-green text-center"
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "10px",
                  }}
                >
                  {" "}
                  ?
                </label>
              </Link>
            </div>

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
                name="FullName"
                id="FullName"
                className="form-control"
                autoComplete="off"
                value={Inputs.FullName}
                onChange={handleChange}
                onClick={handleDubelClick}
              />
            </div>
            <div className="col-lg-12 col-md-12 col-12 col-xm-12">
              <label className="col-form-label ">ذكر / انثى</label>
              <select name="Gender" className="form-control">
                <option value=""></option>
                <option value="ذكر">ذكر</option>
                <option value="انثى">انثى</option>
              </select>
            </div>

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
              <select name="State" className="form-control">
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
                value={Inputs.Address}
                onChange={handleChange}
                onClick={handleDubelClick}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <label className="col-form-label ">رقم البطاقة</label>
              <input
                type="number"
                name="Card"
                className="form-control"
                autoComplete="off"
                value={Inputs.Card}
                onChange={handleChange}
                onClick={handleDubelClick}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <label className="col-form-label ">تاريخ الميلاد </label>
              <input
                type="date"
                name="BirthDate"
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-lg-12 col-md-12 col-12 col-xm-12">
              <label className="col-form-label ">رقم الموبايل</label>
              <input
                type="number"
                name="Mobail"
                className="form-control"
                autoComplete="off"
                value={Inputs.Mobail}
                onChange={handleChange}
                onClick={handleDubelClick}
              />
            </div>
            <div className="col-lg-12 col-md-12 col-12 col-xm-12">
              <label className="col-form-label ">الايميل</label>
              <input
                type="text"
                name="Email"
                className="form-control"
                autoComplete="off"
                value={Inputs.Email}
                onChange={handleChange}
                onClick={handleDubelClick}
              />
            </div>
            <div className="col-lg-12 col-md-12 col-12 col-xm-12">
              <label className="col-form-label ">كلمة المرور</label>
              <input
                type="text"
                name="Password"
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-lg-12 col-md-12 col-12 col-xm-12">
              <label className="col-form-label "> رقم الفيزا</label>
              <input
                type="text"
                name="v_number"
                className="form-control"
                autoComplete="off"
                value={Inputs.v_number}
                onChange={handleChange}
                onClick={handleDubelClick}
              />
            </div>
            <div className="col-lg-12 col-md-12 col-12 col-xm-12">
              <label className="col-form-label "> نوع الرخصة</label>
              <select name="RkhsaType" className="form-control">
                <option value=""></option>
                <option value="خاص">خاص</option>
                <option value="عام">عام</option>
              </select>
            </div>
            <div className="col-lg-12 col-md-12 col-12 col-xm-12">
              <label className="col-form-label "> نوع السبارة</label>

              <select name="CarType" className="form-control">
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
                value={Inputs.LawhatNumber}
                onChange={handleChange}
                onClick={handleDubelClick}
              />
            </div>
            <div className="col-6">
              <label className="col-form-label "> رقم اللوحات حروف</label>
              <input
                type="text"
                name="LawhatLeters"
                className="form-control"
                autoComplete="off"
                value={Inputs.LawhatLeters}
                onChange={handleChange}
                onClick={handleDubelClick}
              />
            </div>
            <div className="col-lg-12 col-md-12 col-12 col-xm-12">
              <label className="col-form-label "> الرقم التسلسلى للسيارة</label>
              <input
                type="text"
                name="CarSerialNumber"
                className="form-control"
                autoComplete="off"
                value={Inputs.CarSerialNumber}
                onChange={handleChange}
                onClick={handleDubelClick}
              />
            </div>
            <div className="col-lg-12 col-md-12 col-12 col-xm-12 m-4 text-center">
              <button type="submit" className="btn btn-green stc w-75">
                حفظ
              </button>
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
