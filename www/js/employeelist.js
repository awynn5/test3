var serviceURL = "https://Demo.statewic.net/EmpServices/api/Emp?GetAllEmployees";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
$.support.cors = true;
 $.getJSON(serviceURL)
          .done(function (data) {
		$('#employeeList li').remove();
		
		$.each(data, function (key, item) {
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + item.id + '">' +
					'<img src="pics/' + item.picture + '"/>' +
					'<h4>' + item.firstName + ' ' + item.lastName + '</h4>' +
					'<p>' + item.title + '</p>' +
					'<span class="ui-li-count">' + item.reportCount + '</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}