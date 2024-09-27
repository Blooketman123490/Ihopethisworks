var currentTabId = 0;
var currentTab = 0;
var tabIds = [];

function newTab(url = "/tab?page=" + __uv$config.encodeUrl("https://google.com")) {
  var el = document.getElementById("tabBarTabs");
  var tabId = getTabId();
  el.innerHTML += `<div class="tabBarTab w3-bar-item" style="width: 225px" onclick="openTab(` + tabId + `)">
  <div style="display: inline-block;
      width: 170px;
      overflow-x: hidden;
      white-space: nowrap;
      cursor: default;">
    random website 123 ca43oirjt2o4
  </div>
  <span
    style="cursor: pointer; float: right"
    onclick="
    event.stopPropagation();
    this.parentNode.animate([{'width': '150px'},{'width': '0'}],{fill: 'forwards',duration: 125});
    setTimeout(function(el) {
    	el.remove();
    }, 100, this.parentElement);
    closeTab('` + tabId + `')"
    >✖</span>
</div>`;

  var tab = el.lastChild;
  setTimeout(function (tab) {
    tab.style.marginTop = "5px";
  }, 1, tab);
  var frame = document.createElement("iframe");
  frame.src = url;
  frame.classList.add("tab");
  frame.id = "frame" + tabId;
  //document.getElementById("frames").innerHTML += '<iframe src="' + url + '" class="tab" id="frame' + tabId + '"></iframe>';
  document.getElementById("frames").append(frame);
  openTab(tabId)

  return document.getElementById("frames").lastElementChild;
}

function getTabId() {
  tabIds.push(currentTabId);
  return currentTabId++;
}

function openTab(tabId) {
  if(document.getElementById("frame" + currentTab)) {
    document.getElementById("frame" + currentTab).style.display = "none";
  }
  currentTab = tabId;
  document.getElementById("frame" + currentTab).style.display = "block";
}

function closeTab(id) {
  document.getElementById("frame" + id).remove();
  tabIds.splice(tabIds.indexOf(id), 1);
  if (currentTab == id && tabIds.length != 0) {
    openTab(currentTab = tabIds[tabIds.length - 1]);
  }
}