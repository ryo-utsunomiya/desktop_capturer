import {app} from "electron";
import trimDesktop from "./trimDesktop";
import createCaptureWindow from "./createCaptureWindow";

let captureWindow;

app.on("ready", () => {
    // trimDesktop().then(({sourceDisplay, trimmedBounds}) => {
    //     console.log(sourceDisplay, trimmedBounds);
    // });
    captureWindow = createCaptureWindow();
});