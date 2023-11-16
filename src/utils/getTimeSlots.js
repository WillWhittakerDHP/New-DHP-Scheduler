import add from  'date-fns/add';
import isWithinInterval from 'date-fns/isWithinInterval';

const DUMMY_TIME_SLOTS = [
    {
        inspectorStart: '7:00am',
        inspectorEnd: '',
        clientStart: '9:00am'
    },
    {
        inspectorStart: '7:30am',
        inspectorEnd: '',
        clientStart: '9:30am'
    },
    {
        inspectorStart: '8:00am',
        inspectorEnd: '',
        clientStart: '10:00am'
    },
    {
        inspectorStart: '8:30am',
        inspectorEnd: '',
        clientStart: '10:30am'
    },
    {
        inspectorStart: '9:00am',
        inspectorEnd: '',
        clientStart: '11:00am'
    },
    {
        inspectorStart: '9:30am',
        inspectorEnd: '',
        clientStart: '11:30am'
    },
    {
        inspectorStart: '',
        inspectorEnd: '',
        clientStart: ''
    },
    {
        inspectorStart: '',
        inspectorEnd: '',
        clientStart: ''
    },
    {
        inspectorStart: '11:00am',
        inspectorEnd: '',
        clientStart: '1:00pm'
    },
    {
        inspectorStart: '11:30am',
        inspectorEnd: '',
        clientStart: '1:30pm'
    },
    {
        inspectorStart: '',
        inspectorEnd: '',
        clientStart: ''
    },
    {
        inspectorStart: '',
        inspectorEnd: '',
        clientStart: ''
    },
    {
        inspectorStart: '',
        inspectorEnd: '',
        clientStart: ''
    },
    {
        inspectorStart: '',
        inspectorEnd: '',
        clientStart: ''
    },
    {
        inspectorStart: '2:00pm',
        inspectorEnd: '',
        clientStart: '4:00pm'
    },
    {
        inspectorStart: '',
        inspectorEnd: '',
        clientStart: ''
    },
    {
        inspectorStart: '',
        inspectorEnd: '',
        clientStart: ''
    },
    {
        inspectorStart: '',
        inspectorEnd: '',
        clientStart: ''
    },
    {
        inspectorStart: '',
        inspectorEnd: '',
        clientStart: ''
    },
    {
        inspectorStart: '',
        inspectorEnd: '',
        clientStart: ''
    },
    {
        inspectorStart: '6:00pm',
        inspectorEnd: '',
        clientStart: '8:00pm'
    }
];

const DEFAULT_INCREMENT = 30;

const getSlotInterval = (date, { minutesIncrement, slotLength }) => {
    const newDate = minutesIncrement
        ? add(new Date(date.getTime()), { minutes: DEFAULT_INCREMENT })
        : date;

    return {
        start: new Date(newDate.getTime()),
        end: add(new Date(newDate.getTime()), slotLength)
    }
}

const getTimeSlots = (date, { startTime, endTime, slotLength }) => {

    if (!date) {
        return [];
    }

    const [ startingHours, startingMinutes ] = startTime;
    const [ endHours, endMinutes ] = endTime;

    const startDate = add(new Date(date.getTime()), { hours: startingHours, minutes: startingMinutes });
    const endDate = add(new Date(date.getTime()), { hours: endHours, minutes: endMinutes + 1 });

    const timeSlots = [];
    let haveGoodSlots = true;
    let currentSlot = getSlotInterval(startDate, { slotLength });

    while (haveGoodSlots) {
        if (isWithinInterval(currentSlot.end, { start: startDate, end: endDate })) {
            timeSlots.push({ inspectorStart: currentSlot });
            currentSlot = getSlotInterval(currentSlot.start, {
                minutesIncrement: DEFAULT_INCREMENT,
                slotLength
            });
        } else {
            haveGoodSlots = false;
        }
    }

    return timeSlots;
}

export default getTimeSlots;
