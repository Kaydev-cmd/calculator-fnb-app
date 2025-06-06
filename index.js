const digitBtnPressed = (button) => {
  const currentValue = document.getElementById("inputBox").value;
  document.getElementById("inputBox").value = currentValue + button;
};
