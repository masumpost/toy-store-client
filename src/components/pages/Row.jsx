import { Link } from "react-router-dom";

const Row = ({ toy }) => {
  const { _id, sellerName, name, subCategory, price, quantity } = toy;

  return (
    <tr>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/details/${_id}`}>
          <button className="btn btn-primary btn-sm">Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default Row;
