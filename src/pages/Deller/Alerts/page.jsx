import CardAlert from "../compoenents/CardAlert";
import ButtomTab from "./ButtomTab";
import { useState, useEffect } from "react";
import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
import Chat from "../../compoenents/Chat";
import Cookies from "js-cookie";
import LoginCheck from "../../LoginCheck/page";
import { AppValues, API, ApiUrl } from "../../Values";
export default function DellerAlert() {

  const [Data, SetData] = useState([]);
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const UserID = userinfo[0].ID;
  const params = useParams();


   useEffect(() => {
    GetData();
  }, []);
  async function GetData() {
    try {
      const post = {
        Name: Username,
        ID: UserID,
        statue: "",
        Action: "Alerts",
      };
      console.log(post);
      const respons = await fetch(`${ApiUrl}/Deller/CalculateData.php`, {
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
      <div className="row m-auto" style={{ maxWidth: "500px" }}>
        <div className="col-12 p-1 bg-orange">
          <h4>التنبيهات</h4>
        </div>
        <div className="col-master col-card-alert col-12 my-4 pt-2">
          {Data.length > 0 ? <CardAlerts /> : null}
          {Data.length < 1 ? <NoAlerts /> : null}
          <br />
        </div>
      </div>
      <ButtomTab />
      {/* <Chat/> */}
    </>
  );

  function CardAlerts() {
    return Data.map((x, index) => {
      return <CardAlert key={index} msg={x.msg} time={x.time} />;
    });
  }
}
function NoAlerts() {
  return (
    <div className="card m-0">
      <div className="card-body text-center " style={{ height: "650px" }}>
        <br /> <br /> <br />
        <br /> <br /> <br />
        <i
          style={{ fontSize: "100px" }}
          className="fa-solid fa-bell-slash m-4 p-4 text-secondary"
        ></i>
        <h4>لا يوجد اى تنبيهات </h4>
        <br /> <br /> <br />
      </div>
    </div>
  );
}
