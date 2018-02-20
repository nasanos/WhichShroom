// Model setup
var features = Array.apply(null, Array(31)).map(Number.prototype.valueOf, 0);

const model = new KerasJS.Model({
    filepath: "data/MushroomClassification.bin",
    filesystem: true,
    gpu: false
});

console.log(model);

// General functions
const sigmoid = (x) => {
    return 1 / (1 + math.pow(math.e, math.multiply(x, -1)));
}

const feature_select = (feat_range, feat_loc) => {
    for (i=feat_range[0]; i<feat_range[1]+1; i++) {
        features[i] = 0;
    };

    features[feat_range[0]+feat_loc] = 1;

    console.log(features);
}

const print_results = (result) => {
    console.log("Prediction: " + result[0]);

    squashed_result = sigmoid(result[0]);
    $("#pred_text").html(Math.round(squashed_result*100) + "% certain it's edible.");
}

// Feature map
const cap_shape_key = {
    id: "cap-shape",
    name: "Cap Shape",
    range: [0, 5],
    keys: [
        {id: "B", name: "<u>B</u>ell", feat_loc: 0},
        {id: "C", name: "<u>C</u>onical", feat_loc: 1},
        {id: "X", name: "Conve<u>x</u>", feat_loc: 5},
        {id: "F", name: "<u>F</u>lat", feat_loc: 2},
        {id: "K", name: "<u>K</u>nobbed", feat_loc: 3},
        {id: "S", name: "<u>S</u>unken", feat_loc: 4}
    ]
};

const cap_color_key = {
    id: "cap-color",
    name: "Cap Color",
    range: [6, 15],
    keys: [
        {id: "N", name: "Brow<u>n</u>", feat_loc: 4, color: "521515"},
        {id: "B", name: "<u>B</u>uff", feat_loc: 0, color: "f0dc82"},
        {id: "C", name: "<u>C</u>innamon", feat_loc: 1, color: "9d4535"},
        {id: "G", name: "<u>G</u>ray", feat_loc: 3, color: "808080"},
        {id: "R", name: "G<u>r</u>een", feat_loc: 6, color: "005900"},
        {id: "P", name: "<u>P</u>ink", feat_loc: 5, color: "ffc0cb"},
        {id: "U", name: "P<u>u</u>rple", feat_loc: 7, color: "730073"},
        {id: "E", name: "R<u>e</u>d", feat_loc: 2, color: "cc0000"},
        {id: "W", name: "<u>W</u>hite", feat_loc: 8, color: "ffffff"},
        {id: "Y", name: "<u>Y</u>ellow", feat_loc: 9, color: "e5e500"}
    ]
};

const bruises_key = {
    id: "bruises",
    name: "Bruises",
    range: [16, 17],
    keys: [
        {id: "Y", name: "<u>Y</u>es", feat_loc: 1},
        {id: "N", name: "<u>N</u>o", feat_loc: 0}
    ]
};

const population_key = {
    id: "population",
    name: "Population",
    range: [18, 23],
    keys: [
        {id: "A", name: "<u>A</u>bundant", feat_loc: 0},
        {id: "C", name: "<u>C</u>lustered", feat_loc: 1},
        {id: "N", name: "<u>N</u>umerous", feat_loc: 2},
        {id: "S", name: "<u>S</u>cattered", feat_loc: 3},
        {id: "V", name: "Se<u>v</u>eral", feat_loc: 4},
        {id: "Y", name: "Solitar<u>y</u>", feat_loc: 5}
    ]
};

const habitat_key = {
    id: "habitat",
    name: "Habitat",
    range: [24, 30],
    keys: [
        {id: "G", name: "<u>G</u>rassy", feat_loc: 1},
        {id: "L", name: "<u>L</u>eafy", feat_loc: 2},
        {id: "M", name: "<u>M</u>eadow", feat_loc: 3},
        {id: "P", name: "<u>P</u>ath", feat_loc: 4},
        {id: "U", name: "<u>U</u>rban", feat_loc: 5},
        {id: "W", name: "<u>W</u>aste", feat_loc: 6},
        {id: "D", name: "Woo<u>d</u>s", feat_loc: 0}
    ]
};

const feature_map = [
    cap_shape_key,
    cap_color_key,
    bruises_key,
    population_key,
    habitat_key
];