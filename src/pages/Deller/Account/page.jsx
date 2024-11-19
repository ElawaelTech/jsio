// import Link from "next/link";
import { useState, useEffect } from "react";
import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
import ButtomTab from "./ButtomTab";
import Chat from "../../compoenents/Chat";
import { Modal, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import LoginCheck from "../../LoginCheck/page";
import { AppValues, API, ApiUrl } from "../../Values";
import {
  Reviews0,
  Reviews1,
  Reviews2,
  Reviews3,
  Reviews4,
  Reviews5,
} from "../../Reviews/page";

export default function DellerAccount() {
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const UserID = userinfo[0].ID;
  const reviews = userinfo[0].reviews;
  const navigate = useNavigate();
  function showmodal() {
    const AddRassedModal = document.querySelector("AddRassedModal");
    AddRassedModal.ariaModal = "show";
  }

  const LogOut = () => {
    Cookies.remove("userinfo");
    return navigate("../login");
  };
  //-------------------------------------------------\
  const [Data, SetData] = useState([]);
  useEffect(() => {
    GetOrders();
  }, []);
  async function GetOrders() {
    try {
      const post = {
        Name: Username,
        ID: UserID,
        $account_type: "مندوب",
        statue: "",
        Action: "CalculateData",
      };
      const respons = await fetch(`${ApiUrl}/Deller/CalculateData.php`, {
        method: "POST",
        body: JSON.stringify(post),
      });
      const body = await respons.json();
      console.log(body);
      SetData(body);
    } catch (error) {
      return error;
    }
  }

  function ReplaseAccount() {
    try {
      Cookies.set("LoginType", "customers", { expires: 365 }); // Sets a cookie for 365 days
      return navigate("../Customer/Shopping");
    } catch (error) {
      return error;
    }
  }

 
  return (
    <>
      <LoginCheck />
      <div className="card  m-auto p-0" style={{ maxWidth: "500px" }}>
        <div className="card-header m-0">
          <div className="row p-0 m-0">
            <div className="col-2 text-center p-1">
              <i
                className="fa fa-user-tie bg-light text-secondary "
                style={{ fontSize: "60px", borderRadius: "60px" }}
              ></i>
            </div>
            <div className="col-10 p-0 pe-3">
              <h5 className="p-0 m-0" style={{ fontSize: "15px" }}>
                {Username}{" "}
              </h5>
              {reviews == "0" && <Reviews0 />}
              {reviews == "1" && <Reviews1 />}
              {reviews == "2" && <Reviews2 />}
              {reviews == "3" && <Reviews3 />}
              {reviews == "4" && <Reviews4 />}
              {reviews == "5" && <Reviews5 />}
              <br />
              <span className="text-green">
                <i style={{ fontSize: "12px" }} className="fa fa-star">
                  اظهار هوية المندوب
                </i>
              </span>
            </div>
            <div className="col-6 text-center p-0 m-0">
              <small>الطلبات الموصلة</small>
              <h6>{Data.orders}</h6>
            </div>
            <div className="col-6 text-center p-0 m-0">
              <small> اجمالى الايرادات</small>
              <h6>{Data.totalMony} جنيه</h6>
            </div>
          </div>
        </div>
        <div className="card-body p-21 ">
          <table className="table-options w-1000">
            <tbody>
              <tr>
                <td>
                  <i className="fa fa-chart-pie"> </i>
                </td>
                <td width="180px">استلام الطلب</td>
                <td></td>
                <td className="text-start ">
                  <Link to="../Deller/Orders" className="text-green">
                    {"  قائمة الطلبات "}
                    <i className="fa-solid fa-angle-left fw-bold "></i>
                  </Link>
                </td>
              </tr>

              {/* ========================== */}
              <tr>
                <td>
                  <i className="fa fa-dollar-sign"></i>
                </td>
                <td>رصيد الحساب</td>
                <td width="200px" className="text-center text-danger">
                  {` ${Data.raseed} جنية `}
                </td>
                <td className="text-start">
                  <Link to="../Deller/AddRassed">
                    <button className="btn btn-sm p-1 px-3  btn-green fw-bold">
                      اضافة +
                    </button>
                  </Link>
                </td>
              </tr>
              {/* ========================== */}
              <tr>
                <td>
                  <i className="fab fa-cc-amazon-pay"></i>
                </td>
                <td>ارباحى</td>
                <td></td>
                <td className="text-start">
                  <Link to="../Deller/Arbah" className="fw-bold text-green">
                    <i className="fa-solid fa-angle-left fw-bold fs-6"></i>
                  </Link>
                </td>
              </tr>
              {/* ========================== */}

              <tr>
                <td>
                  <i className="fa fa-user-tie"></i>
                </td>
                <td>وضع المستخدم</td>
                <td className="text-green text-center ">{"وضع مندوب"}</td>
                <td className="text-start">
                  <i
                    onClick={ReplaseAccount}
                    className="fa-solid fa-angle-left fw-bold fs-6 text-green"
                  ></i>
                </td>
              </tr>
              {/* ========================== */}
              <tr>
                <td>
                  <i className="fa fa-shekel-sign"></i>
                </td>
                <td width="180px">ملاحظات مستخدمين</td>
                <td className="text-green fw-bold text-center ">
                  {Data.notes}
                </td>
                <td className="text-start">
                  <Link to="../Deller/Notes" className="fw-bold text-green">
                    <i className="fa-solid fa-angle-left fw-bold fs-6"></i>
                  </Link>
                </td>
              </tr>
              {/* ========================== */}

              <tr>
                <td>
                  <i className="fa fa-industry"></i>
                </td>
                <td>
                  <span>الكوبونات </span>
                </td>
                <td className="text-green fw-bold text-center ">
                  {Data.kobbons} كوبون
                </td>
                <td className="text-start">
                  <Link to="../Deller/Kobon" className="fw-bold text-green">
                    <i className="fa-solid fa-angle-left fw-bold fs-6"></i>
                  </Link>
                </td>
              </tr>
              {/* ========================== */}
              <tr>
                <td>
                  <i className="fa fa-star"></i>
                </td>
                <td>
                  <span> دعم المناديب </span>
                </td>
                <td></td>
                <td className="text-start">
                  <Link to="../Deller/Support" className="fw-bold text-green">
                    <i className="fa-solid fa-angle-left fw-bold fs-6"></i>
                  </Link>
                </td>
              </tr>
              {/* ========================== */}
              <tr>
                <td>
                  <i className="fa fa-tools"></i>
                </td>
                <td>
                  <span> اعدادات </span>
                </td>
                <td></td>
                <td className="text-start">
                  <Link to="../Deller/Setting" className="fw-bold text-green">
                    <i className="fa-solid fa-angle-left fw-bold fs-6"></i>
                  </Link>
                </td>
              </tr>
              {/* ========================== */}
              <tr onClick={() => LogOut()}>
                <td>
                  <i className="fa-solid fa-right-from-bracket text-danger"></i>
                </td>
                <td>
                  <span> تسجيل الخروج </span>
                </td>
                <td></td>
                <td className="text-start" width="150px"></td>
              </tr>
              {/* ========================== */}
            </tbody>
          </table>
        </div>
      </div>
      <ButtomTab />
      <Chat />
    </>
  );
}
