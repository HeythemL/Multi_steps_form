const NextStep = ({className, onClick}) => {
    return (
        <>
            <button
                onClick={onClick}
                type="submit"
                className={"bg-sky-950 hover:scale-105 transition-all duration-200 hover:bg-sky-800 text-gray-50 font-bold px-6 py-2.5 rounded-md "+className}
            >
                Next Step
            </button>
        </>
    )
}
export default NextStep
