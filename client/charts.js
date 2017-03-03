Template.charts.onRendered(()=>{
    let ctx = $("#myChart").get(0).getContext("2d");
    
    let data = (
        labels:["January","February","March","April","May","June","July","August","September","October","November","December"],
        datasets: [] 
    );
    
    data.datasets.push({
       label: "temp max",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [25,27,25,20,18,15,15,16,20,22,22,24]
    });
    
    data.datasets.push({
        label: "temp min",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: []
    });
    for(let i=0;i<12;i++){
        data.datasets[1].data.push(3+Math.random()*10);
    }
    
    new Chart(ctx).Line(data, Chart.defaults.global);
});