import React, { useState, useEffect } from 'react';
import BgSideBar from './images/bg-sidebar-desktop.svg';
import Input from './Components/Input';
import NextStep from './Components/NextStep';
import Step from './Components/Step';
import Step1 from './Components/steps/Step1';
import Step2 from './Components/steps/Step2';
import Step3 from './Components/steps/Step3';
import Step4 from './Components/steps/Step4';
import ThankYou from './Components/steps/ThankYou';

function App() {
  // State to store the dimensions of the SVG
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // Load the SVG and get its dimensions
  useEffect(() => {
    const svg = new Image();
    svg.src = BgSideBar;

    svg.onload = () => {
      setSvgDimensions({ width: svg.width, height: svg.height });
    };
  }, []);

  const bgURL = `url(${BgSideBar})`;

  const [currentStep, setCurrentStep] = useState(2);

  const [selectedSubscription, setSelectedSubscription] = useState(['Arcade', 9]);

  const [cart, setCart] = useState([]);

  const [monthly, setMonthly] = useState(true);
  const [yearly, setYearly] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center drop-shadow-md font-ubuntu">
      <div className="bg-white w-3/5 flex p-6 rounded-xl">
        <div
          id="right"
          className="flex flex-col rounded-lg min-w-[32%]"
          style={{
            backgroundImage: bgURL,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            width: `${svgDimensions.width}px`, 
            height: `${svgDimensions.height}px`, 
          }}
        >
          <Step num={'1'} details={'YOUR INFO'} currentStep={currentStep}/>
          <Step num={'2'} details={'SELECT PLAN'} currentStep={currentStep}/>
          <Step num={'3'} details={'ADD-ONS'} currentStep={currentStep}/>
          <Step num={'4'} details={'SUMMARY'} currentStep={currentStep}/>

        </div>

        {currentStep === 1 && (
          <Step1 setCurrentStep={setCurrentStep} />
        )}
        {currentStep === 2 && (
          <Step2 setCart={setCart}
          monthly={monthly} yearly={yearly} setMonthly={setMonthly} setYearly={setYearly}
          setCurrentStep={setCurrentStep} selectedSubscription={selectedSubscription} setSelectedSubscription={setSelectedSubscription} />
        )}
        {currentStep === 3 && (
          <Step3 setCart={setCart} setCurrentStep={setCurrentStep} />
        )}
        {currentStep === 4 && (
          <Step4 cart={cart} setCurrentStep={setCurrentStep} selectedSubscription={selectedSubscription} monthly={monthly} />
        )}
        {currentStep === 5 && (
          <ThankYou />
        )}
      </div>
    </div>
  );
}

export default App;
