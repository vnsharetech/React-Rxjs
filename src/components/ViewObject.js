const ViewObject = (props) =>{
    const {messageA,messageB,messageC,messageD} = props;
    return <>
    <div>{messageA}</div>
    <div>{messageB}</div>
    <div>{messageC}</div>
    <div>{messageD}</div>
    </>
}

export default ViewObject;