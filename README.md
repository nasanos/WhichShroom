# Which-Shroom

## What It Is
[Which-Shroom](https://nasanos.github.io/WhichShroom/) implements a pre-trained neural network in browser-side JavaScript to allow users to easily categorize mushrooms as edible or poisonous based on a set of eight characteristics.

The neural network was built and pre-trained with Keras in Python; you can find the code for it in the Jupyter notebook stored in this repository's root folder. UCI Machine Learning provided the mushroom feature data that the neural network was trained on; UCI Machine Learning released that data on [Kaggle](https://www.kaggle.com/uciml/mushroom-classification) under the CC0: Public Domain license.

The application design, which prioritizes a responsive, mobile-first approach, was achieved with Materialize CSS. [Keras.js](https://github.com/transcranial/keras-js)  has been used to run the pre-trained neural network on the browser.

## Features
* Demonstrates techniques for making light-weight implementions of trained neural networks.
* Has an average of 98% accuracy when run against test data.
  * However, the application's results have not been assessed by field experts and should not be considered reliable indicatation of fungi toxicity.
  * See DISCLAIMER below.
* Uses a responsive, mobile-first design for easy and intuitive feature entry.

## To Do
* Continue to improve the accuracy while keeping the features easily identifiable.

## DISCLAIMER:
**Do not rely on this application for determining the safety of any fungi. The application's results have not been validated by subject-matter experts, and its author makes no claims as to the accuracy of the results in identifying fungi toxicity. Regardless the application's predictions, the application's author is not liable for any damages or other effects pertaining to the ingestion or otherwise of fungi.**
