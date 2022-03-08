gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDbonziObjects1= [];
gdjs.Untitled_32sceneCode.GDbonziObjects2= [];
gdjs.Untitled_32sceneCode.GDbonziObjects3= [];
gdjs.Untitled_32sceneCode.GDNewBBTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewBBTextObjects2= [];
gdjs.Untitled_32sceneCode.GDNewBBTextObjects3= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition3IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.conditionTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition3IsTrue_1 = {val:false};


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (5), "", 0);
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (5), "", 0);
}}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bonzi"), gdjs.Untitled_32sceneCode.GDbonziObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbonziObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbonziObjects1[i].setAnimationName("enterance");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bonzi"), gdjs.Untitled_32sceneCode.GDbonziObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDbonziObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDbonziObjects1[i].hasAnimationEnded() ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDbonziObjects1[k] = gdjs.Untitled_32sceneCode.GDbonziObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDbonziObjects1.length = k;}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDbonziObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDbonziObjects1[i].isCurrentAnimationName("enterance") ) {
        gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDbonziObjects1[k] = gdjs.Untitled_32sceneCode.GDbonziObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDbonziObjects1.length = k;}if ( gdjs.Untitled_32sceneCode.condition1IsTrue_0.val ) {
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition2IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7360532);
}
}}
}
if (gdjs.Untitled_32sceneCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.Untitled_32sceneCode.GDNewBBTextObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\intro.wav", false, 30, 1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewBBTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewBBTextObjects1[i].setBBText("HAHAHAHAH I FORGOT WHAT I MADE BONZI SAY AND I CAN'T FIND OUT BECAUSE I FORGOT MY HEADPHONES MUAHAHAHAHAHAHAHAHAHAHA! IM SO EVIL AND FUCKED UP!");
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDbonziObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbonziObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbonziObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewBBTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewBBTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewBBTextObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
