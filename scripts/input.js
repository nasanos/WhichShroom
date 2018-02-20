$("#prediction_button").on("click", () => {
    console.log("Features to predict on: " + features)

    let feat_sum = features.reduce((a, b) => a + b, 0);

    if (feat_sum < 5 || feat_sum > 5) {
        Materialize.toast("Describe all features before making a prediction.", 4000);
    } else if (feat_sum == 5) {
        var prediction = {};

        model.ready()
            .then(() => {
                const inputData = {"input": new Float32Array(features)};

                return model.predict(inputData);
            })
            .then((outputData) => {
                print_results(outputData["output"]);
            });
    }
});

$(".feature_button").on("click", (e) => {
    for (i=0; i<feature_map.length; i++) {
        let curr_feature_map = feature_map[i];

        for (j=0; j<curr_feature_map.keys.length; j++) {
            let curr_key = curr_feature_map.keys[j];

            if (e.target.id == curr_feature_map.id + "-" + curr_key.id) {
                feature_select(curr_feature_map.range, curr_key.feat_loc);

                $("#" + curr_feature_map.id + "_btn").html(curr_key.id);
            }
        }
    }
});