import React from "react";
const useDeleteUserData = () => {
  React.useEffect(() => {
    localStorage.removeItem("users");
  }, []);
};

export default useDeleteUserData;
