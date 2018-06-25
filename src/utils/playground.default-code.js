export const defaultCode = `
const EqualityExample = (props) => {
  const a = { name: "Sam" };
  const b = { name: "Sam" };

  const objEquality = a === b;
  const strEquality = a.name === b.name;

  return (
    <div>
      <h2>
        Are <code>a</code> and <code>b</code> equal?<br />
        {objEquality.toString()}
      </h2>
      <h2>
        Are <code>a.name</code> and <code>b.name</code> equal?<br />
        {strEquality.toString()}
      </h2>
    </div>
  );
}

render(<EqualityExample />)
`;
