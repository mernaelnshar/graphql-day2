import User from "../models/User.js";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

const resolvers = {

  Query: {

    getAllUsers: async () => {
      return await User.find();
    },

    getAllPosts: async () => {
      return await Post.find();
    },

    getAllComments: async () => {
      return await Comment.find();
    }

  },

  Mutation: {

    // ================= USER =================

    addUser: async (_, args) => {

      const newUser = new User(args);

      await newUser.save();

      return newUser;
    },

    updateUser: async (_, { id, name, email }) => {

      return await User.findByIdAndUpdate(
        id,
        { name, email },
        { new: true }
      );
    },

    deleteUser: async (_, { id }) => {

      await User.findByIdAndDelete(id);

      return "User Deleted Successfully";
    },



    // ================= POST =================

    addPost: async (_, args) => {

      const newPost = new Post(args);

      await newPost.save();

      return newPost;
    },

    updatePost: async (_, { id, title, content }) => {

      return await Post.findByIdAndUpdate(
        id,
        { title, content },
        { new: true }
      );
    },

    deletePost: async (_, { id }) => {

      await Post.findByIdAndDelete(id);

      return "Post Deleted Successfully";
    },



    // ================= COMMENT =================

    addComment: async (_, args) => {

      const newComment = new Comment(args);

      await newComment.save();

      return newComment;
    },

    updateComment: async (_, { id, text }) => {

      return await Comment.findByIdAndUpdate(
        id,
        { text },
        { new: true }
      );
    },

    deleteComment: async (_, { id }) => {

      await Comment.findByIdAndDelete(id);

      return "Comment Deleted Successfully";
    }

  }

};

export default resolvers;