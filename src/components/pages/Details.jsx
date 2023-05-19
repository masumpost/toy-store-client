import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const toy = useLoaderData();

  const { picture, name, sellerName, sellerEmail, subCategory, price, rating, quantity, description } = toy;

  return (
    <div>
      <h1 className="text-center font-bold text-2xl my-5">
        Read The Details of : {name}
      </h1>

      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl gap-4">
          <div className="md:w-1/2">
          <figure>
            <img
              src={picture}
              alt="toys"
            />
          </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title">Name : {name}</h2>
            <h2 className="card-title">Price : {price}</h2>
            <h2 className="card-title">Seller Name : {sellerName}</h2>
            <h2 className="card-title">Seller Email : {sellerEmail}</h2>
            <h2 className="card-title">Sub Category : {subCategory}</h2>
            <h2 className="card-title"> Rating : {rating}</h2>
            <h2 className="card-title">Quantity : {quantity}</h2>
            <h2 className="card-title">Description : {description}</h2>
            <div className="card-actions justify-end mt-4">
              <Link to="/allToys">
                 <button className="btn btn-primary">Go to all toys</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
