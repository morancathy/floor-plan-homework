export default function Bath(props) {
  return (
    <>
      {props.size.bathSize.map((thing) => {
        return (
          <div>
            <h1>{thing}</h1>
          </div>
        );
      })}
    </>
  );
}
