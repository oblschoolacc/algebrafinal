gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDBonziObjects1= [];
gdjs.Untitled_32sceneCode.GDBonziObjects2= [];
gdjs.Untitled_32sceneCode.GDBonziObjects3= [];
gdjs.Untitled_32sceneCode.GDDialogueObjects1= [];
gdjs.Untitled_32sceneCode.GDDialogueObjects2= [];
gdjs.Untitled_32sceneCode.GDDialogueObjects3= [];
gdjs.Untitled_32sceneCode.GDBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDBackgroundObjects3= [];
gdjs.Untitled_32sceneCode.GDRightArrowObjects1= [];
gdjs.Untitled_32sceneCode.GDRightArrowObjects2= [];
gdjs.Untitled_32sceneCode.GDRightArrowObjects3= [];
gdjs.Untitled_32sceneCode.GDLeftArrowObjects1= [];
gdjs.Untitled_32sceneCode.GDLeftArrowObjects2= [];
gdjs.Untitled_32sceneCode.GDLeftArrowObjects3= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition3IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition4IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition5IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.conditionTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition3IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition4IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition5IsTrue_1 = {val:false};


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bonzi"), gdjs.Untitled_32sceneCode.GDBonziObjects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBonziObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBonziObjects2[i].hasAnimationEnded() ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDBonziObjects2[k] = gdjs.Untitled_32sceneCode.GDBonziObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBonziObjects2.length = k;}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBonziObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBonziObjects2[i].isCurrentAnimationName("enterance") ) {
        gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDBonziObjects2[k] = gdjs.Untitled_32sceneCode.GDBonziObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBonziObjects2.length = k;}if ( gdjs.Untitled_32sceneCode.condition1IsTrue_0.val ) {
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition2IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7261812);
}
}}
}
if (gdjs.Untitled_32sceneCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Untitled_32sceneCode.GDDialogueObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "intro.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDialogueObjects2[i].setBBText("Hello! Today we will be learning about writing equations in slope-intercept form. Any questions before we start?");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDialogueObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi intro");
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition2IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi intro";
}if ( gdjs.Untitled_32sceneCode.condition1IsTrue_0.val ) {
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition2IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7493308);
}
}}
}
if (gdjs.Untitled_32sceneCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Untitled_32sceneCode.GDDialogueObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "intro2.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDialogueObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDialogueObjects2[i].setBBText("Hahaha! Just Kidding! Making a dialogue prompt would be way too challenging!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bonzi"), gdjs.Untitled_32sceneCode.GDBonziObjects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition2IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition3IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition4IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) > (( gdjs.Untitled_32sceneCode.GDBonziObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBonziObjects2[0].getPointX(""));
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) < (( gdjs.Untitled_32sceneCode.GDBonziObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBonziObjects2[0].getPointX(""));
}if ( gdjs.Untitled_32sceneCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBonziObjects2.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDBonziObjects2[i].hasAnimationEnded()) ) {
        gdjs.Untitled_32sceneCode.condition2IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDBonziObjects2[k] = gdjs.Untitled_32sceneCode.GDBonziObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBonziObjects2.length = k;}if ( gdjs.Untitled_32sceneCode.condition2IsTrue_0.val ) {
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition3IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7823732);
}
}if ( gdjs.Untitled_32sceneCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBonziObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBonziObjects2[i].isCurrentAnimationName("enterance") ) {
        gdjs.Untitled_32sceneCode.condition4IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDBonziObjects2[k] = gdjs.Untitled_32sceneCode.GDBonziObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBonziObjects2.length = k;}}
}
}
}
if (gdjs.Untitled_32sceneCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Untitled_32sceneCode.GDDialogueObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDialogueObjects2[i].setBBText("Wait! We haven't started the lesson yet!");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sfx\\speedrun.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDialogueObjects2[i].hide(false);
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Untitled_32sceneCode.GDDialogueObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDialogueObjects1[i].setBBText("placeholder");
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDLeftArrowObjects2Objects = Hashtable.newFrom({"LeftArrow": gdjs.Untitled_32sceneCode.GDLeftArrowObjects2});gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDRightArrowObjects1Objects = Hashtable.newFrom({"RightArrow": gdjs.Untitled_32sceneCode.GDRightArrowObjects1});gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.Untitled_32sceneCode.GDLeftArrowObjects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDLeftArrowObjects2Objects, runtimeScene, true, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (5), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrow"), gdjs.Untitled_32sceneCode.GDRightArrowObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDRightArrowObjects1Objects, runtimeScene, true, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (5), "", 0);
}}

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F4");
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.window.isFullScreen(runtimeScene);
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F4");
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = !(gdjs.evtTools.window.isFullScreen(runtimeScene));
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bonzi"), gdjs.Untitled_32sceneCode.GDBonziObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Untitled_32sceneCode.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.Untitled_32sceneCode.GDLeftArrowObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBonziObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBonziObjects1[i].setAnimationName("enterance");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDialogueObjects1[i].setBBText("enter bonzi");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDialogueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLeftArrowObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLeftArrowObjects1[i].flipX(true);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Untitled_32sceneCode.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.Untitled_32sceneCode.GDLeftArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightArrow"), gdjs.Untitled_32sceneCode.GDRightArrowObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDialogueObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 540);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRightArrowObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRightArrowObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 540);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLeftArrowObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLeftArrowObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 1020);
}
}}

}


{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Untitled_32sceneCode.GDDialogueObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDDialogueObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDDialogueObjects1[i].getBBText() != "placeholder" ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDDialogueObjects1[k] = gdjs.Untitled_32sceneCode.GDDialogueObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDDialogueObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Untitled_32sceneCode.GDDialogueObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDDialogueObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDDialogueObjects1[i].getBBText() == "placeholder" ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDDialogueObjects1[k] = gdjs.Untitled_32sceneCode.GDDialogueObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDDialogueObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDDialogueObjects1 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDialogueObjects1[i].hide();
}
}}

}


{


gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDBonziObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBonziObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBonziObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDDialogueObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDialogueObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDialogueObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRightArrowObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRightArrowObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRightArrowObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDLeftArrowObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLeftArrowObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLeftArrowObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
