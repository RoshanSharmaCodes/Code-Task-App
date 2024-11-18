import React from 'react';
import { Modal, Steps, Button } from 'antd';
import { useState } from 'react';
import './SubmitModal.scss';

// Importing images for each step (ensure these files are in the assets folder)
// import step1Img from '../../assets/step1.png';
// import step2Img from '../../assets/step2.png';
// import step3Img from '../../assets/step3.png';

const { Step } = Steps;

export default function SubmitModal({ isModalOpen, setIsModalOpen }) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Step 1",
      description: "Fork the repository and clone it to your local machine.",
      // imgSrc: step1Img,
    },
    {
      title: "Step 2",
      description: "Create a new branch for your feature.",
      // imgSrc: step2Img,
    },
    {
      title: "Step 3",
      description: "Add your component and commit your changes.",
      // imgSrc: step3Img,
    },
    {
      title: "Step 4",
      description: "Push the changes and create a Pull Request.",
      // imgSrc: step1Img,
    },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setCurrentStep(0);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setCurrentStep(0);
  };

  return (
    <Modal
      title="How to Contribute a Component"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handlePrev} disabled={currentStep === 0}>
          Previous
        </Button>,
        <Button key="next" onClick={handleNext} disabled={currentStep === steps.length - 1}>
          Next
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Done
        </Button>,
      ]}
      className="submit-modal"
    >
      <Steps current={currentStep} className="modal-steps">
        {steps.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>
      <div className="step-content">
        <h3>{steps[currentStep].title}</h3>
        <p>{steps[currentStep].description}</p>
        <img src={steps[currentStep].imgSrc} alt={`Step ${currentStep + 1}`} />
      </div>
    </Modal>
  );
}
