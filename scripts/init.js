html_buffer = [];
for (i=0; i<feature_map.length; i++) {
    let curr_feature_map = feature_map[i];

    html_buffer.push(`
        <div id="`+ curr_feature_map.id +`_div" class="col s3" align="center">
            <a id="`+ curr_feature_map.id +`_btn" class="btn-floating btn-large dropdown-button black" href="#" data-activates="` + curr_feature_map.id + `_dropdown" data-beloworigin="true">
                <i class="large material-icons">add</i>
            </a>
            <span class="button_label">` + curr_feature_map.name + `</span>
        </div>
    `);
}

$("#content_body").append(html_buffer.join(""));

html_buffer = [];
for (i=0; i<feature_map.length; i++) {
    let curr_feature_map = feature_map[i];

    html_buffer.push(`<ul id="` + curr_feature_map.id + `_dropdown" class="dropdown-content">`);

    for (j=0; j<curr_feature_map.keys.length; j++) {
        let curr_key = curr_feature_map.keys[j];

        html_buffer.push(`
            <li><a href="#!" class="feature_button" id="` + curr_feature_map.id + `-` + curr_key.id + `">` + curr_key.name + `</a></li>
        `);
    }

    html_buffer.push(`</ul>`);
}

$("#content_body").append(html_buffer.join(""));