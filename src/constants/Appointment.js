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

export const DataCollectionBaseTimes = {
    [ServiceTypes.BUYERS_INSPECTION]: {minutes: 30},
    [ServiceTypes.WALK_AND_TALK]: {minutes: 60},
    [ServiceTypes.RE_INSPECTION]: {minutes: 30}
}

export const ReportWritingBaseTimes = {
    [ServiceTypes.BUYERS_INSPECTION]: {minutes: 30},
    [ServiceTypes.WALK_AND_TALK]: {minutes: 60},
    [ServiceTypes.RE_INSPECTION]: {minutes: 30}
}

export const ClientPresentationBaseTimes = {
    [ServiceTypes.BUYERS_INSPECTION]: {minutes: 39},
    [ServiceTypes.WALK_AND_TALK]: {minutes: 60},
    [ServiceTypes.RE_INSPECTION]: {minutes: 30}
}

export const DEFAULT_INCREMENT = 30;

export const DATA_COLLECTION_BASE_SQFT = 750;
export const REPORT_WRITING_BASE_SQFT = 750;
export const CLIENT_PRESENTATION_BASE_SQFT = 800;

export const DATA_COLLECTION_SQFT_RATE = 0.06;
export const REPORT_WRITING_SQFT_RATE = 0.06;
export const CLIENT_PRESENTATION_SQFT_RATE = 0.03;
