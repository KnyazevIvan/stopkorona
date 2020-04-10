import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import '../styles/Menu.scss'
import group from '../svg/Group.png'
import ok from '../svg/Ok.png'
import lab from '../svg/Lab.png'
import { NavLink } from 'react-router-dom'
import Scrollbars from 'react-custom-scrollbars'

const Block =(props)=> {
  return (
    <div className='block'>
    <div className='content'>
      <div style={{width:props.width}} className='tag'>
       {props.tag}
      </div>
          <div><h1>{props.title}</h1></div>
      <div>
        <img src={props.img} alt=""/>
      </div>

{!props.alink?
    <NavLink to={props.link}> 
     <div className='btn'>
        <span>
        Подробнее
        </span>
      </div>
      </NavLink> 

: 
<a href={props.alink}> 
     <div className='btn'>
        <span>
        Подробнее
        </span>
      </div>
      </a> 
}
    </div>
    
  </div>
  )
}

export const Menu = () => {
  const [props, set] = useSpring(() => ({ x: 0}))
  const bind = useDrag(({ down, movement: [x] }) => {
    if (down==false&x>50) {console.log('slide')}
    set({ x: down ? x : 0})

  })

  return (
  <div className='menu_wrap_wrap'>
    <animated.div className='Menu_wrapper'  {...bind()} style={props}>

  <Block alink='https://стопкоронавирус.рф/ai/doc/4/attach/4.pdf' img={group} title='Памятка для пожилых людей' width='170px' tag='ЧТО ПРЕДПРИНЯТЬ?'/> 
     <Block  link='/what-is-done/council'  img={ok} title='Антикризисный план' width='135px' tag='ЧТО СДЕЛАНО?'/>
     <Block link='/'  img={lab} title='Где и как сдают анализы?' width='190px'tag='ВСЕ О КОРОНАВИРУСЕ'/>

    </animated.div>
    </div>

  )
}
