# Notes
Development time: 3 hours

## Approach
### Naming
I wanted to make the `<Button>` straightforward to use and with a minimal surface API that would cover most if not all spectre.css' modes and styles for buttons.

I tried to pay special attention to naming, for example, in the documentation spectre.css refers to "button styles" for "primary", "default" or "link" variants but I don't like the word "styles" for a prop since it can be easily confused with the `style` attribute. I went with "type", hoping it's clearer

I also didn't like the name "colors" for "success" and "error" buttons, so I consolidate these in to the "type" category.

The rest of the props were a more straightforward.

### Status
The `<Button>` doesn't handle state internally, relying on passed props to display the status (loading, error, success), making it a "controlled" component.

I added the `disabled` attr when loading as I think is a good practice, I don't particularly like the "disable" styles being applied, so I probably would do something to override those (make it disabled but not dimmed);

### Links
The `<Button>` renders an `<a>` HTML element if a `href` prop is passed. If `target="_blank"` is passed, I add the `rel="noopener"` for security reasons [More info here](https://perishablepress.com/wordpress-blank-target-vulnerability/)
For Router Links (like React Router) `<Button>` accepts a `linkComponent` prop and will render that component as it's passed, only adding the appropriate class names.

## Accesibility
Because I'm using the proper semantic elements for each use, the button is accesible out of the box.
Active, focus and hover styles are handled by Spectre.css

See more on [README](/README.md)

## Things I would do with more time
* Add tests
* I would like to add the capability of the button to handle the status state internally, this could be done by detecting if the onClick action passed returns a promise.
* There are a bunch of attributes on the `button` or `a` tags that exist (like title, hreflang, referrerpolicy, etc) that would not get applied to the element returned by `<Button>`, I would like to address this, but I don't like the idea of spreading all props passed (...props) I'm unsure if there is a better pattern for this. Same for other events.
* I would like to add nice animated transitions
* Add the ability to customize the success and error messages on the button
* I didn't know how to hook the whole "status" interaction in StoryBook, I added an example on the App.js, you can check it out by running `yarn start`
* Add JSDocs

## Suggestions
* I hadn't use StoryBook before, I like the look of the "knob", "jsx" and "info" addons, I would add them
* I would setup [prettier](https://prettier.io/) in the repo, if there's some mismatched coding style or indentation going on is because I'm so used to it :).