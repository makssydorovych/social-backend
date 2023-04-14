import mongoose from "mongoose";

const userIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

export const users = [
    {
        _id: userIds[0],
        firstName: "Maks",
        lastName: "Syd",
        email: "maks@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p11.jpeg",
        friends: [],
        location: "levanger",
        occupation: "Frontend developer",
        viewedProfile: 14561,
        impressions: 888822,
        createdAt: 1115211422,
        updatedAt: 1115211422,
        __v: 0,
    },
    {
        _id: userIds[1],
        firstName: "Bob",
        lastName: "Smith",
        email: "bob@gmail.com",
        password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p3.jpeg",
        friends: [],
        location: "Oslo",
        occupation: "Backend developer",
        viewedProfile: 12351,
        impressions: 55555,
        createdAt: 1595589072,
        updatedAt: 1595589072,
        __v: 0,
    },
    {
        _id: userIds[2],
        firstName: "Some",
        lastName: "Guy",
        email: "someguy@gmail.com",
        password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
        picturePath: "p4.jpeg",
        friends: [],
        location: "Secret",
        occupation: "Hacker",
        viewedProfile: 45468,
        impressions: 19986,
        createdAt: 1288090662,
        updatedAt: 1288090662,
        __v: 0,
    },
    {
        _id: userIds[3],
        firstName: "Michelle",
        lastName: "Lynn",
        email: "lynn@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p6.jpeg",
        friends: [],
        location: "Stavanger",
        occupation: "Ped leder",
        viewedProfile: 41024,
        impressions: 55316,
        createdAt: 1219214568,
        updatedAt: 1219214568,
        __v: 0,
    },
    {
        _id: userIds[4],
        firstName: "Jane",
        lastName: "Grey",
        email: "janegrey@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p5.jpeg",
        friends: [],
        location: "Bergen",
        occupation: "Designer",
        viewedProfile: 40212,
        impressions: 7758,
        createdAt: 1493463661,
        updatedAt: 1493463661,
        __v: 0,
    },
    {
        _id: userIds[5],
        firstName: "John",
        lastName: "Black",
        email: "johnblack@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p7.jpeg",
        friends: [],
        location: "Stockholm",
        occupation: "HR",
        viewedProfile: 976,
        impressions: 4658,
        createdAt: 1381326073,
        updatedAt: 1381326073,
        __v: 0,
    },
    {
        _id: userIds[6],
        firstName: "Lisa",
        lastName: "Brown",
        email: "lisa@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p8.jpeg",
        friends: [],
        location: "Trondheim",
        occupation: "Student",
        viewedProfile: 1510,
        impressions: 77579,
        createdAt: 1714704324,
        updatedAt: 1642716557,
        __v: 0,
    },
    {
        _id: userIds[7],
        firstName: "Jessica",
        lastName: "Dunn",
        email: "jessicadunn@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p9.jpeg",
        friends: [],
        location: "Bergen",
        occupation: "A Student",
        viewedProfile: 19420,
        impressions: 82970,
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },
];

export const posts = [
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[1],
        firstName: "Bob",
        lastName: "Smith",
        location: "Oslo",
        description: "The sunset cast a warm orange glow over the rolling hills as birds chirped and a family of deer" +
            " grazed peacefully in the nearby meadow.",
        picturePath: "post1.jpeg",
        userPicturePath: "p3.jpeg",
        likes: new Map([
            [userIds[0], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
        ]),
        comments: ["Wow, I never realized how important this issue was until you brought it up. Thanks for shedding light on it!"],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[3],
        firstName: "Michelle",
        lastName: "Lynn",
        location: "Stavanger",
        description:
            "The city was alive with energy, neon lights flickered above and street performers entertained passersby.",
        picturePath: "post2.jpeg",
        userPicturePath: "p6.jpeg",
        likes: new Map([
            [userIds[7], true],
            [userIds[4], true],
            [userIds[1], true],
            [userIds[2], true],
        ]),
        comments: ["I totally agree with you. It's time for a change and we need to start taking action now."],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[4],
        firstName: "Jane",
        lastName: "Grey",
        location: "Bergen",
        description:
            "The beach stretched out for miles, seagulls cried overhead and the salty breeze tangled your hair.",
        picturePath: "post3.jpeg",
        userPicturePath: "p5.jpeg",
        likes: new Map([
            [userIds[1], true],
            [userIds[6], true],
            [userIds[3], true],
            [userIds[5], true],
        ]),
        comments: ["That's a really creative idea! I never would have thought of it myself, but I can see how it could work."],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[5],
        firstName: "John",
        lastName: "Black",
        location: "Stockholm",
        description:
            "The forest was dense, the ground was soft and spongy and the air was cool and damp with the scent of pine and earth.",
        picturePath: "post4.jpeg",
        userPicturePath: "p7.jpeg",
        likes: new Map([
            [userIds[1], true],
            [userIds[6], true],
            [userIds[3], true],
        ]),
        comments: ["Thank you for sharing your personal experience. It's really inspiring to hear how you overcame those challenges."],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[6],
        firstName: "Lisa",
        lastName: "Brown",
        location: "Trondheim",
        description:
            "The train station was bustling with activity, the sound of announcements and rushing feet filled the air.",
        picturePath: "post5.jpeg",
        userPicturePath: "p8.jpeg",
        likes: new Map([
            [userIds[1], true],
            [userIds[3], true],
            [userIds[5], true],
            [userIds[7], true],
        ]),
        comments: ["I can see where you're coming from, but I respectfully disagree. I think there's more to the issue than what you're suggesting."],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[7],
        firstName: "Jessica",
        lastName: "Dunn",
        location: "Bergen",
        description:
            "The museum was a labyrinth of fascinating galleries and exhibits, showcasing everything from paintings and sculptures to ancient artifacts and relics.",
        picturePath: "post6.jpeg",
        userPicturePath: "p9.jpeg",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
        ]),

        comments: ["I appreciate your honesty and vulnerability in sharing your opinion. It takes courage to speak up like that."],
    },
];

/* data not made yet */
// User.insertMany(users);
// Post.insertMany(posts);

import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";