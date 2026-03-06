let scores = []

export default function handler(req,res){

if(req.method==="POST"){

const {name,score}=req.body

scores.push({name,score})

scores.sort((a,b)=>a.score-b.score)

scores=scores.slice(0,10)

res.status(200).json({ok:true})

}

else{

res.status(200).json(scores)

}

}
