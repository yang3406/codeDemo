
var path = "../integrate/roadparking/report/templateReportExport/view.html?tname=xian_001&title=收费员日报表统计&duration=day";

function getPathParam(path, param) {
  var reqParam = path.split("html?")[1];
  if (!reqParam) return;
  var reg = new RegExp('(^|&)' + param + "=([^&]*)($|&)");
  var match = reqParam.match(reg);
  if (match != null) {
    return unescape(match[2]);
  }
}

getPathParam(path, "title")