import { Visa } from "../../../Forms/payMent/visa";
import ButtomTab from "./ButtomTab";
import Chat from "../../../compoenents/Chat";
import { Outlet, Link, router, useParams } from "react-router-dom";
import Cookies from "js-cookie";
export default function CustomerSearch(Search) {
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const Alerts = [
    {
      name: "ناصر",
      time: "2 ساعه",
      number: "54461",
      cost: "54",
      countitems: "2",
      items: [
        {
          item: "سماعه",
          count: "1",
        },
        {
          item: "شاشاه",
          count: "1",
        },
      ],
    },
  ];
  const params = useParams();
  const imgstyle = {
    height: "100%",
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div
        className="p-1 row  text-center m-auto "
        style={{ maxWidth: "500px" }}
      >
        <div className="col-1">
          <Link to="../Customer/Shopping">
          <i class="fa-solid fa-arrow-right mt-2 fs-4"></i>
          </Link>
        </div>
        <div className="col-11 px-2">
          <div className="text-end divSearch d-flex">
            <input
              type="text"
              name="Search"
              id="Search"
              className="TextSearch"
              placeholder={" بحث فى " + params.Search}
            />
          </div>
        </div>
        {Alerts.length > 0 ? <NoORDER /> : null}
        {Alerts.length < 1 ? <NoORDER /> : null}
      </div>

      {/* <ButtomTab /> */}
      {/* <Chat /> */}
    </>
  );

  function CardItem() {
    return Alerts.map((x, index) => {
      return (
        <>
          <h1>fgfg</h1>
        </>
      );
    });
  }
}

function NoORDER() {
  {
    return (
      <div className="col-12 text-center mt-4 pt-4">
        <img
          style={{ width: "100%" }}
          src="../../../../Images/serachnotfound.jpg"
          alt="no_order"
        />
      </div>
    );
  }
}
