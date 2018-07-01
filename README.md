# Which-Shroom

## What It Is
[Which-Shroom](https://nasanos.github.io/WhichShroom/) implements a trained neural network to categorize mushrooms as edible or poisonous based on a set of eight characteristics.

The neural network used was built and trained with Keras in Python; the script can be found in the Jupyter notebook in this repository's root. The mushroom feature data was provided by UCI Machine Learning, [made available on Kaggle](https://www.kaggle.com/uciml/mushroom-classification) under the CC0: Public Domain license.

The frontend was built using Javascript + JQuery and Materialize CSS for the HTML/CSS framework. The [Keras.js](https://github.com/transcranial/keras-js) library was employed to use the trained neural network model and weights in the frontend. The page is designed to be responsive from a mobile-first perspective, the Materialize CSS's grids are used to this effect.

## Features
* Demonstrates capabilities and techniques for light-weight implementions of trained neural networks.
* Has an average of 98% accuracy when run against test data.
  * However, the application's results have not been assessed by field experts and should not be considered reliable indicatation of fungi toxicity.
    * See DISCLAIMER below.
* Uses a responsive, mobile-first design for easy and intuitive feature entry.

## To Do
* Continue to improve the accuracy while keeping the features easily identifiable.

## DISCLAIMER:
**Do not rely on this application for determining the safety of any fungi. The application's results have not been validated by subject-matter experts, and its author makes no claims as to the accuracy of the results in identifying fungi toxicity. Regardless the application's predictions, the application's author is not liable for any damages or other effects pertaining to the ingestion or otherwise of fungi.**
