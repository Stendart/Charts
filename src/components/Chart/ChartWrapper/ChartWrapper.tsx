import React from 'react'

import { ChartCanvas } from '../ChartCanvas/ChartCanvas'
import { Chart } from '../Chart/Chart'

import style from './ChartWrapper.module.css'


export const ChartWrapper = () => {
  const chart = ChartCanvas(Chart);

  return (
    <div className={style.wrapper}>
      {chart}
    </div>
  )
}
