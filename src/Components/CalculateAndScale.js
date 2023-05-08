
const guideLineBaseWidth=375
const guideLineBaseWHeight=812
const scaleHeight=(height,size) =>{return (height/guideLineBaseWHeight)*size}
const scaleWidth= (width,size)=>{return (width/guideLineBaseWidth)*size}
const moderate=(size,factor=0.5)=>{return size+(scaleWidth(size)-size)*factor}

export {scaleHeight,scaleWidth,moderate}