import axios from "axios";

const backend = process.env.REACT_APP_BACKEND;

export function getUser() {
  const endpoint = backend + '/user'
  console.log(endpoint);


  const getUserPromise = new Promise( (resolve, reject) => {
    axios.get(endpoint).then((res) => {
      console.log("Response:",res);
      resolve(res.data);
    }).catch((err) =>{
      console.log(err);
      reject(err);
    });
  });

  return getUserPromise;
}

export function login(accessToken) {
  const queries = `?accessToken=${accessToken}`
  const endpoint = backend + '/authenticate' + queries;

  const loginPromise = new Promise( (resolve, reject) => {
    axios.post(endpoint).then((res) => {
      console.log("Login Response:", res);
      resolve(res.data);
    }).catch((err) => {
      console.log("Login error:", err);
      resolve(err);
    })
  }); 

  return loginPromise;
}