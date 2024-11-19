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
export default function Home() {
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
      <div dir="ltr"className="container-fluid">
        <div className="row  ">
          <div className="home-col col-12 text-center ">
            <img src="../../../Images/log2.png" alt="JSIO Express" />
            <h1 className="company">JSIO Express</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
