const Cart = ({option, price}) => {
    return(
        <div className="flex justify-between w-full text-sm my-2">
            <p className="text-gray-500 text-base"> {option} </p>
            <p className="font-bold"> {price} </p>
        </div>
        
    )
}
export default Cart