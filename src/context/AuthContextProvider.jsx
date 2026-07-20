import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);



  /*
  -------------------------
  Storage Helpers
  -------------------------
  */

  const getUsers = () => {

    return JSON.parse(
      localStorage.getItem(USERS_KEY)
    ) || [];

  };



  const saveUsers = (users) => {

    localStorage.setItem(
      USERS_KEY,
      JSON.stringify(users)
    );

  };



  const saveCurrentUser = (
    userData,
    remember = true
  ) => {

    if (remember) {

      localStorage.setItem(
        CURRENT_USER_KEY,
        JSON.stringify(userData)
      );

      sessionStorage.removeItem(
        CURRENT_USER_KEY
      );

    } else {

      sessionStorage.setItem(
        CURRENT_USER_KEY,
        JSON.stringify(userData)
      );

      localStorage.removeItem(
        CURRENT_USER_KEY
      );

    }

  };



  /*
  -------------------------
  Register
  -------------------------
  */

  const register = async (userData) => {

    setLoading(true);

    try {

      const users = getUsers();



      const emailExists = users.some(

        (user) =>

          user.email.toLowerCase() ===
          userData.email.toLowerCase()

      );



      if (emailExists) {

        toast.error(
          "Email already exists"
        );

        return false;

      }



      const newUser = {

        id: crypto.randomUUID(),

        name: userData.fullName,

        email: userData.email,

        password: userData.password,

        phone: "",

        address: "",

        createdAt:
          new Date().toISOString(),

      };



      saveUsers([
        ...users,
        newUser,
      ]);



      saveCurrentUser(
        newUser,
        true
      );



      setUser(newUser);



      toast.success(
        "Account created successfully!"
      );



      return true;

    } catch (error) {

      console.error(error);

      toast.error(
        "Registration failed"
      );

      return false;

    } finally {

      setLoading(false);

    }

  };



  /*
  -------------------------
  Login
  -------------------------
  */

  const login = async ({
    email,
    password,
    remember = true,
  }) => {

    setLoading(true);

    try {

      const users = getUsers();



      const foundUser = users.find(

        (user) =>

          user.email.toLowerCase() ===
            email.toLowerCase()

          &&

          user.password === password

      );



      if (!foundUser) {

        toast.error(
          "Invalid email or password"
        );

        return false;

      }



      saveCurrentUser(
        foundUser,
        remember
      );



      setUser(foundUser);



      toast.success(
        "Welcome Back!"
      );



      return true;

    } catch (error) {

      console.error(error);

      toast.error(
        "Login failed"
      );

      return false;

    } finally {

      setLoading(false);

    }

  };



  const logout = () => {

    localStorage.removeItem("currentUser");

    setUser(null);

    toast.success("Logged out successfully");

  };



  const updateProfile = (updatedData) => {

    try {

      if (!user) return false;

      const users =
        JSON.parse(localStorage.getItem("users")) || [];

      const updatedUser = {
        ...user,
        ...updatedData,
      };

      const updatedUsers = users.map((item) =>
        item.id === user.id
          ? updatedUser
          : item
      );

      localStorage.setItem(
        "users",
        JSON.stringify(updatedUsers)
      );

      localStorage.setItem(
        "currentUser",
        JSON.stringify(updatedUser)
      );

      setUser(updatedUser);

      toast.success("Profile updated successfully");

      return true;

    } catch (error) {

      console.error(error);

      toast.error("Failed to update profile");

      return false;

    }

  };



  useEffect(() => {

    try {

      const currentUser =
        localStorage.getItem("currentUser");

      if (currentUser) {

        setUser(JSON.parse(currentUser));

      }

    } catch (error) {

      console.error(error);

      localStorage.removeItem("currentUser");

    }

  }, []);




  const value = {

    user,

    loading,

    register,

    login,

    logout,

    updateProfile,

    isAuthenticated: Boolean(user),

  };



  return (

    <AuthContext.Provider value={value}>

      {children}

    </AuthContext.Provider>

  );

};

export default AuthContextProvider;