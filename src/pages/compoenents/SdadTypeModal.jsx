// import Link from "next/link";
import { Outlet, Link } from "react-router-dom";

export default function SdadTypeModal() {
  return (
    <>
      <div
        className="modal fade"
        id="AddRassedModal"
        aria-labelledby="AddRassedModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header p-0 px-2">
              <h4>اضف رصيد</h4>
            </div>
            <div className="modal-body">
              <div className="row text-end" dir="rtl">
                <div className="col-12 ">
                  <select name="select_1" id="select_1">
                    <option value=""></option>
                    <option value="نقدى">نقدى</option>
                    <option value="حساب بنكى">حساب بنكى</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-info text-white"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
