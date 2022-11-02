const stimSetData = {
  title: "Pasupathy and Connor 2001 Shapes",
  image: {
    caption: "add an image here",
    src: "",
  },
  content: [
    "The pdf file shows the 0 degree orientation of all the stimuli. \
    There were a total of 51 closed shapes. Stimulus numbers run from \
    1 in the top left to 51 in the bottom right.",
    "The attached matlab scripts will generate these stimuli. \
    Type b8stimcreate at the command prompt and then type a stimulus number.",
    "In our study stimuli were all presented in multiple orientations \
    separated at 45 degree intervals. Some stimuli were presented at \
    fewer orientations due to rotational symmetry.",
    "Stimulus 1 and 2 : 1 Rotation",
    "Stimulus 32 and 37: 2 rotations",
    "Stimulus 5, 7, 34 : 4 rotations",
    "All other stimuli were presented at 8 orientations. \
    This should get you started. Contact me if you have any questions.",
    "-Anitha",
  ],
  files: [{text: "PDF file - 51shapes", link: "/stim-sets/p-c-2001/" + "51shapes.pdf"}, 
  {text: "Matlab - Create B8 stims", link: "/stim-sets/p-c-2001/" + "b8stimcreate_STIMS.m"},
  {text: "Matlab - fvmax", link: "/stim-sets/p-c-2001/" + "fvmax.m"},
  {text: "Text file - Vertices1", link: "/stim-sets/p-c-2001/" + "vertices1.txt"}],
};

export default stimSetData;
