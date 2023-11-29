import { DEFAULT_INCREMENT } from "../constants/Appointment";

const getSlotPart = (dwellingSize, serviceType, baseTimes, baseSqft, workRate) => {
    const {minutes: baseTimeMinutes} = baseTimes[serviceType];
    const overBaseDwellingSize = Number(dwellingSize) < baseSqft ? 0 : dwellingSize - baseSqft;
    const overBaseMinutes = overBaseDwellingSize * workRate;
    const overBaseMinutesRounded = Math.ceil(overBaseMinutes / DEFAULT_INCREMENT) * DEFAULT_INCREMENT;
    const slotPartTime = baseTimeMinutes + overBaseMinutesRounded;

    console.log(`Calculated overBaseDwellingSize: ${overBaseDwellingSize}`);
    console.log(`Calculated overBaseMinutes: ${overBaseMinutes}`);
    console.log(`Calculated overBaseMinutesRounded: ${overBaseMinutesRounded}`);

    return slotPartTime;
}

export default getSlotPart;
