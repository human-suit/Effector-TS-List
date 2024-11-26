import { FC, useEffect } from "react";
import { useUnit } from "effector-react";
import { fetchUserFx, $user, $loading } from "../stores/user";

interface Props {
  userID: number;
}
interface User {
  name: string;
  email: string;
}

const User: FC<Props> = ({ userID }): number | any => {
  const user: User | any = useUnit($user);
  const loading = useUnit($loading);

  useEffect(() => {
    fetchUserFx(userID);
  }, [userID]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
        </div>
      ) : (
        <p>No User found</p>
      )}
    </div>
  );
};

export default User;
