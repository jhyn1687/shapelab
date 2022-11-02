const stimSetData = {
  title: "Kim, Bair and Pasupathy 2019 Textures",
  image: {
    caption: "add an image here",
    src: "",
  },
  content: [
    "We constructed eight texture categories based on three dimensions \
    that influence human texture perception (coarse vs fine, directional \
    vs nondirectional, regular vs irregular), and selected 2-3 representative \
    textures for each category. Each texture was presented through a circular \
    aperture of two sizes and at four orientations at 45° increments, for a total \
    of 168 texture stimuli.",
    "The diameter of the large aperture texture stimuli was twice that of the \
    estimated RF. Small aperture texture condition was created by applying a RF \
    sized circular aperture to large aperture texture.",
    "Please contact me if you have any questions.",
    "-Taekjun (taekjun@uw.edu)",
  ],
  files: [{text: "PDF file - Textures (and categories)", link: "/stim-sets/k-b-p-2019/" + "Textures.pdf"}, 
  {text: "Matlab - Textures.mat", link: "/stim-sets/k-b-p-2019/" + "Textures.mat"},
  {text:"### you can see textures using the following MATLAB codes ###"},
  {text:"load('Textures.mat');"},
  {text:"figure; subplot(1,2,1); imshow(Textures(1).stim.*LargeAperture);"},
  {text:"subplot(1,2,2); imshow(Textures(1).stim.*SmallAperture);"}],
};

export default stimSetData;
