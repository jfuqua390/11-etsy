'use strict';

/* global fetchEtsy */

/**
 * Takes a single result from Etsy and creates a DOM element to represent it
 *
 * @param  Object: result Object representing a SINGLE store item
 *   For format look at `docs/shop-item.json`
 * @return Element: resulting Element representing a SINGLE store item
 *   This function should not insert the element into the DOM
 *   See basic HTML format `docs/shop-item.html`
 *     (You will need more wrapping elements to style things)
 */
function createResultShopItem(result) {

}

/**
 * Takes a full result payload object and renders it to the DOM
 * @param  Object response Data from Etsy or source
 *   Format is {
 *     results: [
 *       // Array of objects that follow the format `docs/shop-item.json`
 *     ]
 *   }
 * @return undefined
 */
function showAllResults(response) {
  // Get the products element from the DOM

  // Clear the contents of the products element

  // Set 'items' to the results array from the response
  const items;

  for (var i = 0; i < items.length; i++) {
    // Create a new shop item element for each item in items

    // Append current shop item element to the products element
  }
}

/**
 * Function should look up a searchTerm using the `getData` function
 * @param  String searchTerm
 * @param  Function getData
 * @return undefined
 */
function searchEtsy(searchTerm, getData = fetchEtsy) {

}
