document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    let currentStep = 0;

    steps[currentStep].classList.remove('hidden');

    steps.forEach((step, index) => {
        step.addEventListener('click', () => {
            if (index === currentStep && currentStep < steps.length - 1) {
                steps[currentStep].classList.add('hidden');
                currentStep++;
                steps[currentStep].classList.remove('hidden');

                if (currentStep === steps.length - 1) {
                    const blurredQRCode = document.getElementById('qr-code');
                    blurredQRCode.classList.add('visible');
                }
            }
        });
    });
});