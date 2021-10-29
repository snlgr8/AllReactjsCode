const Person = require('../model/Person');
const Story = require('../model/Story');
const mongoose = require('mongoose');

const saveAuthor = async (req, res) => {
  const author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50,
  });

  author.save(function (err) {
    if (err) return handleError(err);

    const story1 = new Story({
      title: 'Casino Royale',
      author: author._id, // assign the _id from the person
    });

    story1.save(function (err) {
      if (err) return handleError(err);
      // that's it!
      res.send(200);
    });
  });
};

const fetchAuthor = async (req, res) => {
  Story.find()
    .populate('author')
    .exec(function (err, story) {
      if (err) return handleError(err);
      console.log(story);
      const result = [];
      story.map((val) => {
        console.log(val.author.name);
        result.push(val.author.name);
      });
      // prints "The author is Ian Fleming"
      res.send(result);
    });
};
module.exports = { saveAuthor, fetchAuthor };
