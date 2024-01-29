import stop from '../../assets/icons/signs/Stop.png'
import boxJunction from '../../assets/icons/signs/Box_junction.png'
import giveWayToUpcoming from '../../assets/icons/signs/Give_way_to_oncming_traffic.png'
import giveWay from '../../assets/icons/signs/Give_Way.png'
import priorityRoad from '../../assets/icons/signs/Priority_road.png'
import priorityUpcoming from '../../assets/icons/signs/Priority_over_oncoming_vehicles.png'

const PRIORITY_SIGNS = [
    {
        type: 'priority',
        label: 'Priority Over Upcoming Vehicels',
        description: 'Sign indicating that the road you are currently on has the right of way over vehicles approaching from upcoming side roads or intersections.',
        icon: priorityUpcoming,
    },
    {
        type: 'priority',
        label: 'Priority Road',
        description: 'Sign indicating that the road has the right of way over intersecting roads.',
        icon: priorityRoad,
    },
    {
        type: 'priority',
        label: 'Stop',
        description: 'You have to stop completely if you see this sign',
        icon: stop,
    },
    {
        type: 'priority',
        label: 'Box junction',
        description: 'The purpose of a box junction is to prevent gridlock by ensuring that a vehicle only enters the junction when there is enough space on the other side for it to clear the junction completely. The rule is that a driver should not enter the box unless their exit is clear.',
        icon: boxJunction,
    },
    {
        type: 'priority',
        label: 'Give way to oncoming traffic',
        description: 'Sign indicates that drivers approaching the sign must yield or give way to oncoming traffic',
        icon: giveWayToUpcoming,
    },
    {
        type: 'priority',
        label: 'Give way',
        description: 'Sign means that drivers must yield or give the right of way to vehicles on the intersecting road.',
        icon: giveWay,
    },
]

export default PRIORITY_SIGNS;
