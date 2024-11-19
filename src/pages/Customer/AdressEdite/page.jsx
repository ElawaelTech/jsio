
import { Outlet, Link, router, useParams } from "react-router-dom";
import LoginCheck from "../../LoginCheck/page";
import Cookies from "js-cookie";
export default function CustomerAdressEdite(order) {
   // import Cookies from "js-cookie";
   const userinfo = JSON.parse(Cookies.get("userinfo"));
   const Username = userinfo[0].Name;
 
 
  const params = useParams();
  const style = {
    fontSize: "14px",
    color: "#666",
    fontWeight: "bold",
  };

    return (
      <>
       <LoginCheck/>
        <div
          dir="rtl"
          className="row mt-0 text-center0 m-auto "
          style={{ maxWidth: "500px" }}
        >
          <div className="col-1 py-1 bg-info ">
            <Link to="../Customer/AdressSaved">
              <i class="fa-solid fa-chevron-right  text-white mt-2 fs-4"></i>
            </Link>
          </div>
          <div className="col-11 py-1 text-center bg-info text-white">
            <h4>{"  تعديل عنوان "}</h4>
          </div>
          <br />
         
          <div className="col-12 mt-0">
          
          </div>



        </div>
      </>
    );
  }
