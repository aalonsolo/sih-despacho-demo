var PS = PS || {};
PS.LESSON_STATUS_COMPLETED = "completed";
PS.CMI_LESSON_STATUS = "cmi.core.lesson_status";
PS.CMI_SUSPEND_DATA = "cmi.suspend_data";
PS.CMI_LESSON_LOCATION = "cmi.core.lesson_location";
PS.CMI_SCORE_RAW = "cmi.core.score.raw";
PS.main=function(){
	PS.lmsConnected = (PS.getPublication() == "1");
	
	if (PS.lmsConnected) {
		loadPage();
		PS.courseCompleted = doLMSGetValue(PS.CMI_LESSON_STATUS) === PS.LESSON_STATUS_COMPLETED;
	}
}
PS.getPublication = function() {
	try {
		return (getAPI() != null) ? "1": "2";
	} catch(err) {
		return "2";
	}
}
PS.getLessonLocation=function(){
	return doLMSGetValue(PS.CMI_LESSON_LOCATION);
}
PS.setLessonLocation=function(value){
	doLMSSetValue(PS.CMI_LESSON_LOCATION, value);
	doLMSCommit();
}
PS.getLessonStatus=function(){
	return doLMSGetValue(PS.CMI_LESSON_LOCATION);
}
PS.setLessonStatus=function(value){
	doLMSSetValue(PS.CMI_LESSON_STATUS, value);
	doLMSCommit();
}
PS.getSuspendData=function(){
	return doLMSGetValue(PS.CMI_SUSPEND_DATA);
}
PS.setSuspendData=function(value){
	doLMSSetValue(PS.CMI_SUSPEND_DATA, value);
	doLMSCommit();
}
PS.setScoreRaw=function(value){
	doLMSSetValue(PS.CMI_SCORE_RAW, value);
	doLMSCommit();
}
PS.setSuccessStatus=function(){}
PS.main();