import React, { useEffect } from 'react'

type chartProps = {
  ctx: CanvasRenderingContext2D;
  points: number[][]
}

export const ChartLines = ({ctx, points}: chartProps) => {
  useEffect(() => {
    
    ctx?.beginPath();
    for(let [x, y] of points) {
      const dpiX = x * 2;
      const dpiY = y * 2;
      ctx?.strokeText(`x: ${x}, y: ${y}`, dpiX-5, dpiY-10);
      ctx?.lineTo(dpiX, dpiY);
    }
    ctx?.stroke();
  }, [ctx, points]);

  return null
}
