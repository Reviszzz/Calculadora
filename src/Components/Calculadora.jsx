import Button from "./Button";
import { Calculator } from "./CalculadoraContex";
import CalculatorScreen from "./CalculatorScreen";
import "./Calculator.css"
function Calculadora() {
  return (
    <Calculator>
      <div className="calculatorContainer">
        <CalculatorScreen />
        <div className="container">
          <Button type="action" value="AC" />
          <Button type="operator" value="%" />
          <Button type="action" value="<==" />
          <Button type="operator" value="/" />
          <Button type="number" value="7" />
          <Button type="number" value="8" />
          <Button type="number" value="9" />
          <Button type="operator" value="*" />
          <Button type="number" value="4" />
          <Button type="number" value="5" />
          <Button type="number" value="6" />
          <Button type="operator" value="-" />
          <Button type="number" value="1" />
          <Button type="number" value="2" />
          <Button type="number" value="3" />
          <Button type="operator" value="+" />
          <Button type="action" value="+/-" />
          <Button type="number" value="0" />
          <Button type="action" value="." />
          <Button type="action" value="=" />
        </div>
      </div>
    </Calculator>
  );
}

export default Calculadora;
