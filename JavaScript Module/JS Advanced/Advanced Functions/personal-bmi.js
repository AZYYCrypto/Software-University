function composeChart(name, age, weightKg, heightCm) {
 
    let calcBmi = (weightKg,heightCm) => {
        return Math.round(weight / height ** 2)
    }

    const generateStutus = (bmi) => {
        if(bmi < 18.5) {
            return 'underweight'

        }
        else if(bmi < 25) {
            return 'normal'

        }
        else if (bmi < 30){
            return 'overweight'

        } else {
            return 'obese'

        }
    }
    const bmi = calcBmi(weightKg. heightCm /100);
    const chart = {
        name,
        pesonalInfo: {
            age: age,
            weight: weightKg,
            height: heightCm
        },
        BMI: bmi,
        status: generateStutus(bmi),
    }
    if (chart.status() === 'obese') {
        chart.recommendation = 'admission required'
    }
    return chart
 
}

console.log(composeChart("Honey Boo Boo",9,57,137));
