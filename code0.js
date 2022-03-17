gdjs.MainCode = {};
gdjs.MainCode.GDBonziObjects1= [];
gdjs.MainCode.GDBonziObjects2= [];
gdjs.MainCode.GDBonziObjects3= [];
gdjs.MainCode.GDBonziObjects4= [];
gdjs.MainCode.GDDialogueObjects1= [];
gdjs.MainCode.GDDialogueObjects2= [];
gdjs.MainCode.GDDialogueObjects3= [];
gdjs.MainCode.GDDialogueObjects4= [];
gdjs.MainCode.GDBackgroundObjects1= [];
gdjs.MainCode.GDBackgroundObjects2= [];
gdjs.MainCode.GDBackgroundObjects3= [];
gdjs.MainCode.GDBackgroundObjects4= [];
gdjs.MainCode.GDRightArrowObjects1= [];
gdjs.MainCode.GDRightArrowObjects2= [];
gdjs.MainCode.GDRightArrowObjects3= [];
gdjs.MainCode.GDRightArrowObjects4= [];
gdjs.MainCode.GDLeftArrowObjects1= [];
gdjs.MainCode.GDLeftArrowObjects2= [];
gdjs.MainCode.GDLeftArrowObjects3= [];
gdjs.MainCode.GDLeftArrowObjects4= [];
gdjs.MainCode.GDGraphObjects1= [];
gdjs.MainCode.GDGraphObjects2= [];
gdjs.MainCode.GDGraphObjects3= [];
gdjs.MainCode.GDGraphObjects4= [];
gdjs.MainCode.GDPellenObjects1= [];
gdjs.MainCode.GDPellenObjects2= [];
gdjs.MainCode.GDPellenObjects3= [];
gdjs.MainCode.GDPellenObjects4= [];
gdjs.MainCode.GDRealisticExplosionObjects1= [];
gdjs.MainCode.GDRealisticExplosionObjects2= [];
gdjs.MainCode.GDRealisticExplosionObjects3= [];
gdjs.MainCode.GDRealisticExplosionObjects4= [];
gdjs.MainCode.GDSystemObjects1= [];
gdjs.MainCode.GDSystemObjects2= [];
gdjs.MainCode.GDSystemObjects3= [];
gdjs.MainCode.GDSystemObjects4= [];
gdjs.MainCode.GDPoorlyDrawnPortalObjects1= [];
gdjs.MainCode.GDPoorlyDrawnPortalObjects2= [];
gdjs.MainCode.GDPoorlyDrawnPortalObjects3= [];
gdjs.MainCode.GDPoorlyDrawnPortalObjects4= [];
gdjs.MainCode.GDJoneseyObjects1= [];
gdjs.MainCode.GDJoneseyObjects2= [];
gdjs.MainCode.GDJoneseyObjects3= [];
gdjs.MainCode.GDJoneseyObjects4= [];

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


gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBonziObjects3Objects = Hashtable.newFrom({"Bonzi": gdjs.MainCode.GDBonziObjects3});gdjs.MainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bonzi"), gdjs.MainCode.GDBonziObjects3);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
gdjs.MainCode.condition3IsTrue_0.val = false;
gdjs.MainCode.condition4IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) > (( gdjs.MainCode.GDBonziObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDBonziObjects3[0].getPointX(""));
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) < (( gdjs.MainCode.GDBonziObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDBonziObjects3[0].getPointX(""));
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDBonziObjects3.length;i<l;++i) {
    if ( !(gdjs.MainCode.GDBonziObjects3[i].hasAnimationEnded()) ) {
        gdjs.MainCode.condition2IsTrue_0.val = true;
        gdjs.MainCode.GDBonziObjects3[k] = gdjs.MainCode.GDBonziObjects3[i];
        ++k;
    }
}
gdjs.MainCode.GDBonziObjects3.length = k;}if ( gdjs.MainCode.condition2IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition3IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8032356);
}
}if ( gdjs.MainCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDBonziObjects3.length;i<l;++i) {
    if ( gdjs.MainCode.GDBonziObjects3[i].isCurrentAnimationName("enterance") ) {
        gdjs.MainCode.condition4IsTrue_0.val = true;
        gdjs.MainCode.GDBonziObjects3[k] = gdjs.MainCode.GDBonziObjects3[i];
        ++k;
    }
}
gdjs.MainCode.GDBonziObjects3.length = k;}}
}
}
}
if (gdjs.MainCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Wait! We haven't started the lesson yet!");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sfx\\speedrun.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bonzi"), gdjs.MainCode.GDBonziObjects3);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDBonziObjects3.length;i<l;++i) {
    if ( gdjs.MainCode.GDBonziObjects3[i].hasAnimationEnded() ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDBonziObjects3[k] = gdjs.MainCode.GDBonziObjects3[i];
        ++k;
    }
}
gdjs.MainCode.GDBonziObjects3.length = k;}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDBonziObjects3.length;i<l;++i) {
    if ( gdjs.MainCode.GDBonziObjects3[i].isCurrentAnimationName("enterance") ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDBonziObjects3[k] = gdjs.MainCode.GDBonziObjects3[i];
        ++k;
    }
}
gdjs.MainCode.GDBonziObjects3.length = k;}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8641268);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDBonziObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "intro.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Hello! Today we will be learning about writing equations in slope-intercept form. Any questions before we start?");
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi intro");
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.MainCode.GDBonziObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDBonziObjects3[0].getPointX("")), "", 0);
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
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8242788);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "intro2.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Hahaha! Just Kidding! Making a dialogue prompt would be way too challenging!");
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
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8303252);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziexplanesslopintercept.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("A slope-intercept form equation is written as \"y=mx+b\" where y is your output variable, x is your input variable, m is your slope, and b is your y-intercept.");
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
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8298892);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
gdjs.copyArray(runtimeScene.getObjects("Graph"), gdjs.MainCode.GDGraphObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziexplainsslopeintercept2.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(60);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("On this graph is a line that crosses the point (0,5), as such we know that the y-intercept is 5. We can also see that the line is going up by one and to the right by 3, because of this we know that the slope is 1/3. If we put this into a slope-intercept equation, we get y=1/3x+5.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi explains slope intercept 2");
}{for(var i = 0, len = gdjs.MainCode.GDGraphObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDGraphObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDGraphObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDGraphObjects3[i].setAnimationName("slope-intercept");
}
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi explains slope intercept 2";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8195548);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
gdjs.copyArray(runtimeScene.getObjects("Graph"), gdjs.MainCode.GDGraphObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonzioutro.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("There isn't really much else to explain, LOL! Just remember to like and subscribe for more lit and epic math equations.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi done with slope-intercept");
}{for(var i = 0, len = gdjs.MainCode.GDGraphObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDGraphObjects3[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bonzi"), gdjs.MainCode.GDBonziObjects3);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
gdjs.MainCode.condition3IsTrue_0.val = false;
gdjs.MainCode.condition4IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi done with slope-intercept";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
gdjs.MainCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MainCode.condition2IsTrue_0.val ) {
{
gdjs.MainCode.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBonziObjects3Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition3IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition4IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7965204);
}
}}
}
}
}
if (gdjs.MainCode.condition4IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDBonziObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonzibusy.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Oh, you want me to do the next subject? Sorry, I am pretty busy at the moment. Maybe you could ask Hollow Knight Co-Creator William Pellen?");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi busy");
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.MainCode.GDBonziObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDBonziObjects3[0].getPointX("")), "", 0);
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi busy";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8000332);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pellen"), gdjs.MainCode.GDPellenObjects2);
gdjs.copyArray(runtimeScene.getObjects("RealisticExplosion"), gdjs.MainCode.GDRealisticExplosionObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "pellenintro.wav", 1, false, 100, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "deltarune-explosion.mp3", 2, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDPellenObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDPellenObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDRealisticExplosionObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDRealisticExplosionObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDRealisticExplosionObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDRealisticExplosionObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].setBBText("Hello, I am Hollow Knight Co-Creator William Pellen, and I am going to teach you how to solve systems of equations through elimination.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("pellen intro");
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.MainCode.GDPellenObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDPellenObjects2[0].getPointX("")), "", 0);
}}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "pellen intro";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8005484);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
gdjs.copyArray(runtimeScene.getObjects("RealisticExplosion"), gdjs.MainCode.GDRealisticExplosionObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "pellenexplainselimination.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDRealisticExplosionObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDRealisticExplosionObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("To solve a system with elimination, you first need to make one of the variables the opposite of another.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("pellen explains elimination");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "pellen explains elimination";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8028292);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
gdjs.copyArray(runtimeScene.getObjects("System"), gdjs.MainCode.GDSystemObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "pellenexplainselimination2.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDSystemObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDSystemObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("For example, you can see here that this system has the equations 2x+3y=-27, and 8x+9y=-18.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("pellen explains elimination 2");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "pellen explains elimination 2";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8280044);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonzicomplains.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Can you please move your equation out of my face?");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi complaining");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi complaining";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7519388);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
gdjs.copyArray(runtimeScene.getObjects("System"), gdjs.MainCode.GDSystemObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "pellenexplainselimination3.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("No. To cancel one of the variables out, we can multiply the first equations by negative 4. This gets us -8x-12y=108.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("pellen explains elimination 3");
}{for(var i = 0, len = gdjs.MainCode.GDSystemObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDSystemObjects3[i].setAnimationName("multiplied");
}
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "pellen explains elimination 3";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8000644);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
gdjs.copyArray(runtimeScene.getObjects("System"), gdjs.MainCode.GDSystemObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "pellenexplainselimination4.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("From there, you basically have to make the systems a giant addition problem, like so.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("pellen explains elimination 4");
}{for(var i = 0, len = gdjs.MainCode.GDSystemObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDSystemObjects3[i].setAnimationName("multiplied");
}
}{for(var i = 0, len = gdjs.MainCode.GDSystemObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDSystemObjects3[i].setAnimationName("adding");
}
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "pellen explains elimination 4";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8005372);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "pellenexplainselimination5.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Solving this, we get y=-30.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("pellen explains elimination 5");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "pellen explains elimination 5";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8230444);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "pellenexplainselimination6.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("From there you put -30 in place of y in either of your equations, I will go with the second one. Then you have to solve it.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("pellen explains elimination 6");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "pellen explains elimination 6";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7999100);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "pellenexplainselimination7.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("After solving the equation, we have our answer in (36,-30).");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("pellen explains elimination 7");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "pellen explains elimination 7";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8247948);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
gdjs.copyArray(runtimeScene.getObjects("System"), gdjs.MainCode.GDSystemObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziaskaboutsilksong.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Hey Pellen? Before you go, could you give us some info on Silksong?");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi ask about silksong");
}{for(var i = 0, len = gdjs.MainCode.GDSystemObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDSystemObjects3[i].hide();
}
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi ask about silksong";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8264484);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "pellenoutro.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Well, that's all the time I have for today. Goodbye!");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("pellen outro");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "pellen outro";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7863084);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
gdjs.copyArray(runtimeScene.getObjects("PoorlyDrawnPortal"), gdjs.MainCode.GDPoorlyDrawnPortalObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "goodby-e.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("placeholder");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("pellen leave");
}{for(var i = 0, len = gdjs.MainCode.GDPoorlyDrawnPortalObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDPoorlyDrawnPortalObjects3[i].hide(false);
}
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "pellen leave";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8231628);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonzimentionspoorlydrawnportal.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Oh hey, a poorly drawn portal. I wonder what's in there?");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi mentions poorly drawn portal");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "pellen leave";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8338700);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonzimentionspoorlydrawnportal.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Oh hey, a poorly drawn portal. I wonder what's in there?");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi mentions poorly drawn portal");
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "pellen leave";
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pellen"), gdjs.MainCode.GDPellenObjects2);
{for(var i = 0, len = gdjs.MainCode.GDPellenObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDPellenObjects2[i].setOpacity(gdjs.MainCode.GDPellenObjects2[i].getOpacity() - (1));
}
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPoorlyDrawnPortalObjects3Objects = Hashtable.newFrom({"PoorlyDrawnPortal": gdjs.MainCode.GDPoorlyDrawnPortalObjects3});gdjs.MainCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PoorlyDrawnPortal"), gdjs.MainCode.GDPoorlyDrawnPortalObjects3);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
gdjs.MainCode.condition3IsTrue_0.val = false;
gdjs.MainCode.condition4IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi mentions poorly drawn portal";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
gdjs.MainCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainCode.condition2IsTrue_0.val ) {
{
gdjs.MainCode.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPoorlyDrawnPortalObjects3Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition3IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition4IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8321844);
}
}}
}
}
}
if (gdjs.MainCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.MainCode.GDBackgroundObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
gdjs.copyArray(runtimeScene.getObjects("Pellen"), gdjs.MainCode.GDPellenObjects3);
/* Reuse gdjs.MainCode.GDPoorlyDrawnPortalObjects3 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonzisecondintro.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Hey, going into this poorly drawn portal reminded me of my next lesson!");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi second intro");
}{for(var i = 0, len = gdjs.MainCode.GDPellenObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDPellenObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDPoorlyDrawnPortalObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDPoorlyDrawnPortalObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDBackgroundObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDBackgroundObjects3[i].setAnimationName("portal");
}
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi second intro";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8336988);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonzisecondintro2.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Now I am going to teach you about writing equations in Point-Slope form! Let's \"A Go!\"");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi second intro 2");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi second intro 2";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8238476);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziexplainspointslope.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Point-Slope equations are written as y-y[size=35]1[/size]=m(x-x[size=35]1[/size]), where y[size=35]1[/size] and x[size=35]1[/size] represent a point on your line.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi explains point slope");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi explains point slope";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8305516);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziexplainspointslope2.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("As you can see here, this void between dimensions contains two points which are (10,25) and (2,-5).");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi explains point slope 2");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi explains point slope 2";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8132108);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziexplainspointslope3.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("We can get a slope from these two points with the wacky equation of y[size=35]2[/size]-y[size=35]1[/size]/x[size=35]2[/size]-x[size=35]1[/size]!");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi explains point slope 3");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi explains point slope 3";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8008372);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziexplainspointslope4.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("So for us, that would be -5-25/2-10, which equals -30/-12, which can be further simplified to 5/2");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi explains point slope 4");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi explains point slope 4";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7993252);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziexplainspointslope5.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Now we have the slope for our point-slope equation, and we can use either of the points I mentioned previously as our point.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi explains point slope 5");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi explains point slope 5";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8203428);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziexplainspointslope6.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("I will use the point (2,-5) for my equation. Plugging this into the point-slope formula gives us our answer, in y+5=5/4(x-2).");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi explains point slope 6");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi explains point slope 6";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8250604);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.MainCode.GDBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("Jonesey"), gdjs.MainCode.GDJoneseyObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonzidonewithpointslope.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].setBBText("That's it for point-slope! And hey, it looks like we reached our destination!");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi done with point slope");
}{for(var i = 0, len = gdjs.MainCode.GDJoneseyObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDJoneseyObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBackgroundObjects2[i].setAnimationName("fortnite");
}
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDJoneseyObjects3Objects = Hashtable.newFrom({"Jonesey": gdjs.MainCode.GDJoneseyObjects3});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBonziObjects3Objects = Hashtable.newFrom({"Bonzi": gdjs.MainCode.GDBonziObjects3});gdjs.MainCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Jonesey"), gdjs.MainCode.GDJoneseyObjects3);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
gdjs.MainCode.condition3IsTrue_0.val = false;
gdjs.MainCode.condition4IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi done with point slope";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
gdjs.MainCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDJoneseyObjects3Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition2IsTrue_0.val ) {
{
gdjs.MainCode.condition3IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MainCode.condition3IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition4IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8009444);
}
}}
}
}
}
if (gdjs.MainCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
/* Reuse gdjs.MainCode.GDJoneseyObjects3 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "joneseyintro.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Hey, it's me, Fortnite Jonesey! Today I'm gonna teach you about the properties of exponents!");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("jonesey intro");
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.MainCode.GDJoneseyObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDJoneseyObjects3[0].getPointX("")), "", 0);
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "jonesey intro";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8229892);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "joneseyexplainsexponents.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(50);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Let's begin with the product property. If you have a variable with an exponent being multiplied by the same variable with a different exponent, such as x^14x^5, you can simply add your exponents together. This would give us x^19.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("jonesey explains exponents");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "jonesey explains exponents";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8266716);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "joneseyexplainsexponents2.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(50);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Next is the power of a power. If your exponent has an exponent, you can simply multiply the two exponents! Such as with (x^14)^5, which you can convert into x^70!");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("jonesey explains exponents 2");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "jonesey explains exponents 2";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8210332);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "joneseyexplainsexponents3.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(50);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("After that, we have the power of a product, or what you do with two variables being multiplied together with an exponent. If we have the problem (xy)^14, we can simplify it to x^14y^14!");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("jonesey explains exponents 3");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "jonesey explains exponents 3";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8167732);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "joneseyexplainsexponents4.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(50);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Next is the quotient property. This one is basically the opposite of the product property, where you subtract your two exponents! If you look at x^14/x^5, we can subtract to get x^9!");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("jonesey explains exponents 4");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "jonesey explains exponents 4";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8001924);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "joneseyexplainsexponents5.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(50);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Next up is the property of negative exponents! with a negative exponent, you must flip the denominator with the numerator! For example, x^-14 would become 1/x^14!");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("jonesey explains exponents 5");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "jonesey explains exponents 5";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8664116);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "joneseyexplainsexponents6.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(50);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Finally is the property of an exponent of 0. Anything with an exponent of 0 equals 1. For example, x^0 equals 1, and so does (50x*45^87y/2)^0.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("jonesey explains exponents 6");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "jonesey explains exponents 6";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8006740);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "joneseyoutro.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Well that's all the time I have for today! I gotta go get that dub! See ya!");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("jonesey outro");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "jonesey outro";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8340476);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bonzi"), gdjs.MainCode.GDBonziObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
gdjs.copyArray(runtimeScene.getObjects("Jonesey"), gdjs.MainCode.GDJoneseyObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonzimentionswarp.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Do you feel that? I think that we're being transported back to our world!");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi mentions warp");
}{for(var i = 0, len = gdjs.MainCode.GDJoneseyObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDJoneseyObjects3[i].hide();
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.MainCode.GDBonziObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDBonziObjects3[0].getPointX("")), "", 0);
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi mentions warp";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7999252);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.MainCode.GDBackgroundObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonzimentionsreturn.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Well, I guess we're back here.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi mentions return");
}{for(var i = 0, len = gdjs.MainCode.GDBackgroundObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDBackgroundObjects3[i].setAnimationName("classroom");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bonzi"), gdjs.MainCode.GDBonziObjects3);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
gdjs.MainCode.condition3IsTrue_0.val = false;
gdjs.MainCode.condition4IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi mentions return";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
gdjs.MainCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainCode.condition2IsTrue_0.val ) {
{
gdjs.MainCode.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBonziObjects3Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition3IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition4IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8010772);
}
}}
}
}
}
if (gdjs.MainCode.condition4IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDBonziObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonzipplintro.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Oh yeah, there's one thing I have left to teach you. I am going to teach you how to write equations of parallel and perpandicular lines.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi ppl intro");
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.MainCode.GDBonziObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDBonziObjects3[0].getPointX("")), "", 0);
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi ppl intro";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8255420);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziexplainsppl.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Let's start with parallel lines. all parallel lines have the same slope, but different y-intercepts.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi explains ppl");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi explains ppl";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8002548);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziexplainsppl2.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("For example, the equations y=1/3x+5 and y=1/3x-8 are parallel, as they both have a slope of 1/3.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi explains ppl 2");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi explains ppl 2";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8318132);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziexplainsppl3.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Any two lines with a different slope, and/or the same y-intercept cannot be parallel.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi explains ppl 3");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi explains ppl 3";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8289748);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziexplainsppl4.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("That's it for parallel lines, now let's discuss perpendicular lines.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi explains ppl 4");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi explains ppl 4";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8001596);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziexplainsppl5.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("All perpendicular lines have opposite slopes. For example, the line y=1/3x would be perpendicular to the line y=-3.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi explains ppl 5");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi explains ppl 5";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8186612);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects3);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bonziexplainsppl6.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects3[i].setBBText("Y-intercept does not matter to whether or not two lines are perpendicular. As long as they have the opposite slope, they will be perpendicular.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi explains ppl 6");
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
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "bonzi explains ppl 6";
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8164292);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "theend.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].setFontSize(80);
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueObjects2[i].setBBText("And that's it. I hope you enjoyed this untested, messy game. Thanks for playing! There's nothing left to do.");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("the end");
}}

}


};gdjs.MainCode.eventsList4 = function(runtimeScene) {

{


gdjs.MainCode.eventsList0(runtimeScene);
}


{


gdjs.MainCode.eventsList1(runtimeScene);
}


{


gdjs.MainCode.eventsList2(runtimeScene);
}


{


gdjs.MainCode.eventsList3(runtimeScene);
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


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDLeftArrowObjects2Objects = Hashtable.newFrom({"LeftArrow": gdjs.MainCode.GDLeftArrowObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRightArrowObjects1Objects = Hashtable.newFrom({"RightArrow": gdjs.MainCode.GDRightArrowObjects1});gdjs.MainCode.eventsList5 = function(runtimeScene) {

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


};gdjs.MainCode.eventsList6 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList7 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
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
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = !(gdjs.evtTools.window.isFullScreen(runtimeScene));
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


};gdjs.MainCode.eventsList8 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bonzi"), gdjs.MainCode.GDBonziObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.MainCode.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Graph"), gdjs.MainCode.GDGraphObjects1);
gdjs.copyArray(runtimeScene.getObjects("Jonesey"), gdjs.MainCode.GDJoneseyObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.MainCode.GDLeftArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pellen"), gdjs.MainCode.GDPellenObjects1);
gdjs.copyArray(runtimeScene.getObjects("PoorlyDrawnPortal"), gdjs.MainCode.GDPoorlyDrawnPortalObjects1);
gdjs.copyArray(runtimeScene.getObjects("RealisticExplosion"), gdjs.MainCode.GDRealisticExplosionObjects1);
gdjs.copyArray(runtimeScene.getObjects("System"), gdjs.MainCode.GDSystemObjects1);
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
}{for(var i = 0, len = gdjs.MainCode.GDGraphObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGraphObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDPellenObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPellenObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDRealisticExplosionObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDRealisticExplosionObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDSystemObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSystemObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDJoneseyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDJoneseyObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDPoorlyDrawnPortalObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPoorlyDrawnPortalObjects1[i].hide();
}
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "pellenoutro.wav");
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


gdjs.MainCode.eventsList4(runtimeScene);
}


{


gdjs.MainCode.eventsList6(runtimeScene);
}


{


gdjs.MainCode.eventsList7(runtimeScene);
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


{

gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.MainCode.GDBackgroundObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) > ((( gdjs.MainCode.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDBackgroundObjects1[0].getPointX("")) + (( gdjs.MainCode.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDBackgroundObjects1[0].getWidth())) - 960;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (5), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.MainCode.GDBackgroundObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) < (( gdjs.MainCode.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDBackgroundObjects1[0].getPointX("")) + 960;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (5), "", 0);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl");
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("bonzi second intro 2");
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDBonziObjects1.length = 0;
gdjs.MainCode.GDBonziObjects2.length = 0;
gdjs.MainCode.GDBonziObjects3.length = 0;
gdjs.MainCode.GDBonziObjects4.length = 0;
gdjs.MainCode.GDDialogueObjects1.length = 0;
gdjs.MainCode.GDDialogueObjects2.length = 0;
gdjs.MainCode.GDDialogueObjects3.length = 0;
gdjs.MainCode.GDDialogueObjects4.length = 0;
gdjs.MainCode.GDBackgroundObjects1.length = 0;
gdjs.MainCode.GDBackgroundObjects2.length = 0;
gdjs.MainCode.GDBackgroundObjects3.length = 0;
gdjs.MainCode.GDBackgroundObjects4.length = 0;
gdjs.MainCode.GDRightArrowObjects1.length = 0;
gdjs.MainCode.GDRightArrowObjects2.length = 0;
gdjs.MainCode.GDRightArrowObjects3.length = 0;
gdjs.MainCode.GDRightArrowObjects4.length = 0;
gdjs.MainCode.GDLeftArrowObjects1.length = 0;
gdjs.MainCode.GDLeftArrowObjects2.length = 0;
gdjs.MainCode.GDLeftArrowObjects3.length = 0;
gdjs.MainCode.GDLeftArrowObjects4.length = 0;
gdjs.MainCode.GDGraphObjects1.length = 0;
gdjs.MainCode.GDGraphObjects2.length = 0;
gdjs.MainCode.GDGraphObjects3.length = 0;
gdjs.MainCode.GDGraphObjects4.length = 0;
gdjs.MainCode.GDPellenObjects1.length = 0;
gdjs.MainCode.GDPellenObjects2.length = 0;
gdjs.MainCode.GDPellenObjects3.length = 0;
gdjs.MainCode.GDPellenObjects4.length = 0;
gdjs.MainCode.GDRealisticExplosionObjects1.length = 0;
gdjs.MainCode.GDRealisticExplosionObjects2.length = 0;
gdjs.MainCode.GDRealisticExplosionObjects3.length = 0;
gdjs.MainCode.GDRealisticExplosionObjects4.length = 0;
gdjs.MainCode.GDSystemObjects1.length = 0;
gdjs.MainCode.GDSystemObjects2.length = 0;
gdjs.MainCode.GDSystemObjects3.length = 0;
gdjs.MainCode.GDSystemObjects4.length = 0;
gdjs.MainCode.GDPoorlyDrawnPortalObjects1.length = 0;
gdjs.MainCode.GDPoorlyDrawnPortalObjects2.length = 0;
gdjs.MainCode.GDPoorlyDrawnPortalObjects3.length = 0;
gdjs.MainCode.GDPoorlyDrawnPortalObjects4.length = 0;
gdjs.MainCode.GDJoneseyObjects1.length = 0;
gdjs.MainCode.GDJoneseyObjects2.length = 0;
gdjs.MainCode.GDJoneseyObjects3.length = 0;
gdjs.MainCode.GDJoneseyObjects4.length = 0;

gdjs.MainCode.eventsList8(runtimeScene);
return;

}

gdjs['MainCode'] = gdjs.MainCode;
