const Cards = ({data}) => {

    console.log(data)

    const{picture, name, price, rating} = data;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={picture}
          alt="toys"
          className="w-full h-48"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <h2 className="card-title">Price: ${price}</h2>
        <h2 className="card-title">Rating: {rating}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
