import { useAppContext } from "./CalculadoraContex";

function Button({ type, value }) {
  const calculator = useAppContext();

  function handleCLick() {
    switch (type) {
      case "number":
        calculator.addNumber(parseInt(value));
        break;

      case "operator":
        calculator.addOperation(value)
        break;

      case "action":
        calculator.executeAction(value)
        break;
      default:
    }
  }
  return (
    <button className="calculatorButton" onClick={handleCLick}>
      {value}
    </button>
  );
}

export default Button;
