import Swal from 'sweetalert2'


const AddAToys = () => {

    const handelAddToy = event => {
        event.preventDefault()
        const form = event.target;
        const picture = form.picture.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const addToy = {picture, name, sellerName, sellerEmail, subCategory, price, rating, quantity, description};
        
        console.log(addToy);


        fetch('http://localhost:5000/toys', {
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(addToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Toy Added SuccessFully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8">Add A Toy</h2>

      <form onSubmit={handelAddToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 1 */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Toy Picture</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="add a picture"
            className="input input-bordered w-full"
            name="picture"
          />
        </label>
      </div>

        {/* 2 */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            name="name"
          />
        </label>
      </div>

        {/* 3 */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Seller Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Seller Name"
            className="input input-bordered w-full"
            name="sellerName"
          />
        </label>
      </div>
        {/* 3 */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Seller Email</span>
        </label>
        <label className="input-group">
          <input
            type="email"
            placeholder="seller@mail.com"
            className="input input-bordered w-full"
            name="sellerEmail"
          />
        </label>
      </div>
        {/* 4 */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Sub Category</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Add Sub Category"
            className="input input-bordered w-full"
            name="subCategory"
          />
        </label>
      </div>
        {/* 5 */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="price"
            className="input input-bordered w-full"
            name="price"
          />
        </label>
      </div>
        {/* 6 */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Rating</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="rating"
            className="input input-bordered w-full"
            name="rating"
          />
        </label>
      </div>
        {/* 7 */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Available Quantity</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="available quantity"
            className="input input-bordered w-full"
            name="quantity"
          />
        </label>
      </div>
        </div>
        {/* 8 */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Details Description</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Details Description"
            className="input input-bordered w-full"
            name="description"
          />
        </label>
      </div>
        <input className="btn btn-block btn-primary my-5" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddAToys;
