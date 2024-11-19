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
export default function CustomerAccount() {
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const UserID = userinfo[0].ID;
  const reviews = userinfo[0].reviews;
  const AccountNumber = Cookies.get("AccountNumber");
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    SdadMony: "",
  });

  const [Data, SetData] = useState([]);
  //---------ShowModal----------------------------
  const [ShowModal, SetShowModal] = useState(false);
  const handleCloseModal = () => SetShowModal(false);
  const handleShowModal = () => SetShowModal(true);
  //-------------------------------------------------\
  useEffect(() => {
    GetOrders();
  }, []);

  async function GetOrders() {
    try {
      const post = {
        Name: Username,
        ID: UserID,
        statue: "",
        Action: "CalculateData",
      };
      const respons = await fetch(`${ApiUrl}/Customer/CalculateData.php`, {
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
  //----------------------------
  function ReplaseAccount() {
    try {
      Cookies.set("LoginType", "deller", { expires: 365 }); // Sets a cookie for 365 days
      return navigate("../Deller/home");
    } catch (error) {
      return error;
    }
  }
  const LogOut = () => {
    Cookies.remove("userinfo");
    return navigate("../login");
  };
  //----------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data_ = Object.fromEntries(formData.entries());
    console.log(data_.SdadMony);
    if (data_.SdadMony == "" || data_.SdadMony == null) {
      return alert("الرجاء كتابة المبلغ");
    }
    SetShowModal(false);
    return navigate(`../Customer/AddRassed/${data_.SdadMony}`);
  };

  return (
    <>
      <LoginCheck />
      <div className="card  m-auto p-0" style={{ maxWidth: "500px" }}>
        <div className="card-header m-0">
          <div className="row p-0 m-0">
            <div className="col-2 text-center p-0">
              <i
                className="fa fa-user-tie bg-light text-secondary"
                style={{ fontSize: "35px", borderRadius: "35px" }}
              ></i>
            </div>

            <div className="col-10">
              <h6>{Username}</h6>
              {reviews == "0" && <Reviews0 />}
              {reviews == "1" && <Reviews1 />}
              {reviews == "2" && <Reviews2 />}
              {reviews == "3" && <Reviews3 />}
              {reviews == "4" && <Reviews4 />}
              {reviews == "5" && <Reviews5 />}
            </div>
          </div>
        </div>
        <div className="card-body p-21 ">
          <table className="table-options w-1000">
            <tbody>
              <tr>
                <td>
                  <i className="fa fa-dollar-sign"></i>
                </td>
                <td width="200px"> المحفظة</td>
                <td width="200px" className="text-center text-danger">
                  {` ${Data.raseed} جنية `}
                </td>
                <td className="text-start">
                  {/* <Link to="../Customer/AddRassed"> */}
                  <button
                    onClick={handleShowModal}
                    className="btn btn-sm p-0 px-2  btn-green fw-bold"
                  >
                    اضافة +
                  </button>
                  {/* </Link> */}
                </td>
              </tr>
              {/* ========================== */}
              <tr>
                <td>
                  <i className="fa fa-chart-pie"> </i>
                </td>
                <td width="200px"> عدد الطلبات</td>
                <td className="text-green text-center">{`  ${Data.orders} الطلبات `}</td>
                <td className="text-start">
                  <Link to="../Customer/Orders" className="text-green">
                    <i className="fa-solid fa-angle-left fw-bold fs-6"></i>
                  </Link>
                </td>
              </tr>
              {/* ========================== */}
              <tr>
                <td>
                  <i className="fa-solid fa-location-dot"></i>
                </td>
                <td width="200px">العناوين المحفوظة</td>
                <td className="text-green text-center">{Data.address}</td>
                <td className="text-start">
                  <Link to="../Customer/AdressSaved" className="text-green">
                    <i className="fa-solid fa-angle-left fw-bold fs-6"></i>
                  </Link>
                </td>
              </tr>
              {/* ========================== */}
              {/* <tr>
                <td>
                  <i className="fa-solid fa-star"></i>
                </td>
                <td>تقييم الخدمات</td>
                <td className="text-green text-center">{Data.subscrib}</td>
                <td className="text-start">
                  <Link to="../Customer/Subscrib" className="text-green">
                    <i className="fa-solid fa-angle-left fw-bold fs-6"></i>
                  </Link>
                </td>
              </tr> */}

              {/* ========================== */}

              {AccountNumber == "2" ? (
                <tr>
                  <td>
                    <i className="fa fa-user-tie"></i>
                  </td>
                  <td>وضع المستخدم</td>
                  <td className="text-green text-center ">{"وضع عميل"}</td>
                  <td className="text-start">
                    <i
                      onClick={ReplaseAccount}
                      className="fa-solid fa-angle-left fw-bold fs-6 text-green"
                    ></i>
                  </td>
                </tr>
              ) : null}

              {/* ========================== */}
              <tr>
                <td>
                  <i className="fa fa-shekel-sign"></i>
                </td>
                <td width="200px">ملاحظات مستخدمين</td>
                <td className="text-green fw-bold text-center ">
                  {Data.notes}
                </td>
                <td className="text-start">
                  <Link to="../Customer/Notes" className="fw-bold text-green">
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
                  <Link to="../Customer/Kobon" className="fw-bold text-green">
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
                  <span> دعم العملاء </span>
                </td>
                <td></td>
                <td className="text-start">
                  <Link to="../Customer/Support" className="fw-bold text-green">
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
                  <Link to="../Customer/Setting" className="fw-bold text-green">
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

      <AddMony />
      <ButtomTab />
      <Chat />
    </>
  );
  function AddMony() {
    return (
      <>
        <Modal show={ShowModal} onHide={handleCloseModal}>
          <Modal.Body>
            <form action="" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-11">
                  <h5> اضافة رصيد</h5>
                </div>
                <div className="col-1">
                  <i
                    onClick={handleCloseModal}
                    className="fa-solid fa-xmark fs-4"
                  ></i>
                </div>
                <hr />

                <div className="col-12">
                  <label className="col-form-label">طريقة السداد </label>
                  <i className="fa-brands fa-cc-visa mx-2"></i>
                  <select name="paymentType" className="form-control">
                    <option value="visa">{"بطاقة بنكية"}</option>

                    {/* <option value="chash">كاش</option> */}
                  </select>
                </div>

                <div className="col-12">
                  <label className="col-form-label">
                    ادخل المبلغ المراد اضافتة الى رصيدك
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="SdadMony"
                    autoComplete="off"
                  />
                </div>
                <div className="col-12 mt-4 text-center">
                  <button type="submit" className="btn btn-green w-100">
                    سدد
                  </button>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
