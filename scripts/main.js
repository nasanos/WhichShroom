// Model setup
var features = Array.apply(null, Array(31)).map(Number.prototype.valueOf, 0);

const model = new KerasJS.Model({
    filepath: "data/MushroomClassification.bin",
    filesystem: true,
    gpu: false
});

// General functions
const sigmoid = (x) => {
    return 1 / (1 + math.pow(math.e, math.multiply(x, -1)));
}

const feature_select = (feat_range, feat_loc) => {
    for (i=feat_range[0]; i<feat_range[1]+1; i++) {
        features[i] = 0;
    };

    features[feat_range[0]+feat_loc] = 1;
}

const print_results = (result) => {
    if (result[0] > 0.5) {
        let result_percentage = Math.round((result[0] > 1 ? 1.0 : (result[0] - 0.5)/0.5) * 100)
        $("#pred_text").html("Pretty sure it's edible:<br/>" + result_percentage + "% sure.");
    } else {
        let result_percentage = Math.round((result[0] < 0 ? 1.0 : 1 - (result[0]/0.5)) * 100)
        $("#pred_text").html("Probably poisonous:<br/>" + result_percentage + "% sure.");
    }
}

const reset_features = () => {
    features = Array.apply(null, Array(31)).map(Number.prototype.valueOf, 0);
    
    for (i=0; i<feature_map.length; i++) {
        let curr_feature_map = feature_map[i];
        
        $("#" + curr_feature_map.id + "_icon").html("add");
        $("#" + curr_feature_map.id + "_btn").toggleClass("green black");
        $("#" + curr_feature_map.id + "_label").html(curr_feature_map.name);
    }
}

// Feature map
const cap_shape_key = {
    id: "cap-shape",
    name: "Cap Shape",
    range: [0, 5],
    keys: [
        {id: "B", name: "Bell", feat_loc: 0},
        {id: "C", name: "Conical", feat_loc: 1},
        {id: "X", name: "Convex", feat_loc: 5},
        {id: "F", name: "Flat", feat_loc: 2},
        {id: "K", name: "Knobbed", feat_loc: 3},
        {id: "S", name: "Sunken", feat_loc: 4}
    ]
};

const cap_color_key = {
    id: "cap-color",
    name: "Cap Color",
    range: [6, 15],
    keys: [
        {id: "N", name: "Brown", feat_loc: 4, color: "521515"},
        {id: "B", name: "Buff", feat_loc: 0, color: "f0dc82"},
        {id: "C", name: "Cinnamon", feat_loc: 1, color: "9d4535"},
        {id: "G", name: "Gray", feat_loc: 3, color: "808080"},
        {id: "R", name: "Green", feat_loc: 6, color: "005900"},
        {id: "P", name: "Pink", feat_loc: 5, color: "ffc0cb"},
        {id: "U", name: "Purple", feat_loc: 7, color: "730073"},
        {id: "E", name: "Red", feat_loc: 2, color: "cc0000"},
        {id: "W", name: "White", feat_loc: 8, color: "ffffff"},
        {id: "Y", name: "Yellow", feat_loc: 9, color: "e5e500"}
    ]
};

const bruises_key = {
    id: "bruises",
    name: "Bruises",
    range: [16, 17],
    keys: [
        {id: "Y", name: "Yes", feat_loc: 1},
        {id: "N", name: "No", feat_loc: 0}
    ]
};

const population_key = {
    id: "population",
    name: "Population",
    range: [18, 23],
    keys: [
        {id: "A", name: "Abundant", feat_loc: 0},
        {id: "C", name: "Clustered", feat_loc: 1},
        {id: "N", name: "Numerous", feat_loc: 2},
        {id: "S", name: "Scattered", feat_loc: 3},
        {id: "V", name: "Several", feat_loc: 4},
        {id: "Y", name: "Solitary", feat_loc: 5}
    ]
};

const habitat_key = {
    id: "habitat",
    name: "Habitat",
    range: [24, 30],
    keys: [
        {id: "G", name: "Grassy", feat_loc: 1},
        {id: "L", name: "Leafy", feat_loc: 2},
        {id: "M", name: "Meadow", feat_loc: 3},
        {id: "P", name: "Path", feat_loc: 4},
        {id: "U", name: "Urban", feat_loc: 5},
        {id: "W", name: "Waste", feat_loc: 6},
        {id: "D", name: "Woods", feat_loc: 0}
    ]
};

const feature_map = [
    cap_shape_key,
    cap_color_key,
    bruises_key,
    population_key,
    habitat_key
];