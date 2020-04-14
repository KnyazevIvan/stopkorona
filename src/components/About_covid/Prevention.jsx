import React from 'react'
import './Prevention.scss'
import steps from '../../svg/steps.svg'


const List = (props) => {
  return (
    <div style={{ display: 'flex', position:props.last?'':'relative' }}>
      <div className='list_circle'>{props.number}
      <div className='linethrough'></div>
      </div>

      <div className='list_text'>{props.text}</div>
    </div>
  )
}


export const Prevention = (props) => {
  return (
    <div ref={props.Ref} className='prevention_wrapper'>
      <div className='title'>   <h1><span>7 шагов</span> по профилактике коронавирусной инфекции</h1></div>

      <div className='prevention_main'>
        <div className='left'>

          <div style={{ display: 'flex', position:'relative' }}>
            <div className='list_circle'>1
        <div className='linethrough'></div>
            </div>
            <div className='list_text'>Воздержитесь от посещения общественных мест: торговых центров, спортивных и зрелищных мероприятий, транспорта.</div>
          </div>

          <List number='2' text='Не касайтесь грязными руками глаз, лица и рта.' />
          <List number='3' text='Избегайте близких контактов и пребывания в одном помещении с людьми, имеющими видимые признаки ОРВИ (кашель, чихание, выделения из носа).' />
          <List number='4' text='Тщательно мойте руки с мылом и водой после возвращения с улицы и контактов с людьми, дезинфицируйте гаджеты и рабочие поверхности.' />
          <List number='5' text='Дезинфицируйте гаджеты, оргтехнику и поверхности, к которым прикасаетесь.' />
          <List number='6' text='Ограничьте по возможности при приветствии тесные объятия и рукопожатия.' />
          <List number='7' last={true} text='Пользуйтесь только индивидуальными предметами личной гигиены (полотенце, зубная щетка).' />
        </div>
        <div className='right'>
          <img src={steps} alt="" />
        </div>
      </div>
    </div>
  )
}