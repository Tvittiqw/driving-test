

import firstAid from '../../assets/icons/signs/First_aid.png'
import customs from '../../assets/icons/signs/Customs.png'
import endOfRestrictions from '../../assets/icons/signs/End_of_all_restrictions.png'
import endOfSpeedLimit from '../../assets/icons/signs/End_of_maximum_speed_limit.png'
import endOfNoOvertaking from '../../assets/icons/signs/End_of_no_overtaking.png'
import endOfNoParking from '../../assets/icons/signs/End_of_no_parking_zone.png'
import endOfPriority from '../../assets/icons/signs/End_of_priority_road.png'
import endOfResidential from '../../assets/icons/signs/End_of_residential_area_living_street.png'
// import expressway from '../../assets/icons/signs/Expressway.svg'
import expresswayEnds from '../../assets/icons/signs/Expressway_ends.png'
import maximumSpeed from '../../assets/icons/signs/Maximum_speed_limit.png'
import minimumSpeedLimitEnds from '../../assets/icons/signs/Minimum_speed_limit_ends.png'
import minimumSpeedLimit from '../../assets/icons/signs/Minimum_speed_limit.png'
import noThroughRoad from '../../assets/icons/signs/No_through_road.png'
import noThroughRoadRight from '../../assets/icons/signs/No_through_road_rightturn.png'
import noThroughRoadLeft from '../../assets/icons/signs/No_through_roadleftturn.png'
import parking from '../../assets/icons/signs/Parking.png'
import pedestrianCrossing from '../../assets/icons/signs/Pedestrian_crossing.png'
import oneWayStreet from '../../assets/icons/signs/One-way_street.png'
import oneWayStreetStraight from '../../assets/icons/signs/One-way_street_straignt.png'
import toll from '../../assets/icons/signs/Toll.png'
import police from '../../assets/icons/signs/Police.png'
import residentialArea from '../../assets/icons/signs/Residential_area_living_street.png'
import taxiParking from '../../assets/icons/signs/Taxi-parking.png'
import tunnel from '../../assets/icons/signs/Tunnel.png'

import PRIORITY_SIGNS from './prioritySigns'
import WARNING_SIGNS from './warningSigns'
import PROHIBITORY_SIGNS from './prohibittorySigns'
import MANDATORY_SIGNS from './mandatorySigns'
import ROAD_MARKINGS from './roadMarkings'
import ROAD_GESTURES from './roadGestures'



const INDICATION_SIGNS = [
    {
        type: 'indication',
        label: 'First aid',
        description: 'This sign is used to indicate the location of a first aid station or emergency medical services, alerting drivers and pedestrians that they can find help in case of injuries or medical emergencies.',
        icon: firstAid
    },
    {
        type: 'indication',
        label: 'No through road',
        description: 'Its an advisory traffic sign that indicates that the road ahead does not continue as a through road.',
        icon: noThroughRoad
    },
    {
        type: 'indication',
        label: 'No through road left turn',
        description: 'Its an advisory traffic sign that indicates that the road ahead does not continue as a through road on the left turn.',
        icon: noThroughRoadLeft
    },
    {
        type: 'indication',
        label: 'No through road right turn',
        description: 'Its an advisory traffic sign that indicates that the road ahead does not continue as a through road on the right turn.',
        icon: noThroughRoadRight
    },
    {
        type: 'indication',
        label: 'Parking',
        description: 'Parking area',
        icon: parking
    },
    {
        type: 'indication',
        label: 'Taxi Parking',
        description: 'Taxi Parking area',
        icon: taxiParking
    },
    {
        type: 'indication',
        label: 'Tunnel',
        description: 'Tunnel',
        icon: tunnel
    },
]
const SPECIAL_REGULATIONS_SIGNS = [
    {
        type: 'special_regulations',
        label: 'End of Residential Area',
        description: 'End of Residential Area',
        icon: endOfResidential
    },
    // {
    //     type: 'spetial_regulations',
    //     label: 'Expressway',
    //     description: 'Expressway starts',
    //     icon: expressway
    // },
    {
        type: 'special_regulations',
        label: 'Expressway ends',
        description: 'Expressway starts ends',
        icon: expresswayEnds
    },
    {
        type: 'special_regulations',
        label: 'Pedestrian Crossing',
        description: 'Indicates pedestrian crossing',
        icon: pedestrianCrossing
    },
    {
        type: 'special_regulations',
        label: 'One Way Street',
        description: 'Indicates that traffic is allowed to flow in only one direction.',
        icon: oneWayStreet
    },
    {
        type: 'special_regulations',
        label: 'One Way Street(straight)',
        description: 'Indicates that traffic is allowed to flow in only one direction.',
        icon: oneWayStreetStraight
    },
    {
        type: 'special_regulations',
        label: 'Residential area / living street',
        description: 'Parking area',
        icon: residentialArea
    },
]

