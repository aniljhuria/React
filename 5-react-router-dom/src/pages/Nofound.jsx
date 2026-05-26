import React, { useEffect } from 'react'

const Nofound = () => {

  useEffect(() => {

    const canvas = document.getElementById("space");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    const STAR_COUNT = 900;

    let speed = 0.2;
    const maxSpeed = 0.5;
    const acceleration = 0.02;

    for(let i=0;i<STAR_COUNT;i++){

      stars.push({
        x:(Math.random()-0.5)*canvas.width,
        y:(Math.random()-0.5)*canvas.height,
        z:Math.random()*canvas.width
      });

    }

    function draw(){

      ctx.fillStyle="#030005";
      ctx.fillRect(0,0,canvas.width,canvas.height);

      if(speed < maxSpeed){
        speed += acceleration;
      }

      stars.forEach(star=>{

        star.z -= speed;

        if(star.z<=0){

          star.z=canvas.width;

          star.x=(Math.random()-0.5)*canvas.width;
          star.y=(Math.random()-0.5)*canvas.height;

        }

        let k=128/star.z;

        let x=star.x*k+canvas.width/2;
        let y=star.y*k+canvas.height/2;

        let px=star.x*(128/(star.z+speed))+canvas.width/2;
        let py=star.y*(128/(star.z+speed))+canvas.height/2;

        ctx.strokeStyle="white";

        ctx.beginPath();

        ctx.moveTo(px,py);
        ctx.lineTo(x,y);

        ctx.stroke();

      });

      requestAnimationFrame(draw);

    }

    draw();

  },[]);

  return (

    <div className='w-full h-screen bg-black overflow-hidden'>

      <canvas
        id="space"
        className='fixed top-0 left-0 w-full h-full z-0'
      />

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        text-center z-10 text-white'>

        <h1 className='text-7xl md:text-9xl font-bold tracking-tight'>
          404
        </h1>

        <h2 className='mt-2 tracking-[8px]'>
          PAGE NOT FOUND
        </h2>

        <a
          href="/"
          className='
            inline-block
            mt-8
            border-2
            border-pink-500
            px-8
            py-3
            hover:border-purple-700
          '
        >
          Homepage
        </a>

      </div>

    </div>

  )

}

export default Nofound