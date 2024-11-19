// import Link from "next/link";
import { Outlet, Link, useNavigate, router, useParams } from "react-router-dom";
export default function Chat() {
  const Params = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    const form = document.querySelector("#FormData");
    event.preventDefault();
    const formData = new FormData(form);
    const data_ = Object.fromEntries(formData.entries());
    console.log(data_);
    if (data_.mony == "" || data_.mony == null) {
      return alert("الرجاء كتابة المبلغ");
    }
    if (data_.name == "" || data_.name == null) {
      return alert("الرجاء كتابة اسم صاحب البطاقة");
    }
    if (data_.number == "" || data_.number == null) {
      return alert("الرجاء كتابة رقم البطاقة");
    }
    if (data_.expir == "" || data_.expir == null) {
      return alert("الرجاء كتابة تاريخ الانتهاء");
    }
    if (data_.cvc == "" || data_.cvc == null) {
      return alert("الرجاء كتابة رمز الامان");
    }

    // const result = await fetch(`http://127.0.0.1/elmohaseb/home`, data_);
    // const body = await result.json();
    // console.log(result);

    // return navigate(`../Deller/Account`);
  };
  const style_img = {
    width: "65px",
    height: "60px",
    borderRadius: "40px",
  };
  return (
    <>
      <div className="card m-auto chatCard0 " style={{ maxWidth: "500px" }}>
        <div className="card-header  p-0">
          <div className="row p-2 m-0 bg-green text-center chatheader">
            <div className="col-2">
              {/* <Link to="../Customer/Shopping"> */}
              <img
                onClick={() => navigate(-1)}
                style={{ width: "30px" }}
                src="./Images/2.png"
                alt=""
              />
              {/* </Link> */}
            </div>
            <div className="col-10">
              <span>CHAT</span>
            </div>
          </div>
        </div>
        <div className="card-body chat-content">
          <h1>fghf</h1>
          <h1>gfgg</h1>
          <h1>fghf</h1>
          <h1>gfgg</h1>
          <h1>fghf</h1>
          <h1>gfgg</h1>
          <h1>fghf</h1>
          <h1>gfgg</h1>
          <h1>fghf</h1>
          <h1>gfgg</h1>
          <h1>fghf</h1>
          <h1>gfgg</h1>
          <h1>fghf</h1>
          <h1>gfgg</h1> <h1>fghf</h1>
          <h1>gfgg</h1>
          <h1>fghf</h1>
          <h1>gfgg</h1>
          <h1>fghf</h1>
          <h1>gfgg</h1>
          <h1>fghf</h1>
          <h1>gfgg</h1>
          <h1>fghf</h1>
          <h1>gfgg</h1> <h1>fghf</h1>
          <h1>gfgg</h1>
          <h1>fghf</h1>
          <h1>gfgg</h1> <h1>fghf</h1>
          <h1>gfgg</h1> <h1>fghf</h1>
          <h1>gfgg</h1> <h1>fghf</h1>
          <h1>gfgg</h1> <h1>fghf</h1>
          <h1>gfgg</h1> <h1>fghf</h1>
          <h1>gfgg</h1> <h1>fghf</h1>
          <h1>gfgg</h1> <h1>fghf</h1>
          <h1>gfgg</h1> <h1>fghf</h1>
          <h1>gfgg</h1> <h1>fghf</h1>
          <h1>gfgg</h1>
        </div>
        <div className="card-foot pb-4">
          <div className="chatfooter row bg-light p-0 m-0">
            <div className="col-1 p-1 text-center">
              <i className="fa-regular fa-paper-plane text-green"> </i>
            </div>
            <div className="col-11 p-1">
              <input type="text" name="" className="form-control Chatmsg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
