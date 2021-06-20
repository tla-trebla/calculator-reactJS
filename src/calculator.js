import React, { useEffect, useState } from 'react';

const numberKeys = Array.from(Array(10).keys()).map(String);
const operationKeys = ["+", "-", "*", "/", "="];
const helperKeys = ["C", "AC"];

const CalculatorOperations = {
    '+': (previousValue, nextValue) => previousValue + nextValue,
    '-': (previousValue, nextValue) => previousValue - nextValue,
    '*': (previousValue, nextValue) => previousValue * nextValue,
    '/': (previousValue, nextValue) => previousValue / nextValue,
    '=': (previousValue, nextValue) => nextValue,
};

export default function Calculator() {

    const [displayValue, setDisplayValue] = useState('0');

    const entryPadsKey = numberKeys
        .concat(operationKeys, helperKeys);
    
    const entryPads = entryPadsKey.map((key) => 
        <EntryPad 
            key={key} 
            entryPadKey={key} 
            onClick={() => handleClick(key)} 
        />
    );
    return (
        <div>
            <Display currentInput={currentInput} />
            <div id="entry-pads">{ entryPads }</div>
        </div>
    );

    function handleClick(value) {
        currentInput === 0 ? 
            setCurrentInput(value) : 
            setCurrentInput(parseInt(
                (currentInput.toString() + value.toString())
                .toString().slice(0, 8)
            ));
    }
}

function EntryPad(props) {
    return (
        <button 
            name={ props.entryPadKey } 
            onClick={() => props.onClick() }
        >
            { props.entryPadKey }
        </button>
    );
}

function Display(props) {
    return (
        <h1 data-testid="calculator-display">
            { props.currentInput }
        </h1>
    );
}