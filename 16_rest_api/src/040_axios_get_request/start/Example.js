import axios from "axios";
import { useEffect } from "react";

const Example = () => {
  useEffect(() => {
    axios
      .get("https://639f1b4b5eb8889197f48665.mockapi.io/api/v1/user")
      .then((response) => {
        console.log(response.data);
      });

    const getUsers = async () => {
      const res = await axios.get(
        "https://639f1b4b5eb8889197f48665.mockapi.io/api/v1/user",
      );
      console.log(res.data);
    };
    getUsers();
  });
  return <></>;
};

export default Example;
