import { useLoaderData } from "react-router-dom";
import Row from "../pages/Row";
import { useState } from "react";

const AllToys = () => {
    const loadedToys = useLoaderData();

    
    const [toys, setToys] = useState(loadedToys);
    const [searchText , setSearchText] = useState('');
    console.log(searchText);
  
  



  console.log(toys)

  const handelSearch = () => {
    fetch(` https://toy-store-server.vercel.app/searchByName/${searchText}`)
    .then(res => res.json())
    .then(data => setToys(data));
  }

  return (
    <div>
      <div className="flex gap-2 justify-center my-8">
        <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Type toy name here" className="input input-bordered input-sm w-full max-w-xs" />
        <button onClick={handelSearch} className="btn btn-primary btn-sm">Search</button>
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
             {
                toys.map(toy => <Row key={toy._id} toy={toy}></Row>)
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
