"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bezier01 = {
    c: true,
    v: [
        [
            200,
            100,
        ],
        [
            350,
            200,
        ],
        [
            200,
            370,
        ],
        [
            50,
            200,
        ],
        [
            200,
            100,
        ],
    ],
    i: [
        [
            0,
            0,
        ],
        [
            50,
            -100,
        ],
        [
            0,
            0,
        ],
        [
            50,
            100,
        ],
        [
            -100,
            -100,
        ],
    ],
    o: [
        [
            100,
            -100,
        ],
        [
            -50,
            100,
        ],
        [
            0,
            0,
        ],
        [
            -50,
            -100,
        ],
        [
            0,
            0
        ],
    ],
};
var path01 = {
    ty: "sh",
    ks: {
        a: 0,
        k: bezier01,
    }
};
var stroke01 = {
    ty: "st",
    o: {
        a: 0,
        k: 100,
    },
    w: {
        a: 0,
        k: 5,
    },
    c: {
        a: 0,
        k: [
            1,
            1,
            0,
        ],
    },
};
var fill01 = {
    ty: "fl",
    o: {
        a: 0,
        k: 100,
    },
    c: {
        a: 0,
        k: [
            1,
            0.5,
            0.8,
        ],
    },
};
var trim01 = {
    ty: "tm",
    s: {
        a: 1,
        k: [
            {
                t: 0,
                i: {
                    x: 1,
                    y: 1,
                },
                o: {
                    x: 0,
                    y: 0,
                },
                s: [
                    50,
                ]
            },
            {
                t: 120,
                i: {
                    x: 1,
                    y: 1,
                },
                o: {
                    x: 0,
                    y: 0,
                },
                s: [
                    0,
                ],
            },
        ],
    },
    e: {
        a: 1,
        k: [
            {
                t: 0,
                i: {
                    x: 1,
                    y: 1,
                },
                o: {
                    x: 0,
                    y: 0,
                },
                s: [
                    50,
                ]
            },
            {
                t: 120,
                i: {
                    x: 1,
                    y: 1,
                },
                o: {
                    x: 0,
                    y: 0,
                },
                s: [
                    100,
                ],
            },
        ],
    },
    o: {
        a: 0,
        k: 0,
    }
};
var myShapeLayer01 = {
    ip: 0,
    op: 120,
    st: 0,
    ty: 4,
    ks: {},
    shapes: [
        path01,
        stroke01,
        fill01,
        trim01,
    ],
};
var animationData = {
    fr: 60,
    ip: 0,
    op: 120,
    w: 400,
    h: 400,
    layers: [
        myShapeLayer01,
    ],
};
window.animationDataHandmadePath = animationData;
