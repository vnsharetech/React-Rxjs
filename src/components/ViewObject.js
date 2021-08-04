const ViewObject = (props) => {
  const { messageA, messageB, messageC, messageD } = props;
  return (
    <>
      <div data-testid="element-A">{messageA}</div>
      <div data-testid="element-B">{messageB}</div>
      <div data-testid="element-C">{messageC}</div>
      <div data-testid="element-D">{messageD}</div>
    </>
  );
};

export default ViewObject;
