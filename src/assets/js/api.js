function send_api_request(type, url, data, callback) {
	var base_url = "http://192.168.1.111:8000/api/v1/";

	var request = $.ajax({
		url: base_url + url,
		method: type,
		dataType: "json",
		data: data
	});

	request.done(function(resp){
		callback(resp)
	});
}


function render(html, data) {

	for (const [key, value] of data) {
		html.replace("{{${key}}}", value);
	}

	return file_data;
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}