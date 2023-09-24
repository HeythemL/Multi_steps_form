import checkmark from '../../images/icon-thank-you.svg'
const ThankYou = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center text-sky-900">
            <div className="w-3/4 flex flex-col justify-center items-center mb-6">
                <img src={checkmark} alt="" className='' srcset="" />
                <h1 className="text-4xl tracking-wide mb-3 font-extrabold mt-8">Thank you!</h1>
                <p className="text-gray-400">
                    Thanks for confirming your subscription! We hope you have fun using
                    our platform. If you ever need support, please feel free to email us at
                    support@loremgaming.com.
                </p>
            </div>
        </div>
    )
}
export default ThankYou