function EliminarTriggers(idform) {
  Logger.log(idform);
  var allTriggers = ScriptApp.getProjectTriggers();
  allTriggers.map((e, index) => {
    if (e.getTriggerSourceId() == idform) {
      ScriptApp.deleteTrigger(allTriggers[index]);
      Logger.log("se ha eliminado el formulario " + idform);
    }
  });
}
