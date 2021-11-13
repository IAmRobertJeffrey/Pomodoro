const Digit = ({ addZero, value}) => {
    return (
        <>
            <h1>{ addZero ? `0${value}` : value}</h1>
        </>
    )
}

export default Digit
