let newLine = true;

const digitBtnPressed = (button) => {
  if (newLine) {
    document.getElementById("inputBox").value = button;
    newLine = false;
  } else {
    const currentValue = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = currentValue + button;
  }
};

const btnACPressed = () => {
  document.getElementById("inputBox").value = 0;
  newLine = true;
};
