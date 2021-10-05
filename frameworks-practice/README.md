# Turn static markup into framework-based components

Using ready markup, decompose it into smaller components and implement using each of the given frameworks: **React**, **Angular**, **Ember**.

Add functionality in accordance with the following requirements.

For the purposes of this task you should use as less external libraries as possible, try to use instruments provided by the framework and built-in into javascript environment by default.
If you are not sure whether it is applicable to use some lib - clarify it with your mentor.

## 1. Forms validation

There are two forms on the page: registration form, contact form. For both of them write forms validation logic following the next requirements to fields:

- Name - at least 1 character, only latin letters.
- Email - usual email pattern.
- Password - min 6 characters, required: 1 capital letter, 1 lower-case letter, 1 digit, 1 special character.
- Subject - min 1, max 100, any characters.
- Message - min 1 max 250, any characters.

State of the submit button should be disabled until form is valid.

```css
.disabled {
  cursor: not-allowed;
  opacity: 0.7;
}
```

Prevent forms sending in case of an invalid field. Form should use method POST.

## 2. Implement tab switching

Implement tab-switching logic with opacity animation.

## 3. Animated scroll to section

Implement animated scroll to section logic.
By clicking to the specific menu-item, the page viewport has to be scrolled to the appropriate section on it ([demo](http://bootstrapthemes.co/demo/html/mogo-free-one-page-html5-portfolio-page-template/)).

## 4. Fetch data

Using fake api, implement dynamic fetching of the _"What our customers saying"_ section.

Use only 3 first items from the response.

Example of the api url: https://jsonplaceholder.typicode.com/posts/1/comments.

You may use default avatar image for the demo purposes.

## 5. Slideshow

At the moment _"What our customers saying"_ section contains only 3 blocks.

Make it support more than 3 items with scroll buttons.

Click on the scroll button should scroll the entire block one more item to the corresponding direction.

If there are no more items, then corresponding arrow button should be disabled.
