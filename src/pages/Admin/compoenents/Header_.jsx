import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
export default function Header_() {
  const navigate = useNavigate();
  const [ShowMenu, SetShowMenu] = useState("HideMenu");
  useEffect(() => {
    MenuHide();
  }, []);
  const LogOut = () => {
    Cookies.remove("userinfo");
    return navigate("../login");
  };
  function MenuShow() {
    SetShowMenu("ShowMenu");
  }

  function MenuHide() {
    SetShowMenu("HideMenu");
  }
  return (
    <>
      <div dir="rtl" className="row bg-syan">
        <div className="col-lg-3 col-12 px-2 text-center p-0">
         <i
            onClick={MenuShow}
            className="fa-solid fa-bars pt-2 pe-4 fs-4 float-end"
          ></i>
          <Link to="../admin">
            <img
              src="../../../Images/log2.png"
              alt=""
              style={{ width: "50px" }}
            />
            <span className=" text-white">{"JSIO Express "}</span>
          </Link>
        </div>
        <div className="col-lg-9 col-12 text-center text-syan  py-2">
          <span className="text-white fs-4 fw-bold ">
            {"شركة جي سيو اكسبريس  للنقل الذكى"}
          </span>
        
        </div>
      </div>

      <div className={`HeaderList text-end ${ShowMenu}`}>
        <div className="row">
          <div className="col-12 text-center pb-1">
            <h4 className="text-start ps-3 py-2 bg-light">
              <i onClick={MenuHide} className="fa-solid fa-xmark fs-4  text-danger"></i>
            </h4>
            <img
              src="../../../Images/log2.png"
              alt=""
              style={{ width: "70px" }}
            />
            <h6 className=" text-orange">{"JSIO Express "}</h6>
          </div>
          <div className="col-12 ">
            <ul className="">
               <Link to="../admin">
                <li>
                  <i className="fa-solid fa-home ms-2"></i>
                  الرئيسية
                </li>
              </Link>   
              <Link to="../admin/Orders">
                <li>
                  <i className="fa-solid fa-truck ms-2"></i>
                  الاوردرات
                </li>
              </Link>
              <Link to="../admin/Shkawa">
                <li>
                <i className="fa-solid fa-circle-exclamation ms-2"></i>

                  الشكاواى
                </li>
              </Link>
              <Link to="../admin/Customer">
                <li>
                  <i className="fa-solid fa-user-secret  ms-2"></i>
                  العملاء
                </li>
              </Link>
              <Link to="../admin/Deller">
                <li>
                  <i className="fa-solid fa-people-carry-box ms-2"></i>
                  المندوبين
                </li>
              </Link>
              <Link to="../admin/Empolyee">
                <li>
                  <i className="fa-solid fa-users ms-2"></i>
                  الموظفين
                </li>
              </Link>
              <Link to="../admin/Setting">
                <li>
                  <i className="fa-solid fa-gear ms-2"></i>
                  الاعدادات
                </li>
              </Link>
              <Link to="../login" onClick={LogOut}>
                <li>
                  <i className="fa-solid fa-right-from-bracket ms-2"></i>
                  {"خروج "}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
