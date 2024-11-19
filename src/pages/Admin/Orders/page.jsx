// import Link from "next/link";
import { useState, useEffect } from "react";
import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
import LoginCheck from "../../../LoginCheck/page";
import { AppValues, API } from "../../../Values";
import Cookies from "js-cookie";
import { Modal, Button } from "react-bootstrap";
export default function CustomerShoppingAnyThing() {
  const navigate = useNavigate();
  const [Errors, SetErrors] = useState("");
  //---------ShowModalErrors----------------------------
  const [ModalError, SetModalError] = useState(false);
  const handleCloseModalError = () => SetModalError(false);
  const handleShowModalError = () => SetModalError(true);
  //------------------------------------------
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const CustomerID = userinfo[0].ID;
  const City = userinfo[0].City;
  const State = userinfo[0].State;
  const Address = userinfo[0].Address;
  const Mobail = userinfo[0].Mobail;

  //-------------------------------------
  const [KobonCod, SetKobonCod] = useState("0");
  const [KobonStatue, SetKobonStatue] = useState("");
  const [KobonDescount, SetKobonDescount] = useState(0);
  //---------ShowModal----------------------------
  const [ShowModal, SetShowModal] = useState(false);
  const handleCloseModal = () => SetShowModal(false);
  const handleShowModal = () => SetShowModal(true);
  //-------------------------------------------------\
  //------------------------------------
  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await fetch(`url-to-the-api`);
  //     const body = await result.json();
  //     setData(body);
  //   }
  //   fetchData();
  // }, []);
  const CheckKobon = async () => {
    try {
      const post = {
        Cod: sessionStorage.getItem("KobonCode"),
        Action: "CheckKobon",
      };
      const result = await fetch(API.CheckKobon, {
        method: "POST",
        body: JSON.stringify(post),
      });
      const body = await result.json();
      SetKobonStatue(body.Msg);
      if (body.Active == "Active") {
        handleCloseModal();
        SetKobonCod(sessionStorage.getItem("KobonCode"));
        SetKobonDescount(body.Descount);
      }
      console.log(KobonDescount);
      // SetOrders(body);
    } catch (error) {
      return error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data_ = Object.fromEntries(formData.entries());
    if (window.confirm("هل تريد تاكيد الاوردر  ")) {
      try {
        const response = await fetch(API.Orders, {
          method: "POST",
          body: JSON.stringify(data_),
        });
        const data = await response.json();
        console.log(data);
        if (data.errors != "") {
          SetErrors(data.errors);
          handleShowModalError();
        }
        if (data.msg == "success") {
          return navigate(`../Customer/OrderWaiting/${data.number_order}/0`);
          SetErrors(data.msg);
          handleShowModalError();
        }
        if (response.ok) {
        } else if (response.status === 400) {
          return alert("Errorr 400");
        } else {
          return alert("Can Not Save ");
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
        <div
          className="row-master0 row m-auto p-1"
          style={{ maxWidth: "1000px" }}
          >
          <div className="col-12 head">
            <Link className="back0" to="../Customer/Shopping">
              <img
                className="iconBack"
                src="../../../../Images/2.png"
                alt="iconBack"
              />
            </Link>
            <img
              className="iconshar"
              src="../../../../Images/download.png"
              alt=""
            />
          </div>
          <div className="col-md-1 col-2">
            <img
              style={{ width: "60px" }}
              src="../../../../Images/gps.png"
              alt=""
            />
          </div>
          <div className="col-md-9 col-6 p-2">
            <h3 style={{ fontSize: "16px" }} className="fw-bold  m-0">
              أطلب أى حاجة
            </h3>
            <small style={{ fontSize: "12px" }}>أطلب توصيل أى حاجة</small>
          </div>
          <div className="col-md-2 col-4 text-center ">
            <img
              style={{ width: "20px" }}
              src="../../../../Images/star1.jpg"
              alt=""
            />
            <span style={{ fontSize: "15px" }} className="fw-bold  mt-4 ">
              {"4.9 "}
              
            </span>
            <br />
            <small style={{ fontSize: "12px" }}> مشاركات {"4646K"}</small>
          </div>
        </div>
        <div className="col-12">
          <input type="hidden" name="Action" value="NewOrder" />
          <input type="hidden" name="TypeOrder" value="اطلب اى حاجة" />
          <input type="hidden" name="CustomerID" value={CustomerID} />
          <input type="hidden" name="CustomerName" value={Username} />
          <input type="hidden" name="City" value={City} />
          <input type="hidden" name="State" value={State} />
          <input type="hidden" name="Address" value={Address} />
          <input type="hidden" name="Mobail" value={Mobail} />
          <input type="hidden" name="Distance" value={"12"} />
          <input
            type="hidden"
            name="Description"
            value={sessionStorage.getItem("Description")}
          />
        </div>
        <div
          className="col-master row m-auto p-1"
          style={{ maxWidth: "1000px" }}
        >
          <div className="col-12 mt-2">
            <label style={{ fontSize: "13px" }} className="col-form-label">
              اكتب طلبك
            </label>
            <textarea
              style={{ fontSize: "13px" }}
              name="Items"
              className="form-control bg-light"
              placeholder="اكتب هنا تفاصيل طلبك من المحل , مثلا : 1 هامبرجر بالجبنه , نرجوا منك كتابة القيمة التقديرية حتى"
           autoComplete="off"
           />
          </div>
          <div className="col-12 mt-2">
            <label style={{ fontSize: "13px" }} className="col-form-label">
              {"موقع استلام الشحنة "}
              
            </label>
            <div className="form-control bg-light goto-Location p-1">
              <Link to="../Customer/ShoppingFrom">
                <i className="fa-solid fa-location-dot fs-6 pt-1 ms-2"></i>
              </Link>
              <input
                style={{ fontSize: "13px" }}
                type="text"
                name="From"
                placeholder="اختيار الموقع"
                className=" text-green fw-bold  bg-light locationtext"
                autoComplete="off"
             />
            </div>
          </div>
          <div className="col-12 mt-2">
            <label style={{ fontSize: "13px" }} className="col-form-label">
              {" "}
              موقع تسليم الشحنة
            </label>
            <div className="form-control bg-light goto-Location p-1">
              <Link to="../Customer/ShoppingTo">
                <i className="fa-solid fa-location-dot fs-6 pt-1 ms-2"></i>
              </Link>
              <input
                style={{ fontSize: "13px" }}
                type="text"
                name="To"
                placeholder="اختيار الموقع"
                className=" text-green fw-bold  bg-light locationtext"
                autoComplete="off"
             />
            </div>
          </div>
          <div className="col-12 mt-2">
            <label style={{ fontSize: "13px" }} className="col-form-label">
              {"تكلفة التوصيل "}
              
            </label>
            <input
              style={{ fontSize: "13px" }}
              type="number"
              name="DelevaryPrice"
              className="form-control bg-light text-success fw-bold"
              placeholder="00 جنية"
              autoComplete="off"
            />
          </div>
          <div className="col-12 mt-2">
            <label style={{ fontSize: "13px" }} className="col-form-label ms-3">
              {"الكوبونات "}

              <i
                onClick={handleShowModal}
                className="fa-solid fa-circle-plus text-green fs-5 mx-2"
              ></i>
              <input type="hidden" name="KobonCod" value={KobonCod} />
              <input type="hidden" name="KobonDescount" value={KobonDescount} />
              {KobonDescount > 0 && (
                <>
                  <div className="mt-2">
                    <span className="mx-1 text-green">{KobonCod} </span>
                    <span className="text-danger">
                      {"خصم  " + KobonDescount + " من قيمة الشحن"}{" "}
                    </span>
                  </div>
                </>
              )}
            </label>
          </div>
          <div className="col-12 mt-0">
            <label style={{ fontSize: "13px" }} className="col-form-label">
              {" "}
              المحفظة
            </label>
            <input
              style={{ fontSize: "13px" }}
              type="number"
              name="Rassed"
              className="form-control bg-light text-success fw-bold"
              placeholder="00 جنية"
              autoComplete="off"
            />
          </div>
          <div className="col-12 mt-2">
            <label style={{ fontSize: "13px" }} className="col-form-label">
              {" "}
              طريقة الدفع
            </label>
            <select
              name="PaymentType"
              className="form-control bg-light text-success fw-bold"
            >
              <option value=""></option>
              <option value="نقدى">نقدى</option>
              <option value="بطاقة بنكية">بطاقة بنكية</option>
            </select>
          </div>

          <div className="col-12 p-4 mt-4 text-center">
            <button
              className="btn btn-green w-75 p-2 fw-bold radius"
              style={{ borderRadius: "50px" }}
            >
              ارسل الطلب
            </button>
          </div>
        </div>
      </form>
      <MSG />
      <AddKobon />
    </>
  );

  function MSG() {
    return (
      <>
        <Modal show={ModalError} onHide={handleCloseModalError}>
          <Modal.Body>
            <div className="row">
              <div className="col-12 text-center">
                <h4 className="text-start p-0 m-0">تنبية </h4>
                <hr />
                <h5 className=" text-center ">{Errors}</h5>
                {Errors == "success" && (
                  <button
                    onClick={() => handleCloseModalError()}
                    className="btn btn-green w-50 m-3"
                  >
                    OK
                  </button>
                )}
                {Errors != "success" && (
                  <button
                    onClick={() => handleCloseModalError()}
                    className="btn btn-danger w-50 m-3"
                  >
                    OK
                  </button>
                )}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  function AddKobon() {
    return (
      <>
        <Modal show={ShowModal} onHide={handleCloseModal}>
          <Modal.Body>
            <div className="row">
              <div className="col-11 text-center">
                <h5> أضافة كوبون</h5>
              </div>
              <div className="col-1">
                <i
                  onClick={handleCloseModal}
                  className="fa-solid fa-xmark fs-4"
                ></i>
              </div>
              <hr />

              <div className="col-12 text-center">
                <label className="col-form-label"> أدخل رقم الكوبون </label>
                <input
                  className="form-control w-50 text-center text-green fw-bold mb-4 fs-4 m-auto shadow"
                  type="text"
                  name="SdadMony"
                  autoComplete="off"
                  // onChange={(e) => SetKobonCod(e.target.value)}
                  onChange={(e) =>
                    sessionStorage.setItem("KobonCode", e.target.value)
                  }
                />
                <span className="text-danger"> {KobonStatue}</span>
              </div>
              <div className="col-12 mt-4 text-center">
                <button
                  onClick={CheckKobon}
                  type="button"
                  className="btn btn-green w-100"
                >
                  تحقق
                </button>
                <br />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
