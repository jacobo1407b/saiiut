const { addAdmin} = require("../../servicios/admin.service");
require("../../mongo");
function testing() {
  addAdmin(
    "jacobo",
    "20182iti011",
    "jacer@gmail.com",
    "1234567890"
  ).then((res) => console.log(res));

}

setTimeout(testing, 7000);
