import { AppValues, API } from "../Values";
import { Outlet, Link, useNavigate, router, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Modal, Button, Dropdown } from "react-bootstrap";
export default function Customerlogen() {
  //---------ShowModal----------------------------
  const [ShowModal, SetShowModal] = useState(false);
  const [ModalRegisterType, SetModalRegisterType] = useState(false);
  const handleCloseModal = () => SetShowModal(false);
  const handleShowModal = () => SetShowModal(true);

  const handleCloseModalRegisterType = () => SetModalRegisterType(false);
  const handleShowModalRegisterType = () => SetModalRegisterType(true);

  const navigate = useNavigate();
  const [errors, Seterrors] = useState("");
  const [Info, SetInfo] = useState([]);
  const [inputs, setInputs] = useState({
    UserName: "",
    Password: "",
  });

  useEffect(() => {
    Login();
  }, []);
  //----------------------------------------
  const Login = () => {
    const userinfo = Cookies.get("userinfo");
    const LoginType = Cookies.get("LoginType");
    const StartPage = Cookies.get("StartPage");
    if (userinfo) {
      if (LoginType == "customers") {
        if (StartPage == "1") {
          return navigate("../Customer/StartPage");
        } else if (StartPage == "0") {
          return navigate("../Customer/Shopping");
        } else {
          Cookies.set("StartPage", "1", { expires: 365 });
          return navigate("../Customer/StartPage");
        }
      }
      if (LoginType == "deller") {
        return navigate("../Deller/home");
      }
      if (LoginType == "admin") {
        return navigate("../admin");
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data_ = Object.fromEntries(formData.entries());
    //
    try {
      const post = {
        Action: "Login",
        username: data_.username,
        password: data_.password,
      };
      const response = await fetch(API.Login, {
        method: "POST",
        body: JSON.stringify(post),
      });
      const data = await response.json();
      if (data.msg =="success") {
        Cookies.set("userinfo", JSON.stringify(data.data), { expires: 365 }); // Sets a cookie for 365 days
        Cookies.set("LoginType", data.LoginType, { expires: 365 }); // Sets a cookie for 365 days
        Cookies.set("AccountNumber", data.AccountNumber, { expires: 365 }); // Sets a cookie for 365 days
        Login();
      }
      if (data.errors != "") {
        Seterrors(data.errors);
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
      <form action="" onSubmit={handleSubmit}>
        <div
          dir="rtl"
          className="row pt-4 bg-light0"
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <img
            style={{ width: "150px", margin: "auto" }}
            src="../../../logo.png"
            alt=""
          />
          <h6 className="fw-bold my-2 mt-4">تسجيل دخول </h6>
          <div className="col-lg-12 col-md-12 col-12 col-xm-12">
            <label
              style={{ fontSize: "13px" }}
              className="col-form-label text-secondary"
            >
              رقم الموبايل او الايميل <small className="text-danger"> * </small>
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-lg-12 col-md-12 col-12 col-xm-12 password">
            <label
              style={{ fontSize: "13px" }}
              className="col-form-label  text-secondary"
            >
              كلمة السر <small className="text-danger"> * </small>
            </label>
            <Link
              style={{ fontSize: "13px" }}
              to="../ForgetPassword"
              className="float-start  fw-bold text-danger"
            >
              {"نسيت كلمة السر ؟ "}
            </Link>
            <input
              type="password"
              name="password"
              className="form-control"
              autoComplete="off"
            />
            {/* <i className="far fa-eye eyeButton" id="togglePassword"></i> */}
          </div>
          <div
            className="col-12 text-center my-1"
            style={{ height: "10px", maxWidth: "500px", margin: "auto" }}
          >
            <label className="message alert-danger w-100 p-1"></label>
          </div>
          <div className="col-12 mt-4 text-center">
            <button
              style={{ fontSize: "15px" }}
              className="btn w-75 btn-green fw-bold "
            >
              تسجيل الدخول
            </button>
            <br />
            <h6
              style={{ fontSize: "15px" }}
              className="btn text-green fw-bold mt-2"
              onClick={() => handleShowModalRegisterType()}
            >
              {"    انشاء حساب جديد"}
            </h6>
          </div>
        </div>

        <br />
        <br />
      </form>
      <MSG />
      <RegisterType />
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
                <h5 dir="ltr" style={{ fontSize: "14px" }} className=" text-center ">
                  {errors}
                </h5>
                <button
                  style={{ fontSize: "14px" }}
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

  function RegisterType() {
    return (
      <>
        <Modal show={ModalRegisterType} onHide={handleCloseModalRegisterType}>
          <Modal.Body>
            <div className="row">
              <div className="col-12 text-center">
                <h4 className="text-start fw-bold p-0 m-0">تسجيل حساب جديد </h4>
                <hr />
                <Link
                  style={{ fontSize: "14px" }}
                  to="../Customer/Register"
                  className="btn btn-green w-75 fw-bold mt-2"
                >
                  تسجيل حساب عميل
                </Link>
                <br />
                <Link
                  style={{ fontSize: "14px" }}
                  to="../Deller/Register"
                  className="btn btn-syan w-75  fw-bold mt-2"
                >
                  تسجيل حساب مندوب
                </Link>
                <br />
                {/* <Link
                  to="../Customer/Register"
                  className="btn btn-orange w-75  fw-bold mt-2 fs-5"
                >
                  تسجيل حساب عميل
                </Link> */}
                <br />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
