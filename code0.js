gdjs.MainCode = {};
gdjs.MainCode.GDBonziObjects1= [];
gdjs.MainCode.GDBonziObjects2= [];
gdjs.MainCode.GDBonziObjects3= [];
gdjs.MainCode.GDDialogueObjects1= [];
gdjs.MainCode.GDDialogueObjects2= [];
gdjs.MainCode.GDDialogueObjects3= [];
gdjs.MainCode.GDBackgroundObjects1= [];
gdjs.MainCode.GDBackgroundObjects2= [];
gdjs.MainCode.GDBackgroundObjects3= [];
gdjs.MainCode.GDRightArrowObjects1= [];
gdjs.MainCode.GDRightArrowObjects2= [];
gdjs.MainCode.GDRightArrowObjects3= [];
gdjs.MainCode.GDLeftArrowObjects1= [];
gdjs.MainCode.GDLeftArrowObjects2= [];
gdjs.MainCode.GDLeftArrowObjects3= [];
gdjs.MainCode.GDgraphObjects1= [];
gdjs.MainCode.GDgraphObjects2= [];
gdjs.MainCode.GDgraphObjects3= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};
gdjs.MainCode.condition2IsTrue_0 = {val:false};
gdjs.MainCode.condition3IsTrue_0 = {val:false};
gdjs.MainCode.condition4IsTrue_0 = {val:false};
gdjs.MainCode.condition5IsTrue_0 = {val:false};
gdjs.MainCode.conditionTrue_1 = {val:false};
gdjs.MainCode.condition0IsTrue_1 = {val:false};
gdjs.MainCode.condition1IsTrue_1 = {val:false};
gdjs.MainCode.condition2IsTrue_1 = {val:false};
gdjs.MainCode.condition3IsTrue_1 = {val:false};
gdjs.MainCode.condition4IsTrue_1 = {val:false};
gdjs.MainCode.condition5IsTrue_1 = {val:false};


gdjs.MainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bonzi"), gdjs.MainCode.GDBonziObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDBonziObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDBonziObjects2[i].hasAnimationEnded() ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDBonziObjects2[k] = gdjs.MainCode.GDBonziObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDBonziObjects2.length = k;}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDBonziObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDBonziObjects2[i].isCurrentAnimationName("enterance") ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDBonziObjects2[k] = gdjs.MainCode.GDBonziObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDBonziObjects2.length = k;}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8023996);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDBonziObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "intro.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].setBBText("Hello! Today we will be learning about writing equations in slope-intercept form. Any questions before we start?");
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi intro");
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.MainCode.GDBonziObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDBonziObjects2[0].getPointX("")), "", 0);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi intro";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8026052);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "intro2.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].setBBText("Hahaha! Just Kidding! Making a dialogue prompt would be way too challenging!");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi intro 2");
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi intro 2";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7316804);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziexplanesslopintercept.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].setBBText("A slope-intercept form equation is written as \"y=mx+b\" where y is your output variable, x is your input variable, m is your slope, and b is your y-intercept.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi explains slope intercept");
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi explains slope intercept";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8027948);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("graph"), gdjs.MainCode.GDgraphObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziexplainsslopeintercept2.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].setFontSize(60);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].setBBText("On this graph is a line that crosses the point (0,5), as such we know that the y-intercept is 5. We can also see that the line is going up by one and to the right by 3, because of this we know that the slope is 1/3. If we put this into a slope-intercept equation, we get y=1/3x+5.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi explains slope intercept 2");
}{for(var i = 0, len = gdjs.MainCode.GDgraphObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDgraphObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDgraphObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDgraphObjects2[i].setAnimationName("slope-intercept");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bonzi"), gdjs.MainCode.GDBonziObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
gdjs.MainCode.condition3IsTrue_0.val = false;
gdjs.MainCode.condition4IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) > (( gdjs.MainCode.GDBonziObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDBonziObjects2[0].getPointX(""));
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) < (( gdjs.MainCode.GDBonziObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDBonziObjects2[0].getPointX(""));
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDBonziObjects2.length;i<l;++i) {
    if ( !(gdjs.MainCode.GDBonziObjects2[i].hasAnimationEnded()) ) {
        gdjs.MainCode.condition2IsTrue_0.val = true;
        gdjs.MainCode.GDBonziObjects2[k] = gdjs.MainCode.GDBonziObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDBonziObjects2.length = k;}if ( gdjs.MainCode.condition2IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition3IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8030444);
}
}if ( gdjs.MainCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDBonziObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDBonziObjects2[i].isCurrentAnimationName("enterance") ) {
        gdjs.MainCode.condition4IsTrue_0.val = true;
        gdjs.MainCode.GDBonziObjects2[k] = gdjs.MainCode.GDBonziObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDBonziObjects2.length = k;}}
}
}
}
if (gdjs.MainCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects2);
{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].setBBText("Wait! We haven't started the lesson yet!");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sfx\\speedrun.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].hide(false);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects1);
{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects1[i].setBBText("placeholder");
}
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDLeftArrowObjects2Objects = Hashtable.newFrom({"LeftArrow": gdjs.MainCode.GDLeftArrowObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRightArrowObjects1Objects = Hashtable.newFrom({"RightArrow": gdjs.MainCode.GDRightArrowObjects1});gdjs.MainCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.MainCode.GDLeftArrowObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDLeftArrowObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (5), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrow"), gdjs.MainCode.GDRightArrowObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRightArrowObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (5), "", 0);
}}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList3 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F4");
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.window.isFullScreen(runtimeScene);
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F4");
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = !(gdjs.evtTools.window.isFullScreen(runtimeScene));
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


};gdjs.MainCode.eventsList4 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bonzi"), gdjs.MainCode.GDBonziObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.MainCode.GDLeftArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("graph"), gdjs.MainCode.GDgraphObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBonziObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBonziObjects1[i].setAnimationName("enterance");
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects1[i].setBBText("enter bonzi");
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDLeftArrowObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDLeftArrowObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.MainCode.GDgraphObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDgraphObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.MainCode.GDLeftArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightArrow"), gdjs.MainCode.GDRightArrowObjects1);
{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 540);
}
}{for(var i = 0, len = gdjs.MainCode.GDRightArrowObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDRightArrowObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 540);
}
}{for(var i = 0, len = gdjs.MainCode.GDLeftArrowObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDLeftArrowObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 1020);
}
}}

}


