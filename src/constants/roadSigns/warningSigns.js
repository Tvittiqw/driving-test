import tractors from '../../assets/icons/signs/Agricultural_vehicles.png'
import bendAhead from '../../assets/icons/signs/Bend_ahead.png'
import bridge from '../../assets/icons/signs/Bridge.png'
import children from '../../assets/icons/signs/Children.png'
import crossMinor from '../../assets/icons/signs/Crossroads_with_a_minor_road.png'
import crossPriorityRight from '../../assets/icons/signs/Crossroads_with_priority_to_the_right.png'
import crosswinds from '../../assets/icons/signs/Dangerous_crosswinds.png'
import domesticAnimals from '../../assets/icons/signs/Domestic_animals.png'
import doubleBend from '../../assets/icons/signs/Double_bend_ahead.png'
import dualCarriagewayEnds from '../../assets/icons/signs/Dual_carriageway_ends.png'
import fallingRocks from '../../assets/icons/signs/Falling_rocks.png'
import groundingDanger from '../../assets/icons/signs/Grounding_danger.png'
import junctionWithMinorRoad from '../../assets/icons/signs/Junction_with_a_minor_road.png'
import junctionOnBend from '../../assets/icons/signs/Junctions_on_bend_ahead.png'
import levelCrossingBariers from '../../assets/icons/signs/Level_crossing_with_barriers_ahead.png'
import levelCrossingNoBarriers from '../../assets/icons/signs/Level_crossing_wthout_barriers_ahead.png'
import levelCrossing from '../../assets/icons/signs/Level_crossing.png'
import looseSurface from '../../assets/icons/signs/Loose_road_surface.png'
import lowFlyingAircraft from '../../assets/icons/signs/Low-flying_aircraft.png'
import lowFlyingHelicopter from '../../assets/icons/signs/Low-flying_helicopter.png'
import mergingTraffic from '../../assets/icons/signs/Merging_traffic.png'
import swingBridge from '../../assets/icons/signs/Opening_or_swing_bridge.png'
import otherDanger from '../../assets/icons/signs/Other_danger.png'
import overheadElectricCables from '../../assets/icons/signs/Overhead_electric_cables.png'
import pedestrianCrossingAhead from '../../assets/icons/signs/Pedestrian_crossing_ahead.png'
import pedestrianInRoadAhead from '../../assets/icons/signs/Pedestrians_in_road_ahead.png'
import roadNarrowsOnBothSides from '../../assets/icons/signs/Road_narrows_on_both_sides.png'
import roadNarrowsOnOneSides from '../../assets/icons/signs/Road_narrows_on_one_side.png'
import roadworksAhead from '../../assets/icons/signs/Roadworks_ahead.png'
import roundaboutAhead from '../../assets/icons/signs/Roundabout_ahead.png'
import roadHumpAhead from '../../assets/icons/signs/Road_hump_ahead.png'
import schoolCrossing from '../../assets/icons/signs/School_crossing.png'
import slipperyRoad from '../../assets/icons/signs/Slippery_road_surface.png'
import slowMovingHeavy from '../../assets/icons/signs/Slow-moving_heavy_goods_vehicles_on_uphill.png'
import snow from '../../assets/icons/signs/Snow_or_ice.png'
import softVerges from '../../assets/icons/signs/Soft_verges.png'
import steepAscent from '../../assets/icons/signs/Steep_ascent.png'
import steepDescent from '../../assets/icons/signs/Steep_descent.png'
import traficQueues from '../../assets/icons/signs/Traffic_queues_likely_ahead.png'
import traficSignals from '../../assets/icons/signs/Traffic-signals_ahead.png'
import tramCrossing from '../../assets/icons/signs/Tram_crossing.png'
import tunnelAhead from '../../assets/icons/signs/Tunnel_ahead.png'
import twoWayStraignt from '../../assets/icons/signs/Two-way_traffic_ahead_straight.png'
import twoWay from '../../assets/icons/signs/Two-way_traffic_ahead.png'
import unEvenRoad from '../../assets/icons/signs/Uneven_road_ahead.png'
import wildAnimals from '../../assets/icons/signs/Wild_animals.png'
import stopInFifty from '../../assets/icons/signs/Stop_in_50_meters.png'


