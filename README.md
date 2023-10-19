<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Bun Api Angerapp" />

  &#xa0;

  <!-- <a href="https://bunapiangerapp.netlify.app">Demo</a> -->
</div>

<h1 align="center">Bun Api Angerapp</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/rahmansodev/bun-api-angerapp?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/rahmansodev/bun-api-angerapp?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/rahmansodev/bun-api-angerapp?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/rahmansodev/bun-api-angerapp?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/rahmansodev/bun-api-angerapp?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/rahmansodev/bun-api-angerapp?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/rahmansodev/bun-api-angerapp?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Bun Api Angerapp 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <!-- <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0; -->
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#gear-linting">Linting</a> &#xa0; | &#xa0;
  <a href="#family_man_boy-contribution">Contribution</a> &#xa0; | &#xa0;
  <a href="https://github.com/rahmansodev" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Angry app is a simple app that user can post their angry thought anonymously, and others can give reactions to it.

This is an API of a Angryapp that demonstrate using the latest Bun javascript runtime for running Express nodejs framework, to explore how fast it is, and how it works.

At the moment, this API scope only for primary CUD activity, since the Read activity will be separated on its own socket service.

## :sparkles: Features ##

:heavy_check_mark: Create a post;\
:heavy_check_mark: Give reaction on post endpoint;\
:heavy_check_mark: Modular service, easy to move to their own separate services later;\
:heavy_check_mark: Separated from other background service, such as cron service, notification service, email service, etc.;

<!-- ## :rocket: Technologies ##

The following tools were used in this project:

- [Bun](https://bun.sh/)
- [Node.js](https://nodejs.org/en/)
- [Mongodb](https://www.mongodb.com/) -->

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to install :
- [Git](https://git-scm.com)
- [Node](https://nodejs.org/en/)
- [Bun](https://bun.sh)
- [Mongodb](https://www.mongodb.com/)

## :checkered_flag: Starting ##

```bash
# 1. Clone this project
$ git clone https://github.com/rahmansodev/bun-api-angerapp

# 2. Access
$ cd bun-api-angerapp

# 3. Install dependencies
$ bun add

# 4. Setup eslint on your favorite code editor
# adjust accordingly

# 5. Setup Linting & Husky pre commit
$ bun run setup-dev

# 6. Copy .env.sample and adjust accordingly
$ cp .env.sample .env

# 7. Run the project
$ bun index

# The server will initialize in the <http://localhost:3000>
```

## :gear: Linting ##

- This project use standard airbnb based linting rules.
- Since this is not a Typescript project, it rely heavily on JSDoc documentation on each of the service.

## :family_man_boy: Contribution ##

Primary branch used are :
- main (for production stable release)
- staging (for development release)

Create a new branch from staging each time you want to contribute with standard branch naming such as :
- fix/
- docs/
- enhancement/
- refactor/
- chore/
- feat/
- and so on

For each commit on each branch, also use standard descriptive commit name such as :
- enhancement: Improve algorithm method getArticle
- refactor: Refactor code for createComment service
- feat: add new bad reaction service
- fix: null on getComment service
- docs: update readme
- chore: remove unused code
- and so on

Finally, submit a pull request to merge to branch staging.

## :memo: License ##

This project is under license from GPL 3. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/rahmansodev" target="_blank">rahmansodev</a>

&#xa0;

<a href="#top">Back to top</a>
