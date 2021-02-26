import cookieparser from "cookieparser";
export const parse = cookieparser.parse(document.cookie);
export const adminRole = "602880041caefd07ec239f38";
export const alumnoRole = "602880041caefd07ec239f39";
export const profeRole = "602880041caefd07ec239f3a";
var nvalor = "";
const apiV = "/api/v1";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export function init() {
  var _parse$role = parse.role ? parse.role : null;
  const num = 1;
  if (_parse$role) {
    for (var i = 0; i < _parse$role.length; i++) {
      const temp = "";
      if (
        parse.role[i] == "j" ||
        parse.role[i] == ":" ||
        parse.role[i] == `"`
      ) {
        num + i;
      } else {
        nvalor = nvalor + parse.role[i];
      }
    }
    return nvalor;
  } else {
    return null
  }
}

const requestOptions = (ti, data) => {
  if(data){
    return {
      method: ti,
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };
  }else{
    return {
      method: ti,
      headers: myHeaders,
      redirect: "follow",
    };
  }
  
};

export function Auth(tipe, data) {
  return fetch(
    `${apiV}/auth/auth`,
    requestOptions(tipe, data)
  ).then((response) => response.json());
}
export function logout() {
  return fetch(`${apiV}/auth/logout`, requestOptions("GET")).then((respo) =>
    respo.json()
  );
}
