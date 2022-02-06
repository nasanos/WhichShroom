# Which-Shroom

[Which-Shroom](https://nasanos.github.io/WhichShroom/) is a web application that can, given a few easy details, tell you whether a mushroom is likely poisonous or likely not.

## What It Is

Which-Shroom uses a pre-trained neural network to make predictions about mushroom toxicity. With only five visual descriptors from the user, the application can guess a mushroom's toxicity with 96–99% accuracy, based on my tests.

But one of this application's other notable achievements is that it doesn't need a back end. Instead, the pre-trained neural network gets applied directly in the browser via JavaScript. Not only does this make the application easier to host, but it also makes it cacheable for offline usage.

Perfect, in other words, for usage out in the field where connectively is likely to be spotty at best.

**Note**

Please see the disclaimer further below. This application has not been tested or in any way vetted by experts in mushroom toxicity, and by no means should it be used to decide whether you or anyone else should actually ingest a given mushroom.

## More on the Build

The neural network for Which-Shroom was built in Python using Keras/TensorFlow. You can see the neural network code in the included [Jupyter notebook](MushroomClassification.ipynb).

The implementation of the neural network in the browser was achieved using a combination of vanilla JavaScript and the [TensorFlow.js](https://www.tensorflow.org/js/) library.

Data for the deep-learning network was provided by UCI Machine Learning. They released their mushroom toxicity data on [Kaggle](https://www.kaggle.com/uciml/mushroom-classification) under the [CC0: Public Domain](https://creativecommons.org/publicdomain/zero/1.0/) license.

The application was designed for a responsive, mobile-first UI, and leverages [Materialize CSS](https://materializecss.com/) to that end.

## DISCLAIMER

**Do not rely on this application for determining the safety of any fungi. The application's results have not been validated by subject-matter experts, and the application's author makes no claims as to the accuracy of the results in identifying mushroom toxicity in real-world scenarios.**

**Regardless the application's predictions, the application's author is not liable for any damages or other effects pertaining to the ingestion or otherwise of any mushroom or other fungi.**
