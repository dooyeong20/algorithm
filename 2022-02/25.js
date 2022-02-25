// https://programmers.co.kr/learn/courses/30/lessons/92341

function getMinutes(time) {
    const [hour, min] = time.split(':').map(t => +t);

    return hour * 60 + min;
}

function solution(fees, records) {
    const [defaultTime, defaultFee, perTime, perFee] = fees;
    const parkingLot = {};
    const dailyRecord = {};

    const getTotalFee = (totalTime) =>
        defaultFee + (totalTime <= defaultTime
            ? 0
            :  Math.ceil((totalTime - defaultTime) / perTime) * perFee);

    const recordDaily = (carNum, outTime) => {
        dailyRecord[carNum] = (dailyRecord[carNum] || 0) + outTime - parkingLot[carNum];

        delete parkingLot[carNum];
    }

    // record IN & OUT cars
    records.forEach((record) => {
        const [formatTime, carNum, status] = record.split(' ');
        const time = getMinutes(formatTime);

        if(status === 'IN') {
            parkingLot[carNum] = time;
            return;
        }

        recordDaily(carNum, time);
    });

    // check parked over day
    Object.entries(parkingLot).forEach(([carNum]) => {
        dailyRecord[carNum] =
            (dailyRecord[carNum] || 0) + getMinutes("23:59") - parkingLot[carNum];
    });


    return Object.entries(dailyRecord)
        .map(([carNum, totalTime]) => [carNum, getTotalFee(totalTime)])
        .sort()
        .map(([_, fee]) => fee);
}