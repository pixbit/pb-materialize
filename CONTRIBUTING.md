Follow these step to contribute:  
1. Pull Github repository,  
  `$ cd pb-materialize/`  
  into the root of the directory.  
- Run `$ npm install`  
- Run `$ grunt` for watching and compiling sass. Alternatively run `$ grunt styles` if you like repeating yourself :smile:.
- After you've completed your changes, update the changelog with a summary of your commits.
- Update the version number in bower by editing `bower.json` (example: previous version = 0.0.3 -> 0.0.4).  
- Commit, make sure you supply a commit message.
- `$ git tag -a "(your version number ex 0.0.4)" (commit SHA) -m "(message)"`  
- `$ git push origin master; git push origin --tags`  
- To pull latest changes into your project, run `$ bower update`.  
