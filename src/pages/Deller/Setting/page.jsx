import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import LoginCheck from "../../LoginCheck/page";
import Cookies from "js-cookie";
export default function DellerSetting() {
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  //---------ShowModal----------------------------
  const [ShowModal, SetShowModal] = useState(false);
  const handleCloseModal = () => SetShowModal(false);
  const handleShowModal = () => SetShowModal(true);
  //----------------------------------------
  const handleDeleteAcount = async () => {
    const result = await fetch(`url-to-the-api`);
    const body = await result.json();
  };
  return (
    <>
      <LoginCheck />
      <div dir="rtl" className="row m-auto " style={{ maxWidth: "500px" }}>
        <div className="col-1 py-1 bg-light0 ">
          <Link to="../Deller/Account">
            <i className="fa-solid fa-chevron-right  mt-2 fs-4"></i>
          </Link>
        </div>
        <div className="col-11 py-1 text-center bg-light0">
          <h4>{" الاعدات "}</h4>
        </div>
        <br />

        <div className="col-12 mt-0 setting">
          <h5>اعدادات عامة</h5>
          <ul>
            <li>
              <Link to=""> نغمة التنبية</Link>
            </li>
            <li>
              <Link to="../Deller/EditeProfile">تعديل البروفايل</Link>
            </li>
            <li>
              <Link to="../EditePassword">تعديل كلمة السر</Link>
            </li>
            <li>
              <Link to="../UsedWarning">شروط الاستخدام</Link>
            </li>
            <li>
              <Link to="../Khsosya">سياسة الخصوصية</Link>
            </li>
            <li>
              <Link to="">قيم التطبيق</Link>
            </li>
          </ul>
          <h5> مساعدة</h5>
          <ul>
            <li>
              <Link to="">
                <span onClick={handleShowModal} className="text-danger">
                  حذف الحساب
                </span>{" "}
              </Link>
            </li>
          </ul>
          <span>رقم الإصدار : 3.64</span>
        </div>
      </div>
      <DeleteAccount />
    </>
  );

  function DeleteAccount() {
    return (
      <>
        <Modal show={ShowModal} onHide={handleCloseModal}>
          <Modal.Body>
            <div className="row">
              <div className="col-11">
                <h5> حذف الحساب</h5>
              </div>
              <div className="col-1">
                <i
                  onClick={handleCloseModal}
                  className="fa-solid fa-xmark fs-4"
                ></i>
              </div>
              <hr />

              <div className="col-12 mt-4 text-center">
                <h1 className=" text-center">تحذير</h1>
                <h3 className=" text-center text-danger fw-bold">
                  {" انت على وشك حذف حسابك نهائيا "}
                </h3>
                <span>
                  انت على وشك البدء بعملية حذف حسابك لدينا . سيتم تعطيل الوصول
                  لحسابك وحذفه بشكل نهائى
                </span>
                <br />
                <span>
                  عند حذف حسابك فان جميع بياناتك سيتم حذفها نهائيا ولن يكون
                  بمقدورك استعادة اى من بياناتك وسوف يتوقف حسابك الحالى عن العمل
                </span>
                <h3></h3>
                <button
                  onClick={handleDeleteAcount}
                  type="submit"
                  className="fs-3 fw-bold mt-4 btn btn-danger w-100"
                >
                  ابدا بحذف حسابى
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
