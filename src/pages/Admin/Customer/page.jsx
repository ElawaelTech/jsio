import { Visa } from "../../Forms/payMent/visa";
import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppValues, API, ApiAdmin } from "../../Values";
import axios from "axios";
import Cookies from "js-cookie";
import Content from "../compoenents/Content";
import Header_ from "../compoenents/Header_";
import Footer from "../compoenents/Footer";
import Chat from "../../compoenents/Chat";
import LoginCheck from "../../LoginCheck/page";
import { Modal, Button, Dropdown } from "react-bootstrap";
import "../style.css";
export default function AdminCustomer() {
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
  const [Data, SetData] = useState([]);
  useEffect(() => {
    GetCustomrs();
  }, []);
  //-------------------------------------------------------------
  async function GetCustomrs() {
    try {
      const post = {
        Action: "AdminCustomrs",
      };
      const result = await fetch(ApiAdmin + "/Customrs.php", {
        method: "POST",
        body: JSON.stringify(post),
      });
      const body = await result.json();
      console.log(body);
      SetData(body);
    } catch (error) {
      return error;
    }
  }

  return (
    <>
      <Header_ />
      <div className="continer-floid0">
        <div className="row text-center ">
          <div className="col-12 text-center px-1">
            <h3 className="text-danger  text-center  p-2">العملاء</h3>
            <div className="table-responsive w-100 px-3">
              <table
                dir="rtl"
                className="table
                
           table-striped  m-auto"
                cellspacing="1"
                style={{ width: "1250px" }}
              >
                <thead>
                  <tr>
                    <th width="60px">النوع</th>
                    <th width="120px">الاسم</th>
                    <th width="150px">عنوان</th>
                    <th width="80px">الميلاد</th>
                    <th width="80px">موبايل</th>
                    <th width="80px"> الرصيد</th>
                    <th width="50px">التقييم</th>
                    <th width="60px"> الحالة</th>
                    <th width="60px"> الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  {Data.map((x, index) => {
                    var classStatu = "";

                    if (x.Statue == "نشطة") {
                      classStatu = "bg-warning";
                    }
                    if (x.Statue != "نشطة") {
                      classStatu = "bg-green text-white";
                    }

                    return (
                      <tr key={index}>
                        <td className="text-center">{x.Gender}</td>
                        <td>{x.Name}</td>
                        <td>{x.State + " - " + x.Address}</td>
                        <td className="text-center">{x.BirthDate}</td>
                        <td className="text-center">{x.Mobail}</td>
                        <td className="text-center">{x.Mony}</td>
                        <td className="text-center">{x.reviews}</td>
                        <td className="text-center px-1">
                          <label className={`w-100 rounded ${classStatu}`}>
                            {x.Statue}
                          </label>
                        </td>
                        <td className="text-center">{x.Description}</td>
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

// $insData = array(
//   'ID' => $ID,
//   'Gender' => $Gender,
//   'Name' => $FullName,
//   'City' => $City,
//   'State' => $State,
//   'Address' => $Address,
//   'Mobail' => $Mobail,
//   'Email' => $Email,
//   'BirthDate' => $BirthDate,
//   'Mony' => "0",
//   'Password' =>  $Password,
//   'Description' =>  "",
//   'v_number' =>  "000",
//   'v_ex' => "2020",
//   'v_c' => "1234",
//   'Statue' => "Active",
//   'reviews' => "0",
//   'token' => 'awtkhom',
//   'LastLogin' => $dateToday,
// );