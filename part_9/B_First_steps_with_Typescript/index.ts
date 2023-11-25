import express from 'express';
import { calculateBmi } from './bmiCalculator';
const app = express();

app.get('/bmi', (req, res) => {
    
  const urlInfo = req.query;

  if ( isNaN(Number(urlInfo.height)) ) {
    res.send({
      error: "Malformated parameters"
    })    
  }
  
  if ( isNaN(Number(urlInfo.weight)) ) {
    res.send({
      error: "Malformated parameters"
    })
  }

  const height = Number(urlInfo.height);
  const weight = Number(urlInfo.weight);

  res.send({
    weight,
    height,
    bmi: calculateBmi(height, weight),
  });

});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});