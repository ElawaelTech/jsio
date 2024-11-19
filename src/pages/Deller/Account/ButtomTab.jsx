
import { Outlet, Link } from "react-router-dom";
export default function ButtomTab() {
  return (
    <>
      <div className="ButtomTab ">
        <ul>
          <li>
            <Link to="../Deller/home">
              <i className={"fa fa-cart-arrow-down m-0 p-0 "}>
                <h6 style={{fontSize:"13px"}}>الرئيسية</h6>
              </i>
            </Link>
          </li>
          <li>
            <Link to="../Deller/Orders">
              <i
                className={"fas fa-industry m-0 p-0 "}
              >
                <h6 style={{fontSize:"13px"}}>الطلبات</h6>
              </i>
            </Link>
          </li>
          <li>
            <Link to="../Deller/Alerts">
              <i
                className={"fa-solid fa-bell m-0 p-0  "}
              >
                <h6 style={{fontSize:"13px"}}>التنبيهات</h6>
              </i>
            </Link>
          </li>
          <li>
            <Link to="./">
              <i
                className={"fas fa-address-card m-0 p-0  text-green"}
              >
                <h6 style={{fontSize:"13px"}}>صفحتى</h6>
              </i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
 
}