const WARNING_SIGNS = [
    {
        type: 'warning',
        label: 'Stop in 50 meters',
        description: 'Sign means you have to stop in 50 meters',
        icon: stopInFifty
    },
    {
        type: 'warning',
        label: 'Wild Animals',
        description: 'Sign indicates that may be wild anymals ahead',
        icon: wildAnimals
    },
    {
        type: 'warning',
        label: 'Uneaven Road',
        description: 'Refers to a road surface that is not smooth and may have variations in elevation, bumps, or irregularities.',
        icon: unEvenRoad
    },
    {
        type: 'warning',
        label: 'Two way traffic ahead',
        description: 'Sign is a warning sign used to alert that two way traffic ahead',
        icon: twoWay
    },
    {
        type: 'warning',
        label: 'Two way traffic ahead',
        description: 'This is a warning sign, used to rise awareness, vehicles should keep to the left hand side of the road and be alerted about oncoming traffic.',
        icon: twoWayStraignt
    },
    {
        type: 'warning',
        label: 'Tunnel ahead',
        description: 'Sign is a warning sign used to alert that tunell ahead',
        icon: tunnelAhead
    },
    {
        type: 'warning',
        label: 'Tram crossing ahead',
        description: 'Sign is a warning sign used to alert drivers that they are approaching a location where tram tracks cross the road.',
        icon: tramCrossing
    },
    {
        type: 'warning',
        label: 'Trafic Signals Ahead',
        description: 'Sign is a warning sign used to inform drivers that there are traffic signals (traffic lights) ahead on the road.',
        icon: traficSignals
    },
    {
        type: 'warning',
        label: 'Trafic Queues Likely Ahead',
        description: 'Sign is a warning sign used to alert drivers that there is a high probability of encountering a line or queue of vehicles ahead, which may result in slowed or stopped traffic.',
        icon: traficQueues
    },
    {
        type: 'warning',
        label: 'Steep Descent',
        description: 'sign is a warning sign used to alert drivers that they are approaching a steep downhill incline.',
        icon: steepDescent
    },
    {
        type: 'warning',
        label: 'Steep Ascent',
        description: 'Sign is a warning sign used to alert drivers that they are approaching a steep uphill incline.',
        icon: steepAscent
    },
    {
        type: 'warning',
        label: 'Soft Verges',
        description: 'Sign refers to the soft or less firm areas at the edges of the road, commonly covered with grass, soil, or other vegetation.',
        icon: softVerges
    },
    {
        type: 'warning',
        label: 'Snow or ice',
        description: 'Sign is used to alert drivers that they may encounter slippery road conditions due to snow or ice.',
        icon: snow
    },
    {
        type: 'warning',
        label: 'Slow Moving Heavy vehicle ahead',
        description: 'Sign is a warning sign used to indicate that the slow moving heavy vehicle ahead ahead.',
        icon: slowMovingHeavy
    },
    {
        type: 'warning',
        label: 'Slippery Road',
        description: 'Sign is a warning sign used to indicate that the slippery road ahead.',
        icon: slipperyRoad
    },
    {
        type: 'warning',
        label: 'School Crossing Ahead',
        description: 'sign is a warning sign used to indicate that the school crossing ahead.',
        icon: schoolCrossing
    },
    {
        type: 'warning',
        label: 'Road Hump Ahead',
        description: 'sign is a warning sign used to indicate that the road hump ahead.',
        icon: roadHumpAhead
    },
    {
        type: 'warning',
        label: 'Roundabout Ahead',
        description: 'sign is a warning sign used to indicate that the roundabout ahead.',
        icon: roundaboutAhead
    },
    {
        type: 'warning',
        label: 'Roadworks Ahead',
        description: 'sign is a warning sign used to indicate that the roadworks ahead.',
        icon: roadworksAhead
    },
    {
        type: 'warning',
        label: 'Road narrows on both sides',
        description: 'sign is a warning sign used to indicate that the road ahead will become narrower on both sides.',
        icon: roadNarrowsOnBothSides
    },
    {
        type: 'warning',
        label: 'Road narrows on one side',
        description: 'sign is a warning sign used to indicate that the road ahead will become narrower on one side.',
        icon: roadNarrowsOnOneSides
    },
    {
        type: 'warning',
        label: 'Pedestrian In Road Ahead',
        description: 'Sign is a warning sign used to alert drivers that pedestrians are frequently in the road.',
        icon: pedestrianInRoadAhead
    },
    {
        type: 'warning',
        label: 'Pedestrian Crossing Ahead',
        description: 'Sign is a warning sign used to alert drivers that there is a pedestrian crossing or crosswalk up ahead.',
        icon: pedestrianCrossingAhead
    },
    {
        type: 'warning',
        label: 'Overhead Electric Cables',
        description: 'Sign warns drivers that there are high-voltage electric cables above the road.',
        icon: overheadElectricCables
    },
    {
        type: 'warning',
        label: 'Other danger',
        description: 'Its use is usually temporary, to alert of a new hazard in the road, however where it is difficult to sign for a permanent hazard such as a Hidden Dip it is permitted for permanent use until the hazard is removed.',
        icon: otherDanger
    },
    {
        type: 'warning',
        label: 'Opening or swing bridge',
        description: 'Signs indicates opening or swing bridge ahead',
        icon: swingBridge
    },
    {
        type: 'warning',
        label: 'Agrocultural vehicles',
        description: 'beware of tractors on the road',
        icon: tractors
    },
    {
        type: 'warning',
        label: 'Bend ahead',
        description: 'This sign is meant to alert drivers to reduce their speed and be prepared for changes in the direction of the road.',
        icon: bendAhead
    },
    {
        type: 'warning',
        label: 'Bridge ahead',
        description: 'indicating that there is a bridge structure ahead on the road',
        icon: bridge
    },
    {
        type: 'warning',
        label: 'Children',
        description: 'The "Children" crossing sign tells drivers that kids might be crossing the road, so they need to be careful and watch out for them.',
        icon: children
    },
    {
        type: 'warning',
        label: 'Crossroads with a Minor Road',
        description: 'Sign indicates an upcoming intersection where a smaller road joins a major road',
        icon: crossMinor
    },
    {
        type: 'warning',
        label: 'Crossroads with Priority to the Right',
        description: 'Sign indicates an upcoming intersection where vehicles approaching from the right have the right of way',
        icon: crossPriorityRight
    },
    {
        type: 'warning',
        label: 'Dangerous crosswinds',
        description: 'Sign warns drivers that strong and unpredictable horizontal winds may affect their vehicles',
        icon: crosswinds
    },
    {
        type: 'warning',
        label: 'Domestic animals',
        description: 'Sign warns drivers that there may be animals, such as livestock or pets, on or near the road',
        icon: domesticAnimals
    },
    {
        type: 'warning',
        label: 'Double bend ahead',
        description: 'Sign alerts drivers to the presence of two consecutive bends or curves in the road ahead',
        icon: doubleBend
    },
    {
        type: 'warning',
        label: 'Dual Carriageway Ends',
        description: 'sign informs drivers that the divided highway or dual carriageway is coming to an end',
        icon: dualCarriagewayEnds
    },
    {
        type: 'warning',
        label: 'Falling Rocks',
        description: 'Sign warns drivers of the possibility of rocks or debris falling onto the road from the surrounding hills or cliffs',
        icon: fallingRocks
    },
    {
        type: 'warning',
        label: 'Grounding Danger',
        description: 'Grounding Danger',
        icon: groundingDanger
    },
    {
        type: 'warning',
        label: 'Junction with a minor road',
        description: 'Junction with a minor road',
        icon: junctionWithMinorRoad
    },
    {
        type: 'warning',
        label: 'Junction on bend ahead',
        description: 'sign warns drivers that there are intersections or junctions on the upcoming bend in the road',
        icon: junctionOnBend,
    },
    {
        type: 'warning',
        label: 'Level crossing with barriers ahead',
        description: 'Sign alerts drivers that there is a railway level crossing up ahead equipped with barriers',
        icon: levelCrossingBariers,
    },
    {
        type: 'warning',
        label: 'Level crossing wthout barriers ahead',
        description: 'Sign alerts drivers that there is a railway level crossing up wthout barriers ahead',
        icon: levelCrossingNoBarriers,
    },
    {
        type: 'warning',
        label: 'Level crossing',
        description: 'Sign alerts drivers that there is a railway level crossing up ahead',
        icon: levelCrossing,
    },
    {
        type: 'warning',
        label: 'Loose Road Surface',
        description: 'Sign alerts drivers that there is a Loose Road Surface ahead',
        icon: looseSurface,
    },
    {
        type: 'warning',
        label: 'Low Flying Aircraft',
        description: 'Sign alerts drivers that there is a Low Flying Aircraft ahead',
        icon: lowFlyingAircraft,
    },
    {
        type: 'warning',
        label: 'low Flying Helicopter',
        description: 'Sign alerts drivers that there is a low Flying Helicopter ahead',
        icon: lowFlyingHelicopter,
    },
    {
        type: 'warning',
        label: 'Merging traffic',
        description: 'Sign is a warning sign that indicates that two separate streams of traffic are about to converge into a single lane or roadway.',
        icon: mergingTraffic,
    },
]

export default WARNING_SIGNS;