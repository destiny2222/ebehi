Chart.defaults.pointHitDetectionRadius=1,Chart.defaults.plugins.tooltip.enabled=!1,Chart.defaults.plugins.tooltip.mode="index",Chart.defaults.plugins.tooltip.position="nearest",Chart.defaults.plugins.tooltip.external=coreui.ChartJS.customTooltips,Chart.defaults.color=coreui.Utils.getStyle("--cui-body-color"),document.body.addEventListener("themeChange",(()=>{cardChart1.data.datasets[0].pointBackgroundColor=coreui.Utils.getStyle("--cui-primary"),cardChart1.update()}));const mainBarChart=new Chart(document.getElementById("main-bar-chart"),{type:"bar",data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Users",backgroundColor:coreui.Utils.getStyle("--cui-primary"),borderRadius:6,borderSkipped:!1,data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6,categoryPercentage:.5},{label:"New users",backgroundColor:coreui.Utils.getStyle("--cui-gray-100"),borderRadius:6,borderSkipped:!1,data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6,categoryPercentage:.5}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{color:coreui.Utils.getStyle("--cui-text-disabled"),font:{size:14},padding:16}},y:{grid:{drawBorder:!1,borderDash:[2,4]},gridLines:{borderDash:[8,4],color:"#348632"},ticks:{beginAtZero:!0,color:coreui.Utils.getStyle("--cui-text-disabled"),font:{size:14},maxTicksLimit:5,padding:16,stepSize:Math.ceil(25)}}}}}),cardChartNew1=new Chart(document.getElementById("card-chart-new1"),{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:`rgba(${coreui.Utils.getStyle("--cui-primary-rgb")}, .1)`,borderColor:coreui.Utils.getStyle("--cui-primary"),borderWidth:3,data:[78,81,80,45,34,22,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{beginAtZero:!0,display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}}),cardChart1=new Chart(document.getElementById("card-chart1"),{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:coreui.Utils.getStyle("--cui-primary"),data:[65,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}}),cardChart3=new Chart(document.getElementById("card-chart3"),{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}}),cardChart4=new Chart(document.getElementById("card-chart4"),{type:"bar",data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{display:!1}}}}});