import React from 'react'

import { ChartCanvas } from './ChartCanvas'
import { Chart } from './Chart'

import style from './ChartWrapper.module.css'


export const ChartWrapper = () => {
  const chart = ChartCanvas(Chart);

  return (
    <div className={style.wrapper}>
      {chart}
    </div>
  )
}
