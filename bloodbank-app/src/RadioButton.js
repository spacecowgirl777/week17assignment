import React from 'react'

export default function RadioButton ({ label, select, value, onChange }) {
    return (
      <label>
        <input type="radio" checked={select} value={value} onChange={onChange} />
        {label}
      </label>
    );
  };