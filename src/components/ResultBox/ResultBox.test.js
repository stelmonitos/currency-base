import { cleanup, render } from '@testing-library/react';
import ResultBox from './ResultBox';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {
    it('should render without crashing', () => {
      render(<ResultBox from='PLN' to='USD' amount={100}/>);
    });
    it('should render proper info about conversion when PLN -> USD', () => {
      const testCases = [
        { amount: 100, from: 'PLN', to: 'USD', expected: 'PLN 100.00 = $28.57' },
        { amount: 200, from: 'PLN', to: 'USD', expected: 'PLN 200.00 = $57.14' },
        { amount: 300, from: 'PLN', to: 'USD', expected: 'PLN 300.00 = $85.71' },
      ];
      for(const testObj of testCases) {
        render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount}/>);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent(testObj.expected);
        cleanup();
      }
    });
    it('should render proper info about conversion when USD -> PLN', () => {
      const testCases = [
        { amount: 100, from: 'USD', to: 'PLN', expected: '$100.00 = PLN 350.00' },
        { amount: 200, from: 'USD', to: 'PLN', expected: '$200.00 = PLN 700.00' },
        { amount: 300, from: 'USD', to: 'PLN', expected: '$300.00 = PLN 1,050.00' },
      ];
      for(const testObj of testCases) {
        render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount}/>);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent(testObj.expected);
        cleanup();
      }
    });
    it('should render proper info about conversion when PLN -> PLN', () => {
      const testCases = [
        { amount: 100, from: 'PLN', to: 'PLN', expected: 'PLN 100.00 = PLN 100.00' },
        { amount: 200, from: 'PLN', to: 'PLN', expected: 'PLN 200.00 = PLN 200.00' },
        { amount: 300, from: 'PLN', to: 'PLN', expected: 'PLN 300.00 = PLN 300.00' },
      ];
      for(const testObj of testCases) {
        render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount}/>);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent(testObj.expected);
        cleanup();
      }
    });
});