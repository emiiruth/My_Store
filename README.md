
README:
this web application was built to be configured using the below instructions:
use the npm install command to install the application and ng serve to serve the application on localhost:4200.
to view the application, navigate to `http://localhost:4200/`.
This program was build locally on VScode. Node modules folder was removed prior to submission because it wouldn't submit with it and I believe they told me last time that its best practicen not to submit it.

Inspiration was taken from button 3 on https://getcssscan.com/css-buttons-examples, but ended up simplifying it quite a bit.

Summary:
MyStore is composed of the homepage (product list), the cart, the order confirmation page, and the product detail pages. From the home page, you can add products to the cart, or click into them to view more details. from the detail page, you can also add products to the cart.

From the cart, you can view products you have added, edit the quantity up to 5 (why would you need more than 5 backpacks), or remove the items entirely. you can also see your cart total. There is a form in the cart to input your name, address, and credit card information. Once you have fulfilled the character requirements, you can hit the submit button and will be redirected to an order confirmation page. From the order confirmation page, you can use a button to navigate back to the homepage

If there are no products in the cart, the cart will show a cart empty message and not allow you to input you card information or address. Instead, you are only able to use a button to return to the homepage.

Looking forward to your feedback!

Update 4/11/24
after feedback made the following changes:
-resolved bug in which form would not submit, even with valid inputs
    -this was caused by an inconsistency in the stated requirements on the UI and what was coded into the html.
    -made error messaging more specific, and put it in red to make it clearer
wasn't entirely clear on the requirements for form validation, but here are the rules for my form:
    1.) inputs cannot be greater than a valid length. this is enforced through ngModelChange. If you try to input a form length longer than the maximum, you will get an error messge.
    2.) if a field is blank, the form will not allow you to submit
    3.) the credit card field does not have a minimum value of 16 characters, the form will not allow you to submit


Update 4/10/24
after feedback, made the following changes:
-added validation to input forms using NgModelChange
-added feedback when an item is removed from the cart
-fixed bug where product could appear in cart multiple times by adding an if statement to my addItem method to handle cases in which the item was already in the cart.

Thanks!
