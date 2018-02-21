import { Stepper, Step } from 'rambler-ui/Stepper'
import React, { Component } from 'react'
import { ApplyTheme } from 'rambler-ui/theme'
import Button from 'rambler-ui/Button'

const recovery = ['Проверка почты', 'Восстановление пароля']
const buy = ['Выберите товар', 'Выберите адрес доставки', 'Оплата']
const quiz = ['Черновик', 'Опубликован', 'Завершен', 'Закрыт']

export default class StepperExample extends Component {
  state = {
    value: 1
  }

  onChange = (e, index) => {
    this.setState({value: index})
  }

  onStepClick = (e, index) => {
    this.setState({value: index})
  }

  nextStep = () => {
    if (this.state.value === 3)
      return
    this.setState({value: this.state.value + 1})
  }

  previousStep = () => {
    if (this.state.value === 0)
      return
    this.setState({value: this.state.value - 1})
  }

  render() {
    return (
      <ApplyTheme>
        <div>
          <div style={{width: '500px'}}>
            <Stepper value={this.state.value} onChange={this.onChange}>
              {recovery.map((item, index) =>
                <Step key={index}>{item}</Step>)}
            </Stepper>
          </div>
          <div style={{width: '500px', marginTop: '50px'}}>
            <Stepper value={this.state.value} onChange={this.onChange}>
              {buy.map((item, index) =>
                <Step key={index}>{item}</Step>)}
            </Stepper>
          </div>
          <div style={{marginTop: '50px'}}>
            <Stepper value={this.state.value} onChange={this.onChange}>
              {quiz.map((item, index) => {
                const isSelected = !(this.state.value === index)
                return (
                  <Step
                    key={index}
                    disabled={false}
                    completed={this.state.value === index}
                    active={isSelected}
                    style={!isSelected ? {color: '#315efb'} : {color: '#000'}}
                    onClick={e => {
                      e.preventDefault()
                      this.onChange(e, index)
                    }}>{item}</Step>
                )
              })}
            </Stepper>
          </div>
          <Button size="small" type="secondary" onClick={this.previousStep}>Previous step</Button>
          <Button size="small" type="secondary" style={{marginLeft: '50px'}} onClick={this.nextStep}>Next step</Button>
        </div>
      </ApplyTheme>
    )
  }
}
