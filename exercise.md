# Starting with Models

Backbone Models are the warehouses where we store our application data. You can set values on them and retrieve values from them. When you set values on them they fire events which we can listen for.


## Choose a domain

Choose a real world object you might like to represent, for example a death ray, a kitten or a piece of toast.

This will form the basis of your app. Don't worry too much, it will be easy to change your mind later.

Whatever you choose, it should have attributes (eg name, age, color, weight, etc) and abilities, eg. miow, moveNorth, or explode.

**Note. Throughout these exercises I will assume your model is a Cat. Don't do a Cat, use your imagination instead, you'll learn more.**


## Create a model

Create a Backbone model to represent your object.

Instantiate your model using 'new' to create an instance of your model.


## Setting and getting values

Use the .set method to set a value on your model. Use the .get method to pull the value back out again and alert it. (optionally do this in the console).

Try setting and getting more than one attribute at once by passing a JSON object.

Check out the cid.


## Initializing

Give your model an .initialize method that alerts "hello model" to the screen.


## Defaults

Give your model some sensible defaults, an empty string for name, 0 for age, etc.

## Underscore

Check out the underscore methods:

* keys
* values
* pairs
* has
* clone


## Reading

Read up on Backbone models here
<http://backbonejs.org/#Model>

