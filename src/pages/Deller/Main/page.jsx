import { Visa } from "../../Forms/payMent/visa";
import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from "../../Values";
import ButtomTab from "./ButtomTab";
import axios from "axios";
import Cookies from "js-cookie";
import Chat from "../../compoenents/Chat";
import LoginCheck from "../../LoginCheck/page";

export default function DellerMain() {
  const navigate = useNavigate();
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const UserID = userinfo[0].ID;
  const CityWork = userinfo[0].CityWork;
  const [Orders, SetOrders] = useState([]);
  const [Offer_, SetOffer_] = useState("0");
  useEffect(() => {
    GetOrders();
  }, []);

  //-------------------------------------------------------------
  async function GetOrders() {
    try {
      const post = {
        Name: Username,
        ID: UserID,
        Action: "DellerWaitingOfers",
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

  async function AddOfer(offer, number_order) {
    try {
      const post = {
        Name: Username,
        ID: UserID,
        delevary_price: offer,
        number_order: number_order,
        Action: "UpdateOrederDelevaryPrice",
      };
      const result = await fetch(API.Orders, {
        method: "POST",
        body: JSON.stringify(post),
      });
      const body = await result.json();
      console.log(body);
      navigate("../Deller/Orders");
    } catch (error) {
      return error;
    }
  }

  const Cost_km = 1.5;
  const Mylocation = 5;

  return (
    <>
      <LoginCheck />
      <div className=" row  m-auto " style={{ maxWidth: "500px" }}>
        <div className="col-1 text-center p-2">
          <img
            style={{ width: "22px", marginTop: "15px" }}
            src="../Images/kas.png"
            alt=""
          />
        </div>
        <div className="col-6 text-start p-2">
          <h6 style={{ fontSize: "14px" }}>الرئيسية</h6>
          <h6 className="text-green p-0 m-0" style={{ fontSize: "11px" }}>
            التنبيهات مفعلة
          </h6>
        </div>
        <div className="col-5 text-center p-2">
          <button style={{ fontSize: "12px" }} className="btn btn-danger">
            ايقاف اسناد الطلبات
          </button>
        </div>

        <div className="col-12 esnad py-2">
          <h6 style={{ fontSize: "12px" }} className="p-0 fw-bold">
            جرب اسناد الطلبات الجديد للحصول على الطلبات بسرعة وسهولة
          </h6>
        </div>
        <div className="col-12 text-end bg-light p-2">
          <small> {Orders.length} طلبات * جميع الخدمات*</small>
        </div>
        <div className="col-master col-card-alert col-12 mb-4 p-1">
          <CardItem />
          <br />
          <br />
        </div>
      </div>

      <ButtomTab />
      <Chat />
    </>
  );
  function CardItem() {
    return Orders.map((order, index) => {
      return (
        <CardOrdersNew
          key={index}
          type_order={order.type_order}
          time={order.time_add}
          number_order={order.number_order}
          items={order.items}
          // countitems={order.items.length}
          countitems={1}
          items_price={order.items_price}
          mylocationCount={Mylocation}
          distance={order.distance}
          cost_delevary={order.total}
          Cost_km={Cost_km}
          img={"../../../Images/gps.png"}
        />
      );
    });
  }

  //======================================
  function CardOrdersNew({
    type_order,
    time,
    number_order,
    items,
    countitems,
    items_price,
    mylocationCount,
    distance,
    Cost_km,
    cost_delevary,
    img,
    onClick,
  }) {
    let cost_delevaryTo = parseFloat(cost_delevary) + parseFloat(20);

    return (
      <>

            <div className="row card-content " style={{ maxWidth: "1000px" }}>
              <div className="col-12 p-0">
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={img}
                  alt=""
                />
                <span
                  className="p-0 m-0 pe-2"
                  style={{
                    fontSize: "1.1em",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {type_order}
                </span>

                <small className="float-start" key={number_order}>
                  {"#" + number_order}{" "}
                </small>
              </div>

              <div className="col-12 mt-2 p-0 ">
                <h6
                  style={{
                    fontSize: "12px",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  تفاصيل الطلب
                </h6>

                <h6
                  key={0}
                  style={{
                    fontSize: "11px",
                    color: "#666",
                   
                  }}
                >
                  {items}
                </h6>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#109DBD",
                    fontWeight: "bold",
                  }}
                >
                  {items_price} جنيه
                </span>

                <span
                  className="me-4"
                  style={{
                    fontSize: "12px",
                    color: "#666",
                    fontWeight: "bold",
                  }}
                >
                  ({countitems} سلع)
                </span>
              </div>
              {/* ------------------------- */}
              <div className="col-12 text-center p-0 pt-2 bg-light shadow0">
               
                <div className="row text-center location-img px-0 mt-2 ">
                  <div className="col-3 p-0 ">
                    <span>
                      <img src="../../../Images/location1.jpg" alt="" />
                      <br />
                      <small style={{ fontSize: "11px" }}>موقعك الحالى</small>
                    </span>
                  </div>
                  <div className="col-2 p-0">
                    <small> {mylocationCount} كم</small>
                  </div>

                  <div className="col-2 p-0">
                    <span>
                      <img src="../../../Images/location2.jpg" alt="" />
                      <br />
                      <small style={{ fontSize: "11px" }}>موقع استلام</small>
                    </span>
                  </div>
                  <div className="col-2 p-0">
                    <small> {distance} كم</small>
                  </div>
                  <div className="col-2 p-0">
                    <span>
                      <img src="../../../Images/location3.jpg" alt="" />
                      <br />
                      <small style={{ fontSize: "11px" }}>موقع تسليم</small>
                    </span>
                  </div>
                </div>
              </div>

              {/* ------------------------ */}
              <div className="col-12 text-center mt-2">
                <button
                  className="btn btn-warning p-1 me-3 fw-bold px-2"
                  style={{ fontSize: "13px" }}
                >
                  عرض اخر
                </button>
                <button
                  onClick={() => AddOfer(cost_delevaryTo, number_order)}
                  className="btn btn-green p-1 me-3 fw-bold px-3"
                  style={{ fontSize: "13px" }}
                >
                  {`   قدم عرض ${cost_delevary} جنية `}
                </button>

                <h6 style={{ fontSize: "10px", marginTop: "5px" }}>
                  {`من ${cost_delevary} جنية الى ${cost_delevaryTo} جتية`}
                </h6>
              </div>
            </div>

      </>
    );
  }

  //============================================
}
