//To do:
// - Get a dictionary of all dummies columns.
// - Build a selection UI for each of the features, with each option giving a string corresponding to one of the column names.
// - Use the dictionary and the selection strings togther to create the feature array.

var weights_0 = [];
var weights_1 = [];
var biases_0 = [];
var biases_1 = [];

const test_features = [[0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0]] //This should result in "Eat".
var features = [Array.apply(null, Array(test_features[0].length)).map(Number.prototype.valueOf, 0)];

$.ajax({
    type: "GET",
    url: "data/MushroomClassificationA_weights-step0.csv",
    dataType: "text",
    success: (data) => {
        weights_0 = $.csv.toArrays(data);

        for (i=0; i<weights_0.length; i++) {
            for (ii=0; ii<weights_0[i].length; ii++) {
                weights_0[i][ii] = parseFloat(weights_0[i][ii]);
            }
        }
    }
});

$.ajax({
    type: "GET",
    url: "data/MushroomClassificationA_weights-step1.csv",
    dataType: "text",
    success: (data) => {
        weights_1 = $.csv.toArrays(data);

        for (i=0; i<weights_1.length; i++) {
            for (ii=0; ii<weights_1[i].length; ii++) {
                weights_1[i][ii] = parseFloat(weights_1[i][ii]);
            }
        }
    }
});

$.ajax({
    type: "GET",
    url: "data/MushroomClassificationA_biases-step0.csv",
    dataType: "text",
    success: (data) => {
        biases_0 = $.csv.toArrays(data);

        for (i=0; i<biases_0.length; i++) {
            for (ii=0; ii<biases_0[i].length; ii++) {
                biases_0[i][ii] = parseFloat(biases_0[i][ii]);
            }
        }
    }
});

$.ajax({
    type: "GET",
    url: "data/MushroomClassificationA_biases-step1.csv",
    dataType: "text",
    success: (data) => {
        biases_1 = $.csv.toArrays(data);

        for (i=0; i<biases_1.length; i++) {
            for (ii=0; ii<biases_1[i].length; ii++) {
                biases_1[i][ii] = parseFloat(biases_1[i][ii]);
            }
        }
    }
});

const sigmoid = (x) => {
    return_x = x
    for (i=0; i<x.length; i++) {
        for (ii=0; ii<x[i].length; ii++) {
            return_x[i][ii] = 1 / (1 + math.pow(math.e, math.multiply(x[i][ii], -1)));
        }
    }
    return return_x;
}

const straight_nn = (x, w_0, w_1, b_0, b_1) => {
    const layer_1 = sigmoid(math.add(math.multiply(x, w_0), math.transpose(b_0)));
    const logits = math.add(math.multiply(layer_1, w_1), math.transpose(b_1));
    return logits;
}
