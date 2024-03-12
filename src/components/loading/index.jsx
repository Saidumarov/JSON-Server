let arry = [{}, {}, {}, {}, {}, {}];
function Card1() {
  return (
    <>
      {arry?.map((_, i) => (
        <div key={i} className="user_card">
          <div className="loading_card"></div>
        </div>
      ))}
    </>
  );
}
export default Card1;
