export let colorcollection:string[] = ["blue","red","green","black","purple","yellow"]

export let arrayone:string[] = []

for(let i=0;i<49;i++){
    arrayone[i] = colorcollection[Math.floor(Math.random()*colorcollection.length)]
}

 