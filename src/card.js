
function Card(props) {
  return (<>
    <div className="cards">
      <img src={props.img} />
      <h4>Name: {props.title}</h4>
      <h6>Price: {props.price}$</h6>
      <button onClick={props.action}>Add to Cart</button>
    </div>
  </>)

}
export default Card;