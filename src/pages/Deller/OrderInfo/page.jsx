import { Outlet, Link, useNavigate, router, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppValues, API } from "../../Values";
import Cookies from "js-cookie";
export default function DellerOrderInfo() {
  const navigate = useNavigate();
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const UserID = userinfo[0].ID;
  const params = useParams();
  const [order, SetOrder] = useState([
    {
      statue: "",
      type_order: "",
      number_order: "",
      date_add: "",
    },
  ]);
  useEffect(() => {
    GetOrders();
  }, []);
  //-------------------------------------------------------------
  async function GetOrders() {
    try {
      const post = {
        number_order: params.order,
        Action: "OrderInfo",
      };
      const response = await fetch(API.Orders, {
        method: "POST",
        body: JSON.stringify(post),
      });
      const body = await response.json();
      console.log(body);
      SetOrder(body);
    } catch (error) {
      return error;
    }
  }

  //=============================================
  //-------------------------------------------------------------
  async function handelOrderAction() {
    if (window.confirm("هل تريد  تغيير الحالة")) {
      try {
        const post = {
          Name: Username,
          ID: UserID,
          Action: "DellerUpdateOrederStatue",
          statue: order[0].statue,
          number_order: order[0].number_order,
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
  }
  //=============================================
  const style = {
    fontSize: "14px",
    color: "#666",
    fontWeight: "bold",
  };

  let classStatu = "";
  if (order[0].statue == "جارى التاكيد") {
    classStatu = "text-primary";
  }
  if (order[0].statue == "ملغى") {
    classStatu = "text-danger";
  }
  if (order[0].statue == "جارى التنفيذ") {
    classStatu = "text-orange";
  }
  if (order[0].statue == "جارى التوصيل") {
    classStatu = "text-info";
  }
  if (order[0].statue == "تم التوصيل") {
    classStatu = "text-green";
  }
  return (
    <>
      <div
        dir="rtl"
        className="row mt-0 text-center0 m-auto "
        style={{ maxWidth: "500px" }}
      >
        <div className="col-1 py-1 bg-info ">
          <i
            onClick={() => navigate(-1)}
            className="fa-solid fa-chevron-right  text-white mt-2 fs-4"
          ></i>
        </div>
        <div className="col-11 py-1 text-center bg-info text-white">
          <h4>{" تفاصيل الطلب "}</h4>
        </div>
        <br />
        <div className="col-1 text-center p-1">
          <img
            style={{ width: "40px" }}
            src="../../../Images/gps.png"
            alt={order[0].type_order}
          />
        </div>
        <div className="col-10 pt-3 px-3">
          <h6
            style={{
              fontSize: "1.2em",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            {order[0].type_order}
          </h6>
        </div>

        <div className="col-12 mt-0">
          <div className="text-center0 w-100 m-1 bg-light p-1 shadow">
            <span className="mx-4">{"#" + order[0].number_order} </span>
            <span
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#00C1BC",
              }}
            >
              {order[0].date_add}
            </span>
            <br />
            <small className={"fw-bold  px-4 p-1 " + classStatu}>
              {order[0].statue}
            </small>
          </div>
        </div>

        <div className="col-12 mt-1">
          <div className="text-center0 w-100 m-1 bg-light p-2 shadow">
            <h4>بيات التوصيل</h4>
            <h6 style={style}>{"من : " + order[0].from_plase}</h6>
            <h6 style={style}>{"الى : " + order[0].to_plase}</h6>
          </div>
        </div>
        <div className="col-12 mt-1">
          <div className="text-center0 w-100 m-1 bg-light p-2 shadow">
            <h4> تكلفة التوصيل</h4>
            <h6 style={style}>{order[0].delevary_price + " جنية "}</h6>
          </div>
        </div>

        <div className="col-12 mt-1">
          <div className="text-center0 w-100 m-1 bg-light p-2 shadow">
            <h4> المواد الموصلة</h4>

            <h6 className="text-center0" style={style}>
              {order[0].items}
            </h6>
          </div>
        </div>
        <div className="col-12 text-center mt-4">
          {order[0].statue != "تم التوصيل" && (
            <h6 onClick={handelOrderAction} className="bg-green p-2">
              تغيير الحالة
            </h6>
          )}
        </div>
      </div>
    </>
  );
}
