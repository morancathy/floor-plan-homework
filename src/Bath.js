export default function Bath(props) {
  return (
    <>
      {props.size.bathSize.map((thing) => {
        return (
          <div className="bath">
            <h1>{thing}</h1>
          </div>
        );
      })}
    </>
  );
}
