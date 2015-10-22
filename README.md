# assemble-documentation #

Just an in-progress, non-functioning task to automate documentation creation.

## Install ##

## Sample Config Object ##

    {
      settings: {
        dest: 'demo/documentation/pattern-library'
      },
      sections: [
        {
          title: 'Components',
          files: 'demo/components/*.html'
        },
        {
          title: 'UI Kit',
          files: [
            'demo/library/styles/global/*.scss',
            '!demo/library/styles/global/typography.scss',
            'demo/library/styles/base/feedback.scss'
          ]
        }
      ]
    }

### Config Options ###

**settings: {}**

dest - *(Required)* Folder in which Generate will out put all files. Will create one if it does not already exist. Accepts path with no trailing slash (`/`)

template - *(Optional)* Path of the Handlebars template used during render. Default is `demo/documentation/templates/main.hbs`

partialsDir - *(Optional)* Folder for Handlebars partials to be registered to the Handlebars template. Default is `demo/documentation/templates/partials`

**sections: []**

title - *(Required)* Title of section. It will also become the basename for the rendered output in camelCase format. 

files - *(Required)* Target file(s) with comments to be parsed. Uses [glob]() and will take a String, Array, or Object (with `src` string or array of files, and an `options` obj)

type - *(Optional)* Declared if variables are used in the file and need to be output to a special format and/or template. Default is `null`. 

template - *(Optional)* To be used with `type`. Declares what type of rendering should occur on the variables in the code. Default options include `color` or `typography`. To specify a different template, use a path name.

# Project Roadmap #

## Guidelines ##

- **Frictionless**: Is this the easiest way to document the feature/module/workflow/etc.? 
- **DRY**: Does the approach cause a duplication of effort?
- **Useful**: Is the information meant to be useful to the developer or the tool?
- **Evergreen**: Does the approach require unrelated effort to just to stay up to date?

## Structure ##

### > Pattern Library ###

The user expects to find any visual style represented in code (HTML/CSS/JS)

**May Contain**

- UI Kit
- Typography
- Color Schemes

**Developer expectation**

Create documentation at the top of a html component or css configuration source

**Compiler expectation**

Parses each html or css documentation throughout the project into a template. (...)

### > Frameworks ###

Where a developer would describe and define all the frameworks used in their project. It should include links to documentation for each framework

**Examples**

- Bourbon Neat
- Foundation
- Sass Preprocessor

**Developer expectation**

Create a `frameworks.md` file with each framework name, description, language, and link to documentation.

**Compiler expectation**

Adds link to master documentation

### > Account Info ###

Where a developer can go to find all credential configurations.

**Examples**

- Server information
- Font foundry username/password
- Third party vendor credentials
- [Example readme](demo/documentation/account-info/readme.md)

**Developer expectation**

Create an `account-info.md` file with whichever credentials may be required for the project.

**Compiler expectation**

Adds link to master documentation

### > Grid System ###

Where the developer can find an overview of the semantic grid system being used for a project. This may be a third party framework with a link to documentation, or a home grown framework.

**Developer expectation**

Configure the compiler to locate the viewport variables from its css file. Add documentation to the top of the file that contains viewport variables. (To be decided: How the developer is expected to document a home-grown grid framework)

**Compiler expectation** 

Compiles the file's frontmatter to show either a link to documentation, or example code of how the grid system works.

### > Codestyle ###

Where the developer can find guidelines for syntax and coding conventions specific to a language. 

**Developer expectation**

Create separate files (i.e. `html.md`, `js.md`) that depict the expected style to follow for that specific language. [Example Codestyle](demo/documentation/codestyle/css.md)

**Compiler expectation**

Adds links to master documentation

### > Architecture ###

Where the developer can find the agreed-apon approach to various topics.

**Examples**

- Project folder architecture. [Example structure](demo/documentation/architecture/directory-structure.md)
- Framework-specific architecture (i.e. AngularJS approach). [Example dependency architecture](demo/documentation/architecture/directory-structure.md)
- Naming conventions (i.e. BEM-style)

**Developer expectation**

Create separate files that describe each architecture.

**Compiler expectation**

Adds links to master documentation

### > Requirements ###

Where the developer can find the expectations and requirements for a project.

**Examples**

- Browser Requirements. [Example requirements](demo/documentation/requirements/readme.md)
- Accessibility level

**Developer expectation**

Create a single file with all requirements.

**Compiler expectation**

Adds links to master documentation

### > Workflows ###

Where the developer can see how specific tasks should be done. This includes first-time setup of a project environment, to handing off code to the client.

**Examples**

- Environment Setup. [Example Environmental Setup](demo/documentation/workflows/env-setup.md)
- JIRA workflow
- Versioning process
- Release process. [Example Release Process](demo/documentation/workflows/release-process.md)

**Developer expectation**

Multiple files. One for each workflow process. 

**Compiler expectation**

Adds links to master documentation

### > Environment Info ###

The developer should be able to use these tools to test their environment.

**Examples**

- Viewport tests
- PHP/Apache Info

**Developer expectation**

Configure the compiler with breakpoints for the project.

**Compiler expectation**

Generates a breakpoint test file based on the configured breakpoints.

## Extra Compiler Behaviors ##

### + Boilerplates ###

The developer should be able to create a boilerplate for any given module. This boilerplate should live where the module is expected to be developed.

**Examples**

- Require Module definition
- Page template

**Developer expectation**

Create a boilerplate with documentation at the top of its file, explaining the proper usage of the module.

**Compiler expectation**

Grabs boilerplate the topmost documentation block from throughout the project and generates a list of each boilerplate with their appropriate documentation, and locations. (Future feature: compiling the html and required css/js into example pages like in the pattern library)

### + Research (optional) ###

The developer should be able to document their research as the project progresses. The research should be ignored once a decision is made on the associated task

**Examples**

- Preprocessor pros and cons
- Icon fonts vs svg icons
- MVC Framework research

**Developer expectation**

Include a `research.md` file in the appropriate folder.

**Compiler expectation**

Add link to master documentation if the `reasearch.md` file is the only file inside its respective folder. Otherwise, ignore.

