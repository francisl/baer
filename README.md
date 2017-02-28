# Web based Desktop component for

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8363dc6e003b4533bd4b3278854d746f)](https://www.codacy.com/app/francisl/baer?utm_source=github.com&utm_medium=referral&utm_content=francisl/baer&utm_campaign=badger)

!!! This is a prototype/Work In progress. It will change, break things.

Provides a set a widgets to build javascript application

## Goals
- Build UI in a flash
- No custom css or adding class to elements is required to build the application
- Themable
- Optimize for speed and size
- Aligment, position and parameters inspire by native apps
- Make it possible to build a UI graphically
- Support react and preact

## Installation

### Requirements

- react or preact

`npm install --save aphrodite`

`npm install --save preact preact-compat`

For preact, you will need to [configure some alias](https://preactjs.com/guide/switching-to-preact)

- aphrodite (will be install by this package)

## Documentation and Examples

```
git clone git@github.com:francisl/baer.git

cd baer

npm install

npm run storybook
```

### Installation

Its currently not possible to install it through npm (coming)

```
git clone git@github.com:francisl/baer.git

cd baer

npm install

npm run build

npm link

cd [your-project]

npm link baer
```

## The system includes:
- Layout
- Containers
- Menu/Navigation
- Components (UI widgets)
- Buttons
- Table
- Window

## Widgets

### Layouts
- [X] Layout Horizontal/Vertical
- [ ] GridLayout
- [ ] Spacer

### Containers
- [ ] Tab Switcher
- [X] ScrollView
- [ ] Frame
- [ ] HorizontalScrollView
- [ ] SplitPane

### Menu/Nav
- [ ] Menu Bar
- [ ] Toolbar
- [ ] Grouped side menu
- [ ] ActionBar

### Widgets
- [ ] Input
- [ ] Password
- [ ] Date
- [ ] Time
- [ ] TextArea
- [ ] Label
- [ ] Image
- [ ] Message
- [ ] ProgressBar
- [ ] StatusBar
- [ ] Slider
- [ ] Spinner
- [X] Button
- [ ] Toggle
- [ ] Dropdown
- [ ] Checkbox
- [ ] GroupedButton (toggle, multi)
- [ ] RadioGroup
- [ ] RadioButton
- [ ] MenuButton
- [ ] ColorPickerButton

### Data
- [ ] Table
- [ ] ListView
- [ ] TreeView

### Window
- [ ] alert
- [ ] Info (with tab)
- [ ] color picker

### Desktop Feature
- [ ] menu
- [ ] assistant
- [ ] file selection
- [ ] print dialog


[See License](./LICENSE)
