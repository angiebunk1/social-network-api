const UserSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        trim: true
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought'
        }
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
      ]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  );
  
  // get total count of friends
  UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });
  
  const User = model('User', UserSchema);
  
  module.exports = User;