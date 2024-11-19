import { Visa } from "../../Forms/payMent/visa";
import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from "../../Values";
import axios from "axios";
import Cookies from "js-cookie";
import Content from "../compoenents/Content";
import Header_ from "../compoenents/Header_";
import Footer from "../compoenents/Footer";
import Chat from "../../compoenents/Chat";
import LoginCheck from "../../LoginCheck/page";
import { Modal, Button, Dropdown } from "react-bootstrap";
import "../style.css";
export default function AdminSetting() {
  const Username = "";
  const UserID = "";
  if (Cookies.get("userinfo")) {
    const userinfo = JSON.parse(Cookies.get("userinfo"));
    const Username = userinfo[0].Name;
    const UserID = userinfo[0].ID;
  }

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

  return (
    <>
      <Header_ />
      <div className="container-fluid ">
        <div className="row text-center m-auto" style={{maxWidth:"600px"}}>
          <div className="col-12 text-center ">
            <h1 className="text-orange">Setting</h1>
          </div>

          {/* -------------- */}
          <div className="col-lg-3 col-lg-4 col-6 p-0">
            <div className="card shadow m-1">
              <Link to="">
                <div className="card-body">
                  <div
                    className="Icon-imgContainer "
                    style={{ color: "#55C99D", background: "#DCF5EA" }}
                  >
                    <i className="fa-solid fa-user-secret mt-2"></i>
                  </div>
                  <h6>المستخدمين</h6>
                </div>
              </Link>
            </div>
          </div>
          {/* -------------- */}
          <div className="col-lg-3 col-lg-4 col-6  p-0">
            <div className="card shadow m-1">
              <Link to="">
                <div className="card-body">
                  <div
                    className="Icon-imgContainer"
                    style={{ color: "#3F83F8", background: "#CCE9FB" }}
                  >
                    <i className="fa-solid fa-building mt-2"></i>
                  </div>
                  <h6>بيانات الشركة</h6>
                </div>
              </Link>
            </div>
          </div>
          {/* -------------- */}
          <div className="col-lg-3 col-lg-4 col-6  p-0">
            <div className="card shadow m-1">
              <Link to="">
                <div className="card-body">
                  <div
                    className="Icon-imgContainer"
                    style={{ color: "#EF6242", background: "#FEECDC" }}
                  >
                    <i className="fa-solid fa-database mt-2"></i>
                  </div>
                  <h6>قاعدة البيانات</h6>
                </div>
              </Link>
            </div>
          </div>
          {/* -------------- */}
          <div className="col-lg-3 col-lg-4 col-6  p-0">
            <div className="card shadow m-1">
              <Link to="">
                <div className="card-body">
                  <div
                    className="Icon-imgContainer"
                    style={{ color: "#E49E1B", background: "#FFFAE6" }}
                  >
                    <i className="fa-sharp fa-solid fa-timeline mt-3"></i>
                  </div>
                  <h6>السجل</h6>
                </div>
              </Link>
            </div>
          </div>
            {/* -------------- */}
            <div className="col-lg-3 col-lg-4 col-6  p-0">
            <div className="card shadow m-1">
              <Link to="">
                <div className="card-body">
                  <div
                    className="Icon-imgContainer"
                    style={{ color: "#E49E1B", background: "#FFFAE6" }}
                  >
                    <i className="fa-sharp fa-solid fa-timeline mt-3"></i>
                  </div>
                  <h6>اعداد الدفع</h6>
                </div>
              </Link>
            </div>
          </div>
          {/* -------------- */}
        </div>
      </div>
      <Footer />
    </>
  );
}
