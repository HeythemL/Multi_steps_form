
const Goback = ({setCurrentStep}) => {
    return (
        <button 
        onClick={() => setCurrentStep(pv => pv - 1)}
        className="font-semibold hover:font-bold text-sky-950">Go Back</button>
    )
}
export default Goback