import {useState} from "react";
import { ContactTypes, DwellingType, RequesterTypes, ServiceTypes } from '../constants/Appointment';

const DEFAULT_CONTACT_INFO = {
    firstName: '',
    lastName: '',
    email: ''
};

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
        [ContactTypes.CLIENT]: { ...DEFAULT_CONTACT_INFO },
        [ContactTypes.AGENT]: { ...DEFAULT_CONTACT_INFO },
        [ContactTypes.ANOTHER_CLIENT]: { ...DEFAULT_CONTACT_INFO },
        [ContactTypes.TRANSACTION_MANAGER]: { ...DEFAULT_CONTACT_INFO },
        [ContactTypes.SELLER]: { ...DEFAULT_CONTACT_INFO },
    });

    // Schedule
    const [inspectorTimeSlot, setInspectorTimeSlot] = useState('');
    const [clientTimeSlot, setClientTimeSlot] = useState('');
    const [day, setDay] = useState('');
    const [minimizeInspectionTime, setMinimizeInspectionTime] = useState(false);
    const [additionalPresentationTime, setAdditionalPresentationTime] = useState(false);

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
        setUnit,
        setZipCode
    }
}

export default useAppointment;
