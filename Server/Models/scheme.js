var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const SCHEME = {

    /*         BLOG POST SCHEMA
    */

    blog_post: new Schema({

        content: { type: String, required: true },
        date: { type: Date, required: true },
        title: { required: true, type: String }

    },
        {
            timestamps: true,
            versionKey: false,
            strict: false
        }),


    /*
             USER PROFILE SCHEMA
    */


    profile: new Schema({
        username: { type: String, lowercase: true, trim: true, required: true },
        email: { type: String, lowercase: true, required: true, trim: true, unique:true },
        password: { type: String, required: true },
        telephone: { type: Number },
        lastName: { type: String, trim: true },
        firstName: { type: String, trim: true },
        display_picture: { type: String, default: "http://res.cloudinary.com/hashstackio/image/upload/v1566411930/ABCD-profile.png" },
        bio: { type: String },
        verified: { type: Boolean, required: true, default: false },
        lastVerified: { type: Date, default: Date.now() }
    },
        {
            timestamps: true,
            versionKey: false,
            strict: false
        }),


    /*
               ARTICLES/POST SCHEMA
    */

    posts: new Schema({

        title: { type: String },
        body_html: { type: mongoose.Schema.Types.Mixed },
        body_schema:{type: mongoose.Schema.Types.Mixed},
        featured_image: { type: String },
        category: { type: String, lowercase: true },
        createdAt: { type: Date },
        like_count: { type: Number },
        time_to_read: { type: Number },
        comments_enabled: { type: Boolean },
        public: { type: Boolean },
        author: String,
        description: { type: String },
        template_id: { type: String },
        comments: [{
            seen: Boolean,
            time: Date,
            name: String,
            email: String,
            body: String
        }],
        authorId: { type: mongoose.Schema.Types.ObjectId }
    },
        {
            timestamps: true,
            versionKey: false,
            strict: false
        }
    )
}



module.exports = SCHEME;