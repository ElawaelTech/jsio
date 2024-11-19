import { Visa } from "../../Forms/payMent/visa";
import ButtomTab from "./ButtomTab";
import Chat from "../../compoenents/Chat";
import { Outlet, Link } from "react-router-dom";
import LoginCheck from "../../LoginCheck/page";
import Cookies from "js-cookie";
export default function CustomerShopping() {
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const imgstyle = {
    width: "100%",
  };

  return (
    <>
      <LoginCheck />
      <div
        className="p-1 row  text-center m-auto "
        style={{ maxWidth: "500px" }}
      >
        <div className="col-12 text-end">
          <h6>السلام عليكم يا {Username}</h6>
        </div>
        <div className="col-12 px-2">
          <div className="text-end divSearch">
            <input
              type="text"
              name="Search"
              id="Search"
              className="TextSearch"
              placeholder="بحث عن اى شىء"
            />
            <span>
              <i className="fa-solid fa-location-dot mt-1 text-warning"></i>
              <b className="mx-2">p</b>
            </span>
          </div>
        </div>
      </div>
      <div className="shopDiv">
        <div
          className="  row-master0 p-1 row  text-center m-auto "
          style={{ maxWidth: "500px" }}
        >
          <div className="col-6 p-1">
            <Link to="../Customer/Shopping/AnyShing">
              <div className="bg-light p-1">
                <div className="div-image-home">
                  <img
                    style={imgstyle}
                    src="../../../Images/anything.jpeg"
                    alt=""
                  />
                  <h6 className="fw-bold">وصل اى حاجة</h6>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-6 p-1  ">
            <Link to="../Customer/Shopping/Search/ماكولات ومشروبات">
              <div className="bg-light p-1">
                <div className="div-image-home  bg-light">
                  <img style={imgstyle} src="../../../Images/food.jpg" alt="" />
                  <h6 className="fw-bold"> ماكولات ومشروبات</h6>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-6 p-1 px-1">
            <Link to="../Customer/Shopping/Search/سوير ماركت">
              <div className="bg-light p-1">
                <div className="div-image-home">
                  <img
                    style={imgstyle}
                    src="../../../Images/suppermarket.jpg"
                    alt=""
                  />
                  <h6 className="fw-bold"> سوير ماركت </h6>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-6 p-1 px-1">
            <Link to="../Customer/Shopping/Search/المحلات التجارية">
              <div className="bg-light p-1">
                <div className="div-image-home">
                  <img
                    style={imgstyle}
                    src="../../../Images/image1.jpeg"
                    alt=""
                  />
                  <h6 className="fw-bold">المحلات التجارية</h6>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 text-end p-1">
            <h6> عروضك الخاصة</h6>
            <div className="arowd py-1">
              <Link to="../Customer/Shopping/Search/استخدام كوبون">
                <img
                  className="m-1"
                  src="../../../Images/usekobon.jpg"
                  alt=""
                />
              </Link>
              <Link to="../Customer/Shopping/Search/عروض">
                <img className="m-1" src="../../../Images/arowd.jpg" alt="" />
              </Link>
              <Link to="../Customer/Shopping/Search/الاعلى تقيما">
                <img className="m-1" src="../../../Images/ok.jpg" alt="" />
              </Link>
              <Link to="../Customer/Shopping/Search/وقت القهوة">
                <img className="m-1" src="../../../Images/cofee.jpg" alt="" />
              </Link>
              <Link to="../Customer/Shopping/Search/جدبد">
                <img className="m-1" src="../../../Images/new.jpg" alt="" />
              </Link>
            </div>
          </div>
          <div className="col-12 p-0 text-end mb-4">
            <h6>خدماتنا الاصلية</h6>
            <Link to="../Customer/Shopping/AnyShing">
              <img
                style={{ width: "70px", height: "70px" }}
                src="../../../Images/gps.png"
                alt=""
              />
              <h6>اطلب اى حاجة</h6>
            </Link>

          </div>
        </div>
      </div>
      <ButtomTab />
      {/* <Chat /> */}
    </>
  );
}
