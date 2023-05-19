import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyRow = ({ toy, toys, setToys }) => {
  const { _id, sellerName, name, subCategory, price, quantity } = toy;

  const handelDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = toys.filter(ts => ts._id !== _id);
              setToys(remaining);
            }
          });
      }
    });
  };

  return (
    <tr>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
         <Link to={`/update/${_id}`}>
            <button className="btn btn-primary btn-sm">Update</button>
         </Link>
      </td>
      <td>
          <button
            onClick={() => handelDelete(_id)}
            className="btn btn-circle bg-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
      </td>
    </tr>
  );
};

export default MyRow;
