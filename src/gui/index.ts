/**
 * This is the GUI entry point of the mod and will be executed by DCS inside the GUI environment if the script is placed in:
 * %USERPROFILE%\Saved Games\DCS.openbeta\Scripts\Hooks
 *
 * You can use the DCS GUI Lua API in this file.
 * References:
 * - C:\Program Files\Eagle Dynamics\DCS World\API\DCS_ControlAPI.html
 * - https://wiki.hoggitworld.com/view/DCS_server_gameGUI
 *
 * The Typescript API is available for reference at:
 * https://tslua-dcs.pages.dev/modules/_flying-dice_tslua-dcs-gui-types
 */
import { message } from "../common";

log.info(`${message} from the GUI!`);

DCS.setUserCallbacks({
  onMissionLoadBegin: function () {
    print(`Mission ${DCS.getMissionName()} load begin`);
  },
});
