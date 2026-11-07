// worldVariables.js

let online = false;

// PHYSICS VARIABLES

// Game Constants
const GRAVITY = 0.4;
const FRICTION = 0.995; // very slight air resistance
const WALL_BOUNCE = 0.6;
const FLIPPER_BOUNCE = 0.4;
const BUMPER_BOUNCE = 1.5; // bumpers add energy
const MAX_SPEED = 15; // speed limit to prevent glitching/freezing

// The Ball
let ball = {
    el: null,
    x: 0, y: 0,
    vx: 0, vy: 0,
    radius: 12
};

// The Flippers
// Note: 'angle' is in degrees. 
let leftFlipper = {
    el: null,
    x: 0, y: 0,          // Pivot point
    w: 90, h: 25,   // Dimensions
    angle: 30,
    targetAngle: 30, 
    restAngle: 30,
    activeAngle: -30,
    currentVelocity: 0 // how fast the flipper is moving right now
};

let rightFlipper = {
    el: null,
    x: 0, y: 0,
    w: 90, h: 25,
    angle: -30,
    targetAngle: -30,
    restAngle: -30,
    activeAngle: 30,
    currentVelocity: 0
};

let walls = { top: 0, bottom: 0, left: 0, right: 0 };

let bumpers = []; // array to hold bumper objects
let score = 0;

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

