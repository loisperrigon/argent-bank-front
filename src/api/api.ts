import axios from "axios";
import config from "../config";
type ConfigKey = keyof typeof config;

const domaine: ConfigKey = process.env.REACT_APP_ENV as ConfigKey;

export async function login(email: string, password: string) {
  try {
    const response = await axios.post(
      `${config[domaine].apiURL}user/login`,
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
      `${config[domaine].apiURL}user/isValidJWT`,
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

/**
 * Met à jour le profil utilisateur.
 * @param {string} token - Le JWT de l'utilisateur.
 * @param {Object} profileData - Les données à mettre à jour.
 * @returns {Promise} - La promesse de la requête Axios.
 */
export async function updateUserProfile(
  token: string,
  profileData: Object
): Promise<any> {
  try {
    const response = await axios.put(
      `${config[domaine].apiURL}user/profile`,
      profileData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour du profil utilisateur:",
      error
    );
    throw error;
  }
}
