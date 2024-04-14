import axios from "axios";

export async function login(email: string, password: string) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}` + "user/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export async function isValidJWT(jwt: string) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}user/isValidJWT`,
      { jwt } // Envoyer le JWT dans le corps de la requête
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message || "Unknown error occurred");
    }
  } catch (error) {
    console.error("JWT validation error:", error);
    throw error;
  }
}
