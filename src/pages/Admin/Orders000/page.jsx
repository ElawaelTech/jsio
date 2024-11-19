import { Visa } from "../../Forms/payMent/visa";
import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppValues, API } from "../../Values";
import axios from "axios";
import Cookies from "js-cookie";
import Content from "../compoenents/Content";
import Header_ from "../compoenents/Header_";
import Footer from "../compoenents/Footer";
import Chat from "../../compoenents/Chat";
import LoginCheck from "../../LoginCheck/page";
import { Modal, Button, Dropdown } from "react-bootstrap";
import "../style.css";
export default function AdminOrders() {
  const Username = "";
  const UserID = "";
  if (Cookies.get("userinfo")) {
    const userinfo = JSON.parse(Cookies.get("userinfo"));
    const Username = userinfo[0].Name;
    const UserID = userinfo[0].ID;
  }

  //---------ShowModal----------------------------
  const [ShowModal, SetShowModal] = useState(false);
  const [ModalRegisterType, SetModalRegisterType] = useState(false);
  const handleCloseModal = () => SetShowModal(false);
  const handleShowModal = () => SetShowModal(true);
  const handleCloseModalRegisterType = () => SetModalRegisterType(false);
  const handleShowModalRegisterType = () => SetModalRegisterType(true);
  const navigate = useNavigate();
  const [errors, Seterrors] = useState("");
  const [Info, SetInfo] = useState([]);
  const [inputs, setInputs] = useState({
    UserName: "",
    Password: "",
  });
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
        Action: "AdminOrders",
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
      <Header_ />
      <div className="container-fluid0 p-2">
        <div dir="rtl" className="row bg-white ">

          <div className="col-12 text-center ">
            <h1 className="text-orange m-0 p-0">Orders</h1>
          </div>
          <div className="col-12 text-center mt-0">
            <div className="table-responsive hiddin-scroll0 p-0">
              <table
                dir="rtl"
                className="table table-striped scroll p-0 m-auto"
                cellspacing="1"
              >
                <thead>
                  <tr>
                    <th width="100px">الحالة</th>
                    <th>النوع</th>
                    <th>تاريخ</th>
                    <th>العميل</th>
                    <th>المحافظة</th>
                    <th>المدينه</th>
                    <th>العنوان</th>
                    <th>موبايل</th>
                    <th>الطلب</th>
                    <th>من</th>
                    <th>الى</th>
                    <th>مسافة</th>
                    <th>التقييم</th>
                  </tr>
                </thead>
                <tbody>
                  {Orders.map((x, index) => {
                    var classStatu = "";

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
                      classStatu = "bg-warning";
                    }
                    if (x.statue == "ملغى") {
                      classStatu = "bg-secondary text-white";
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
                    return (
                      <tr key={index}>
                        <td className="text-center px-1">
                          <label className={`w-100 rounded ${classStatu}`}>
                            {x.statue}
                          </label>
                        </td>
                        <td>{x.type_order}</td>
                        <td>{x.date_add}</td>
                        <td>{x.customer_name}</td>
                        <td>{x.city}</td>
                        <td>{x.state}</td>
                        <td>{x.address}</td>
                        <td>{x.mobail}</td>
                        <td>{x.items}</td>
                        <td>{x.from_plase}</td>
                        <td>{x.to_plase}</td>
                        <td>{x.distance}</td>
                        <td>{x.reviews}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
/*
$insData = array(
  'number_order' => $number_order,
  'type_order' => $TypeOrder,
  'customer_id' => $CustomerID,
  'customer_name' => $CustomerName,
  'city' => $City,
  'state' => $State,
  'address' => $Address,
  'mobail' => $Mobail,
  'items' => $Items,
  'items_price' => "0",
  'delevary_price' => number_format($DelevaryPrice, 1),
  'koboon_descount' =>  $KobonDescount,
  'koboon_cod' => $KobonCod,
  'descount' => number_format($Descount, 1),
  'total' => number_format($Total, 1),
  'tax' => number_format($Tax, 1),
  'safee' => number_format($Safee, 1),
  'payment_type' => $PaymentType,
  'from_plase' => $From,
  'to_plase' => $To,
  'distance' => $Distance + 1,
  'delevary_name' => "",
  'date_receipt' =>  "",
  'time_receipt' =>  "",
  'date_delivery' => "",
  'time_delivery' => "",
  'date_add' => $dateToday,
  'time_add' => $TimeNow,
  'description' => $description,
  'statue' => "بانتظار العروض",
  'reviews' => "0",
  'auto_accipt' => "false",
  'tips' => "0",
);
*/
