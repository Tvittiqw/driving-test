import proceedRight from '../../assets/icons/signs/Proceed_right_only.png'
import equestriansOnly from '../../assets/icons/signs/Equestrians_only.png'
import snowChains from '../../assets/icons/signs/Obligation_to_put_on_snow_chains.png'
import proceedLeft from '../../assets/icons/signs/Pass_on_this_side.png'
import passRight from '../../assets/icons/signs/Pass_on_this_side_right.png'
import proceedLeftRight from '../../assets/icons/signs/Pass_on_either_side.png'
import ProceedLeftOnly from '../../assets/icons/signs/Proceed_left_only.png'
import PedestriansOnly from '../../assets/icons/signs/Pedestrians_only.png'
import StraightOrLeft from '../../assets/icons/signs/Proceed_straight_or_turn_left_only.png'
import StraightOrRight from '../../assets/icons/signs/Proceed_straight_or_turn_right_only.png'
import roundabout from '../../assets/icons/signs/Roundabout.png'
import StraightAheadOnly from '../../assets/icons/signs/Straight_ahead_only.png'
import turnLeftOnly from '../../assets/icons/signs/Turn_left_ahead_only.png'
import turnRightOnly from '../../assets/icons/signs/Turn_right_ahead_only.png'
import turnRioghtOrLeftOnly from '../../assets/icons/signs/Turn_right_and_left_ahead_only.png'

const MANDATORY_SIGNS = [
    {
        type: 'mandatory',
        label: 'Turn right or left only',
        description: 'Sign shows mandatory direction. On this part of road you are alowwed to turn right or left only',
        icon: turnRioghtOrLeftOnly
    },
    {
        type: 'mandatory',
        label: 'Turn right only',
        description: 'Sign shows mandatory direction. On this part of road you are alowwed to turn right only',
        icon: turnRightOnly
    },
    {
        type: 'mandatory',
        label: 'Turn left only',
        description: 'Sign shows mandatory direction. On this part of road you are alowwed to turn left only',
        icon: turnLeftOnly
    },
    {
        type: 'mandatory',
        label: 'Roundabiut',
        description: 'Sign indicates roundabout',
        icon: roundabout
    },
    {
        type: 'mandatory',
        label: 'Proceed right only',
        description: 'Thre directional arrow sign indicating that vehicles should only continue in the right direction at a specific point',
        icon: proceedRight
    },
    {
        type: 'mandatory',
        label: 'Horse riders or equestrians only',
        description: 'Sign indicates that the particular path or area is designated for use by horse riders or equestrians',
        icon: equestriansOnly
    },
    {
        type: 'mandatory',
        label: 'Obligation to Put On Snow Chains',
        description: 'Sign is a regulatory traffic sign that mandates drivers to equip their vehicles with snow chains under certain weather or road conditions.',
        icon: snowChains
    },
    {
        type: 'mandatory',
        label: 'Pass on this side (left)',
        description: 'Thre directional arrow sign indicating that vehicles should only continue in the left direction at a specific point',
        icon: proceedLeft
    },
    {
        type: 'mandatory',
        label: 'Pass on this side (right)',
        description: 'Thre directional arrow sign indicating that vehicles should only continue in the right direction at a specific point',
        icon: passRight
    },
    {
        type: 'mandatory',
        label: 'Pedestrians Only',
        description: 'Sign indicates that area or path is exclusively for pedestrians',
        icon: PedestriansOnly
    },
    {
        type: 'mandatory',
        label: 'Passs on either sign',
        description: 'Sign indicates that vehicles can pass a vehicle on either the left or right side',
        icon: proceedLeftRight
    },
    {
        type: 'mandatory',
        label: 'Proceed Left Only',
        description: 'Sign typically indicates that vehicles are required to move or travel in the left direction only at a specific point, such as an intersection or a road split.',
        icon: ProceedLeftOnly
    },
    {
        type: 'mandatory',
        label: 'Straight Ahead Only',
        description: 'Sign typically indicates that vehicles are required to move or travel in the left direction only at a specific point',
        icon: StraightAheadOnly
    },
    {
        type: 'mandatory',
        label: 'Proceed straight or left',
        description: 'Sign typically indicates that vehicles are required to move or travel in the left or straignt direction at a specific point.',
        icon: StraightOrLeft
    },
    {
        type: 'mandatory',
        label: 'Proceed straight or right',
        description: 'Sign typically indicates that vehicles are required to move or travel in the right or straignt direction at a specific point.',
        icon: StraightOrRight
    },
]

export default MANDATORY_SIGNS;