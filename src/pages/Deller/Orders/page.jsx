import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from "../../Values";
import ButtomTab from "./ButtomTab";
import axios from "axios";
import Cookies from "js-cookie";
import Chat from "../../compoenents/Chat";
import LoginCheck from "../../LoginCheck/page";
export default function DellerOrders() {
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
        Action: "DellerOrders",
        statue: "",
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
  async function handelOrderAction(number_order, statue) {
    try {
    
      return navigate("../Deller/OrderInfo/" + number_order);
      if (statue == "تم التوصيل") {
        return navigate("../Deller/OrderInfo/" + number_order);
      }

      const post = {
        Name: Username,
        ID: UserID,
        Action: "DellerUpdateOrederStatue",
        statue: statue,
        number_order: number_order,
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

  return (
    <>
      <LoginCheck />
      <div className=" row  m-auto " style={{ maxWidth: "500px" }}>
        <div className="col-12 bg-syan">
          <h3 className="m-2 text-center">الطلبات</h3>
        </div>
        <div className="col-master col-card-alert col-12 mb-4 pt-3">
          {Orders.length > 0 && <CardItem />}
          {Orders.length < 1 ? <NoORDER /> : null}
          <br />
          <br />
        </div>
      </div>
      <ButtomTab />
      <Chat />
    </>
  );

  function CardItem() {
    return Orders.map((x, index) => {
      return (
        <CardOrders
          key={index}
          TypeOrder={x.type_order}
          date={x.date_delivery}
          number={x.number_order}
          statue={x.statue}
        />
      );
    });
  }

  function CardOrders({ TypeOrder, date, number, statue }) {
    let classStatu = "";
    if (statue == "انتظار الموافقة") {
      classStatu = "btn-orange";
    }
    if (statue == "تم الموافقة") {
      classStatu = "btn-danger";
    }

    if (statue == "جارى التاكيد") {
      classStatu = "btn-primary";
    }

    if (statue == "جارى التنفيذ") {
      classStatu = "btn-orange";
    }
    if (statue == "جارى التوصيل") {
      classStatu = "btn-syan";
    }
    if (statue == "تم التوصيل") {
      classStatu = "btn-green";
    }
    return (
      <>
        <div className=" card-content card" style={{ maxWidth: "500px" }}>
          <div className="card-body p-0">
            <div className="row">
              <div className="col-1 text-center p-1">
                <img
                  style={{ width: "40px" }}
                  src="../../../Images/gps.png"
                  alt={TypeOrder}
                />
              </div>
              <div className="col-10">
                <h6
                  style={{
                    fontSize: "1.1em",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {TypeOrder}
                </h6>
                <small>{"#" + number} </small>
              </div>

              <div className="col-4">
                <h6
                  style={{
                    fontSize: "11px",
                    color: "#000",
                    fontWeight: "bold",
                    color: "#00C1BC",
                  }}
                >
                  {date}
                </h6>
              </div>
              <div className="col-8 text-center">
                <button
                  onClick={() => handelOrderAction(number, statue)}
                  style={{ width: "100px" }}
                  className={"btn btn-sm p-0 fw-bold " + classStatu}
                >
                  {statue}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function NoORDER() {
  return (
    <div className="card">
      <div className="card-body text-center " style={{ height: "650px" }}>
        <br /> <br /> <br />
        <div className="StartpageDiv0">
          <img
            style={{ width: "150px" }}
            src="../../../Images/no_order2.png"
            alt="no_alert"
          />
        </div>
        <br /> <br /> <br />
        <h4>لا يوجد هناك طلبات توصيل لديك</h4>
        <h6>
          {
            " لم تقم بتوصيل اى طلب حتى الان . زود دخلك وقم بتوصيل طلبك الاول الان "
          }
        </h6>
        <br />
        <Link to="../Deller/home" className="btn btn-green me-4 w-75">
          {"  طلبات قيد الانتظار  "}
        </Link>
        <br /> <br /> <br />
      </div>
    </div>
  );
}
