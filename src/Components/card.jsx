const Card = ({icon, title, price, isSelected, onClick}) => {
    return (
        <div onClick={onClick} className = {`p-5 w-1/3 border-2 border-gray-200 hover:border-gray-500 rounded-lg cursor-pointer ${isSelected && 'border-gray-500'}`}>
            <img src={icon} alt="" />
            <div id="text" className="mt-12">
                <h1 className="font-bold"> {title} </h1>
                <p className="text-gray-400"> {price} </p>
            </div>
        </div>
    )
}
export default Card