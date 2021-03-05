const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    id: {
        type: String
      },
      type: {
        type: String
      },
      actor: {
        id: {
          type: Number
        },
        login: {
          type: String
        },
        display_login: {
          type: String
        },
        gravatar_id: {
          type: String
        },
        url: {
          type: String
        },
        avatar_url: {
          type: String
        }
      },
      repo: {
        id: {
          type: Number
        },
        name: {
          type: String
        },
        url: {
          type: String
        }
      },
      payload: {
        action: {
          type: String
        },
    },
})

const dataSchema = mongoose.model("Todo",dataSchema);
module.exports = dataSchema;