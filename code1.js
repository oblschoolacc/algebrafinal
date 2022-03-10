gdjs.TitleCode = {};
gdjs.TitleCode.GDTitleObjects1= [];
gdjs.TitleCode.GDTitleObjects2= [];
gdjs.TitleCode.GDStartButtonObjects1= [];
gdjs.TitleCode.GDStartButtonObjects2= [];
gdjs.TitleCode.GDBackgroundObjects1= [];
gdjs.TitleCode.GDBackgroundObjects2= [];

gdjs.TitleCode.conditionTrue_0 = {val:false};
gdjs.TitleCode.condition0IsTrue_0 = {val:false};
gdjs.TitleCode.condition1IsTrue_0 = {val:false};
gdjs.TitleCode.condition2IsTrue_0 = {val:false};


gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.TitleCode.GDStartButtonObjects1});gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.TitleCode.GDStartButtonObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.TitleCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDTitleObjects1.length = 0;
gdjs.TitleCode.GDTitleObjects2.length = 0;
gdjs.TitleCode.GDStartButtonObjects1.length = 0;
gdjs.TitleCode.GDStartButtonObjects2.length = 0;
gdjs.TitleCode.GDBackgroundObjects1.length = 0;
gdjs.TitleCode.GDBackgroundObjects2.length = 0;

gdjs.TitleCode.eventsList0(runtimeScene);
return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
