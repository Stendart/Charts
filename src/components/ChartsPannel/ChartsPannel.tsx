import React from 'react'

import style from './ChartsPannel.module.css'



export const ChartsPannel = () => {
  return (
    <div className={style.panel}>
      <ul className={style.list}>
        <li className={style.item}>
          <button className={style.button}>График 1</button>
        </li>
        <li className={style.item}>
          <button className={style.button}>График 2</button>
        </li>
      </ul>
    </div>
  )
}
