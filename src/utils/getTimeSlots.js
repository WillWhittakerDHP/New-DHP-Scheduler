import add from  'date-fns/add';
import isWithinInterval from 'date-fns/isWithinInterval';
import format from "date-fns/format";
import { DEFAULT_INCREMENT } from '../constants/Appointment';

const getLabel = date => format(date, 'h:mmaaa');

const getSlotInterval = (date, { minutesIncrement, slotLength }) => {
    const newStart = minutesIncrement
        ? add(new Date(date.getTime()), { minutes: minutesIncrement })
        : date;

    const start = new Date(newStart.getTime())
    const end = add(new Date(newStart.getTime()), slotLength)

    return {
        start,
        startLabel: getLabel(start),
        end,
        endLabel: getLabel(end)
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
            timeSlots.push({
                inspectorSlot: currentSlot,
                clientSlot: getSlotInterval(currentSlot.start, {
                    minutesIncrement: 60,
                    slotLength: { hours: 1 }
                })
            });
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
