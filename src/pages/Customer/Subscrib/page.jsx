import { useState, useEffect } from "react";
import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
import Chat from "../../compoenents/Chat";
import Cookies from "js-cookie";
import LoginCheck from "../../LoginCheck/page";
import CardOrders from "../compoenents/CardOrders";
import { AppValues, API, ApiUrl } from "../../Values";
export default function CustomerSubscrib() {
  const [Data, SetData] = useState([]);
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const UserID = userinfo[0].ID;
  const params = useParams();
  const style = {
    fontSize: "14px",
    color: "#666",
    fontWeight: "bold",
  };

  useEffect(() => {
    GetData();
  }, []);
  async function GetData() {
    try {
      const post = {
        Name: Username,
        ID: UserID,
        statue: "",
        Action: "subscrib",
      };
      console.log(post);
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
          <h4>{"  تقييمات الخدمات  "}</h4>
        </div>
        <br />

        <div className="col-master col-12 mt-0 pt-4">
          {Data.length > 0 ? <CardItem /> : null}
          {Data.length < 1 ? <NoSubscrib /> : null}
        </div>
      </div>
    </>
  );

  function CardItem() {
    return Data.map((x, index) => {
      return (
        <>
          <div key={index + 1000} className="card shadow mt-2 bg-light">
            <div key={index + 2000} className="card-body">
              <h6 className="text-secondary" key={index + 3000}>
                {x.Description}
              </h6>
              <small className="text-green" key={index + 4000}>
                {x.Date}
              </small>
            </div>
          </div>
        </>
      );
    });
  }
}

function NoSubscrib() {
  return (
    <div className="card m-0">
      <div className="card-body text-center " style={{ height: "650px" }}>
        <br /> <br />
        <br />
        <i
          style={{ fontSize: "100px" }}
          className="fa-solid fa-subscript m-4 p-4 text-secondary"
        ></i>
        <h4>لا يوجد تقييمات</h4>
        <br /> <br /> <br />
      </div>
    </div>
  );
}