{


gdjs.MainCode.eventsList0(runtimeScene);
}


{


gdjs.MainCode.eventsList2(runtimeScene);
}


{


gdjs.MainCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDDialogueObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDDialogueObjects1[i].getBBText() != "placeholder" ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDDialogueObjects1[k] = gdjs.MainCode.GDDialogueObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDDialogueObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDDialogueObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDDialogueObjects1[i].getBBText() == "placeholder" ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDDialogueObjects1[k] = gdjs.MainCode.GDDialogueObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDDialogueObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDDialogueObjects1 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects1[i].hide();
}
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDBonziObjects1.length = 0;
gdjs.MainCode.GDBonziObjects2.length = 0;
gdjs.MainCode.GDBonziObjects3.length = 0;
gdjs.MainCode.GDDialogueObjects1.length = 0;
gdjs.MainCode.GDDialogueObjects2.length = 0;
gdjs.MainCode.GDDialogueObjects3.length = 0;
gdjs.MainCode.GDBackgroundObjects1.length = 0;
gdjs.MainCode.GDBackgroundObjects2.length = 0;
gdjs.MainCode.GDBackgroundObjects3.length = 0;
gdjs.MainCode.GDRightArrowObjects1.length = 0;
gdjs.MainCode.GDRightArrowObjects2.length = 0;
gdjs.MainCode.GDRightArrowObjects3.length = 0;
gdjs.MainCode.GDLeftArrowObjects1.length = 0;
gdjs.MainCode.GDLeftArrowObjects2.length = 0;
gdjs.MainCode.GDLeftArrowObjects3.length = 0;
gdjs.MainCode.GDgraphObjects1.length = 0;
gdjs.MainCode.GDgraphObjects2.length = 0;
gdjs.MainCode.GDgraphObjects3.length = 0;

gdjs.MainCode.eventsList4(runtimeScene);
return;

}

gdjs['MainCode'] = gdjs.MainCode;
