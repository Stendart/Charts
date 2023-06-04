import React from 'react'
import { ChartsPannel } from '../ChartsPannel/ChartsPannel'
import { Chart } from '../Chart/Chart' 

import style from './ChatBlock.module.css'

export const ChartBlock = () => {
  return (
    <div className={style.block}>
    <div className={style.panel}>
      <ChartsPannel />
    </div>
    <div className={style.chart}>
      <Chart />
    </div>
    </div>
  )
}
