const ChildComponent = () => {
  return (
    <div>
      <p>I am a baby:)</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hi my babies:)</h1>
        <ChildComponent />
        <ChildComponent />
      </div>
    );
  }
};
