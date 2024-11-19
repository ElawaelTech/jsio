import { Outlet, Link, router, useParams } from "react-router-dom";
import LoginCheck from "../../LoginCheck/page";
import Cookies from "js-cookie";
export default function DellerSupport() {
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  return (
    <>
      <LoginCheck />
      <div
        dir="rtl"
        className="row mt-0 text-center0 m-auto "
        style={{ maxWidth: "500px" }}
      >
        <div className="col-1 py-1 bg-light ">
          <Link to="../Deller/Account">
            <i class="fa-solid fa-chevron-right  mt-2 fs-4"></i>
          </Link>
        </div>
        <div className="col-11 py-1 text-center bg-light">
          <h4>{" دعم المندوبين "}</h4>
        </div>
        <br />

        <div className="col-12 mt-0"></div>
      </div>
    </>
  );
}
