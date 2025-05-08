import proceedBehind  from '../../assets/images/gestures/Proceed-to-traffic-approaching-from-the-behind.png'
import proceedFront  from '../../assets/images/gestures/Proceed-to-traffic-approaching-from-the-front.png'
import proceedSide  from '../../assets/images/gestures/Proceed-to-traffic-approaching-from-the-side.png'
import stopBehind  from '../../assets/images/gestures/Stop-for-traffic-approaching-from-behind.png'
import stopFrontBehind  from '../../assets/images/gestures/Stop-for-traffic-approaching-from-both-front-and-behind.png'
import stopFront  from '../../assets/images/gestures/Stop-for-traffic-approaching-from-the-front.png'

const ROAD_GESTURES = [
    {
        type: 'gestures',
        label: 'Proceed to traffic from the behind',
        description: 'Proceed to traffic from the behind',
        icon: proceedBehind,
    },
    {
        type: 'gestures',
        label: 'Proceed to traffic from the front',
        description: 'Proceed to traffic from the front',
        icon: proceedFront,
    },
    {
        type: 'gestures',
        label: 'Proceed to traffic from the side',
        description: 'Proceed to traffic from the side',
        icon: proceedSide,
    },
    {
        type: 'gestures',
        label: 'Stop for traffic approaching from both front and behind',
        description: 'Stop for traffic approaching from both front and behind',
        icon: stopFrontBehind,
    },
    {
        type: 'gestures',
        label: 'Stop for traffic approaching from behind',
        description: 'Stop for traffic approaching from behind',
        icon: stopBehind,
    },
    {
        type: 'gestures',
        label: 'Stop for traffic approaching from front',
        description: 'Stop for traffic approaching from front',
        icon: stopFront,
    },

]

export default ROAD_GESTURES