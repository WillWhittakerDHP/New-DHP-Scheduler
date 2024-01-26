import { DEFAULT_INCREMENT } from "../constants/Appointment";
import { PartTypeMap } from "../constants/Appointment";

const getSlotPart = (dwellingSize, partType, serviceType) => {

    console.log(partType);
    console.log(serviceType);
    console.log(PartTypeMap[partType][serviceType]);

    const { baseTime, baseSqft, workRate } = PartTypeMap[partType][serviceType];
    const { minutes: baseTimeMinutes } = baseTime;
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
