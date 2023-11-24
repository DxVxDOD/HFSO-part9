interface DailyExercise {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const processArguments = ( args: string[] ) => {

    if(args.length < 4) throw new Error("Too many arguments");

    let exerciseArray: number[] = [];

    if(isNaN(Number(args[2]))) throw new Error("3rd argument must be a number"); 

    for (let i = 2; i < args.length; i++) {
        if (isNaN(Number(args[i]))) throw new Error("Not all values provided are numbers!");
        exerciseArray.push(Number(args[i]))
    }

    return {
        exerciseArray,
        target: Number(args[2])
    }
}

const calculateExercises = ( array: number[], target: number ): DailyExercise => {

    const periodLength = array.length - 1
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

try {
    const { target, exerciseArray } = processArguments(process.argv);
    console.log(calculateExercises(exerciseArray, target))
} catch (error: unknown) {
    let errorMessage = "Something went wrong: ";
    if ( error instanceof Error ) errorMessage += error.message;
    console.log(errorMessage);
}