
import { Outlet, Link } from "react-router-dom";

export function Visa() {
  return (
    <>
      <form action="" method="POST">
        <div className="card">
          <div className="card-header bg-syan p-2 ">
            <Link to="./Account" className=" fw-bold fs-6 ms-4 text-white">
              {"<-"}
            </Link>
            <span>Card Information </span>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <label htmlFor="" className="col-form-label">
                  أدخل المبلغ المراد إضافتة الى رصيدك
                </label>
                <input
                  type="number"
                  name="mony"
                  className="form-control bg-light inputsyan"
                  autoComplete="off"
                  placeholder="100"
                />
              </div>

              <div className="col-12">
                <label htmlFor="" className="col-form-label">
                  اسم صاحب البطاقة
                </label>
                <input
                  type="text"
                  name="Name"
                  className="form-control bg-light inputsyan"
                  autoComplete="off"
                  placeholder="JOZEF"
                />
              </div>
              <div className="col-12">
                <label htmlFor="" className="col-form-label">
                  {" "}
                  رقم البطاقه{" "}
                </label>
                <input
                  type="text"
                  name="Number"
                  className="form-control bg-light inputsyan"
                  autoComplete="off"
                  size={20}
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                />
              </div>
              <div className="col-8">
                <label htmlFor="" className="col-form-label">
                  تاريخ الانتهاء
                </label>
                <input
                  type="text"
                  name="expir"
                  className="form-control text-center bg-light inputsyan"
                  autoComplete="off"
                  placeholder="YY / MM"
                />
              </div>
              <div className="col-4">
                <label htmlFor="" className="col-form-label">
                  رمز الأمان
                </label>
                <input
                  type="text"
                  name="CVC"
                  className="form-control text-center bg-light inputsyan"
                  autoComplete="off"
                  size={4}
                  placeholder="123"
                />
              </div>
              <div className="col-12 p-2 text-center pt-4">
                <button className="btn btn-syan w-100">ادفع</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
