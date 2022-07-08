# ShapeLAB website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Simple Edits

Simple edits can be made on the machine hosting the website.

In the build folder, there are json files where the text on the website can be edited. Currently, only the main subpages of the website support this way of editing. (Editing json files inside of the projects folder will not be reflected on the website).

## Editing the website permanently

First, make sure [Node.js](https://nodejs.org/en/) is downloaded on the machine you're on.

Then, in a terminal, make sure you are in the correct folder (should be shapelab, or the folder containing `public` and `src`), run 

### `npm install`

This will install all the dependencies that is required for compiling and building the website.

Then, you can edit the files that you need in the `src/data` folder. Be wary when adding additional fields.

>> ### A quick rundown on JSON files  
>> Files in the `src/data` folder are javascript files representing JSON (JavaScript Object Notation) objects.  
> In javascript, `{}` denotes an object and `[]` denotes an array. The website was built on the ability to access object's internal data and map arrays.  
> When editing the files, you can add an entry into the array by adding a `,` after the last entry. Make sure to follow the format of previous entries when adding items into the array.  
> For example, in `reviews-data.js`, each entry in the array is an object that has 4 internal data fields: `author`, `link`, `title`, and `journal`. So when adding an entry into this array, make sure that all four fields are populated.

After editing the `.js` file, you must also change the corresponding `.json` file in the public folder, since the website prefers to use the json files whenever available (to support the simple editing feature).

## Rebuilding the website

In the terminal, again making sure you are in the correct folder (See [above](#editing-the-website-permanently)), run

### `npm run build`

This will build the website for production to the `build` folder.

To push the website to production, simply copy everything in the build folder (but not the folder itself) into the server hosting the website.

If you have any questions, feel free to email <jhyuan01@gmail.com>.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
