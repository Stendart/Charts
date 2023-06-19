import React from 'react'
import { ChartsPannel } from '../ChartsPannel/ChartsPannel'
import { ChartWrapper } from '../Chart/ChartWrapper'

import style from './ChatBlock.module.css'

export const ChartBlock = () => {
  return (
    <div className={style.block}>
      <div className={style.panel}>
        <ChartsPannel />
      </div>
      <div className={style.chart}>
        <ChartWrapper />
      </div>
    </div>
  )
}
