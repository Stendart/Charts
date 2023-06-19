import React, { useEffect } from 'react'

type chartProps = {
  ctx: CanvasRenderingContext2D;
  coords: {
    x: number,
    y: number,
  },
  width: number,
  height: number,
}

export const ChartRect = ({ctx, ...othProps}: chartProps) => {
  useEffect(() => {

    const { coords, width, height } = othProps;
    const dpiX = coords.x * 2;
    const dpiY = coords.y * 2;
    
    ctx?.beginPath();
    ctx?.fillRect(dpiX, dpiY, width, height);
    ctx?.stroke();
  }, [ctx, othProps]);

  return null
}
