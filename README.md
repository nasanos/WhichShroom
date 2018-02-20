# Which-Shroom

## What It Is
[Which-Shroom](https://nasanos.github.io/WhichShroom/) implements a trained neural network to categorize mushrooms as edible or poisonous based on a set of eight characteristics.

The neural network used was built and trained with Keras in Python; the script can be found in the Jupyter notebook in this repository's root. The mushroom feature data was provided by UCI Machine Learning, [made available on Kaggle](https://www.kaggle.com/uciml/mushroom-classification) under the CC0: Public Domain license.

The frontend was built using Javascript + JQuery and Materialize CSS for the HTML/CSS framework. The [Keras.js](https://github.com/transcranial/keras-js) library was employed to use the trained neural network model and weights in the frontend. The page is designed to be responsive from a mobile-first perspective, the Materialize CSS's grids are used to this effect.

## Features
* Running the trained model against test data indicated an average of 98% accuracy.
* * These results have not been assessed by field experts and in no way indicate reliability for application.
* * See WARNING below.
* Uses a responsive, mobile-first design for easy and intuitive feature entry

## WARNING:
**Do not rely on this application for determining the safety of fungi. Its results have not been verified by subject-matter experts. Regardless of the application's predictions, its developer is not liable for any damages resulting from ingestion or otherwise of fungi.**
