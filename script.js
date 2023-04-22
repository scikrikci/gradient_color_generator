generateGradient = () => {
    console.log('Color Updated');
}
colorInputs.forEach(input => {
    input.addEventListener('input', generateGradient);
});