# Which-Shroom

## What It Is
[Which-Shroom](https://nasanos.github.io/WhichShroom/) implements a trained neural network to categorize mushrooms as edible or poisonous based on a set of eight characteristics.

The application is a result of two development paths.

The first is the neural network's training. I conducted this in TensorFlow using Python, and the script can be found in this repository as a Jupyter notebook. The mushroom feature data was provided by UCI Machine Learning, [made available on Kaggle](https://www.kaggle.com/uciml/mushroom-classification) under the CC0: Public Domain license.

The second is the frontend, where you can use the result of that training. The webpage contains the necessary neural network componments in Javascript (with the help of Math.js), making for a minimal and responsive implementation. Beyond that, the frontend uses Materialize CSS and numerous layers of interactivity for a dynamic and responsive experience.

All on the webpage are open domain and come from:
* [*Coloured Figures of English Fungi or Mushrooms*](https://commons.wikimedia.org/wiki/Category:Coloured_Figures_of_English_Fungi_or_Mushrooms_by_James_Sowerby) (1797-1809) by James Sowerby
* [Various fungi illustrations](https://commons.wikimedia.org/wiki/Category:Albin_Schmalfuß) (~1897) by Albin Schmalfuß

## Features
* The network predicts at 100% accuracy on test data
* * These results have not been assessed by field experts
* * See NOTE below
* Responsive design for easy and intuitive feature entry

## To Do
* Add selection images for all features
* * At this time, only the cap-related features have images
* Continue testing on various browsers and devices for design continuity and responsiveness

## NOTE: Do not rely on this application for determining the safety of fungi. Its results have not been verified by subject-matter experts. Regardless of the application's predictions, its developer is not liable for any damages resulting from ingestion or otherwise of fungi.
