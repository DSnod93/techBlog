const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Did you see the latest movie?',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Yes, it was worth the wait!',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Agreed!',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Anyone know when the next release is?',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'No, I am not sure',
    user_id: 5,
    post_id: 5
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;