// import React from "react";
import "./products.css";

const ServerSideRendering = (props) => {
  console.log(props.data.products);
  let data = props.data.products;
  return (
    <div className="  ">
      <table className="">
        <thead className="mb-10 background">
          <tr className="mb-10">
            <th className="py-2 px-6">Title</th>
            <th className="py-2 px-6">Price</th>
            <th className="py-2 px-6">Brand</th>
            <th className="py-2 px-6">Category</th>
          </tr>
        </thead>
        <tbody className="mt-10 body">
          {data.map((item, index) => (
            <tr key={index} className="mt-10">
              <td className="py-4 px-6">{item.title}</td>
              <td className="py-4 px-6">{item.price}</td>
              <td className="py-4 px-6">{item.brand}</td>
              <td className="py-4 px-6">{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = await (await fetch("https://dummyjson.com/products")).json();
  // console.log("running on server");
  return {
    props: {
      data,
    },
  };
};

export default ServerSideRendering;
