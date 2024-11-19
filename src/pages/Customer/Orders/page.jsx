import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppValues, API } from "../../Values";
import ButtomTab from "./ButtomTab";
import axios from "axios";
import Cookies from "js-cookie";
import LoginCheck from "../../LoginCheck/page";
export default function CustomerOrders() {
  const navigate = useNavigate();
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const UserID = userinfo[0].ID;
  const [Orders, SetOrders] = useState([]);
  useEffect(() => {
    GetOrders();
  }, []);
  //-------------------------------------------------------------
  async function GetOrders() {
    try {
      const post = {
        Name: Username,
        ID: UserID,
        statue: "",
        Action: "CustomerOrders",
      };
      const result = await fetch(API.Orders, {
        method: "POST",
        body: JSON.stringify(post),
      });
      const body = await result.json();
      console.log(body);
      SetOrders(body);
    } catch (error) {
      return error;
    }
  }


  function handelGo(url) {
    navigate(url);
  }



  return (
    <>
      <LoginCheck />
      <div className=" row  m-auto " style={{ maxWidth: "500px" }}>
        <div className="col-12 bg-green">
          <h3 className="m-2 text-center">الطلبات</h3>
        </div>
        <div className="col-master col-card-alert col-12 p-1 mb-4 pt-3">
          {Orders.length > 0 && <CardItem />}
          {Orders.length < 1 ? <NoORDER /> : null}
          <br />
          <br />
        </div>
      </div>
      <ButtomTab />
      {/* <Chat/> */}
    </>
  );

  function CardItem() {
    return Orders.map((x, index) => {
      var classStatu = "bg-danger";
      var statue = x.statue;
      if (x.statue == "بانتظار العروض") {
        classStatu = "bg-warning";
      }
      if (x.statue == "بانتظار التاكيد") {
        classStatu = "bg-warning";
      }
      if (x.statue == "انتظار الموافقة") {
        classStatu = "bg-warning";
      }
      
      if (x.statue == "تم الموافقة") {
        statue = "انتظار التنفيذ";
        classStatu = "bg-warning";
      }
      if (x.statue == "ملغى") {
        classStatu = "btn-danger bg-white";
      }
      if (x.statue == "جارى التاكيد") {
        classStatu = "bg-info text-white";
      }
      if (x.statue == "جارى التنفيذ") {
        classStatu = "bg-orangeDark text-white";
      }
      if (x.statue == "جارى التوصيل") {
        classStatu = "bg-blue2 text-white";
      }
      if (x.statue == "تم التوصيل") {
        classStatu = "bg-green text-white";
      }
     
      if (
        x.statue == "بانتظار العروض" ||
        x.statue == "انتظار الموافقة" ||
        x.statue == "تم الموافقة" || 
        x.statue == "جارى التاكيد" ||
        x.statue == "جارى التنفيذ" ||
        x.statue == "جارى التوصيل"
      ) {
        return (
          <>
            <Waiting
              key={index}
              TypeOrder={x.type_order}
              date_delivery={x.date_delivery}
              number_order={x.number_order}
              items={x.items}
              statue={statue}
              classStatu={classStatu}
            />
          </>
        );
      }

      //-------------------------
      if (statue == "تم التوصيل") {
        return (
          <>
            <TaWSEELoK
              key={index}
              TypeOrder={x.type_order}
              date_delivery={x.date_delivery}
              number_order={x.number_order}
              items={x.items}
              statue={x.statue}
              safee={x.safee}
            />
          </>
        );
      }

      //-------------------------

      if (statue == "ملغى للتاخير" || statue == "ملغى") {
        return (
          <>
            <Canel_Takher
              key={index}
              TypeOrder={x.type_order}
              date_delivery={x.date_delivery}
              number_order={x.number_order}
              items={x.items}
              statue={x.statue}
              date_={x.date}
            />
          </>
        );
      }
    });
  }

  function Canel_Takher({
    TypeOrder,
    number_order,
    items,
    statue,
    key,
    date_,
  }) {
    return (
      <>
        <div key={key} className="card mt-2">
          <div className="card-body pt-1">
            <div className="row">
              <div className="col-12 p-0">
                <img
                  style={{ width: "40px" }}
                  src="../../../Images/gps.png"
                  alt=""
                />
                <span className="fs-5 fw-bold pe-2">{TypeOrder}</span>
                <small
                  style={{ fontSize: "13px" }}
                  className="float-start mt-3"
                >
                  #{number_order}
                </small>
              </div>

              <div className="col-11 mb-2 pe-4">
                <small style={{ fontSize: "13px" }} className="fw-bold">
                  تفاصيل الطلب
                </small>
                <br />
                <span className="mb-4 text-secondary">{items}</span>
                <br />
                {statue == "ملغى" ? (
                  <>
                    <div className="col-6 mb-2 p2-4 text-danger">
                      <i className="fa-solid fa-xmark ms-1"></i>
                      <small>{statue}</small>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-6 mb-2 text-orange">
                      <i className="fa-regular fa-clock ms-1"></i>
                      <small>{statue}</small>
                    </div>
                  </>
                )}
              </div>

              <div className="col-12 mt-1 text-center">
                <button
                  onClick={() =>
                    handelGo(
                      `../Customer/OrderWaiting/${number_order}/re_order`
                    )
                  }
                  className="btn btn-green p-1 px-2 shadow w-100"
                >
                  <i className="fa-solid fa-arrow-rotate-left mx-2"></i>
                  اعادة الطلب
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  // ======================================

  function Waiting({
    TypeOrder,
    number_order,
    items,
    statue,
    classStatu,
    key,
  }) {
    return (
      <>
        <div key={key} className="card mt-2">
          <div className="card-body pt-1">
            <div className="row">
              <div className="col-12 p-0">
                <img
                  style={{ width: "40px" }}
                  src="../../../Images/gps.png"
                  alt=""
                />
                <span className="fs-5 fw-bold pe-1">{TypeOrder}</span>

                <small
                  style={{ fontSize: "13px" }}
                  className="float-start mt-3"
                >
                  #{number_order}
                </small>
                <br />
                <small style={{ fontSize: "13px" }} className="fw-bold">
                  تفاصيل الطلب
                </small>
                <br />
                <span className="mb-4 text-secondary">{items}</span>
                <br />
              </div>

              <div className="col-10 mt-1">
                <small
                  style={{ borderRadius: "25px" }}
                  className={`${classStatu}  p-1 px-2 shadow`}
                  onClick={() =>
                    handelGo(
                      `../Customer/OrderWaiting/${number_order}/0`
                    )
                  }
                >
                  {statue}
                </small>
              </div>
              <div className="col-2 mt-1">
                <img
                  style={{ width: "30px" }}
                  src="../../../Images/loding4.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  // ======================================
  function TaWSEELoK({
    TypeOrder,
    number_order,
    items,
    statue,
    safee,
    date_delivery,
    key,
  }) {
    return (
      <>
        <div key={key} className="card mt-2">
          <div className="card-body pt-0">
            <div className="row p-0">
              <div className="col-12 p-0">
                <img
                  className="ms-1"
                  style={{ width: "40px" }}
                  src="../../../Images/gps.png"
                  alt=""
                />
                <span className="fs-6 fw-bold">{TypeOrder}</span>
                <small
                  style={{ fontSize: "13px" }}
                  className="float-start mt-3"
                >
                  #{number_order}
                </small>
                <br />
                <small style={{ fontSize: "13px" }} className="fw-bold">
                  تفاصيل الطلب
                </small>
                <br />
                <span className="mb-4 text-secondary">{items}</span>
                <br />
              </div>

              <div className="col-12 px-1 mt-0 text-secondary">
                <i className="fa-regular fa-clock ms-1  "></i>
                <small className="fw-bold" style={{ fontSize: "12px" }}>
                  {" تم التوصيل :  "}
                  <small className="fw-bold" dir="ltr">
                    {date_delivery}
                  </small>
                </small>
                <br />
                <i className="fa-solid fa-money-check-dollar  ms-1"></i>
                <small className="fw-bold" style={{ fontSize: "12px" }}>
                  سعر التوصيل : {safee} جنية
                </small>
              </div>
              <div className="col-12 mt-3">
                <small
                  style={{ borderRadius: "25px" }}
                  className="btn-green p-1 px-4 shadow"
                >
                  {statue}
                </small>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  // ======================================
  function NoORDER() {
    {
      return (
        <div className="card">
          <div className="card-body text-center " style={{ height: "650px" }}>
            <br /> <br /> <br />
            <div className="StartpageDiv0">
              <img
                style={{ width: "150px" }}
                src="../../../Images/no_order2.png"
                alt="no_order"
              />
            </div>
            <br /> <br /> <br />
            <h4>لا يوجد هناك طلبات</h4>
            <h6>
              {
                "   لا يوجد لديك اى طلب حتى الان . تصفح المتجر بالضغط على الزر ادناة "
              }
            </h6>
            <br />
            <Link to="../Customer/Shopping" className="btn btn-green me-4 w-75">
              {"اطلع على المتجر  "}
            </Link>
            <br /> <br /> <br />
          </div>
        </div>
      );
    }
  }
}
