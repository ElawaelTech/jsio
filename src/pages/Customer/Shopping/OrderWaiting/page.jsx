import { Outlet, Link, useNavigate, router, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppValues, API } from "../../../Values";
import axios from "axios";
import Cookies from "js-cookie";
import Chat from "../../../compoenents/Chat";
import LoginCheck from "../../../LoginCheck/page";
import { Modal, Button, Dropdown } from "react-bootstrap";
export default function CustomerOrderWaiting() {
  const navigate = useNavigate();
  //---------ShowModal----------------------------
  const [ShowModal, SetShowModal] = useState(false);
  const [ModalRegisterType, SetModalRegisterType] = useState(false);
  const handleCloseModal = () => SetShowModal(false);
  const handleShowModal = () => SetShowModal(true);
  const [Shakwa, SetShakwa] = useState("");
  //-------------------------------------
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const UserId = userinfo[0].ID;
  const [AutoAccipt, SetAutoAccipt] = useState("false");
  const [OrderInfo, SetOrderInfo] = useState([
    {
      statue: "",
      type_order: "",
      number_order: "",
      date_add: "",
    },
  ]);

  useEffect(() => {
    GetOrderInfo();
  }, []);
  //-------------------------------------------------------------
  const Params = useParams();
  async function GetOrderInfo() {
    try {
      const post = {
        number_order: Params.number_order,
        Action: "OrderInfo",
      };

      const response = await fetch(API.Orders, {
        method: "POST",
        body: JSON.stringify(post),
      });
      const body = await response.json();
      console.log(body);
      SetOrderInfo(body);
      SetAutoAccipt(body[0].auto_accipt);
    } catch (error) {
      return error;
    }
  }

  async function handelReOrder() {
    if (window.confirm("هل تريد  اعادة طلب الاوردر")) {
      try {
        const post = {
          number_order: Params.number_order,
          Action: "ReOrder",
        };

        const response = await fetch(API.Orders, {
          method: "POST",
          body: JSON.stringify(post),
        });
        const body = await response.json();
        console.log(body);
        if (body.msg == "SUCCESS") {
          console.log(body.msg);
          navigate("../Customer/Orders");
        }
      } catch (error) {
        return error;
      }
    }
  }

  async function handelUpdateAutoAccipt(x) {
    try {
      SetAutoAccipt(x);
      const post = {
        number_order: Params.number_order,
        auto_accipt: x,
        Action: "UpdateActiveAccipt",
      };
      const result = await fetch(API.Orders, {
        method: "POST",
        body: JSON.stringify(post),
      });
      const body = await result.json();
      console.log(body);
      AutoAccipt(body);
    } catch (error) {
      return error;
    }
  }
  const handleChange = (e) => {
    SetShakwa(e);
  };

  async function handelHelp() {
    handleCloseModal();
    if (window.confirm("هل تريد ارسال شكوى للدعم")) {
      try {
        const post = {
          account_type: "عميل",
          name: Username,
          name_id: UserId,
          number_order: Params.number_order,
          type_shakwa: Shakwa,
          type_order: OrderInfo[0].type_order,
          Action: "Help",
        };
        const result = await fetch(API.Orders, {
          method: "POST",
          body: JSON.stringify(post),
        });
        const body = await result.json();
        console.log(body);
        navigate("../Customer/Orders");
      } catch (error) {
        return error;
      }
    }
  }

  async function CancelOrder() {
   

    if (
      OrderInfo[0].statue == "بانتظار العروض" ||
      OrderInfo[0].statue == "بانتظار التاكيد" ||
      OrderInfo[0].statue == "انتظار الموافقة"
    ) {
      if (window.confirm("هل تريد  الغاء الطلب")) {
        try {
          const post = {
            number_order: Params.number_order,
            description: "لست بحاجة للطلب",
            statue: "ملغى",
            Action: "CancelOrder",
          };
          const result = await fetch(API.Orders, {
            method: "POST",
            body: JSON.stringify(post),
          });
          const body = await result.json();
          console.log(body);
         navigate("../Customer/Orders");
        } catch (error) {
          return error;
        }
      }
    }
  }
  return (
    <>
      <LoginCheck />
      <div
        dir="rtl"
        className="row mt-0 text-center0 m-auto bg-light"
        style={{ maxWidth: "1000px" }}
      >
        <div className="col-12 py-1 bg-light ">
          <i
            onClick={() => navigate("../Customer/Orders")}
            className="fa-solid fa-chevron-right  mt-2 fs-4"
          ></i>
          <label className="text-center" style={{ width: "65%" }}>
            <img
              src="../../../../Images/gps.png"
              alt=""
              style={{ width: "20px" }}
            />
            <span className="fw-bold fs-5 w-50 mx-2">
              {OrderInfo[0].type_order}
            </span>
          </label>
          <span className="float-start mt-2">
            <Dropdown>
              <Dropdown.Toggle variant="warning"> المساعدة </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="" onClick={() => handleShowModal()}>
                  الدعم
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <span onClick={()=>CancelOrder()} className="text-danger">
                 
                    الغاء الطلب
                  </span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        </div>

        <div className="col-master0 col-12 m-0 mt-3 mb-4 p-2">
          <div className="row shadow0 m-0 p-1">
            <div className="col-12 p-1 text-secondary bg-white">
              <h6>تفاصيل الطلب  : <small>{OrderInfo[0].number_order}#</small></h6>
              <small>{OrderInfo[0].items}</small>
            </div>
          </div>

          <div className="row shadow0 p-1 m-0 mt-2 mb-4 bg-white">
            <div className="col-12 p-2 m-0 text-secondary pb-4">
              <img
                src="../../../../Images/loding4.gif"
                alt=""
                style={{ width: "35px" }}
              />
              <span className="me-2 fw-bold"> {OrderInfo[0].statue} </span>
              <button className="btn btn-syan shadow p-1 px-2 float-start">
                <img
                  src="../../../../Images/mony.png"
                  alt=""
                  style={{ width: "20px" }}
                />
                <span className="me-2  px-0">مكافاة</span>
              </button>
            </div>
            <div className="col-12 mt-4 bg-light p-2">
              <small className="ms-4 fw-bold">{" سعر التوصيل المتوقع "}</small>
              <small className="fw-bold ">{`${OrderInfo[0].delevary_price} - ${
                parseFloat(OrderInfo[0].delevary_price) + parseFloat(40)
              }  جنية`}</small>
            </div>

            {/* ==================================== */}

            {AutoAccipt == "true" ? <EnableAutoAccipt /> : null}
            {AutoAccipt == "false" ? <DisableAutoAccipt /> : null}
            {Params.re_order == "re_order" ? <ReOrder /> : null}
          </div>
          <MSG />
          <br />
        </div>
      </div>
      {/* <Chat /> */}
    </>
  );

  function ReOrder() {
    return (
      <>
        <button
          onClick={() => handelReOrder()}
          className="btn btn-green shadow mt-4 ps-4 mb-4 text-center w-50 m-auto"
        >
          {"اعادة الطلب "}
        </button>
      </>
    );
  }
  //========================================

  function DisableAutoAccipt() {
    return (
      <>
        <div
          style={{ height: "135px" }}
          className="col-12 mt-4 bg-light p-2 text-center mb-2"
        >
          <h4 className="fw-bold ">الرجاء الانتظار ...</h4>
          <span>سيبدا التوصيل بعد قبول عرض التوصيل من احد المندوبين </span>
        </div>
        <div className="col-12 mt-2">
          <h5 className="fw-bold text-center">
            {"  القبول التلقائى "}
            <span className="text-white bg-secondary p-0">؟</span>
            <br />
            <button
              onClick={() => handelUpdateAutoAccipt("true")}
              className="btn bg-light shadow mt-4 ps-4 text-end"
            >
              <span className="bg-green p-1 ms-3">OK</span>
              فعل الان
            </button>

            <div style={{ height: "10px" }}></div>
          </h5>
        </div>
      </>
    );
  }
  //========================================
  function EnableAutoAccipt() {
    return (
      <>
        <div
          style={{ height: "135px" }}
          className="col-12 mt-4 p-2 text-center mb-2 bg-alert-success"
        >
          <h4 className="fw-bold "> القبول التلقائى للعروض مفعل </h4>
          <span>سيقوم بقبول افضل عرض ضمن السعر المتوقع !</span>
        </div>

        <div className="col-12 mt-2">
          <h5 className="fw-bold text-center">
            {"  القبول التلقائى "}
            <span className="text-white bg-secondary p-0">؟</span>
            <br />
            <button
              onClick={() => handelUpdateAutoAccipt("false")}
              style={{ width: "140px" }}
              className="btn bg-green shadow mt-4 pe-4 text-start"
            >
              مفعل
              <span className="bg-white text-danger p-1 me-3">X</span>
            </button>

            <div style={{ height: "10px" }}></div>
          </h5>
        </div>
      </>
    );
  }

  function MSG() {
    return (
      <>
        <Modal show={ShowModal} onHide={handleCloseModal}>
          <Modal.Body>
            <div className="row">
              <div className="col-12 text-center">
                <h5 className="text-danger text-center p-0 m-0">
                  كيف يمكننا مساعدتك{" "}
                </h5>
                <hr />
                <h5
                  style={{ fontSize: "15px" }}
                  className="bg-light text-center p-1"
                  onClick={() => handleChange("اين طلبى")}
                >
                  اين طلبى
                </h5>
                <h5
                  onClick={() => handleChange("الطلب اتاخر كتير ")}
                  style={{ fontSize: "15px" }}
                  className="bg-light text-center p-1 "
                >
                  {"الطلب اتاخر كتير "}
                </h5>
                <h5
                  onClick={() => handleChange("الغاء الطلب لست بحاجة لة ")}
                  style={{ fontSize: "15px" }}
                  className="bg-light text-center p-1"
                >
                  {"الغاء الطلب لست بحاجة لة "}
                </h5>
                <button
                  style={{ fontSize: "14px" }}
                  onClick={() => handelHelp()}
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
