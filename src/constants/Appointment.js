export const RequesterTypes = {
    BUYER: 'buyer',
    OWNER: 'owner',
    AGENT: 'agent'
};

export const ServiceTypes = {
    BUYERS_INSPECTION: 'buyersInspection',
    WALK_AND_TALK: 'walkAndTalk',
    RE_INSPECTION: 'reInspection'
}

export const AdditionalServices = {
    RADON_TESTING: 'radonTesting',
    BLUE_TAPE: 'blueTape',
    RE_INSPECTION: 'reInspection'
}

export const DwellingType = {
    CONDO: 'condo',
    TOWNHOUSE: 'townhouse',
    SINGLE_FAMILY: 'singleFamily',
    MULTI_FAMILY: 'multiFamily'

}

export const ContactTypes = {
    CLIENT: 'client',
    AGENT: 'agent',
    ANOTHER_CLIENT: 'anotherClient',
    TRANSACTION_MANAGER: 'transactionManager',
    SELLER: 'seller'
}

export const SlotLengthServiceTypes = {
    [ServiceTypes.BUYERS_INSPECTION]: {hours: 2},
    [ServiceTypes.WALK_AND_TALK]: {hours: 1},
    [ServiceTypes.RE_INSPECTION]: {minutes: 30}
}