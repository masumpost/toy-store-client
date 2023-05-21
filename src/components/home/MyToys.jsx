import MyRow from "../pages/MyRow";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../porviders/AuthProviders";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [sortingOrder, setSortingOrder] = useState(""); 

  useEffect(() => {
    fetch(`https://toy-store-server.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);


  useEffect(() => {
    const sortedToys = [...toys]; 
    if (sortingOrder === "ascending") {
      sortedToys.sort((a, b) => a.price - b.price);
    } else if (sortingOrder === "descending") {
      sortedToys.sort((a, b) => b.price - a.price);
    }
    setToys(sortedToys);
  }, [sortingOrder, toys]);

  const handleSortByPrice = (order) => {
    setSortingOrder(order);
  };

  return (
    <div>
      <h1 className="text-center font-bold text-2xl my-5">
        Here is my all toys
      </h1>


      <div className="dropdown dropdown-hover justify-center my-10">
        <label tabIndex={0} className="btn m-1 btn-sm btn-primary">
          Sort By
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a onClick={() => handleSortByPrice('ascending')}>Ascending</a>
          </li>
          <li>
            <a onClick={() => handleSortByPrice('descending')}>Descending</a>
          </li>
        </ul>
      </div>

      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {toys.map((toy) => (
                <MyRow
                  key={toy._id}
                  toy={toy}
                  toys={toys}
                  setToys={setToys}
                ></MyRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
