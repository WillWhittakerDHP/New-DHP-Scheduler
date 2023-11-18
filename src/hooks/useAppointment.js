import {useCallback, useEffect, useState} from "react";
import {
    ContactTypes,
    DwellingType,
    RequesterTypes,
    ServiceTypes,
    SlotLengthServiceTypes
} from '../constants/Appointment';
import getTimeSlots from "../utils/getTimeSlots";

const DEFAULT_CONTACT_INFO = {
    firstName: '',
    lastName: '',
    email: ''
};

const DEFAULT_SLOT_LENGTH = {hours: 2};

const useAppointment = () => {

    // Service Selection
    const [requester, setRequester] = useState(RequesterTypes.BUYER);
    const [serviceType, setServiceType] = useState(ServiceTypes.BUYERS_INSPECTION);
    const [additionalServices, setAdditionalServices] = useState([]);

    // Property Details
    const [dwellingType, setDwellingType] = useState(DwellingType.CONDO);
    const [address, setAddress] = useState('');
    const [unit, setUnit] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [dwellingSize, setDwellingSize] = useState(0);

    // Contact Information
    const [contactInfo, setContactInfo] = useState({
        [ContactTypes.CLIENT]: {...DEFAULT_CONTACT_INFO},
        [ContactTypes.AGENT]: {...DEFAULT_CONTACT_INFO},
        [ContactTypes.ANOTHER_CLIENT]: {...DEFAULT_CONTACT_INFO},
        [ContactTypes.TRANSACTION_MANAGER]: {...DEFAULT_CONTACT_INFO},
        [ContactTypes.SELLER]: {...DEFAULT_CONTACT_INFO},
    });

    // Schedule
    const [inspectorTimeSlot, setInspectorTimeSlot] = useState('');
    const [clientTimeSlot, setClientTimeSlot] = useState('');
    const [day, setDay] = useState('');
    const [minimizeInspectionTime, setMinimizeInspectionTime] = useState(false);
    const [additionalPresentationTime, setAdditionalPresentationTime] = useState(false);

    const [selectedTimeSlotPair, setSelectedTimeSlotPair] = useState();
    const [timeSlots, setTimeSlots] = useState([]);
    const [slotLength, setSlotLength] = useState(DEFAULT_SLOT_LENGTH)

    useEffect(() => {
        setSlotLength(SlotLengthServiceTypes[serviceType])
    }, [serviceType]);

    useEffect(() => {
        setTimeSlots(getTimeSlots(day, {
            startTime: [7, 0],
            endTime: [21, 0],
            slotLength
        }))
    }, [day, slotLength]);

    const getInspectorTimeSlot = useCallback(inspectorTimeStart => {
        return timeSlots.find(({inspectorSlot}) => inspectorSlot.startLabel === inspectorTimeStart);
    }, [timeSlots]);

    const getClientTimeSlot = useCallback(clientTimeStart => {
        return timeSlots.find(({clientSlot}) => clientSlot.startLabel === clientTimeStart);
    }, [timeSlots]);

    const setTimeSlot = useCallback(({inspectorStart, clientStart}) => {
        const timeSlotPair = inspectorStart
            ? getInspectorTimeSlot(inspectorStart)
            : getClientTimeSlot(clientStart)

        setSelectedTimeSlotPair(timeSlotPair);
        setInspectorTimeSlot(timeSlotPair.inspectorSlot.startLabel)
        setClientTimeSlot(timeSlotPair.clientSlot.startLabel);
    }, [inspectorTimeSlot, clientTimeSlot, timeSlots]);

    return {
        address,
        additionalServices,
        additionalPresentationTime,
        city,
        clientTimeSlot,
        contactInfo,
        day,
        dwellingSize,
        dwellingType,
        inspectorTimeSlot,
        minimizeInspectionTime,
        requester,
        selectedTimeSlotPair,
        serviceType,
        state,
        timeSlots,
        unit,
        zipCode,
        setAddress,
        setAdditionalServices,
        setAdditionalPresentationTime,
        setCity,
        setClientTimeSlot,
        setContactInfo,
        setDay,
        setDwellingSize,
        setDwellingType,
        setInspectorTimeSlot,
        setMinimizeInspectionTime,
        setRequester,
        setServiceType,
        setState,
        setTimeSlot,
        setUnit,
        setZipCode
    }
}

export default useAppointment;
