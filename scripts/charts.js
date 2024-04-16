$(document).ready(function() {
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(currentProgramChart);
    function currentProgramChart() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
            ['Month', 'Goal'],
            ['JAN',  20 ],
            ['FEB',  135],
            ['MAR',  157],
            ['APL',  139],
            ['MAY',  136],
            ['JUN',  135],
            ['JUL',  157],
            ['AUG',  139],
            ['SEP',  136]
        ]);
        var options = {
            title: 'Hours',
            hAxis: {title: 'Month'},
            seriesType: 'bars',
            series: {2: {type: 'line'}},
            'width':400,
            'height':300
        };

        var chart = new google.visualization.ColumnChart(
            document.getElementById('currentprogramchart'));

        chart.draw(data, options);
    }
});