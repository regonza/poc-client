import React, { useState } from 'react';

const MultiStepForm = () => {
  const [formData, setFormData] = useState([
    {
      label: '',
      content: [
        {
          lang: '',
          text: '',
          channelActions: [
            {
              type: '',
              option: [{ '': '' }]
            }
          ]
        }
      ]
    }
  ]);

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Renderizar el contenido del paso actual */}
      <div>
        <label>
          Label:
          <input
            type="text"
            value={formData[currentStep].label}
            onChange={(e) => {
              const updatedFormData = [...formData];
              updatedFormData[currentStep].label = e.target.value;
              setFormData(updatedFormData);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Lang:
          <input
            type="text"
            value={formData[currentStep].content[0].lang}
            onChange={(e) => {
              const updatedFormData = [...formData];
              updatedFormData[currentStep].content[0].lang = e.target.value;
              setFormData(updatedFormData);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Text:
          <input
            type="text"
            value={formData[currentStep].content[0].text}
            onChange={(e) => {
              const updatedFormData = [...formData];
              updatedFormData[currentStep].content[0].text = e.target.value;
              setFormData(updatedFormData);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Type:
          <input
            type="text"
            value={formData[currentStep].content[0].channelActions[0].type}
            onChange={(e) => {
              const updatedFormData = [...formData];
              updatedFormData[currentStep].content[0].channelActions[0].type =
                e.target.value;
              setFormData(updatedFormData);
            }}
          />
        </label>
      </div>
      {/* Renderizar los botones de navegación */}
      {currentStep > 0 && (
        <button type="button" onClick={handlePrevious}>
          Anterior
        </button>
      )}
      {currentStep < formData.length - 1 && (
        <button type="button" onClick={handleNext}>
          Siguiente
        </button>
      )}
      {currentStep === formData.length - 1 && (
        <button type="submit">Enviar</button>
      )}
    </form>
  );
};

export default MultiStepForm;
