import React from "react";
const useGetUserData = () => {
  const [userData, setUserData] = React.useState([]);

  React.useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("users"));
    const user = localData?.users?.name;
    setUserData(user);
  }, []);

  return userData;
};

export default useGetUserData;
