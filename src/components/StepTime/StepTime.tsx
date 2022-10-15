import React from 'react'
import { Radio, RadioGroup, Form, DatePicker } from 'rsuite';

const styles = {
  radioGroupLabel: {
    padding: '8px 2px 8px 10px',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
};

const StepTime = ({handleStartDate, handleFormule}) => {
  const handleChangeFormule = value => {
    handleFormule(value)
  }
  const handleChangeStartDate = value => {
    handleStartDate(value)
  }
  return (
    <div>
      <Form.Group controlId="radioList">
        <RadioGroup onChange={handleChangeFormule} name="formule" inline appearance="picker">
          <span style={styles.radioGroupLabel}>Formule: </span>
          <Radio value="1">Heure - 1h</Radio>
          <Radio value="8">Journée - 8h</Radio>
        </RadioGroup>
      </Form.Group>
      <DatePicker
      onChange={handleChangeStartDate}
        format="yyyy-MM-dd HH:mm"
        ranges={[]}
        // defaultValue={new Date('2022-10-14 09:30')}
        hideMinutes={minute => minute % 30 !== 0}
        style={{ width: 200 }}
        />
    </div>
  )
}

export default StepTime