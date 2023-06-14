## View More Page

This page contain list of all the products in each category

## Project work through

`const handleCategorySelect = useCallback((category) => {`
`setActiveCategory(category);`
`}, [])`

UseCallback Hook was use here to memorized each product after clicking on it so that when the user visit the category back, the product list in the category does not need to re-render except a new product was added to the category and this help performance and loading time of the product at the user screen.
