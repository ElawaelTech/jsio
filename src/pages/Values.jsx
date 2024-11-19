// import Cookies from "universal-cookie";
//  const Cookies = new Cookies();
// Cookies.set("elawael", "111", { httpOnly: true });
// console, log(Cookies);

// npm install js-cookie
import Cookies from "js-cookie";
// Set a cookie
// Cookies.set("username", "nasser", { expires: 365 }); // Sets a cookie for 365 days
// Get a cookie
// const username = Cookies.get("username");
// console.log(username);
// Remove a cookie
// Cookies.remove('username');

// sessionStorage.setItem("username", "nasser");
// const username0 = sessionStorage.getItem("username");
// console.log(username0); // Output: JohnDoe
// Removing a session item
// sessionStorage.removeItem('username');
// // Clearing all session items
// sessionStorage.clear();
var Url = "https://elawaeltech.com/jsio/api";
// Url = "http://2.2.2.2/jsio/api";
export const AppValues = {
  logo: "./welecome.jpg",
};

export const ApiUrl = Url;
export const API = {
  Login: Url + "/Login.php",
  //--------------------------------------
  Orders: Url + "/orders/orders.php",
  CustomerAccount: Url + "/Customer/account.php",
  //--------------------------------------
  DellerOrders: Url + "/Deller/orders.php",
  DellerAccount: Url + "/Deller/account.php",
  //--------------------------------------
  Cities: Url + "/puplic/Cities.php",
  CheckKobon: Url + "/puplic/CheckKobon.php",
};
export const ApiAdmin = Url + "/admin";
//==================================
const dateObj = new Date();
const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
const day = ("0" + dateObj.getDate()).slice(-2);
const year = dateObj.getFullYear();
export const GetDate_ = {
  FirstMonth: `${year}-${month}-${"01"}`,
  Today: `${year}-${month}-${day}`,
};
//-------------------------------------------------
