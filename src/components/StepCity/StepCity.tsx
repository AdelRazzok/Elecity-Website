import React from 'react'
import { SelectPicker } from 'rsuite';

const data = ['Le Havre', 'Rouen', 'Caen'].map(
  item => ({ label: item, value: item })
);

interface Props {
  handleCity: (value) => void;
}
const StepCity: React.FC<Props> = ({handleCity}: Props) => {
  const handleChange = value => {
    handleCity(value.split(' ').join('&'))
  }
  return (
    <div>
      <SelectPicker onChange={handleChange} data={data} style={{ width: 224 }} />
    </div>
  )
}

export default StepCity