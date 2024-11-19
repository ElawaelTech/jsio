import { Outlet, Link, useNavigate, router, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardOrders from "../compoenents/CardOrders";
import { AppValues, API } from "../../Values";

import axios from "axios";
import Cookies from "js-cookie";
import Chat from "../../compoenents/Chat";
import LoginCheck from "../../LoginCheck/page";
export default function CustomerSupport() {
  const navigate = useNavigate();
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;

  const UserId = userinfo[0].ID;
  const [Orders, SetOrders] = useState([]);
  const [Shkawa, SetShkawa] = useState([]);

  useEffect(() => {
    GetOrders();
    GetShkawa();
  }, []);

  //-------------------------------------------------------------
  async function GetOrders() {
    try {
      const post = {
        Name: Username,
        ID: UserId,
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
  //-------------------------------------------------------------
  async function GetShkawa() {
    try {
      const post = {
        Name: Username,
        name_id: UserId,
        statue: "نشطة",
        Action: "Shkawa",
      };
      const result = await fetch(API.Orders, {
        method: "POST",
        body: JSON.stringify(post),
      });
      const body = await result.json();
      console.log(body);
      SetShkawa(body);
    } catch (error) {
      return error;
    }
  }
  return (
    <>
      <LoginCheck />
      <div
        dir="rtl"
        className="row mt-0 text-center0 m-auto "
        style={{ maxWidth: "500px" }}
      >
        <div className="col-1 py-1 bg-light ">
          <Link to="../Customer/Account">
            <i className="fa-solid fa-chevron-right  mt-2 fs-4"></i>
          </Link>
        </div>
        <div className="col-11 py-1 text-center bg-light">
          <h4>{" دعم العملاء "}</h4>
        </div>
        <br />

        {/* <div className="col-12 mt-4">
          <h5>الطلبات النشطة</h5>
        </div>
        <div className="col-master col-12 mt-0 " style={{ height: "250px" }}>
          {Orders.length > 0 ? <CardActiveOrders /> : null}
          {Orders.length < 1 ? <NoActiveOrder /> : null}
        </div> */}

        <div className="col-12 mt-4">
          <label className="float-end fs-5 fw-bold"> الشكاوى النشطة</label>
          <Link to="../Customer/HistoryShkawa">
            <small className="text-green float-start fw-bold">
              عرض سجل الشكاوى
            </small>
          </Link>
        </div>
        <div className="col-master col-12 mt-0 bg-light0 px-1">
          {Shkawa.length > 0 ? <CardShkawa /> : null}
          {Shkawa.length < 1 ? <NoShkawa /> : null}
          <br />
        </div>
      </div>
    </>
  );

  function CardActiveOrders() {
    return Orders.map((x, index) => {
      return (
        <div key={"a" + index} className="row bg-light p-1 mb-2">
          <div className="col-8">
            <img
              style={{ width: "30px" }}
              src="../../../Images/gps.png"
              alt=""
            />
            <span className="mx-2 fw-bold">{x.type_order}</span>
            <br />

            <small className="mx-2  pe-4 fw-bold">{`تفاصيل الطلب`}</small>
            <br />

            <small key={index} className="mx-2  pe-4">{` ${x.items}`}</small>
          </div>

          <div className="col-4 text-center">
            <small className="">{`#${x.number_order}`}</small>
            <br />
            <small className="">{`${x.date_add}`}</small>
            <br />

            <Link to={`../Customer/OrderInfo/${x.number_order}`}>
              {x.statue == "جارى التاكيد" ? (
                <small className="fw-bold px-2 bg-warning text-white">
                  {x.statue}
                </small>
              ) : null}
              {x.statue == "ملغى" ? (
                <small className="fw-bold px-2 bg-danger text-white">
                  {x.statue}
                </small>
              ) : null}

              {x.statue == "جارى التنفيذ" ? (
                <small className="fw-bold px-2 bg-primary text-white">
                  {x.statue}
                </small>
              ) : null}
              {x.statue == "جارى التوصيل" ? (
                <small className="fw-bold px-2 bg-syan text-white">
                  {x.statue}
                </small>
              ) : null}
              {x.statue == "تم التوصيل" ? (
                <small className="fw-bold px-2 bg-green text-white">
                  {x.statue}
                </small>
              ) : null}
            </Link>
            <br />
          </div>
        </div>
      );
    });
  }

  function CardShkawa() {
    return Shkawa.map((x, index) => {
      return (
        <>
          <div key={"b" + index} className="row p-0 bg-light mt-2">
            <div key={"c" + index} className="col-12 p-2 mb-0">
              <img
                style={{ width: "30px" }}
                src="../../../Images/gps.png"
                alt=""
              />
              <span className="mx-2 fw-bold">{x.type_order}</span>
              <span className="float-start text-center">
                <small className="">{`#${x.order_number}`}</small>
                <br />
                <small className="">{`${x.shakwa_date}`}</small>
              </span>
            </div>
            <div key={"d" + index} className="col-12 p-1 m-0">
              <small className=" pe-0">{`رقم الطلب : ${x.id}`}</small>
              <br />
              <small className="pe-0">{` نوع الشكوى : ${x.type_shakwa}`}</small>
              {/* <br />
              <small className=" text-green">{`${x.description}`}</small> */}
            </div>
          </div>
        </>
      );
    });
  }
}
function NoActiveOrder() {
  return (
    <div className="card m-0 bg-light pt-2">
      <div className="card-body text-center mt-1">
        <i
          style={{ fontSize: "50px" }}
          className="fa-solid fa-ban m-2 p-1 text-secondary"
        ></i>
        <h6>لا يوجد لديك اى طلبات نشطة</h6>
      </div>
    </div>
  );
}
function NoShkawa() {
  return (
    <div className="card m-0 bg-light pt-2">
      <div className="card-body text-center mt-1">
        <i
          style={{ fontSize: "50px" }}
          className="fa-solid fa-circle-check m-2 p-1 text-secondary"
        ></i>
        <h6> رائع ليس لديك اى شكاوى نشطة </h6>
      </div>
    </div>
  );
}
