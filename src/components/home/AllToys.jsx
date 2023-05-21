import { useLoaderData } from "react-router-dom";
import Row from "../pages/Row";
import { useState } from "react";

const AllToys = () => {
  const loadedToys = useLoaderData();

  const [toys, setToys] = useState(loadedToys);
  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsParPage = 20;
  const lastIndex = currentPage * recordsParPage;
  const firstIndex = lastIndex - recordsParPage;
  const records = toys.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(toys.length / recordsParPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  console.log(toys);

  const handelSearch = () => {
    fetch(` https://toy-store-server.vercel.app/searchByName/${searchText}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div>
      <div className="flex gap-2 justify-center my-8">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Type toy name here"
          className="input input-bordered input-sm w-full max-w-xs"
        />
        <button onClick={handelSearch} className="btn btn-primary btn-sm">
          Search
        </button>
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
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {records.map((toy) => (
                <Row key={toy._id} toy={toy}></Row>
              ))}
            </tbody>
          </table>
        </div>

        

        <div className="btn-group text-center gap-2 my-5">
          <button onClick={prePage} className="btn">«</button>
          

          {numbers.map((n, i) => (
              <li key={i}>
                 <button className="btn" onClick={() => changeCPage(n)}>
                  Page {n}
                </button>
              </li>
            ))}

         
          <button onClick={nextPage} className="btn">»</button>
        </div>
      </div>
    </div>
  );

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default AllToys;
