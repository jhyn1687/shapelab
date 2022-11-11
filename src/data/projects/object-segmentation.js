const projectData = {
  title: "Object Segmentation",
  image: {
    caption: "add an image here",
    src: "",
  },
  content: [
    {type: "text", value: "Object segmentation—the process of parsing visual scenes—is essential for \
    object recognition and scene understanding. To reveal how this process \
    unfolds, we use behavioral tasks, custom-designed stimuli with partial \
    occlusions and neurophysiological experiments in V4 and IT cortex. \
    Results from area V4 in monkeys discriminating partially occluded shapes \
    show that neurons tuned to boundary curvature maintain their shape \
    selectivity over a large range of occlusion levels as compared to neurons \
    that are not tuned to boundary curvature. These neurons show a gradual \
    decline in responses with occlusion. In IT cortex, neurons exhibit diverse \
    responses - some (shape selective neurons) show declining responses with \
    occlusion while other (putative texture selective neurons) exhibit increasing \
    responses with occlusion. Simulations reveal that these responses are consistent \
    with a model in which occluded shape and the occluder responses are linearly combined, \
    supporting the hypothesis they encode a segmented representation of the visual scene." },
    {type: "text", value: "Relevant publications:"},
    {type: "publication", value: {
      author: "T. Namima, A. Pasupathy. 2021 ",
      link:
        "/publications/Namima2021_JNeurosci.pdf",
      title:
        " Encoding of Partially Occluded and Occluding Objects in Primate Inferior Temporal Cortex.",
      journal: " J Neurosci. 41: 5652-5666. 2021. ",
    }},
    {type: "publication", value: {
      author: "T. Namima, A. Pasupathy. 2021 ",
      link:
        "/publications/Namima2021_JNeurosci.pdf",
      title:
        " Encoding of Partially Occluded and Occluding Objects in Primate Inferior Temporal Cortex.",
      journal: " J Neurosci. 41: 5652-5666. 2021. ",
    }},
    {type: "publication", value: {
      author: "A. Pasupathy 2015 ",
      link: "/publications/" + "Review 2015.pdf",
      title: " The neural basis of image segmentation in the primate brain.",
      journal: " Neuroscience. 298:101-109.",
    }}
  ]
};

export default projectData;
