import React from 'react'

import { ChartLines } from './ChartLines'
import { ChartRect } from './ChartRect'
import { ChartCanvas } from './ChartCanvas'



import style from './Chart.module.css'

interface chartProps {
  ctx: CanvasRenderingContext2D
}

export const Chart = ({ctx}: chartProps) => {

  return (
    <div className={style.chart}>
      <ChartLines ctx={ctx} points={[[25, 40], [200, 150], [300, 250], [500, 25]]} />
      <ChartRect ctx={ctx} coords={{x: 100, y: 150}} width={25} height= {25} />
    </div>
  )
}
