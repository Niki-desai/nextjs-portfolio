import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserInfoPage = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    const id = router.query.id;
    console.log("id", id);
    async function getUserById(id) {
      const data = await fetch(`https://dummyjson.com/users/${id}`);
      setUser(await data.json());
    }
    getUserById(id);
  }, [router.query.id]);

  console.log("user", user);

  if (!user) {
    return null; // If user data is not available, return null to render nothing
  }

  return (
    <div className="border rounded-lg p-4  ">
      <div className="text-center mb-4">
        <img
          src={user?.image}
          alt="User"
          className="w-32 h-32 rounded-full mx-auto"
        />
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-center">
          {user?.firstName} {user?.lastName}
        </h2>
      </div>
      <div className="border-t border-gray-300 pt-4">
        <p className="text-center">
          Address: {user?.address?.address}, {user?.address?.city},
          {user?.address?.state}
        </p>
        <p>DOB:{user?.birthDate}</p>
        <p>Age:{user.age}</p>
        <p>Email:{user.email}</p>
        <p>University:{user.university}</p>
        <p></p>
      </div>
    </div>
  );
};

export default UserInfoPage;
