interface DailyExercise {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const target = 2

const daylyExerciseHours = [3, 0, 2, 4.5, 0, 3, 1];

const calculateExercises = ( array: number[], target: number ): DailyExercise => {
    const periodLength = array.length
    let trainingDays = periodLength;
    for( let i = 0; i < array.length; i++) {
        if(array[i] === 0) trainingDays -= 1
    }

    const rating = 2;
    const ratingDescription = 'not too bad but could be better';
    const average = Number((array.reduce((a: number, b: number) => a + b) / periodLength).toFixed(2));
    const success = average > target ? true : false;

    return {
        periodLength,
        trainingDays,
        rating,
        ratingDescription,
        average,
        success,
        target,
    }

}

console.log(calculateExercises(daylyExerciseHours, target))