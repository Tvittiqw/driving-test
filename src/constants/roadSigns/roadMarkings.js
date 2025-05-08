import noParking from "../../assets/images/markings/Depicts-the-side-of-the-carriageway--No-parking.png";
import noParkingOrStopping from "../../assets/images/markings/Depicts-the-side-of-the-carriageway--No-parking-or-stopping.png";
import RoundaboutDirections from "../../assets/images/markings/Directions-on-roundabout.png";
import GiveWayToTraficOnMainRoad from "../../assets/images/markings/Give-way-to-traffic-on-main-road.png";
import noParkingOrOvertaking from "../../assets/images/markings/No-parking-or-overtaking-1.png";
import noParkingStoppingOvertaking from "../../assets/images/markings/No-parking-or-waiting-or-overtaking.png";
import OvertakingAllowedFromRight from "../../assets/images/markings/Overtaking-allowed-from-right.png";
import OvertakingIsAllowed from "../../assets/images/markings/Overtaking-is-allowed.png";
import StopAndGiveWay from "../../assets/images/markings/Stop-and-give-way.png";

const ROAD_MARKINGS = [
  {
    type: "markings",
    label: "No parking",
    description:
      "depicts side of the road no parking or using the road beyond the line",
    icon: noParking,
  },
  {
    type: "markings",
    label: "No parking or stopping",
    description: "depicts side of the road no parking or stopping",
    icon: noParkingOrStopping,
  },
  {
    type: "markings",
    label: "Roundabout Directions",
    description: "Depicts Roundabout Directions",
    icon: RoundaboutDirections,
  },
  {
    type: "markings",
    label: "Give Way To Trafic On Main Road",
    description: "Give Way To Trafic On Main Road",
    icon: GiveWayToTraficOnMainRoad,
  },
  {
    type: "markings",
    label: "No Parking Or Overtaking",
    description: "No Parking Or Overtaking",
    icon: noParkingOrOvertaking,
  },
  {
    type: "markings",
    label: "No Parking Or Stopping Or Overtaking",
    description: "No Parking Or Stopping Or Overtaking",
    icon: noParkingStoppingOvertaking,
  },
  {
    type: "markings",
    label: "Overtaking Allowed From Right",
    description: "Overtaking Allowed From Right",
    icon: OvertakingAllowedFromRight,
  },
  {
    type: "markings",
    label: "Overtaking Is Allowed",
    description: "Overtaking Is Allowed",
    icon: OvertakingIsAllowed,
  },
  {
    type: "markings",
    label: "Stop And Give Way",
    description: "Stop And Give Way",
    icon: StopAndGiveWay,
  },
];

export default ROAD_MARKINGS;
