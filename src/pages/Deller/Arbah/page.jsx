import { useState, useEffect } from "react";
import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
import Chat from "../../compoenents/Chat";
import CardOrders from "../compoenents/CardOrders";
import Cookies from "js-cookie";
import LoginCheck from "../../LoginCheck/page";
import { GetDate_, AppValues, API, ApiUrl } from "../../Values";
export default function DellerArbah(order) {
  const params = useParams();
  const [Data, SetData] = useState([]);
  const [delevary_price, Setdelevary_price] = useState(0);
  const [Inputs, SetInputs] = useState([
    {
      dateFrom: "",
      dateTo: "",
    },
  ]);
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const UserID = userinfo[0].ID;
  //----------------------------------
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetInputs((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    SetInputs((values) => ({ ...values, ["dateFrom"]: GetDate_.FirstMonth }));
    SetInputs((values) => ({ ...values, ["dateTo"]: GetDate_.Today }));
    GetData();
  }, []);
  //------------------------------------
  async function GetData() {
    try {
      const post = {
        Name: Username,
        ID: UserID,
        dateFrom: Inputs.dateFrom,
        dateTo: Inputs.dateTo,
        Action: "OrdersSearchArbah",
      };
      console.log(post);
      const respons = await fetch(`${ApiUrl}/orders/orders.php`, {
        method: "POST",
        body: JSON.stringify(post),
      });
      const body = await respons.json();

      SetData(body.data);
      Setdelevary_price(body.delevary_price);
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
        <div className="col-1 py-1 bg-info ">
          <Link to="../Deller/Account">
            <i class="fa-solid fa-chevron-right  text-white mt-2 fs-4"></i>
          </Link>
        </div>
        <div className="col-11 py-1 text-center bg-info text-white">
          <h4>{"  حساب الارباح "}</h4>
        </div>
        <br />

        <div className="col-6 mt-4">
          <label className="col-form-label">من تاريخ</label>
          <input
            type="date"
            name="dateFrom"
            onChange={handleChange}
            value={Inputs.dateFrom}
            className="form-control"
          />
        </div>
        <div className="col-6 mt-4">
          <label className="col-form-label">الى تاريخ</label>
          <input
            type="date"
            name="dateTo"
            onChange={handleChange}
            value={Inputs.dateTo}
            className="form-control"
          />
        </div>

        <div className="col-12 text-center mt-4">
          <button
            onClick={GetData}
            className="btn btn-orange w-75 fw-bold p-1 fs-4"
          >
            احسب
          </button>
        </div>

        <div className="col-12 text-center mt-4">
          <h1>الارباح {` ${delevary_price} جنية`}</h1>
        </div>
        <div className="col-master col-card-alert col-12 mb-4 pt-1">
          {Data.length > 0 && <CardItem />}
          {Data.length < 1 ? <NoORDER /> : null}
        </div>
      </div>
    </>
  );

  function CardItem() {
    return Data.map((x, index) => {
      return (
        <>
          <CardOrders
            key={index}
            TypeOrder={x.type_order}
            date={x.date_delivery}
            number={x.number_order}
            statue={x.delevary_price}
          />
        </>
      );
    });
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
        <br /> <br /> <br />
      </div>
    </div>
  );
}
