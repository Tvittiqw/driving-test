import maximumHeight from "../../assets/icons/signs/Maximum_height.png";
import maximumLength from "../../assets/icons/signs/Maximum_vehicle_length.png";
import maximumWeight from "../../assets/icons/signs/Maximum_weight.png";
import maximumWeightPerAxle from "../../assets/icons/signs/Maximum_weight_per_axle.png";
import maximumWidth from "../../assets/icons/signs/Maximum_width.png";
import minimumFollowDistance from "../../assets/icons/signs/Minimum_safe_following_distance_between_vehicles.png";
import noEntry from "../../assets/icons/signs/No_entry.png";
import noHeavygoodsVehicles from "../../assets/icons/signs/No_heavygoods_vehicles.png";
import noLeftTurn from "../../assets/icons/signs/No_left_turn.png";
import noMopeds from "../../assets/icons/signs/No_mopeds.png";
import noMotorvehicles from "../../assets/icons/signs/No_motor_vehicles.png";
import noOvertakinkByHeavy from "../../assets/icons/signs/No_overtaking_by_heavy_goods_vehicles.png";
import noMotorcycles from "../../assets/icons/signs/No_motorcycles.png";
import noMotorvehiclesExceptMotorcycles from "../../assets/icons/signs/No_motor_vehiclуs_except_motorcycles.png";
import noOvertaking from "../../assets/icons/signs/No_overtaking.png";
import noParkingEven from "../../assets/icons/signs/No_parking_on_even_dates.png";
import noParkingOdd from "../../assets/icons/signs/No_parking_on_odd_dates.png";
import noParkingWaiting from "../../assets/icons/signs/No_parking_or_waiting.png";
import noParkingZone from "../../assets/icons/signs/No_parking_zone.png";
import noPedestrians from "../../assets/icons/signs/No_pedestrians.png";
import noRightTurn from "../../assets/icons/signs/No_right_turn.png";
import noStopping from "../../assets/icons/signs/No_stopping.png";
import noPollutions from "../../assets/icons/signs/No_vehicles_carrying_dangerous_water_pollutants.png";
import noTractors from "../../assets/icons/signs/No_tractors.png";
import noUTurn from "../../assets/icons/signs/No_U-turns.png";
import noTrailers from "../../assets/icons/signs/No_trailers.png";
import noVehicles from "../../assets/icons/signs/No_vehicles.png";
import noExplosives from "../../assets/icons/signs/No_vehicles_carrying_explosives.png";

