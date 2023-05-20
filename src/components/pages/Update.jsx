import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const toys = useLoaderData();

  const { _id, name, price, quantity, description } = toys;


  const handelUpdateToy = event => {
    event.preventDefault()
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updateToy = { name,   price,quantity, description};
    
    console.log(updateToy);


    fetch(`https://toy-store-server.vercel.app/toys/${_id}`, {
        method:'PUT',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(updateToy)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
            Swal.fire({
                title: 'success!',
                text: 'Toy Updated SuccessFully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
}




  return (
    <div>
      <h4 className="text-center font-bold text-3xl">
        Updating the toy of : {name}
      </h4>

      <form onSubmit={handelUpdateToy}>
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
              defaultValue={price}
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
              defaultValue={quantity}
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
              placeholder="description"
              className="input input-bordered w-full"
              name="description"
              defaultValue={description}
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
