import React, { useState, useEffect, useRef, DOMElement} from 'react'

import style from "./ChartCanvas.module.css"

const DEFAULT_CANVAS_WIDTH = 700;
const DEFAULT_CANVAS_HEIGHT = 350;

const getElementSize = (element: HTMLElement | null) => {
  const canvParams = element?.getBoundingClientRect(); 
  const width = canvParams?.width;
  const height = canvParams?.height;
  return {width, height}
}

export const ChartCanvas = (WrappedComponent: React.ElementType) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  
  const [width, setWidth] = useState(DEFAULT_CANVAS_WIDTH);
  const [height, setHeight] = useState(DEFAULT_CANVAS_HEIGHT); 

  // const canvParams = canvasRef.current?.getBoundingClientRect(); 

  const changeCanvasSize = () => {
    const {width, height} = getElementSize(canvasRef.current);
    if(width) {
      setWidth(width);
    }
    if(height) {
      setHeight(height);
    }
  }

  const resizeHandler = (e: any) => {
    // const canvParams = canvasRef.current?.getBoundingClientRect(); 
    changeCanvasSize();
  }

  useEffect(() => {
    changeCanvasSize();
  }, [])

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, [])

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    
    if (ctx) {
      ctx.font = "20px Arial";
      setCtx(ctx);
    }
  }, [])
  
  console.log('width', width);
  console.log('height', height);

  return (
    <canvas 
      width={width * 2} 
      height={height * 2} 
      className={style.canvas} 
      ref={canvasRef} 
      
    >
      {
        // WrappedComponentList.map(WrappedComponent => <WrappedComponent ctx={ctx} {...props}></WrappedComponent>)
        <WrappedComponent ctx={ctx} ></WrappedComponent>
      }
    </canvas>
  )
}