const CHECKPOINT_SIGNS = [
    {
        type: 'checkpoint',
        label: 'Stop Customs',
        description: 'This sign indicates the presence of a customs checkpoint or border control ahead, where travelers may be required to stop for inspection and documentation checks.',
        icon: customs
    },
    {
        type: 'checkpoint',
        label: 'Stop Toll',
        description: 'This sign indicates the presence of a toll checkpoint  ahead, where travelers may be required to stop for inspection and documentation checks.',
        icon: toll
    },
    {
        type: 'checkpoint',
        label: 'Stop police',
        description: 'This sign indicates the presence of a police checkpoint ahead, where travelers may be required to stop for inspection and documentation checks.',
        icon: police
    },
]
const END_OF_PROHIBITION_SIGNS = [
    {
        type: 'end_of_prohibition',
        label: 'End of all restrictions',
        description: 'End of all restrictions',
        icon: endOfRestrictions
    },
    {
        type: 'end_of_prohibition',
        label: 'End of maximum speed limit',
        description: 'Sign indicates that any previously specified speed limit is no longer in effect',
        icon: endOfSpeedLimit
    },
    {
        type: 'end_of_prohibition',
        label: 'End of no overtaking',
        description: 'Sign signifies that the previous restriction on overtaking other vehicles has ended',
        icon: endOfNoOvertaking
    },
    {
        type: 'end_of_prohibition',
        label: 'End of no parking zone',
        description: 'Sign signifies that the previous restriction on no parking has ended',
        icon: endOfNoParking
    },
    {
        type: 'end_of_prohibition',
        label: 'End of priority road',
        description: 'Sign indicates that a previously designated priority road, where vehicles had the right of way, is ending.',
        icon: endOfPriority
    },
    {
        type: 'end_of_prohibition',
        label: 'Minimum speed limit ends',
        description: 'Sign indicates Minimum speed limit ended.',
        icon: minimumSpeedLimitEnds
    },
]


const SPEED_LIMIT_SIGNS = [
    {
        type: 'speedLimits',
        label: 'Maximum speed limit',
        description: 'Sign displays the highest speed at which vehicles are allowed to travel on a particular road or section of the road.',
        icon: maximumSpeed,
    },
    {
        type: 'speedLimits',
        label: 'Minimum speed limit',
        description: 'Sign displays minimum speed limit on the road.',
        icon: minimumSpeedLimit,
    }
]

const ROAD_SIGNS = [
    ...PRIORITY_SIGNS,
    ...MANDATORY_SIGNS,
    ...INDICATION_SIGNS,
    ...WARNING_SIGNS,
    ...CHECKPOINT_SIGNS,
    ...END_OF_PROHIBITION_SIGNS,
    ...SPECIAL_REGULATIONS_SIGNS,
    ...PROHIBITORY_SIGNS,
    ...SPEED_LIMIT_SIGNS
];

const FULL_TEST = [
    ...ROAD_SIGNS,
    ...ROAD_MARKINGS,
    ...ROAD_GESTURES
]

const tests =  {
    signs: ROAD_SIGNS,
    markings: ROAD_MARKINGS,
    gestures: ROAD_GESTURES,
    full: FULL_TEST
}

export default tests;