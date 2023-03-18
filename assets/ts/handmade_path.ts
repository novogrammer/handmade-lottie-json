import type {Animation,Fill1,Path2,ShapeLayer1, Stroke1, Trim1} from "./lottie-schema";

const bezier01={
  c:true,
  v:[
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
  i:[
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
  o:[
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

const path01:Path2={
  ty:"sh",
  ks:{
    a:0,
    k:bezier01,
  }
};

const stroke01:Stroke1={
  ty:"st",
  o:{
    a:0,
    k:100,
  },
  w:{
    a:0,
    k:5,
  },
  c:{
    a:0,
    k:[
      1,
      1,
      0,
    ],
  },
}

const fill01:Fill1={
  ty:"fl",
  o:{
    a:0,
    k:100,
  },
  c:{
    a:0,
    k:[
      1,
      0.5,
      0.8,
    ],
  },
};

const trim01:Trim1={
  ty:"tm",
  s:{
    a:1,
    k:[
      {
        t:0,
        i:{
          x:1,
          y:1,
        },
        o:{
          x:0,
          y:0,
        },
        s:[
          50,
        ]
      },
      {
        t:120,
        i:{
          x:1,
          y:1,
        },
        o:{
          x:0,
          y:0,
        },
        s:[
          0,
        ],
      },
    ],

  },
  e:{
    a:1,
    k:[
      {
        t:0,
        i:{
          x:1,
          y:1,
        },
        o:{
          x:0,
          y:0,
        },
        s:[
          50,
        ]
      },
      {
        t:120,
        i:{
          x:1,
          y:1,
        },
        o:{
          x:0,
          y:0,
        },
        s:[
          100,
        ],
      },
    ],
  },
  o:{
    a:0,
    k:0,
  }
}

const myShapeLayer01:ShapeLayer1 = {
  ip:0,
  op:120,
  st:0,
  ty:4,
  ks:{},
  shapes:[
    path01,
    stroke01,
    fill01,
    trim01,
  ],
};

const animationData:Animation={
  fr:60,
  ip:0,
  op:120,
  w:400,
  h:400,
  layers:[
    myShapeLayer01,
  ],
};
(window as any).animationDataHandmadePath=animationData;