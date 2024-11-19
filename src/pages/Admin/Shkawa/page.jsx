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
export default function AdminShkawa() {
  const Username = "";
  const UserID = "";
  if (Cookies.get("userinfo")) {
    const userinfo = JSON.parse(Cookies.get("userinfo"));
    const Username = userinfo[0].Name;
    const UserID = userinfo[0].ID;
  }

  //---------ShowModal----------------------------
  const [ShowModal, SetShowModal] = useState(false);
  const handleCloseModal = () => SetShowModal(false);
  const handleShowModal = () => SetShowModal(true);
  const [ShakwaNaumber, SetShakwaNaumber] = useState("");
  const [order_number, Setorder_number] = useState("");
  const [account_type, Setaccount_type] = useState("");
  const navigate = useNavigate();
  const [errors, Seterrors] = useState("");
  const [inputs, setInputs] = useState({
    description: "",
  });
  const [Data, SetData] = useState([]);
  useEffect(() => {
    GetShkawa();
  }, []);
  //-------------------------------------------------------------
  async function GetShkawa() {
    try {
      const post = {
        Name: Username,
        ID: UserID,
        statue: "",
        Action: "AdminShkawa",
      };
      const response = await fetch(API.Orders, {
        method: "POST",
        body: JSON.stringify(post),
      });
      const data = await response.json();
      console.log(data);
      SetData(data);
    } catch (error) {
      return error;
    }
  }
  //-------------------------------------------------------------
  async function ChangeShakwa(id, order_number,account_type) {
    try {
      SetShakwaNaumber(id);
      Setorder_number(order_number);
      Setaccount_type(account_type);
      handleShowModal();
    } catch (error) {
      return error;
    }
  }

  //----------------------------------------

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  //===============================
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data_ = Object.fromEntries(formData.entries());
    if (window.confirm("هل تريد الرد على الشكوى  ")) {
      try {
        const response = await fetch(API.Orders, {
          method: "POST",
          body: JSON.stringify(data_),
        });
        const data = await response.json();
        if (data.errors != "") {
          return alert(data.errors);
        }
        if (data.msg == "success") {
          SetData(data.data);
          handleCloseModal();
        }
        if (response.ok) {
        } else if (response.status === 400) {
          return alert("Errorr 400");
        } else {
          return alert("Can Not Save ");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <LoginCheck />
      <Header_ />
      <div className="continer-floid0">
        <div className="row text-center ">
          <div className="col-12 text-center px-1">
            <h3 className="text-danger  text-center  p-2">الشكاوى</h3>
            <div className="table-responsive w-100 px-3">
              <table
                dir="rtl"
                className="table
               
          table-striped  m-auto"
                cellspacing="1"
                style={{ minWidth: "750px" }}
              >
                <thead>
                  <tr>
                    <th width="60px">الحالة</th>
                    <th width="60px">من</th>
                    <th width="160px">الاسم</th>
                    <th width="160px">نوع الشكوى</th>
                    <th width="160px">الاوردر</th>
                    <th width="100px">رقم اوردر</th>
                    <th width="100px">تاريخ</th>
                    <th>البيان</th>
                  </tr>
                </thead>
                <tbody>
                  {Data.map((x, index) => {
                    var classStatu = "";

                    if (x.statue == "نشطة") {
                      classStatu = "bg-warning";
                    }
                    if (x.statue != "نشطة") {
                      classStatu = "bg-green text-white";
                    }

                    return (
                      <tr key={index}>
                        <td className="text-center px-1">
                          <label
                            onClick={() => ChangeShakwa(x.id, x.order_number,x.account_type)}
                            className={`w-100 rounded ${classStatu}`}
                          >
                            {x.statue}
                          </label>
                        </td>
                        <td className="text-center">{x.account_type}</td>
                        <td>{x.name}</td>
                        <td>{x.type_shakwa}</td>
                        <td>{x.type_order}</td>
                        <td className="text-center">{x.order_number}</td>
                        <td className="text-center">{x.shakwa_date}</td>
                        <td>{x.description}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ShakwaModal />
      <Footer />
    </>
  );
  function ShakwaModal() {
    return (
      <>
        <Modal show={ShowModal} onHide={handleCloseModal}>
          <Modal.Body>
            <form method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="id" value={ShakwaNaumber} />
              <input type="hidden" name="order_number" value={order_number} />
              <input type="hidden" name="account_type" value={account_type} />
              
              <input type="hidden" name="Action" value="EditeShkawa" />
              <div className="row">
                <div className="col-12 text-center">
                  <h4 className="text-start fw-bold p-0 m-0"> رد على شكوى </h4>
                  <hr />
                  <span>الرد على الشكوى رقم {ShakwaNaumber}</span>
                  <br />
                  <span dir="rtl"> الخاصة بالاوردر {order_number}#</span>
                  <br />
                  <input
                    type="text"
                    className="form-control mt-4"
                    name="description"
                  />
                  <br />
                  <button
                    style={{ fontSize: "14px" }}
                    className="btn btn-green  fw-bold mt-2 p-2 mx-1"
                  >
                    رد على الشكوى
                  </button>
                  <button
                    onClick={handleCloseModal}
                    style={{ fontSize: "14px" }}
                    className="btn btn-danger fw-bold mt-2 p-2 mx-1"
                  >
                    الغاء
                  </button>
                  <br />
                  <br />
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
