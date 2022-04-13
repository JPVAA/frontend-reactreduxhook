export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    // For Spring Boot back-end
    // return { Authorization: "Bearer " + user.accessToken };

    // for Node.js Express back-end
    console.log(user.accessToken)
    //return { "x-access-token": user.accessToken };
     
    // for django APi
    return { "Authorization": `Token ${user.accessToken}` };

  } else {
    console.log("usuarion no tienen el token")
    return {};
  }
}
