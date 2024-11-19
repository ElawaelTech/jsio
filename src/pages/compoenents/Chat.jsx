// import Link from "next/link";
import { Outlet, Link } from "react-router-dom";

export default function Chat() {
  const style_img = {
    width: "65px",
    height: "60px",
    borderRadius: "40px",
  };
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "auto",
          bottom: "100px",
          left: "20px",
          zIndex: "999999999999999999999999",
        }}
      >
        <Link to="../chat">
          <img style={style_img} src="../../Images/chat.jpg" alt="" />
        </Link>
      </div>
    </>
  );
}
