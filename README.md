# Help Scout Button React Component
A `<Button>` component made with React with a straightforward interface and styles from [spectre.css](https://picturepan2.github.io/spectre/elements.html#buttons).

## Location in repo
Component: `src/components/Button/`
Stories: `stories/Button.stories.js`

## Usage
Component API:

| Prop          | Type          | Default   | Description                                                                                                                                                                                                  |
|---------------|---------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| size          | enum[string]  | "normal"  | Size of the button. One of: "small", "normal", "large"                                                                                                                                                       |
| block         | boolean       | false     | Makes the button a block-level element which will fill the width of its container                                                                                                                            |
| type          | enum[string]  | "default" | Button type. One of: "default", "primary", "success", "error"                                                                                                                                                |
| disabled      | boolean       | false     | Enable or disable the button                                                                                                                                                                                 |
| status        | enum[string]  | undefined | Allows the button to show a loading indicator when performing an action and whether the action was successful or failed. Possible values: "loading", "success", "error"                                     |
| href          | string        | ""        | When provided the component will render as an `<a>`,instead of a `<button>`                                                                                                                                  |
| target        | string        | ""        |  `<a>` target attribute, i.e."_blank". Note: For security reasons, when "_blank is provided <Button> will add the `rel="noopener"` attribute to the link To override, pass your own value in a `rel` prop. |
| linkComponent | LinkComponent | undefined | Accepts a `<Link>` Component from React Router or similar, when provided `<Button>` will render that component with the proper classes instead of creating its own.                                          |

## Examples

### Normal button
```jsx
{/* React */}
<Button
  size="small"
  type="primary"
>
	<i class="icon icon-arrow-left"></i> Button
</Button>

{/* Returns */}
<button class="btn btn-primary btn-sm">
	<i class="icon icon-arrow-left"></i> Button
</button>
```

### Disabled button
```jsx
{/* React */}
<Button
  size="large"
  type="primary"
  disabled={this.state.CTADisabled}
>
	<i class="icon icon-arrow-left"></i> Button
</Button>

{/* Returns */}
<button class="btn btn-primary btn-lg" disabled>Click!</button>
```

### Link
```jsx
{/* React */}
<Button
  size="small"
  href="https://github.com"
  target="_blank"
>
	Go to Github
</Button>

{/* Returns */}
<a href="https://github.com" class="btn btn-link" target="_blank" rel="noopener">
	Go to Github
</a>
```

### React Router Link
```jsx
{/* React */}
const MyLink = <Link to="/about">About</Link>;

<Button linkComponent={MyLink} />

{/* Returns */}
<Link class="btn btn-link" to="/about">About</Link>
```

### Actions and status
When performing an action, you can reflect the status on the button itself by using the `status` prop.
The button type gets automatically handled by <Button>.
Example:

```javascript
// somewhere in the component
handleClick = () => {
  this.setState({
    fetchingDataStatus: 'loading'
  });
  
  fetch(URL)
    .then(response => response.json())
    .then(json => {
      this.setState({
        data: json,
        fetchingDataStatus: 'success',
      });
    })
    .catch(error => {
      this.setState({
        fetchingDataStatus: 'error'
      });
    });
};
```
```jsx
{/* React */}
<Button
  size="large"
  type="primary"
  onClick={this.handleClick}
  status={this.state.fetchingDataStatus}
>
  Click!
</Button>

{/* Returns */}
{/* loading */}
<button class="btn btn-primary btn-lg loading" disabled>
  <span class="text-hide">loading...</span>
</button>

{/* success */}
<button class="btn btn-success btn-lg">
  <i class="icon icon-check"></i>
  <span class="text-hide">Action succeded</span>
</button>

{/* error */}
<button class="btn btn-error btn-lg">
  <i class="icon icon-cross"></i>
  <span class="text-hide">Action failed</span>
</button>
```