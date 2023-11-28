import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

import "./users.css";

const UserPage = () => {
  const [userss, setUsers] = useState([]);
  let userData = userss.users;
  // let data = userData.map((e) => e.firstName);
  // console.log("userData", data);
  useEffect(() => {
    async function fetchUser() {
      const data = await fetch("https://dummyjson.com/users");
      setUsers(await data.json());
    }
    fetchUser();
  }, []);
  return (
    <div className="overflow-x-auto  ">
      <table className="min-w-full headbg bg-white border-collapse">
        <thead className="">
          <tr className="text-white bg-gray-700">
            <th className="py-2 px-6">First Name</th>
            <th className="py-2 px-6">Gender</th>
            <th className="py-2 px-6">Age</th>
            <th className="py-2 px-6">Phone Number</th>
            <th className="py-2 px-6">Address</th>
            <th className="py-2 px-6">Image</th>
          </tr>
        </thead>
        <tbody className="mt-10 bodyBg">
          {userData &&
            userData.map((item, index) => (
              <tr key={index} className="mt-10">
                <Link href={`/users/${item.id}`}>
                  <td className="py-4 px-6">
                    {item.firstName} {item.lastName}
                  </td>
                </Link>
                <td className="py-4 px-6 text-lg">{item.gender}</td>
                <td className="py-4 px-6 text-lg">{item.age}</td>
                <td className="py-4 px-6 text-lg">{item.phone}</td>
                <td className="py-4 px-6 text-lg">
                  {item.address.address}- {item.address.city}
                </td>
                <td className="py-4 px-6 text-lg">
                  <img
                    src={item.image}
                    height={50}
                    width={70}
                    alt="Dynamic Image"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
