import { IUserLogin } from "../Interfaces";
export const verifyLogin = async ({email, password}: IUserLogin) => {
  // try {
    return {body: {admin: true}, status: 200}
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({username, password}),
  //   }
  //   const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, requestOptions);
  //   if(!response) throw Error('Server Error');
  //   return await response.json();
  // } catch(error) {
  //   return error;
  // }
}
// REACT_APP_API_URL=http://localhost:8000/

export const fetchProducts = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}products`);
        if(!response) throw Error('Server Error');
        console.log('fetch', response);
        return await response.json();
      } catch(error) {
        return error;
      }
}

