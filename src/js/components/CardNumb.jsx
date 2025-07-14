import react from "react";
const CardNumb = (props) => {
    return (
        <div className="Card bg-secondary fs-1 p-1 border border-light">
            <div className="digit">{props.caja % 10}</div>

        </div>
    )
};

export default CardNumb;