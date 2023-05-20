import { useLoaderData } from "react-router-dom";
import Row from "../pages/Row";

const AllToys = () => {
  const toys = useLoaderData();
  console.log(toys)

  console.log(toys);


  return (
    <div>
      <h2 className="text-center font-bold text-3xl my-7">
        Here is All Toys
      </h2>

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
