import { useCallback, useEffect, useState } from "react";
import {ContactTypes, DwellingType, RequesterTypes, ServiceTypes, SlotLengthServiceTypes} from '../constants/Appointment';
import getTimeSlots from "../utils/getTimeSlots";

const DEFAULT_CONTACT_INFO = {
    firstName: '',
    lastName: '',
    email: ''
};

const DEFAULT_SLOT_LENGTH = { hours: 2 };

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

    const [timeSlots, setTimeSlots] = useState([]);
    const [slotLength, setSlotLength] = useState(DEFAULT_SLOT_LENGTH)

    useEffect(() => {
        console.log(serviceType);
        console.log( SlotLengthServiceTypes[serviceType]);
        setSlotLength(SlotLengthServiceTypes[serviceType])
    }, [serviceType]);

    useEffect(() => {
        setTimeSlots(getTimeSlots(day, {
            startTime: [7, 0],
            endTime: [21, 0],
            slotLength
        }))
    }, [day, slotLength]);

    const getClientTimeSlot = inspectorTimeSlot => {
        return timeSlots.find(timeSlot => timeSlot.inspectorStart === inspectorTimeSlot);
    }

    const getInspectorTimeSlot = clientTimeSlot => {
        return timeSlots.find(timeSlot => timeSlot.clientStart === clientTimeSlot);
    }

    const setTimeSlot = useCallback(({ inspectorTimeSlot, clientTimeSlot }) => {
        if (inspectorTimeSlot) {
            const { clientStart } = getClientTimeSlot(inspectorTimeSlot);

            setInspectorTimeSlot(inspectorTimeSlot)
            setClientTimeSlot(clientStart);
        } else {
            const { inspectorStart } = getInspectorTimeSlot(clientTimeSlot);

            setInspectorTimeSlot(inspectorStart);
            setClientTimeSlot(clientTimeSlot);
        }
    }, [inspectorTimeSlot, clientTimeSlot]);

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