const PROHIBITORY_SIGNS = [
  {
    type: "prohibitory",
    label: "Maximum height",
    description:
      "Sign indicates the maximum height allowed for vehicles to safely pass beneath a structure",
    icon: maximumHeight,
  },
  {
    type: "prohibitory",
    label: "No Tractors",
    description: "Sign indicatest that tractors are not allowed in this area",
    icon: noTractors,
  },
  {
    type: "prohibitory",
    label: "No Vehicles Carrying Explosives",
    description:
      "Sign is a regulatory traffic sign indicating that vehicles transporting explosive materials are not allowed on the specified route.",
    icon: noExplosives,
  },
  {
    type: "prohibitory",
    label: "No Vehicles",
    description:
      "Sign is a regulatory traffic sign indicating that no vehicles are allowed to proceed beyond the specified point.",
    icon: noVehicles,
  },
  {
    type: "prohibitory",
    label: "No U-turn",
    description: "Sign indicatest that U-turs is not allowed in this area",
    icon: noUTurn,
  },
  {
    type: "prohibitory",
    label: "No Trailers",
    description:
      "Sign is a regulatory traffic sign that indicates that vehicles towing trailers are not allowed in the specified area. ",
    icon: noTrailers,
  },
  {
    type: "prohibitory",
    label: "No Vehicles Carrying Dangerous Water Pollutants",
    description:
      "sign is a regulatory traffic sign that indicates that vehicles transporting hazardous materials or substances that can cause water pollution are not allowed on the specified route.",
    icon: noPollutions,
  },
  {
    type: "prohibitory",
    label: "Maximum lenght",
    description: "Sign indicates the maximum lenght allowed for vehicles",
    icon: maximumLength,
  },
  {
    type: "prohibitory",
    label: "Maximum weight",
    description: "Sign indicates the maximum weight allowed for vehicles",
    icon: maximumWeight,
  },
  {
    type: "prohibitory",
    label: "Maximum width",
    description:
      "Sign indicates the maximum allowable width for vehicles on a specific road or section.",
    icon: maximumWidth,
  },
  {
    type: "prohibitory",
    label: "Maximum weight per axle",
    description:
      "Sign indicates the maximum allowable weight that a single axle of a vehicle is permitted to carry on a particular road or section.",
    icon: maximumWeightPerAxle,
  },
  {
    type: "prohibitory",
    label: "Minimum safe following distance between vehicles",
    description:
      "Sign indicates Minimum safe following distance between vehicles",
    icon: minimumFollowDistance,
  },
  {
    type: "prohibitory",
    label: "No entry",
    description:
      "sign is a standard traffic sign that indicates that entry into the marked area or road is not allowed.",
    icon: noEntry,
  },
  {
    type: "prohibitory",
    label: "No heavy goods vehicles",
    description: "Sign means heavy goods vehicles are not alowed in this area.",
    icon: noHeavygoodsVehicles,
  },
  {
    type: "prohibitory",
    label: "No Left turn",
    description:
      "sign is a regulatory traffic sign indicating that drivers are not allowed to make a left turn at the specified location.",
    icon: noLeftTurn,
  },
  {
    type: "prohibitory",
    label: "No mopeds",
    description:
      "sign is a regulatory traffic sign indicating that drivers on mopeds are not allowed.",
    icon: noMopeds,
  },
  {
    type: "prohibitory",
    label: "No motor vehicles except motorcycles",
    description:
      "Sign is a regulatory traffic sign that indicates that the road or section of the road is closed to all motor vehicles except motorcycles.",
    icon: noMotorvehiclesExceptMotorcycles,
  },
  {
    type: "prohibitory",
    label: "No motor vehicles",
    description:
      "Sign is a regulatory traffic sign indicating that motor vehicles are not allowed to proceed beyond the sign.",
    icon: noMotorvehicles,
  },
  {
    type: "prohibitory",
    label: "No motorcycles",
    description:
      "Sign is a regulatory traffic sign indicating that motorcycles are not allowed to proceed beyond the sign.",
    icon: noMotorcycles,
  },
  {
    type: "prohibitory",
    label: "No overtaking by heavy goods vehicles",
    description:
      "Sign is a regulatory traffic sign that indicates heavy goods vehicles are not allowed to overtake other vehicles on the road.",
    icon: noOvertakinkByHeavy,
  },
  {
    type: "prohibitory",
    label: "No overtaking",
    description:
      "Sign is a regulatory traffic sign that indicates vehicles are not allowed to overtake other vehicles on the road.",
    icon: noOvertaking,
  },
  {
    type: "prohibitory",
    label: "Parking zone of limited duration",
    description:
      "sign is a regulatory traffic sign that indicates that parking may be alowed only for some duration.",
    icon: noParkingZone,
  },
  {
    type: "prohibitory",
    label: "No parking or waiting",
    description:
      "sign is a regulatory traffic sign indicating that vehicles are not allowed to park or wait in the specified area.",
    icon: noParkingWaiting,
  },
  {
    type: "prohibitory",
    label: "No parking on odd dates",
    description:
      "Sign is a specific variant of a parking regulation sign. It indicates that parking is prohibited on days with odd dates.",
    icon: noParkingOdd,
  },
  {
    type: "prohibitory",
    label: "No parking on even dates",
    description:
      "Sign is a specific variant of a parking regulation sign. It indicates that parking is prohibited on days with even dates.",
    icon: noParkingEven,
  },
  {
    type: "prohibitory",
    label: "No pedestrians",
    description:
      "Sign is a regulatory traffic sign indicating that pedestrians are not allowed in the specified area.",
    icon: noPedestrians,
  },
  {
    type: "prohibitory",
    label: "No Right Turn",
    description:
      "Sign is a regulatory traffic sign that indicates that making a right turn at the specified location is not allowed.",
    icon: noRightTurn,
  },
  {
    type: "prohibitory",
    label: "No Stopping",
    description:
      "Sign is a regulatory traffic sign indicating that stopping is not allowed in the specified area.",
    icon: noStopping,
  },
];

export default PROHIBITORY_SIGNS;
