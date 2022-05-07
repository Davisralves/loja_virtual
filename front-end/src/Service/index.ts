import { IUserLogin } from "../interfaces";
export const verifyLogin = async ({username, password}: IUserLogin) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username, password}),
    }
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, requestOptions);
    if(!response) throw Error('Server Error');
    return await response.json();
  } catch(error) {
    return error;
  }
}
