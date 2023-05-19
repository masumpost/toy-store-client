
const Row = ({toy}) => {

    const {sellerName, name, subCategory, price, quantity} = toy;

    return (
             <tr>
                <td>{sellerName}</td>
                <td>{name}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                    <button className="btn btn-primary btn-sm">
                        Details
                    </button>
                </td>
              </tr>
    );
};

export default Row;