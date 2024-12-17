/**
 * This is the Mission entry point of the script and will be executed by DCS inside the mission environment if the script is loaded from a mission:
 *
 * You can use the DCS Mission Lua API in this file.
 * References:
 * - https://www.digitalcombatsimulator.com/en/support/faq/scripting_engine/
 * - https://wiki.hoggitworld.com/view/Simulator_Scripting_Engine_Documentation
 *
 * The Typescript API is available for reference at:
 * https://tslua-dcs.pages.dev/modules/_flying-dice_tslua-dcs-mission-types
 */
import { message } from "../common";

env.info(`${message} from the mission`); // This will print the message to the DCS log from the common module.

env.info("Mission " + timer.getTime() + " load begin"); // This will print the mission load begin message to the DCS log.

const groups = coalition.getGroups(coalition.side.BLUE, Group.Category.GROUND); // This will get all the blue ground groups

for (const group of groups) {
  env.info(`Group: ${group.getName()}`); // This will print the group name to the DCS log.
}
