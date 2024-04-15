async function getData(selected_major) {
    var response = await fetch('cit5students.json');   // GET request

    if(response.ok) {
        var data = await response.json();

        // Filter data by selected major
        var major_items = data.filter(item => item.major === selected_major);

        var templateText = document.getElementById('majorTemplate').innerHTML;
        var compiledTemplate = Handlebars.compile(templateText);

        var compiledHtml = compiledTemplate({ rows: major_items });
        document.getElementById('majorTable').innerHTML = compiledHtml;
    }
    else {
        document.getElementById('majorTable').innerHTML = "There was an error, or menu items not found";
    }
}
