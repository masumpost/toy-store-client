import { useLoaderData } from "react-router-dom";

const Update = () => {
  const toys = useLoaderData();

  const { _id, sellerName, name, subCategory, price, quantity } = toys;

  return (
    <div>
      <h4 className="text-center font-bold text-3xl">
        Updating the toy of : {name}
      </h4>

      <form>
        {/* 1 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Price"
              className="input input-bordered w-full"
              name="price"
            />
          </label>
        </div>

        {/* 1 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="quantity"
              className="input input-bordered w-full"
              name="quantity"
            />
          </label>
        </div>

        {/* 1 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details Description</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="details"
              className="input input-bordered w-full"
              name="details"
            />
          </label>
        </div>

        <input
          className="btn btn-block btn-primary my-5"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default Update;
