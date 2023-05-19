import { useLoaderData } from "react-router-dom";
import MyRow from "../pages/MyRow";

const MyToys = () => {

    const toys = useLoaderData();
    console.log(toys);

    return (
        <div>
            <h1 className="text-center font-bold text-2xl my-5">Here is my all toys</h1>


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
             {
                toys.map(toy => <MyRow key={toy._id} toy={toy}></MyRow>)
             }
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
};

export default MyToys;