import { Outlet, Link,useNavigate  } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import LoginCheck from "../../LoginCheck/page";
export default function CustomerStartPage() {
  const [StartPage, SetStartPage] = useState(1);
  const navigate = useNavigate();
  function Close() {
    Cookies.set("StartPage", "0", { expires: 365 });
    return navigate("../Customer/Shopping");
  }
  const handleChange = (e) => {
    const x = e.target.id;
    if (StartPage < 4) {
      SetStartPage(StartPage + 1);
    }
  };

  return (
    <>
     <LoginCheck/>
      <div
        className="row-master row text-center m-auto"
        style={{ maxWidth: "500px" }}
      >
        <div className="col-12 text-center"></div>
        {StartPage == 1 ? <Page1 /> : null}
        {StartPage == 2 ? <Page2 /> : null}
        {StartPage == 3 ? <Page3 /> : null}
      </div>
      <div />
    </>
  );

  function Page1() {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <div className="StartpageDiv">
              <img src="../Images/page1.jpg" alt="Page1" />
            </div>
            <h4> تفضل واطلب من جميع انواع المتاجر فى كل مكان من داخل مدينتك</h4>
            <br /> <br />
            <button onClick={Close} className="btn btn-default ms-4">
              {" ليس الان "}
            </button>
            <button
              id="1"
              onClick={handleChange}
              className="btn btn-green me-4 px-4"
            >
              التالى
            </button>
          </div>
        </div>
      </>
    );
  }

  function Page2() {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <div className="StartpageDiv">
              <img src="../Images/page2.jpg" alt="Page2" />
            </div>
            <h4>نقدم لك افضل التجارب لما نجى نتكلم عن الطلبات فى هذا النظام</h4>
            <br /> <br />
            <button onClick={Close} className="btn btn-default ms-4">
              {" ليس الان "}
            </button>
            <button onClick={handleChange} className="btn btn-green me-4 px-4">
              {"التالى "}
            </button>
          </div>
        </div>
      </>
    );
  }

  function Page3() {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <div className="StartpageDiv">
              <img src="../Images/page3.jpg" alt="Page3" />
            </div>
            <h4> مش بس كدة تقدر تتواصل مع المندوبين فى الطلبات دائما</h4>
            <br /> <br />
            <button onClick={Close} className="btn btn-green me-4 w-75">
              {"تم "}
            </button>
          </div>
        </div>
      </>
    );
  }
}
