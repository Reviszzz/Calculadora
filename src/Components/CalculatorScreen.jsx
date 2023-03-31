import { useAppContext } from "./CalculadoraContex";

function CalculatorScreen() {
  const calculator = useAppContext();
  return (
    <div className="calculatorScreen">
      <div>
        <span>Memory: {calculator.memory}</span>
        <spa>Operation: {calculator.operation}</spa>
        <spa>Decimal: {calculator.isDecimal ? "decimal": "entero"}</spa>
      </div>
      <div className="calculatorCurrentValue">
        {calculator.currentValue}
        {calculator.isDecimal ? "." : ""}
      </div>
    </div>
  );
}

export default CalculatorScreen;
