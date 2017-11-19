$("#prediction_button").on("click", () => {
    feat_sum = features[0].reduce((a, b) => a+b, 0);
    console.log(features[0])

    if (feat_sum < 8 || feat_sum > 8) {
            Materialize.toast("Describe all features before making a prediction.", 4000);
    } else if (feat_sum == 8) {
        const prediction = straight_nn(features, weights_0, weights_1, biases_0, biases_1);
        const squashed_prediction = sigmoid(prediction)

        console.log(squashed_prediction);

        if (prediction[0][0] <= prediction[0][1]) {
            $("#pred_text").html("Poisonous: " + Math.round(squashed_prediction[0][1]*100) + "%");
        } else if (prediction[0][0] > prediction[0][1]) {
            $("#pred_text").html("Edible: " + Math.round(squashed_prediction[0][0]*100) + "%");
        }
    }
});

const random_int = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
}

const feature_select = (feat_loc, feat_start, feat_end) => {
    for (i=feat_start-1; i<feat_end; i++) {
        features[0][i] = 0;
    }

    features[0][feat_loc-1] = 1;
}

const capshape_select = (capshape) => {
    feature_select(capshape, 1, 6);

    switch(capshape) {
        case 1:
            $("#cap-shape_img").attr("src", "imgs/cap-shape/bell0"+random_int(1, 3)+".jpg");
            break;
        case 2:
            $("#cap-shape_img").attr("src", "imgs/cap-shape/conical0"+random_int(1, 3)+".jpg");
            break;
        case 3:
            $("#cap-shape_img").attr("src", "imgs/cap-shape/flat0"+random_int(1, 3)+".jpg");
            break;
        case 4:
            $("#cap-shape_img").attr("src", "imgs/cap-shape/knobbed0"+random_int(1, 3)+".jpg");
            break;
        case 5:
            $("#cap-shape_img").attr("src", "imgs/cap-shape/sunken0"+random_int(1, 3)+".jpg");
            break;
        case 6:
            $("#cap-shape_img").attr("src", "imgs/cap-shape/convex0"+random_int(1, 3)+".jpg");
            break;
    }
}

const capsurface_select = (capsurface) => {
    feature_select(capsurface, 7, 10);

    switch(capsurface) {
        case 7:
            $("#cap-surface_img").attr("src", "imgs/cap-surface/fibrous0"+random_int(1, 3)+".jpg");
            break;
        case 8:
            $("#cap-surface_img").attr("src", "imgs/cap-surface/grooved0"+random_int(1, 3)+".jpg");
            break;
        case 10:
            $("#cap-surface_img").attr("src", "imgs/cap-surface/scaly0"+random_int(1, 3)+".jpg");
            break;
        case 9:
            $("#cap-surface_img").attr("src", "imgs/cap-surface/smooth0"+random_int(1, 3)+".jpg");
            break;
    }
}

const capcolor_select = (capcolor) => {
    feature_select(capcolor, 11, 20);

    $("#cap-color_img").attr("src", "");
    $("#cap-color_img").attr("style", "background-color: #f0dc82;");
}

const gillsize_select = (gillsize) => {
    feature_select(gillsize, 21, 22);
}

const gillspacing_select = (gillspacing) => {
    feature_select(gillspacing, 23, 24);
}

const bruising_select = (bruising) => {
    feature_select(bruising, 25, 26);
}

const habitat_select = (habitat) => {
    feature_select(habitat, 27, 33);
}

const population_select = (population) => {
    feature_select(population, 34, 39);
}
