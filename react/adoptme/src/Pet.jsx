const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
      <img src={props.img[0]} alt="" style={{ width: "100px" }} />
    </div>
  );
};

export default Pet;
