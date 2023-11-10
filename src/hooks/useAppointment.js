import {useState} from "react";
import { DwellingType, RequesterTypes, ServiceTypes } from '../constants/Appointment';

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

    return {
        address,
        additionalServices,
        city,
        dwellingSize,
        dwellingType,
        requester,
        serviceType,
        state,
        unit,
        zipCode,
        setAddress,
        setAdditionalServices,
        setCity,
        setDwellingSize,
        setDwellingType,
        setRequester,
        setServiceType,
        setState,
        setUnit,
        setZipCode
    }
}

export default useAppointment;
