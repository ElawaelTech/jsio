import { useState, useEffect } from "react";
import { Outlet, Link, useNavigate, router, useParams } from "react-router-dom";
import LoginCheck from "../../LoginCheck/page";
import Cookies from "js-cookie";
export default function DellerAddRassed() {
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const Params = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    const form = document.querySelector("#FormData");
    event.preventDefault();
    const formData = new FormData(form);
    const data_ = Object.fromEntries(formData.entries());
    console.log(data_);
    if (data_.mony == "" || data_.mony == null) {
      return alert("الرجاء كتابة المبلغ");
    }
    if (data_.name == "" || data_.name == null) {
      return alert("الرجاء كتابة اسم صاحب البطاقة");
    }
    if (data_.number == "" || data_.number == null) {
      return alert("الرجاء كتابة رقم البطاقة");
    }
    if (data_.expir == "" || data_.expir == null) {
      return alert("الرجاء كتابة تاريخ الانتهاء");
    }
    if (data_.cvc == "" || data_.cvc == null) {
      return alert("الرجاء كتابة رمز الامان");
    }

    const result = await fetch(`http://127.0.0.1/elmohaseb/home`, data_);
    const body = await result.json();
    return navigate(-1);
    return navigate(`../Deller/Account`);
  };

  return (
    <>
      <LoginCheck />
      <div className="card m-auto" style={{ maxWidth: "500px" }}>
        <div className="card-header bg-syan p-2 ">
          {/* <Link to="../Deller/Account">
            <i className="fa-solid fa-chevron-right  mt-2 fs-5 text-white"></i>
          </Link> */}

          <i
            onClick={() => navigate(-1)}
            className="fa-solid fa-chevron-right  mt-2 fs-5 text-white"
          ></i>
          <span className="fs-5 mx-4">Card Information </span>
        </div>

        <div className="card-body">
          <form
            id="FormData"
            action=""
            method="POST"
            encType="multipart/form-data"
          >
            <div className="row">
              <div className="col-12">
                <label className="col-form-label">
                  أدخل المبلغ المراد إضافتة الى رصيدك
                </label>
                <input
                  type="text"
                  name="mony"
                  // value={Params.mony}
                  className="form-control bg-light inputsyan"
                  autoComplete="off"
                  placeholder=""
                />
              </div>

              <div className="col-12">
                <label className="col-form-label">اسم صاحب البطاقة</label>
                <input
                  type="text"
                  name="name"
                  className="form-control bg-light inputsyan"
                  autoComplete="off"
                  placeholder="JOZEF"
                />
              </div>
              <div className="col-12">
                <label className="col-form-label"> رقم البطاقه </label>
                <input
                  type="text"
                  name="number"
                  className="form-control bg-light inputsyan"
                  autoComplete="off"
                  size={20}
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                />
              </div>
              <div className="col-8">
                <label className="col-form-label">تاريخ الانتهاء</label>
                <input
                  type="text"
                  name="expir"
                  className="form-control text-center bg-light inputsyan"
                  autoComplete="off"
                  placeholder="YY / MM"
                />
              </div>
              <div className="col-4">
                <label className="col-form-label">رمز الأمان</label>
                <input
                  type="text"
                  name="cvc"
                  className="form-control text-center bg-light inputsyan"
                  autoComplete="off"
                  size={4}
                  placeholder="123"
                />
              </div>
              <div className="col-12 p-2 text-center pt-4">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-syan w-100"
                >
                  ادفع
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
