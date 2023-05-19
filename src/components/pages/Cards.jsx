const Cards = ({data}) => {

    console.log(data)

    const{picture, name, price, rating} = data;

  return (
    <div className="card w-full bg-base-100 shadow-xl"  data-aos="fade-left">
      <figure>
        <img
          src={picture}
          alt="toys"
          className="w-full h-60"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <h2 className="card-title">Price: {price}</h2>
        <h2 className="card-title">Rating: {rating}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
