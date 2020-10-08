// Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.
function getFirstSelector(selector) {
  var element = document.querySelector(selector)
  return element
}

// Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors).
// (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
function nestedTarget() {
  var className = document.querySelector('#nested .target')
  return className
}

// Define a function deepestChild() that pulls out the most deeply nested child element from div#grand-node.
// (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them.)
function deepestChild() {
  var deep = document.querySelector('#grand-node :last-child')
  return deep
}

// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
function increaseRankBy(n) {

}
